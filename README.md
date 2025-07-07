# MusicGPT Project

A modern AI-powered music creation and text-to-speech application built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: Custom components with [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [TanStack Query](https://tanstack.com/query)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Database**: [Redis](https://redis.io/) for caching and session management

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd musicgpt-clone
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Project Structure

```
src/
├── api-client/          # API client and service utilities
│   ├── api-client.ts    # Base API client configuration
│   ├── music-service.ts # Music generation service
│   ├── voice-service.ts # Text-to-speech service
│   └── types.ts         # TypeScript type definitions
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   │   ├── submit/     # Music submission endpoint
│   │   └── voices/     # Voice selection endpoint
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Main application page
├── components/         # Reusable UI components
│   ├── button.tsx      # Button component
│   ├── collapse.tsx    # Collapsible content component
│   ├── dropdown-menu.tsx # Dropdown menu component
│   ├── dynamic-textarea.tsx # Auto-resizing textarea
│   ├── fade-scroll.tsx # Scroll animations
│   ├── header.tsx      # Header component
│   ├── text-to-speech.tsx # TTS interface
│   └── providers.tsx   # React context providers
└── hooks/              # Custom React hooks
    └── useVoices.ts    # Voice selection hook
```
