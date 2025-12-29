# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Customize Your Content

#### Update Personal Information
- **Name & Bio:** `components/hero.tsx` and `components/footer.tsx`
- **Social Links:** `components/footer.tsx` (replace placeholder URLs)
- **SEO Metadata:** `app/layout.tsx` (title, description, social cards)

#### Update Content Data
- **Projects:** `data/projects.ts`
- **Books:** `data/books.ts`
- **Writing Posts:** `data/writing.ts`

## 📝 Updating Social Links

In `components/footer.tsx`, replace these placeholders:

```typescript
// Replace with your actual links
href="mailto:your.email@example.com"        // Your email
href="https://github.com/yourusername"      // Your GitHub
href="https://linkedin.com/in/yourusername" // Your LinkedIn
href="https://twitter.com/yourusername"     // Your Twitter/X
```

## 🎨 Customizing Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --background: 0 0% 98%;        /* Off-white background */
  --foreground: 0 0% 10%;        /* Near-black text */
  --accent: 214 100% 50%;        /* Soft blue accent */
  --muted-foreground: 0 0% 45%;  /* Gray text */
  --border: 0 0% 90%;            /* Light gray borders */
}
```

## 🚀 Deploy to Vercel

### Option 1: GitHub Integration (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🔧 Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. ⬜ Update personal information
4. ⬜ Replace social media links
5. ⬜ Add your projects to `data/projects.ts`
6. ⬜ Add your books to `data/books.ts`
7. ⬜ Add your writing posts to `data/writing.ts`
8. ⬜ Test responsiveness on mobile
9. ⬜ Deploy to Vercel

## 💡 Tips

- The site is fully responsive - test on mobile, tablet, and desktop
- All content is in the `/data` folder for easy updates
- Run `npm run format` before committing to maintain code style
- Check `PROJECT_SUMMARY.md` for detailed documentation

## 🐛 Common Issues

**Dev server won't start?**
- Make sure you ran `npm install` first
- Try deleting `node_modules` and `.next`, then run `npm install` again

**Styling looks wrong?**
- Run `npm run dev` to restart the dev server
- Check that Tailwind CSS is compiling properly

**TypeScript errors?**
- Check your data files match the TypeScript interfaces
- Run `npm run lint` to see all errors

## 📚 Learn More

- See `PROJECT_SUMMARY.md` for full project documentation
- See `design/DESIGN_NOTES.md` for design principles
- See `README.md` for project overview

---

**Questions?** Check the PROJECT_SUMMARY.md file for detailed information about the project structure, customization options, and troubleshooting tips.



