# DiogenesAI - AI/ML/Vibecoding/Solopreneur Blog

A modern React-based blog website for exploring AI, Machine Learning, Vibecoding, and Solopreneurship topics.

## Features

- 🎨 Modern, beautiful UI with Tailwind CSS
- 📝 Markdown-based blog posts
- 🏷️ Tag filtering system
- 📱 Fully responsive design
- ⚡ Fast and optimized with Vite
- 🎯 Clean, semantic code structure

## Tech Stack

- **React 18** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **react-markdown** - Markdown rendering
- **remark-gfm** - GitHub Flavored Markdown support
- **rehype-highlight** - Code syntax highlighting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd DiogenesAI-Web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
DiogenesAI-Web/
├── src/
│   ├── components/
│   │   └── Layout.jsx          # Main layout with navigation
│   ├── pages/
│   │   ├── Home.jsx            # Homepage
│   │   ├── Blog.jsx            # Blog listing page
│   │   ├── Post.jsx            # Individual post page
│   │   └── About.jsx           # About page
│   ├── data/
│   │   └── posts.js            # Blog posts data
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Adding New Posts

To add a new blog post, edit `src/data/posts.js` and add a new post object:

```javascript
{
  slug: 'your-post-slug',
  title: 'Your Post Title',
  excerpt: 'A brief description of your post',
  date: '2024-01-30',
  readTime: 5,
  tags: ['Tag1', 'Tag2'],
  emoji: '🎯',
  content: `# Your Markdown Content Here

Your post content in markdown format...
`
}
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme. The primary color is defined in the theme.

### Styling

- Global styles: `src/index.css`
- Component styles: Inline Tailwind classes in components
- Prose styles: Custom styles for markdown content in `src/index.css`

## License

MIT

## Contributing

Feel free to submit issues and enhancement requests!

