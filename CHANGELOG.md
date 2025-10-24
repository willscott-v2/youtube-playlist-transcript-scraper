# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-24

### Added
- Initial release of YouTube Playlist Transcript Scraper
- Batch transcript extraction from YouTube playlists
- Configurable `maxResults` parameter to limit number of videos processed
- Rich metadata enrichment for each transcript:
  - Video title, description, publication date
  - Channel name, view count, duration
  - Direct video URL
- Error handling for videos without available transcripts
- Timestamped transcript data with start time and duration
- Input validation via `INPUT_SCHEMA.json`
- Actor chaining with `streamers/youtube-scraper` and `pintostudio/youtube-transcript-scraper`

### Technical Details
- Uses Apify SDK v3
- Node.js 16+ support
- Sequential processing of videos
- Proper dataset handling with `defaultDatasetId`

### Documentation
- Comprehensive README with usage examples
- Handoff documentation with technical decisions
- Sample output in examples directory
- MIT License

### Known Limitations
- Sequential processing (parallel processing planned for v2.0.0)
- No language selection for multi-language transcripts
- No retry logic for failed requests
- JSON-only output format

## [Unreleased]

### Planned for v2.0.0
- Parallel processing with configurable batch size
- Language selection parameter
- CSV/TXT export formats
- Retry logic with exponential backoff
- Progress indicators during execution
- Separate error tracking dataset
- Performance optimizations for large playlists

---

[1.0.0]: https://github.com/yourusername/youtube-playlist-transcript-scraper/releases/tag/v1.0.0
