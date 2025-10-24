# Publishing Guide

Quick guide for publishing this actor to Apify and GitHub.

## Publishing to GitHub

### Initial Setup

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name: `youtube-playlist-transcript-scraper`
   - Description: "Apify actor for batch extracting transcripts from YouTube playlists"
   - Visibility: Public
   - Don't initialize with README (we already have one)

2. **Initialize git and push**
   ```bash
   git init
   git add .
   git commit -m "feat: initial release v1.0.0"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/youtube-playlist-transcript-scraper.git
   git push -u origin main
   ```

3. **Create a release**
   - Go to your repo → Releases → "Create a new release"
   - Tag: `v1.0.0`
   - Title: `v1.0.0 - Initial Release`
   - Description: Copy from CHANGELOG.md
   - Publish release

4. **Update README links**
   - Replace `yourusername` with your actual GitHub username in:
     - README.md
     - package.json
     - CHANGELOG.md

## Publishing to Apify Store

### Prerequisites

```bash
# Install Apify CLI
npm install -g apify-cli

# Login to Apify
apify login
```

### Deploy the Actor

1. **Push to Apify**
   ```bash
   # From project root
   apify push
   ```

2. **Test in Apify Console**
   - Go to https://console.apify.com/actors
   - Find your actor
   - Test with sample input:
     ```json
     {
       "playlistUrl": "https://www.youtube.com/playlist?list=PLjXib16-6_9Hj-QsEWLBGhaE1elDjo-et",
       "maxResults": 3
     }
     ```

3. **Publish to Apify Store**
   - In Apify Console → Your Actor → Settings
   - Check "Publish to Apify Store"
   - Fill in store details:
     - **Categories**: Social Media
     - **Tags**: youtube, transcript, scraper, playlist
     - **Short description**: "Extract transcripts from YouTube playlists with metadata"
     - **Pricing**: Free or set your price
   - Add screenshots (optional but recommended)
   - Submit for review

### Store Listing Best Practices

**Title**: Keep it as "YouTube Playlist Transcript Scraper"

**Description**: Use the overview from README.md

**README**: Already configured via `actor.json`

**Icon**: Consider creating a custom icon (256x256 PNG)
- YouTube play button + transcript icon
- Use Apify brand colors

**Screenshots**: Capture these views:
1. Input form with example
2. Running actor with logs
3. Dataset output preview
4. Example JSON output

## Post-Publication Checklist

- [ ] Update README.md with actual Apify Store link
- [ ] Update package.json with correct repository URL
- [ ] Add GitHub repository link to Apify actor settings
- [ ] Test actor from Apify Store
- [ ] Share on social media / relevant communities
- [ ] Monitor GitHub issues for feedback
- [ ] Track usage stats in Apify Console

## Versioning for Future Updates

When making updates:

1. **Update version** in `package.json` and `CHANGELOG.md`
2. **Commit changes**: `git commit -m "feat: add new feature"`
3. **Create git tag**: `git tag v1.1.0`
4. **Push to GitHub**: `git push && git push --tags`
5. **Deploy to Apify**: `apify push`
6. **Create GitHub release** with changelog

### Version Numbering (Semantic Versioning)

- **Major (v2.0.0)**: Breaking changes
- **Minor (v1.1.0)**: New features, backward compatible
- **Patch (v1.0.1)**: Bug fixes

## Marketing & Promotion

**Where to share:**
- Apify Discord community
- Reddit: r/webscraping, r/apify
- Twitter/X with #apify #webscraping
- Product Hunt (if it gains traction)
- Dev.to or Medium blog post

**Blog post ideas:**
- "How I Built a YouTube Playlist Transcript Scraper"
- "Content Analysis at Scale: Extracting YouTube Transcripts"
- "Automating Research with YouTube Transcripts"

## Support

After publishing, monitor:
- GitHub Issues
- Apify actor reviews
- Discord mentions
- Email for support requests

Response time goal: 24-48 hours

---

Good luck with your launch! 🚀
