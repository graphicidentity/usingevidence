# UsingEvidence - 11ty Site

This is the official website for UsingEvidence, a research and evaluation consultancy that focuses on development and research evaluation.

## About

UsingEvidence explores ways to enhance the use of results and make evaluation useful and useable.

## Development

This site is built with [11ty (Eleventy)](https://www.11ty.dev/), a static site generator.

### Prerequisites

- Node.js (v14 or higher)
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Scripts

- `npm start` - Start the development server with live reload
- `npm run build` - Build the site for production
- `npm run debug` - Build with debug information

### Project Structure

```
src/
├── _layouts/          # Nunjucks templates
├── css/              # Stylesheets
├── assets/           # Static assets
├── images/           # Images
├── index.md          # Home page
├── publications.md   # Publications page
├── clients-and-partnerships.md  # Clients page
└── robots.txt        # Search engine robots file

_site/                # Generated site (do not edit)
```

### Deployment

The built site is in the `_site` directory after running `npm run build`. Deploy this directory to your web server.

## Content Management

- Pages are written in Markdown with front matter
- Templates use Nunjucks templating language
- Styles are in vanilla CSS

## Contact

For questions about the site or UsingEvidence services, please contact us through the website.