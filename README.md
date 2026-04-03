# Mike Andorful — Portfolio

A developer portfolio built with Next.js 14, TypeScript, and CSS Modules.
Designed with a VS Code / terminal aesthetic — because why not make your environment your brand.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS custom properties
- **Fonts**: JetBrains Mono + Syne (via Google Fonts)
- **Animation**: Framer Motion (wired up, ready to use)
- **Deployment**: Vercel (recommended)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Main IDE shell + tab state
│   ├── page.module.css
│   └── globals.css       # Design tokens + base styles
├── components/
│   ├── layout/
│   │   ├── WindowChrome  # Top tab bar
│   │   ├── Sidebar       # File explorer sidebar
│   │   └── StatusBar     # Bottom status bar
│   ├── sections/
│   │   ├── AboutSection  # Hero + stats + skills
│   │   ├── ProjectsSection
│   │   ├── ExperienceSection
│   │   └── ContactSection
│   └── ui/
│       └── SkillTag      # Reusable tag component
└── lib/
    └── data.ts           # ← ALL your content lives here
```

## Customising Your Content

Everything is in **`src/lib/data.ts`** — your name, bio, projects, experience, links.
Update that file and the whole site updates. No hunting through component files.

### Adding a project

```ts
// In src/lib/data.ts
{
  id: "04",
  featured: false,
  name: "Your Project Name",
  description: "What it does and why it matters.",
  stack: [
    { name: "React", variant: "react" },
    { name: "TypeScript", variant: "ts" },
  ],
  status: "live",
  demoUrl: "https://your-demo.com",
  codeUrl: "https://github.com/you/repo",
}
```

### Changing colour accent

The green accent (`#00ff87`) is set as `--green` in `src/styles/globals.css`.
Change it once, it updates everywhere.

## Deployment

Push to GitHub and connect to [Vercel](https://vercel.com) — it auto-detects Next.js.

```bash
# Or deploy directly via CLI
npx vercel
```

## Adding Framer Motion transitions

The `framer-motion` package is already installed. To animate section transitions, wrap sections in `page.tsx`:

```tsx
import { AnimatePresence, motion } from "framer-motion";

// Wrap each section in:
<motion.div
  key={activeTab}
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -8 }}
  transition={{ duration: 0.2 }}
>
  {/* section content */}
</motion.div>
```
