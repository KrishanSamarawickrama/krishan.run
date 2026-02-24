# krishan.run

An interactive terminal-style portfolio built with Next.js. Visitors explore skills, experience, projects, and more through a CLI interface.

## Features

- Terminal UI with macOS-style window chrome (traffic light dots, title bar)
- Animated boot sequence on load
- Interactive command input with autocomplete suggestions
- Sidebar file tree navigation (desktop)
- Mobile-friendly bottom nav bar
- Multiple color themes (including CRT and Matrix effects)
- Responsive layout with max-width constraint for ultrawide screens
- Neofetch-style profile hero with animated stats and skill bars

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Font:** JetBrains Mono

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Commands

Type `help` in the terminal to see all available commands, including:

- `about` - About me
- `skills` - Technical skills
- `experience` - Work history
- `education` - Academic background
- `projects` - Project showcase
- `certs` - Certifications
- `contact` - Contact information
- `neofetch` - System-style profile summary
- `theme` - Change color theme
- `social` - Social links
- `languages` - Programming languages
- `resume` - Download resume
- `whoami` - Current user
- `date` - Current date/time
- `echo` - Echo text
- `history` - Command history
- `clear` - Clear terminal output

## Project Structure

```
deploy/             # Dockerfile
docs/               # PDFs and documents
public/             # Static assets (images, robots.txt, sitemap)
src/
├── app/
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── effects/
│   │   ├── BootSequence.tsx
│   │   ├── CRTEffect.tsx
│   │   ├── MatrixRain.tsx
│   │   └── TypingAnimation.tsx
│   ├── terminal/
│   │   ├── CommandSuggestions.tsx
│   │   ├── ProfileHero.tsx
│   │   ├── Terminal.tsx
│   │   ├── TerminalInput.tsx
│   │   ├── TerminalOutput.tsx
│   │   └── TerminalPrompt.tsx
│   └── ui/
│       ├── MobileNav.tsx
│       ├── Sidebar.tsx
│       └── StatusBar.tsx
├── context/
│   └── TerminalContext.tsx
├── hooks/
│   ├── useAutocomplete.ts
│   ├── useCommandHistory.ts
│   ├── useTerminal.ts
│   ├── useTheme.ts
│   └── useTypingAnimation.ts
├── lib/
│   ├── commands/
│   │   ├── index.ts
│   │   ├── parser.ts
│   │   ├── registry.ts
│   │   ├── types.ts
│   │   ├── about.ts
│   │   ├── certs.ts
│   │   ├── contact.ts
│   │   ├── education.ts
│   │   ├── experience.ts
│   │   ├── help.ts
│   │   ├── neofetch.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── system.ts
│   │   └── theme.ts
│   └── data/
│       ├── ascii-art.ts
│       ├── profile.ts
│       └── themes.ts
└── types/
    └── terminal.ts
```

## Docker

```bash
docker build -f deploy/Dockerfile -t krishan-run .
docker run -p 3000:3000 krishan-run
```
