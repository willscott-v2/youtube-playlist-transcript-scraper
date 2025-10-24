# Apify Store Publishing Checklist

## 📍 Current Status
- ✅ Actor deployed to Apify
- ✅ GitHub repository public
- ✅ Version 1.0 released
- ⏳ Ready for Apify Store submission

---

## 🚀 How to Publish to Apify Store

### Step 1: Access Your Actor
1. Go to https://console.apify.com/actors
2. Click on **youtube-playlist-transcript-scraper**

### Step 2: Configure Store Settings

#### Publication Tab
1. Click **Settings** → **Publication**
2. Enable **"Publish to Apify Store"**
3. Fill in the following:

**Basic Information:**
- **Title**: `YouTube Playlist Transcript Scraper` (already set)
- **Description**: Already in actor.json ✅
- **SEO Title**: `YouTube Playlist Transcript Scraper - Batch Extract Transcripts`
- **SEO Description**: Copy from APIFY_STORE_COPY.md

**Categories:**
- [x] Social Media
- [x] Data Extraction
- [ ] Content & Files (optional)

**Tags:**
Copy from APIFY_STORE_COPY.md:
```
youtube, transcript, scraper, playlist, batch-processing, video, content-analysis, metadata, seo, research, education, subtitles, captions, data-extraction
```

**Pricing:**
- [ ] Free
- [ ] Paid (set your price per compute unit)

**Recommendation**: Start with FREE to build user base, switch to paid later

### Step 3: Add Media (Important!)

**Actor Icon (256x256 PNG):**
- Consider creating a custom icon
- Should combine: YouTube logo + transcript/text icon
- Use red/white YouTube brand colors
- Tools: Canva, Figma, or hire on Fiverr ($5-20)

**Screenshots (highly recommended):**
1. **Input Form Screenshot** - Show the simple 2-field input
2. **Running Actor** - Show logs with progress
3. **Dataset Output** - Show the results table
4. **JSON Output Example** - Show rich metadata

To capture screenshots:
- Run your actor with test playlist
- Take screenshots at each stage
- Upload in Settings → Publication → Screenshots

**Demo Video (optional but powerful):**
- 30-60 second video showing:
  - Paste playlist URL
  - Click Start
  - Show results
- Tools: Loom, QuickTime, or ScreenFlow
- Upload to YouTube, link in description

### Step 4: Documentation Check

Make sure these are visible:
- ✅ README.md (auto-pulled from GitHub)
- ✅ CHANGELOG.md (shows version history)
- ✅ INPUT_SCHEMA.json (defines input form)

### Step 5: Set Pricing & Limits (optional)

**Compute Unit Pricing:**
- Free tier: No charge
- Paid: $X per compute unit (typical: $0.25-$2.00)

**Resource Limits:**
- Memory: 2048 MB (default is fine)
- Timeout: 3600 seconds (1 hour)

### Step 6: Add Example Runs

**Create Example Runs:**
1. Run actor with public playlist (3-5 videos)
2. In actor settings → "Set as example run"
3. This shows potential users what to expect

**Recommended Examples:**
- Small playlist (5 videos) - Shows speed
- Medium playlist (20 videos) - Shows batch capability
- Educational content - Shows use case

### Step 7: Review & Submit

**Pre-submission Checklist:**
- [ ] Description is clear and compelling
- [ ] Tags are relevant and searchable
- [ ] Categories selected
- [ ] Icon uploaded (or default is acceptable)
- [ ] Screenshots added (highly recommended)
- [ ] Example runs created
- [ ] Pricing set
- [ ] GitHub link added
- [ ] README is comprehensive

**Submit for Review:**
1. Click **"Request publication"**
2. Apify team will review (usually 1-3 business days)
3. They may request changes
4. Once approved, your actor is LIVE!

---

## 📊 After Publishing

### Monitor Performance
- Check runs in Console
- Monitor errors in Logs
- Track usage in Analytics

### Respond to Users
- Answer issues on GitHub
- Respond to Apify Store reviews
- Join discussions in Apify Discord

### Marketing
Share your actor:
- [x] Twitter/X: "Just published my YouTube Playlist Transcript Scraper on @apify! 🎉"
- [x] LinkedIn: Professional post about solving this problem
- [x] Reddit: r/webscraping, r/apify, r/sideproject
- [x] Dev.to: Write a blog post about building it
- [x] Product Hunt: Consider launching it

### Iterate
- Monitor feature requests
- Plan v2.0 features (parallel processing, language selection, etc.)
- Update based on user feedback

---

## 💡 Tips for Success

**Get Users Faster:**
1. Keep it FREE initially
2. Add 3-5 high-quality screenshots
3. Create 2-3 example runs
4. Write a blog post about a use case
5. Share in relevant communities

**Build Trust:**
1. Open source on GitHub ✅ (Already done!)
2. Respond quickly to issues
3. Keep documentation updated
4. Show version history in CHANGELOG

**Improve Visibility:**
1. Use all 15 tag slots
2. Choose multiple relevant categories
3. Add detailed use cases in description
4. Create video demo
5. Get early user reviews

---

## 🎯 Quick Copy-Paste Resources

All ready-to-use text is in: **APIFY_STORE_COPY.md**

Including:
- Short description
- Full description (markdown formatted)
- Tags
- Categories
- Use cases
- SEO keywords

---

## ⚡ Quick Action Items (15 min setup)

**Must Do:**
1. [ ] Go to Settings → Publication
2. [ ] Enable "Publish to Apify Store"
3. [ ] Copy description from APIFY_STORE_COPY.md
4. [ ] Add tags from APIFY_STORE_COPY.md
5. [ ] Create 1-2 example runs
6. [ ] Click "Request publication"

**Should Do:**
7. [ ] Create/upload actor icon
8. [ ] Add 3-4 screenshots
9. [ ] Write 3 use case examples
10. [ ] Add GitHub link

**Nice to Have:**
11. [ ] Record demo video
12. [ ] Create blog post
13. [ ] Prepare social media posts
14. [ ] Set up GitHub Discussions

---

## 📞 Support

**Stuck?**
- Apify Docs: https://docs.apify.com/actors/publishing
- Apify Discord: https://discord.com/invite/jyEM2PRvMU
- Email: support@apify.com

**Questions about this checklist?**
- Check APIFY_STORE_COPY.md for all copy-paste text
- See examples of successful actors in Apify Store
- Review Apify's publishing guidelines

---

**Ready to publish? You've got this! 🚀**
