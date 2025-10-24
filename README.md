# YouTube Playlist Transcript Scraper

> Batch extract transcripts from entire YouTube playlists with enriched video metadata

[![Apify Actor](https://img.shields.io/badge/Apify-Actor-blue)](https://apify.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

This Apify actor automatically extracts transcripts from all videos in a YouTube playlist. Unlike single-video transcript scrapers, this tool processes entire playlists at once and enriches transcript data with comprehensive video metadata.

**Perfect for:**
- Content analysis and research
- Transcript archival
- SEO and content strategy
- Educational content processing
- Market research from video content

## Features

- **Batch Processing**: Process entire playlists automatically
- **Configurable Limits**: Set maximum number of videos to process
- **Rich Metadata**: Each transcript includes video title, description, publication date, channel info, views, and duration
- **Error Handling**: Gracefully handles videos without transcripts
- **Timestamped Transcripts**: Full transcript data with precise timing information

## Quick Start

### Using in Apify Console

1. Go to [Apify Console](https://console.apify.com/actors)
2. Find "Playlist Transcript Scraper"
3. Enter your playlist URL and desired max results
4. Click **Start** and download results when complete

### Example Input

```json
{
  "playlistUrl": "https://www.youtube.com/playlist?list=PLjXib16-6_9Hj-QsEWLBGhaE1elDjo-et",
  "maxResults": 10
}
```

### Example Output

Each transcript entry contains:

```json
{
  "data": [
    {
      "start": "0.080",
      "dur": "3.359",
      "text": "a lot of it is social media..."
    }
  ],
  "videoTitle": "Your new business partner: Social Media",
  "videoDescription": "You don't need millions of followers...",
  "videoPublicationDate": "2024-12-10T15:40:23.000Z",
  "videoUrl": "https://www.youtube.com/watch?v=...",
  "channelName": "Patric Shannon",
  "viewCount": 168,
  "duration": "00:00:32"
}
```

See [examples/sample-output.json](examples/sample-output.json) for a complete example.

## Input Parameters

| Parameter | Type | Required | Description | Default |
|-----------|------|----------|-------------|---------|
| `playlistUrl` | String | Yes | Full YouTube playlist URL | - |
| `maxResults` | Integer | No | Maximum number of videos to process (1-999) | 999 |

## Output Schema

Each transcript object includes:

### Transcript Data
- `data` - Array of transcript segments with timestamps
  - `start` - Start time in seconds
  - `dur` - Duration of segment
  - `text` - Transcript text

### Video Metadata
- `videoTitle` - Video title
- `videoDescription` - Full video description
- `videoPublicationDate` - ISO 8601 format publication date
- `videoUrl` - Direct link to video
- `channelName` - YouTube channel name
- `viewCount` - Total view count
- `duration` - Video length (HH:MM:SS)

## Local Development

### Prerequisites

- Node.js 16+
- Apify account

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/youtube-playlist-transcript-scraper.git
cd youtube-playlist-transcript-scraper

# Install dependencies
npm install

# Login to Apify
apify login

# Run locally
apify run
```

### Project Structure

```
.
├── .actor/
│   ├── INPUT_SCHEMA.json    # Input field definitions
│   └── actor.json           # Actor metadata
├── src/
│   └── main.js              # Main orchestration logic
├── examples/
│   └── sample-output.json   # Example output
├── README.md
├── LICENSE
├── CHANGELOG.md
└── package.json
```

## How It Works

This actor chains two existing Apify actors:

1. **`streamers/youtube-scraper`** - Extracts video URLs and metadata from the playlist
2. **`pintostudio/youtube-transcript-scraper`** - Retrieves transcript for each video
3. **Custom orchestrator** - Merges transcript data with enriched video metadata

### Technical Flow

```
Input: Playlist URL
    ↓
Extract all videos from playlist (streamers/youtube-scraper)
    ↓
Limit to maxResults
    ↓
For each video:
  - Get transcript (pintostudio/youtube-transcript-scraper)
  - Merge with video metadata
  - Handle errors gracefully
    ↓
Output: Array of enriched transcript objects
```

## Limitations

- Only processes videos with available transcripts (auto-generated or manual)
- Respects YouTube's terms of service
- Processing time increases with playlist size
- Some videos may fail if transcripts are disabled

## Troubleshooting

### "Actor with this name was not found"
Verify the actor IDs are correct. Check the [Apify Store](https://apify.com/store).

### Empty dataset returned
Ensure the playlist URL is valid and videos have transcripts available.

### "playlistUrl is undefined"
Make sure `INPUT_SCHEMA.json` is in the `.actor/` folder.

## Roadmap

See [CHANGELOG.md](CHANGELOG.md) for version history.

### Planned Enhancements (v2.0.0)
- Parallel processing for faster execution
- Language selection for multi-language transcripts
- Export to CSV/TXT formats
- Retry logic with exponential backoff
- Progress indicators and error tracking

## Contributing

Contributions welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

Built with:
- [streamers/youtube-scraper](https://apify.com/streamers/youtube-scraper)
- [pintostudio/youtube-transcript-scraper](https://apify.com/pintostudio/youtube-transcript-scraper)

## Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/youtube-playlist-transcript-scraper/issues)
- **Apify Discord**: [Join the community](https://discord.com/invite/jyEM2PRvMU)
- **Documentation**: [Apify Docs](https://docs.apify.com)

---

**Built with ❤️ for the content analysis community**
