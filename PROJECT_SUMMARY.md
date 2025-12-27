# Personal Website - Project Summary

## ✅ Project Complete

A minimal, founder-grade personal website built with Next.js, TypeScript, and Tailwind CSS, matching the provided design screenshots exactly.

## 🛠 Tech Stack

- **Framework:** Next.js 15.5.9 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Button, Card, Badge, Separator, Sheet)
- **Icons:** lucide-react (Email, GitHub, LinkedIn, X/Twitter)
- **Typography:** Inter font (next/font)
- **Code Quality:** Prettier with prettier-plugin-tailwindcss
- **Deployment:** Vercel-ready

## 📁 Project Structure

```
personal-website/
├── app/
│   ├── layout.tsx         # Root layout with metadata & Inter font
│   ├── page.tsx           # Main page assembling all sections
│   └── globals.css        # Global styles & Tailwind CSS variables
├── components/
│   ├── ui/                # shadcn/ui primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── separator.tsx
│   │   └── sheet.tsx
│   ├── navbar.tsx         # Sticky navigation with mobile menu
│   ├── hero.tsx           # Hero section with name & CTAs
│   ├── projects.tsx       # Featured project + secondary projects grid
│   ├── about.tsx          # About section with narrative
│   ├── books.tsx          # Books grouped by category
│   ├── writing.tsx        # Featured post + writing list
│   └── footer.tsx         # Contact section with social links
├── data/
│   ├── projects.ts        # Project data array
│   ├── books.ts           # Books data array with categories
│   └── writing.ts         # Writing posts data array
├── lib/
│   └── utils.ts           # Utility functions (cn)
└── design/
    └── DESIGN_NOTES.md    # Design principles & constraints
```

## 🎨 Design Features

### Color Palette

