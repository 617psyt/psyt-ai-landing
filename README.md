# PSYT.AI Landing Page

A modern, responsive landing page for PSYT.AI - an AI-powered psychological insights platform. Built with React, TypeScript, and Vite.

## Features

- 🎨 **Modern Design**: Clean, professional interface with dark/light mode support
- 📱 **Responsive**: Optimized for all device sizes
- 🚀 **Fast**: Built with Vite for optimal performance
- 📧 **Waitlist Integration**: Connected to Formspree for email collection
- ♿ **Accessible**: Built with accessibility best practices
- 🎯 **SEO Optimized**: Structured for search engine visibility

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI primitives
- **Form Handling**: Formspree integration
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/617psyt/psyt-ai-landing.git
cd psyt-ai-landing

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Building for Production

```bash
# Build the project
pnpm build

# Preview the build
pnpm preview
```

## Deployment

This project is set up for automated deployment with Cloudflare Pages:

1. Connect your Cloudflare Pages to this GitHub repository
2. Set build command: `pnpm build`
3. Set output directory: `dist`
4. Every push to `main` will trigger a new deployment

## Form Integration

The waitlist signup form is integrated with Formspree:
- Submissions are sent to `info@psyt.ai`
- Form includes email validation and error handling
- Success/error states provide user feedback

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── sections/       # Page sections (Hero, Features, etc.)
│   └── ui/            # Base UI components
├── hooks/              # Custom React hooks
├── lib/               # Utility functions
└── main.tsx           # Application entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is proprietary and confidential.
