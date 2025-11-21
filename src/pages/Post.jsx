import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { posts } from '../data/posts'
import { useTranslation } from '../hooks/useTranslation'
import Mermaid from '../components/Mermaid'

const Post = () => {
  const { t } = useTranslation()
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center font-mono">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-terminal-gold font-mono">{t('post.notFound')}</h1>
        <p className="text-gray-600 dark:text-terminal-fg mb-8 font-mono">{t('post.notFoundDesc')}</p>
        <Link
          to="/blog"
          className="text-primary-600 dark:text-terminal-gold hover:text-primary-700 dark:hover:text-terminal-gold/80 font-semibold font-mono"
        >
          {t('post.backToBlog')}
        </Link>
      </div>
    )
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-mono">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/blog"
          className="text-primary-600 dark:text-terminal-gold hover:text-primary-700 dark:hover:text-terminal-gold/80 font-medium mb-4 inline-block font-mono"
        >
          {t('post.backToBlog')}
        </Link>
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 bg-primary-100 dark:bg-terminal-gold/20 text-primary-700 dark:text-terminal-gold rounded-full font-mono border border-primary-300 dark:border-terminal-gold/50"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-terminal-gold font-mono">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-600 dark:text-terminal-fg mb-6 font-mono">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime} {t('post.minRead')}</span>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            [rehypeHighlight, { detect: true, ignoreMissing: true }]
          ]}
          components={{
            h1: () => null,
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              const isMermaid = match && match[1] === 'mermaid'

              if (!inline && isMermaid) {
                return <Mermaid chart={String(children).replace(/\n$/, '')} />
              }

              return (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-terminal-gold/30">
        <div className="flex justify-between items-center">
          <Link
            to="/blog"
            className="text-primary-600 dark:text-terminal-gold hover:text-primary-700 dark:hover:text-terminal-gold/80 font-medium font-mono"
          >
            {t('post.backToBlog')}
          </Link>
          <div className="text-gray-600 dark:text-terminal-fg text-sm font-mono">
            {t('post.sharePost')}
          </div>
        </div>
      </div>
    </article>
  )
}

export default Post
