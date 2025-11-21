import { parseFrontmatter } from '../utils/parseFrontmatter'

// Import all markdown files from posts directory (recursive - posts/year/ structure)
const postModules = import.meta.glob('../posts/**/*.md', { as: 'raw', eager: true })

export const posts = Object.entries(postModules).map(([path, content]) => {
  const { metadata, content: markdownContent } = parseFrontmatter(content)
  
  return {
    slug: metadata.slug,
    title: metadata.title,
    excerpt: metadata.excerpt,
    date: metadata.date,
    readTime: parseInt(metadata.readTime) || 5,
    tags: Array.isArray(metadata.tags) ? metadata.tags : metadata.tags?.split(',').map(t => t.trim()) || [],
    emoji: metadata.emoji || '📝',
    content: markdownContent,
  }
}).sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, newest first