- **Background:** Off-white (#F5F5F5 / hsl(0 0% 98%))
- **Primary Text:** Near-black (#1A1A1A / hsl(0 0% 10%))
- **Accent Color:** Soft blue (#0080FF / hsl(214 100% 50%))
- **Borders:** Very light gray (#E5E5E5 / hsl(0 0% 90%))
- **Muted Text:** Medium gray (#737373 / hsl(0 0% 45%))

### Typography

- **Font Family:** Inter (Google Font)
- **H1:** 5xl-7xl, bold (Hero name)
- **H2:** 4xl, bold (Section titles)
- **Body:** Relaxed line-height, 18px base size
- **Hierarchy:** Clear visual distinction between headings and body text

### Layout Principles

- Generous whitespace throughout
- Comfortable max-width for text blocks (max-w-4xl for content, max-w-7xl for projects)
- Consistent vertical spacing (py-24 lg:py-32)
- Responsive grid layouts (1 column mobile, 2-3 columns desktop)

### Component Styling

- **Buttons:** Rounded corners (not pill-shaped), subtle hover states
- **Cards:** Soft shadows, light borders, rounded-lg
- **Featured Elements:** Accent border on left/top, accent colored badges
- **Tags/Badges:** Small, neutral background, low visual weight
- **Navigation:** Sticky top navbar, collapses to mobile menu on small screens

## 📄 Page Sections

### 1. Navbar

- Sticky navigation at top
- Desktop: Horizontal links (Home, Projects, About, Books, Writing)
- Mobile: Collapsed hamburger menu with slide-out sheet
- Smooth scroll to anchored sections

### 2. Hero

- Large name headline (Jordan Martinez)
- Subtitle: "Building AI tools for language learning"
- Current focus paragraph mentioning Fluencia
- Belief statement about shipping fast
- Two CTA buttons: "View Projects" (primary) and "Get in Touch" (secondary)

### 3. Projects (Proof of Work)

- Title: "Proof of Work"
- Subtitle about real user reach
- **Featured Project (Fluencia):**
  - Accent border
  - "Featured" badge
  - Description, impact metrics (in blue), tech stack tags
- **Secondary Projects Grid (3 cards):**
  - DevMerge CLI
  - CodeReview AI
  - Momentum Board
  - Each with description, impact line, tech tags

### 4. About

- Multi-paragraph narrative (4 paragraphs)
- Bold "Core belief:" label
- Discusses coding journey, approach, and interests
- Clean text layout with generous line spacing

### 5. Books (Ideas That Shaped My Work)

- Grouped by categories:
  - Product & Strategy
  - Focus & Essentialism
  - Leverage & Career
- Each book entry includes:
  - Blue left border accent
  - Book title (bold)
  - Author name (muted)
  - One-sentence takeaway
  - "Applied to..." badge

### 6. Writing

- Title + purpose statement
- **Featured Post:**
  - "Featured" badge
  - Larger card with accent styling
  - Title in blue (link)
  - Date on right
- **Other Posts:**
  - Clean card list
  - Title in blue (link)
  - Date on right
  - Hover effect

### 7. Footer (Let's Connect)

- Title: "Let's Connect"
- Invitation paragraph
- Social icons in a row:
  - Email
  - GitHub
  - LinkedIn
  - X (Twitter)
- Copyright line: "© 2024 Jordan Martinez. Built with intention, shipped with speed."

## 🎯 Key Features

### Responsive Design

- **Desktop:** Full layout with horizontal nav, multi-column grids
- **Tablet:** Preserved hierarchy with adjusted spacing
- **Mobile:** Stacked layout, hamburger menu, single column cards

### SEO Optimized

- Proper metadata in `app/layout.tsx`
- Page title: "Jordan Martinez - Building AI Tools for Language Learning"
- Meta description with keywords
- Open Graph tags for social sharing
- Twitter Card metadata
- Semantic HTML structure

### Accessibility

- Semantic HTML elements (nav, main, section, footer)
- ARIA labels for icon-only buttons
- Proper heading hierarchy (h1, h2, h3, h4)
- Keyboard navigation support
- Focus states on interactive elements

### Performance

- Next.js App Router for optimal performance
- Google Font optimization with next/font
- No heavy images or assets
- Minimal JavaScript bundle
- Server-side rendering

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Code Formatting

```bash
npm run format
```

### Linting

```bash
npm run lint
```

## 📝 Customization Guide

### Update Personal Information

1. **Name & Bio:** Edit `components/hero.tsx`
2. **Social Links:** Update `components/footer.tsx`
3. **Metadata:** Modify `app/layout.tsx`

### Update Content

1. **Projects:** Edit `data/projects.ts`
   - Add/remove projects
   - Update impact metrics
   - Modify tech stack tags
   - Set featured project

2. **Books:** Edit `data/books.ts`
   - Add/remove books
   - Update categories
   - Modify takeaways and applications

3. **Writing:** Edit `data/writing.ts`
   - Add/remove posts
   - Update dates
   - Set featured post

### Styling Customization

- **Colors:** Modify CSS variables in `app/globals.css`
- **Spacing:** Adjust Tailwind classes in components
- **Typography:** Update font in `app/layout.tsx`
- **Component Styles:** Edit individual component files

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

Or use Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Environment Variables

No environment variables required for basic functionality.
Update social links and email in `components/footer.tsx` before deploying.

## ✨ Design Principles Followed

- **Minimal & Calm:** No flashy animations, clean aesthetic
- **Generous Whitespace:** Comfortable reading experience
- **Typography-First:** Clear hierarchy, readable font sizes
- **Accent Usage:** Soft blue used sparingly for links, metrics, borders
- **Responsive:** Mobile-first approach with desktop enhancements
- **Fast Loading:** Optimized for performance
- **Maintainable:** Structured data files for easy updates

## 🎨 Design Constraints Honored

✅ No gradients  
✅ No background patterns  
✅ No icon overuse  
✅ No flashy animations (only subtle hover states)  
✅ Calm, thoughtful, builder-focused tone  
✅ No marketing language or buzzwords  
✅ Screenshots match exactly (see browser testing)

## 📊 Current Status

**✅ All Features Complete**

- Navbar with mobile menu
- Hero section with CTAs
- Projects section with featured card
- About section
- Books section with categories
- Writing section with featured post
- Footer with social links
- Fully responsive
- SEO optimized
- Deploy-ready

## 🔧 Troubleshooting

### Dev Server Won't Start

- Ensure all dependencies are installed: `npm install`
- Check that `autoprefixer` is in `devDependencies`
- Restart the dev server after installing new packages

### Styling Issues

- Run `npm run format` to ensure consistent Tailwind class ordering
- Check that `globals.css` is imported in `layout.tsx`
- Verify Tailwind config includes all necessary paths

### Type Errors

- Ensure TypeScript is up to date
- Check that all data files match their interface definitions
- Run `npm run lint` to catch type issues

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

## 📄 License

MIT License - feel free to use this as a template for your own personal website.

---

**Built with intention, shipped with speed.** 🚀

