import { Actor } from 'apify';

await Actor.init();

const input = await Actor.getInput();
const { playlistUrl, maxResults = 999 } = input;

console.log('Input received:', input);
console.log('Playlist URL:', playlistUrl);
console.log('Max results:', maxResults);

// Step 1: Extract videos from playlist
console.log('Extracting videos from playlist...');
const playlistRun = await Actor.call('streamers/youtube-scraper', {
    startUrls: [{ url: playlistUrl }],
    maxResults: 999,
});

// Get the dataset from the run
const playlistDataset = await Actor.openDataset(playlistRun.defaultDatasetId);
const { items: playlistData } = await playlistDataset.getData();

console.log(`Found ${playlistData.length} videos in playlist`);

// Limit to maxResults
const videosToProcess = playlistData.slice(0, maxResults);
console.log(`Processing ${videosToProcess.length} videos based on maxResults setting`);

// Step 2: Get transcripts for each video
const allTranscripts = [];

for (const video of videosToProcess) {
    const videoUrl = video.url;
    console.log(`Getting transcript for: ${videoUrl}`);

    try {
        const transcriptRun = await Actor.call('pintostudio/youtube-transcript-scraper', {
            videoUrl: videoUrl,
        });

        const transcriptDataset = await Actor.openDataset(transcriptRun.defaultDatasetId);
        const { items: transcriptData } = await transcriptDataset.getData();

        // Enrich transcript data with video metadata
        for (const transcript of transcriptData) {
            allTranscripts.push({
                ...transcript,
                videoTitle: video.title || 'N/A',
                videoDescription: video.text || 'N/A',
                videoPublicationDate: video.date || 'N/A',
                videoUrl: videoUrl,
                channelName: video.channelName || 'N/A',
                viewCount: video.viewCount || 0,
                duration: video.duration || 'N/A',
            });
        }
    } catch (error) {
        console.log(`Failed to get transcript for ${videoUrl}: ${error.message}`);
    }
}

// Step 3: Save all results
await Actor.pushData(allTranscripts);

console.log(`Successfully scraped ${allTranscripts.length} transcripts`);

await Actor.exit();
