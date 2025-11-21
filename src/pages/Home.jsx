import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import { vibecodingProjects } from '../data/vibecodingProjects'
import BinaryImage from '../components/BinaryImage'
import { useTranslation } from '../hooks/useTranslation'

const Home = () => {
  const { t, language } = useTranslation()
  const featuredPosts = posts.slice(0, 6) // Changed from 3 to 6 for 2 rows

  // Get project description based on language
  const getProjectDescription = (project) => {
    switch (language) {
      case 'en':
        return project.descriptionEn
      case 'zh':
        return project.descriptionZh
      case 'ja':
        return project.descriptionJa
      default:
        return project.description
    }
  }

  // Get status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-300 dark:border-green-700'
      case 'development':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700'
      case 'planning':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700'
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400 border-gray-300 dark:border-gray-700'
    }
  }

  return (
    <div className="font-mono">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-terminal-bg dark:via-terminal-bg dark:to-terminal-gold/20 text-white dark:text-terminal-gold border-b border-primary-500 dark:border-terminal-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-mono">
              {t('home.welcome')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 dark:text-terminal-fg max-w-3xl mx-auto font-mono">
              {t('home.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="bg-white dark:bg-terminal-gold text-primary-700 dark:text-terminal-bg px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-terminal-gold/80 transition-colors shadow-lg border-2 border-white dark:border-terminal-gold font-mono"
              >
                {t('home.readBlog')}
              </Link>
              <Link
                to="/about"
                className="bg-primary-500 dark:bg-terminal-gold/20 text-white dark:text-terminal-gold px-8 py-3 rounded-lg font-semibold hover:bg-primary-400 dark:hover:bg-terminal-gold/30 transition-colors border-2 border-white dark:border-terminal-gold font-mono"
              >
                {t('home.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-white dark:bg-terminal-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-terminal-gold font-mono">
            {t('home.explore')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-900 dark:to-gray-800 p-8 rounded-xl border border-amber-200 dark:border-terminal-gold/30">
              <div className="w-12 h-12 bg-amber-500 dark:bg-terminal-gold rounded-lg flex items-center justify-center mb-4 border border-amber-600 dark:border-terminal-gold">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-terminal-gold font-mono">{t('about.aiMl')}</h3>
              <p className="text-gray-700 dark:text-terminal-fg font-mono">
                {t('about.aiMlDesc')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800 p-8 rounded-xl border border-yellow-200 dark:border-terminal-gold/30">
              <div className="w-12 h-12 bg-yellow-500 dark:bg-terminal-gold rounded-lg flex items-center justify-center mb-4 border border-yellow-600 dark:border-terminal-gold">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-terminal-gold font-mono">{t('about.vibecoding')}</h3>
              <p className="text-gray-700 dark:text-terminal-fg font-mono">
                {t('about.vibecodingDesc')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 p-8 rounded-xl border border-primary-200 dark:border-terminal-gold/30">
              <div className="w-12 h-12 bg-primary-500 dark:bg-terminal-gold rounded-lg flex items-center justify-center mb-4 border border-primary-600 dark:border-terminal-gold">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-terminal-gold font-mono">{t('about.solopreneurship')}</h3>
              <p className="text-gray-700 dark:text-terminal-fg font-mono">
                {t('about.solopreneurshipDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vibecoding Projects Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-terminal-gold font-mono mb-3">
              {t('home.vibecodingProjects')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-terminal-fg font-mono">
              {t('home.vibecodingSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vibecodingProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-terminal-gold/20 hover:shadow-xl transition-all overflow-hidden group border border-yellow-200 dark:border-terminal-gold/30 hover:border-yellow-400 dark:hover:border-terminal-gold/50"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{project.emoji}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-terminal-gold group-hover:text-yellow-600 dark:group-hover:text-terminal-gold transition-colors font-mono">
                          {project.title}
                        </h3>
                        <span className={`inline-block mt-1 text-xs px-2 py-1 rounded-full font-mono border ${getStatusColor(project.status)}`}>
                          {t(`home.projectStatus.${project.status}`)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-terminal-fg text-sm mb-4 font-mono leading-relaxed">
                    {getProjectDescription(project)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-yellow-100 dark:bg-terminal-gold/20 text-yellow-700 dark:text-terminal-gold rounded font-mono border border-yellow-300 dark:border-terminal-gold/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-yellow-600 dark:text-terminal-gold hover:text-yellow-700 dark:hover:text-terminal-gold/80 font-semibold font-mono text-sm"
                    >
                      {t('home.viewProject')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts - 2 Rows */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-terminal-gold font-mono">{t('home.featuredPosts')}</h2>
            <Link
              to="/blog"
              className="text-primary-600 dark:text-terminal-gold hover:text-primary-700 dark:hover:text-terminal-gold/80 font-semibold font-mono"
            >
              {t('home.viewAll')} →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/post/${post.slug}`}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md dark:shadow-terminal-gold/20 hover:shadow-xl transition-shadow overflow-hidden group border border-gray-200 dark:border-terminal-gold/30"
              >
                <div className="h-48 relative overflow-hidden">
                  <BinaryImage title={post.title} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
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
                  <p className="text-gray-600 dark:text-terminal-fg text-sm mb-4 line-clamp-2 font-mono">
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
        </div>
      </section>
    </div>
  )
}

export default Home

