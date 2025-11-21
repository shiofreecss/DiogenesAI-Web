import { useState } from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import BinaryImage from '../components/BinaryImage'
import { useTranslation } from '../hooks/useTranslation'

const Blog = () => {
  const { t } = useTranslation()
  const [selectedTag, setSelectedTag] = useState('All')
  const allTags = ['All', ...new Set(posts.flatMap((post) => post.tags))]

  const filteredPosts =
    selectedTag === 'All'
      ? posts
      : posts.filter((post) => post.tags.includes(selectedTag))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-mono">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-terminal-gold font-mono">{t('blog.title')}</h1>
        <p className="text-xl text-gray-600 dark:text-terminal-fg max-w-2xl mx-auto font-mono">
          {t('blog.subtitle')}
        </p>
      </div>

      {/* Tag Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full font-medium font-mono transition-colors border ${
              selectedTag === tag
                ? 'bg-primary-600 dark:bg-terminal-gold text-white dark:text-terminal-bg border-primary-700 dark:border-terminal-gold'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-terminal-fg hover:bg-gray-300 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/post/${post.slug}`}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md dark:shadow-terminal-gold/20 hover:shadow-xl transition-all overflow-hidden group border border-gray-200 dark:border-terminal-gold/30"
          >
            <div className="h-48 relative overflow-hidden">
              <BinaryImage title={post.title} />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-primary-100 dark:bg-terminal-gold/20 text-primary-700 dark:text-terminal-gold rounded-full font-mono border border-primary-300 dark:border-terminal-gold/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-terminal-gold group-hover:text-primary-600 dark:group-hover:text-terminal-gold transition-colors font-mono">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-terminal-fg text-sm mb-4 line-clamp-3 font-mono">
                {post.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-terminal-fg/70 font-mono">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-terminal-fg text-lg font-mono">{t('blog.noPosts')}</p>
        </div>
      )}
    </div>
  )
}

export default Blog

