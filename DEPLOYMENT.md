# GitHub Pages Deployment Guide

## 🚀 Quick Setup for GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio-v3.1`)
5. Make it public
6. Don't initialize with README (since we already have one)
7. Click "Create repository"

### Step 2: Upload Your Files
1. In your new repository, click "uploading an existing file"
2. Drag and drop all your portfolio files and folders
3. Add a commit message like "Initial portfolio upload"
4. Click "Commit changes"

### Step 3: Enable GitHub Pages
1. Go to your repository Settings (tab at the top)
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch (or "master" if that's your default)
5. Select "/ (root)" folder
6. Click "Save"

### Step 4: Wait for Deployment
- GitHub Pages will automatically build and deploy your site
- This usually takes 2-5 minutes
- You'll see a green checkmark when it's ready

### Step 5: Access Your Site
Your portfolio will be available at:
`https://yourusername.github.io/portfolio-v3.1/`

## 🔧 Troubleshooting

### If images don't load:
- Make sure all image files are uploaded to the correct folders
- Check that image paths use relative paths (not absolute)
- Verify file names match exactly (case-sensitive)

### If styles don't load:
- Ensure all CSS and JS files are uploaded
- Check browser console for any 404 errors
- Verify Tailwind CSS CDN is accessible

### If navigation doesn't work:
- Confirm all HTML files are uploaded
- Check that all href attributes use relative paths
- Test links manually

## 📝 Important Notes

✅ **Fixed Issues:**
- All absolute paths (`/js/`, `/css/`, `/assets/`) have been changed to relative paths
- Missing images have been replaced with existing project screenshots
- All navigation links use relative paths

✅ **Compatible Features:**
- Dark/light mode toggle
- Mobile responsive navigation
- Smooth animations
- Contact form (requires backend for functionality)
- All project screenshots

## 🎯 Next Steps

After deployment, you can:
1. Customize the content in HTML files
2. Add your own projects and images
3. Update contact information
4. Add a custom domain (optional)
5. Set up form handling for the contact form

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Verify all files are uploaded correctly
3. Ensure GitHub Pages is enabled
4. Wait a few minutes for changes to propagate

---

**Your portfolio should now work perfectly on GitHub Pages! 🎉** 