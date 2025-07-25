# Photo Gallery

A modern, responsive photo gallery web application built with Next.js that allows users to search and browse high-quality images from Pixabay.

## Features

- **Image Search**: Search for images by keywords using the Pixabay API
- **Responsive Design**: Built with Tailwind CSS and DaisyUI for a beautiful, mobile-friendly interface
- **Image Lightbox**: View images in full resolution using the yet-another-react-lightbox component
- **Loading States**: Smooth loading animations and suspense boundaries for better UX
- **Optimized Performance**: Server-side rendering with Next.js App Router and caching for improved performance

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with DaisyUI components
- **API**: Pixabay API for image data
- **Image Viewer**: yet-another-react-lightbox
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Pixabay API key (free at [pixabay.com](https://pixabay.com/api/docs/))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Photo-Gallery
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your Pixabay API key:
```
API_KEY_PIXABAY=your_pixabay_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout component
│   ├── loading.tsx      # Global loading component
│   └── page.tsx         # Home page component
└── components/
    ├── Footer.tsx       # Footer component
    ├── GetImage.tsx     # Image fetching and display logic
    ├── Header.tsx       # Header with navigation
    ├── ImageSlide.tsx   # Image slideshow/lightbox
    ├── Loading.tsx      # Loading spinner component
    ├── Search.tsx       # Search input component
    └── Tile.tsx         # Individual image tile component
```

## Usage

1. **Search Images**: Use the search bar to find images by keywords
2. **Browse Results**: View image results in a responsive grid layout
3. **View Full Size**: Click on any image to open it in the lightbox viewer
4. **Navigate**: Use the lightbox controls to navigate between images

## Build and Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Don't forget to add your `API_KEY_PIXABAY` environment variable in your deployment settings.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
