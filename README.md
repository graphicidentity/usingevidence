# Using Evidence Website

A professional website built with Eleventy (11ty) for Using Evidence Inc., a research and evaluation consultancy.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server (any of these work)
npm start
npm run serve
npm run dev

# Your site will be available at: http://localhost:8081/
```

## 📋 Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run serve` | Start development server (alias) |
| `npm run dev` | Start development server (alias) |
| `npm run build` | Build for production |
| `npm run clean` | Clean output directory |
| `npm run rebuild` | Clean and rebuild |
| `npm run debug` | Build with debug info |
| `npm run help` | Show available commands |

## 🛠️ Development

### Local Development
1. **Install dependencies**: `npm install`
2. **Start server**: `npm start` (or `npm run serve` or `npm run dev`)
3. **Open browser**: Go to `http://localhost:8081/`
4. **Make changes**: Files are watched and auto-rebuild

### Common Issues & Solutions

#### ❌ Server Won't Start
- ✅ **Use**: `npm start`, `npm run serve`, or `npm run dev`
- ❌ **Don't use**: `npm run server` (doesn't exist)
- **Check**: Make sure you're in the project directory
- **Port**: Default is 8081, check terminal output for actual port

#### ❌ Navigation Links Don't Work
- **Local development**: Links use `/` paths (e.g., `/contact/`)
- **Production**: May need `/usingevidence/` paths depending on hosting
- **Fix**: Update paths in `src/_layouts/base.njk` if needed

#### ❌ Build Fails
- **Clean rebuild**: `npm run rebuild`
- **Check dependencies**: `npm install`
- **Debug mode**: `npm run debug`

#### ❌ "Missing script" Error
- **Check spelling**: Use exact script names from package.json
- **Run**: `npm run help` to see all available commands
- **Most common**: Use `npm start` not `npm run start`

## 📁 Project Structure

```
usingevidence/
├── src/                    # Source files
│   ├── _layouts/          # Page templates
│   │   └── base.njk       # Main layout
│   ├── _data/             # Site data
│   ├── css/               # Stylesheets
│   │   └── main.css       # Main CSS with theme system
│   ├── index.njk          # Home page
│   ├── contact.njk        # Contact page
│   ├── publications.njk   # Publications page
│   └── clients-and-partnerships.njk  # About Fred page
├── _site/                 # Generated files (don't edit)
├── node_modules/          # Dependencies (don't edit)
├── .eleventy.js          # Eleventy configuration
├── package.json          # Project settings & scripts
└── README.md             # This file
```

## 🎨 Features

- **Responsive Design**: Bootstrap 5 with custom CSS
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Modern Layout**: Clean, professional design
- **Fast Performance**: Static site generation
- **Easy Editing**: Nunjucks templates for content management

## 📄 Pages

1. **Home** (`/`) - Service overview with accordion sections
2. **About Fred** (`/clients-and-partnerships/`) - Biography and experience
3. **Publications** (`/publications/`) - Research and publications
4. **Contact** (`/contact/`) - Contact information and form

## 🔧 Customization

### Adding Content
- Edit `.njk` files in `src/`
- Main layout in `src/_layouts/base.njk`
- Styles in `src/css/main.css`

### Theme Colors
- Light/dark theme variables in `main.css`
- Bootstrap integration for components
- Custom CSS properties for easy theming

### Navigation
- Update navigation in `src/_layouts/base.njk`
- Ensure paths work for both local development and production

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Files
- Upload contents of `_site/` directory to your web server
- Works with any static hosting (Netlify, Vercel, GitHub Pages, etc.)
- No server-side requirements

### Environment-Specific Settings
- **Local**: Uses `/` paths for navigation
- **Production**: May need to adjust paths based on hosting setup

## 📞 Troubleshooting

### Quick Fixes
```bash
# If nothing works, try these in order:
npm run help           # See available commands
npm install           # Reinstall dependencies
npm run rebuild       # Clean rebuild
npm start             # Start development server
```

### Common Error Messages

| Error | Solution |
|-------|----------|
| `Missing script: "serve"` | Use `npm start` instead |
| `ENOENT: no such file` | Run `npm install` first |
| `Port already in use` | Kill other processes or use different port |
| `Module not found` | Run `npm install` to install dependencies |

## 🌟 Best Practices

1. **Always use npm scripts** instead of running commands directly
2. **Test locally** before deploying
3. **Keep dependencies updated** for security
4. **Use version control** to track changes
5. **Back up** your work regularly

## 📱 Mobile Development

The site is fully responsive and includes:
- Mobile-first CSS design
- Touch-friendly navigation
- Optimized images and fonts
- Dark/light mode on mobile

## 🔄 Updates

To update dependencies:
```bash
npm update
npm audit fix  # Fix security issues if any
```

## 💡 Tips

- **Bookmark**: http://localhost:8081/ for easy access
- **Auto-reload**: Changes save automatically refresh the browser
- **Multiple commands**: All these work the same:
  - `npm start`
  - `npm run serve` 
  - `npm run dev`
- **Build first**: Run `npm run build` before deploying
- **Clean slate**: Use `npm run rebuild` if things seem broken

---

**Need help?** Run `npm run help` in the terminal for a quick command reference!
