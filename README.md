# Modern Portfolio Website

A responsive, modern portfolio website built with HTML, CSS (Tailwind), and JavaScript. Now organized into multiple pages for better user experience and maintainability.

## File Structure

```
portfolio-v3.1/
├── index.html                 # Main landing page
├── about.html                 # About page with detailed information
├── services.html              # Services page with offerings
├── projects.html              # Projects page with detailed work
├── portfolio.html             # Portfolio gallery page
├── blog.html                  # Blog posts and articles
├── resume.html                # Detailed resume page
├── contact.html               # Contact form and information
├── css/
│   ├── extra.css             # Custom CSS styles and components
│   └── tailwind-config.css   # Tailwind configuration and custom styles
├── js/
│   ├── theme.js              # Theme toggle functionality (dark/light mode)
│   ├── navigation.js         # Navigation and mobile menu functionality
│   ├── animations.js         # Scroll animations and intersection observer
│   └── tailwind-config.js    # Tailwind CSS configuration
└── assets/
    ├── images/
    │   ├── me-selfie.jpg     # Profile image
    │   ├── project1.jpg      # Project images (placeholder)
    │   ├── project2.jpg      # Project images (placeholder)
    │   ├── project3.jpg      # Project images (placeholder)
    │   ├── portfolio1.jpg    # Portfolio images (placeholder)
    │   ├── portfolio2.jpg    # Portfolio images (placeholder)
    │   ├── portfolio3.jpg    # Portfolio images (placeholder)
    │   └── portfolio4.jpg    # Portfolio images (placeholder)
    └── resume.pdf            # Resume file (placeholder)
```

## Pages Overview

### 🏠 **Home Page** (`index.html`)
- Hero section with introduction
- Quick overview of services
- Featured projects preview
- About section preview
- Latest blog posts preview
- Call-to-action sections

### 👤 **About Page** (`about.html`)
- Detailed personal information
- Skills breakdown with proficiency levels
- Education and experience timeline
- Personal interests and motivations
- Professional journey

### 🛠️ **Services Page** (`services.html`)
- Comprehensive service offerings
- Technology stack details
- Development process explanation
- Additional services
- Call-to-action for projects

### 📁 **Projects Page** (`projects.html`)
- Featured projects with detailed descriptions
- Technology tags for each project
- Project statistics
- Additional project showcases
- Links to live demos and source code

### 🎨 **Portfolio Page** (`portfolio.html`)
- Visual gallery of work samples
- Filterable portfolio items by category
- Portfolio statistics
- Interactive project cards
- Category-based filtering

### 📝 **Blog Page** (`blog.html`)
- Featured blog post
- Latest articles and insights
- Category-based browsing
- Newsletter subscription
- Web development tutorials and tips

### 📄 **Resume Page** (`resume.html`)
- Detailed professional resume
- Skills breakdown with progress bars
- Education and experience details
- Downloadable PDF version
- Contact information

### 📞 **Contact Page** (`contact.html`)
- Contact form with validation
- Multiple contact methods
- FAQ section
- Social media links
- Project inquiry form

## Features

- **Multi-Page Structure**: Organized content across dedicated pages
- **Responsive Design**: Works on all device sizes
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Smooth Navigation**: Seamless page transitions and mobile menu
- **Scroll Animations**: Sections animate in as you scroll
- **Modern UI**: Clean, professional design with retro-inspired colors
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized assets and efficient code structure

## Technologies Used

- **HTML5**: Semantic markup across all pages
- **CSS3**: Styling with Tailwind CSS framework
- **JavaScript**: Interactive functionality and animations
- **Tailwind CSS**: Utility-first CSS framework
- **Google Fonts**: Inter and Poppins fonts

## Setup

1. Clone or download the project
2. Open `index.html` in a web browser
3. Navigate between pages using the navigation menu
4. All pages are interconnected and fully functional

## Navigation

The website features consistent navigation across all pages:
- **Desktop**: Horizontal navigation bar with all page links
- **Mobile**: Collapsible hamburger menu
- **Active States**: Current page is highlighted in navigation
- **Smooth Transitions**: Seamless page-to-page navigation

## Customization

- **Content**: Update text content in respective HTML files
- **Images**: Replace placeholder images in `assets/images/`
- **Colors**: Modify the retro color palette in `js/tailwind-config.js`
- **Styling**: Customize styles in `css/extra.css`
- **Pages**: Add or remove pages as needed

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance

- **Optimized Images**: All images are properly sized and optimized
- **Minimal Dependencies**: Only essential external libraries
- **Efficient Code**: Modular JavaScript and CSS structure
- **Fast Loading**: Optimized for quick page loads

## Notes

- All image paths have been updated to use the correct `/assets/images/` directory
- JavaScript functionality has been separated into modular files for better organization
- The profile image is now correctly referenced as `me-selfie.jpg`
- Each page is self-contained but shares common navigation and styling
- The multi-page structure improves SEO and user experience 