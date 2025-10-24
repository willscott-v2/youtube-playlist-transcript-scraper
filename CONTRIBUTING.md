# Contributing to YouTube Playlist Transcript Scraper

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Testing](#testing)

## Code of Conduct

This project follows the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior by opening an issue.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Environment details** (Node version, OS, Apify SDK version)
- **Sample playlist URL** if relevant (ensure it's public)
- **Error messages or logs**

### Suggesting Enhancements

Enhancement suggestions are welcome! Please include:

- **Use case** - Why would this be useful?
- **Proposed solution** - How should it work?
- **Alternatives considered** - What other approaches did you think about?

### Pull Requests

We actively welcome pull requests for:

- Bug fixes
- New features (check planned features in CHANGELOG.md)
- Documentation improvements
- Performance optimizations
- Test coverage

## Development Setup

### Prerequisites

- Node.js 16 or higher
- npm or yarn
- Apify account (for testing)

### Local Setup

```bash
# Fork and clone the repository
git clone https://github.com/yourusername/youtube-playlist-transcript-scraper.git
cd youtube-playlist-transcript-scraper

# Install dependencies
npm install

# Login to Apify (required for local testing)
apify login

# Run the actor locally
apify run
```

### Testing Your Changes

```bash
# Run the actor with test input
apify run --input '{"playlistUrl": "https://www.youtube.com/playlist?list=YOUR_TEST_PLAYLIST", "maxResults": 3}'

# Check the output in storage/datasets/default/
```

## Pull Request Process

1. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the style guidelines below

3. **Test thoroughly** with various playlist types and sizes

4. **Update documentation** if needed:
   - README.md for user-facing changes
   - CHANGELOG.md for version tracking
   - Code comments for complex logic

5. **Commit with clear messages**
   ```bash
   git commit -m "feat: add parallel processing support"
   ```

6. **Push and create a pull request**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Wait for review** - maintainers will review and provide feedback

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add language selection parameter
fix: handle videos without transcripts gracefully
docs: update README with new examples
refactor: extract metadata enrichment to separate function
```

## Style Guidelines

### JavaScript

- Use ES6+ features (async/await, arrow functions, etc.)
- Follow existing code style
- Use meaningful variable names
- Add comments for complex logic
- Handle errors gracefully

### Code Style

```javascript
// Good
const processVideo = async (video) => {
  try {
    const transcript = await getTranscript(video.url);
    return enrichWithMetadata(transcript, video);
  } catch (error) {
    console.log(`Failed to process ${video.url}: ${error.message}`);
    return null;
  }
};

// Avoid
function processVideo(video){
const transcript=await getTranscript(video.url)
return enrichWithMetadata(transcript,video)
}
```

### Documentation

- Keep README.md up to date
- Use clear, concise language
- Include code examples for new features
- Update INPUT_SCHEMA.json for new parameters

## Testing

### Test Checklist

Before submitting a PR, test with:

- [ ] Small playlist (3-5 videos)
- [ ] Medium playlist (20-30 videos)
- [ ] Playlist with videos that have no transcripts
- [ ] Different `maxResults` values
- [ ] Invalid playlist URL (should fail gracefully)

### Example Test Cases

```javascript
// Test 1: Basic functionality
{
  "playlistUrl": "https://www.youtube.com/playlist?list=VALID_LIST",
  "maxResults": 5
}

// Test 2: No maxResults (should default to 999)
{
  "playlistUrl": "https://www.youtube.com/playlist?list=VALID_LIST"
}

// Test 3: Edge case - maxResults = 1
{
  "playlistUrl": "https://www.youtube.com/playlist?list=VALID_LIST",
  "maxResults": 1
}
```

## Feature Requests from CHANGELOG

Priority features for v2.0.0:

1. **Parallel Processing** - Process multiple videos simultaneously
2. **Language Selection** - Choose transcript language
3. **Export Formats** - CSV/TXT output options
4. **Retry Logic** - Handle temporary failures
5. **Progress Indicators** - Better user feedback

If you'd like to work on any of these, please comment on the relevant issue or create one!

## Questions?

Feel free to:
- Open an issue for questions
- Join the [Apify Discord](https://discord.com/invite/jyEM2PRvMU)
- Check the [Apify documentation](https://docs.apify.com)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🎉
