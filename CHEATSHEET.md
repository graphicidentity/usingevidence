# 🚀 UsingEvidence Development Cheat Sheet

## Quick Commands
```bash
npm start          # Start development server ✅
npm run serve      # Same as above ✅  
npm run dev        # Same as above ✅
npm run build      # Build for production
npm run help       # Show all commands
```

## Server Info
- **URL**: http://localhost:8081/
- **Auto-reload**: Yes, saves trigger rebuild
- **Port**: 8081 (check terminal if different)

## Common Issues
| Problem | Solution |
|---------|----------|
| "Missing script: serve" | Use `npm start` |
| Server won't start | Check you're in project folder |
| Links don't work | Use `/contact/` not `/usingevidence/contact/` |
| Build fails | Try `npm run rebuild` |

## File Structure
```
src/
├── index.njk              # Home page
├── contact.njk            # Contact page  
├── publications.njk       # Publications
├── clients-and-partnerships.njk  # About Fred
├── _layouts/base.njk      # Main template
└── css/main.css          # Styles
```

## Development Flow
1. `npm start` → opens http://localhost:8081/
2. Edit files in `src/`
3. Browser auto-refreshes
4. `npm run build` before deploying

**💡 Tip**: Bookmark http://localhost:8081/ for quick access!
