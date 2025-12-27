# Personal Website

A minimal, founder-grade personal website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** lucide-react
- **Deployment:** Vercel-ready

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── navbar.tsx      # Navigation
│   ├── hero.tsx        # Hero section
│   ├── projects.tsx    # Projects section
│   ├── about.tsx       # About section
│   ├── books.tsx       # Books section
│   ├── writing.tsx     # Writing section
│   └── footer.tsx      # Footer/Contact section
├── data/
│   ├── projects.ts     # Project data
│   ├── books.ts        # Books data
│   └── writing.ts      # Writing posts data
└── lib/
    └── utils.ts        # Utility functions
```

## Customization

### Update Content

Edit the data files in the `/data` directory:

- `projects.ts` - Add/edit projects
- `books.ts` - Add/edit books
- `writing.ts` - Add/edit blog posts

### Update Personal Information

- Update name, bio, and links in component files
- Update metadata in `app/layout.tsx`
- Update social links in `components/footer.tsx`

### Styling

The design follows these principles:

- Generous whitespace
- Inter font family
- Minimal color palette (off-white background, near-black text, soft blue accents)
- No flashy animations
- Clean, editorial feel

Colors and spacing can be adjusted in `tailwind.config.ts` and `app/globals.css`.

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## License

MIT

