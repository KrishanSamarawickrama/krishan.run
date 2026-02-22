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
- `clear` - Clear terminal output
- `theme` - Change color theme

## Project Structure

```
src/
  app/            # Next.js app router pages & layout
  components/
    terminal/     # Terminal, ProfileHero, TerminalInput, TerminalOutput
    effects/      # BootSequence, CRTEffect, MatrixRain
    ui/           # Sidebar, StatusBar, MobileNav
  hooks/          # useTerminal, useTheme, useTypingAnimation
  lib/data/       # Profile data, commands, ASCII art
  types/          # TypeScript types
```

## Deployment (Docker)

```bash
# Build the image
docker build -t krishan-run .

# Run the container
docker run -p 3000:3000 krishan-run
```

Open [http://localhost:3000](http://localhost:3000) to view the site.
