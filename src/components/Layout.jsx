import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { useTranslation } from '../hooks/useTranslation'

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/knowledge', label: t('nav.knowledge') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/about', label: t('nav.about') },
  ]

  return (
    <div className="min-h-screen flex flex-col font-mono">
      <nav className="bg-white dark:bg-terminal-bg shadow-sm dark:shadow-terminal-gold/20 sticky top-0 z-50 border-b border-gray-200 dark:border-terminal-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 dark:from-terminal-gold dark:to-terminal-gold/80 rounded-lg flex items-center justify-center border border-gray-300 dark:border-terminal-gold">
                <span className="text-white font-bold text-xl font-mono">D</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-terminal-gold font-mono">DiogenesAI</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium font-mono transition-colors ${isActive(link.path)
                      ? 'text-primary-600 dark:text-terminal-gold bg-primary-50 dark:bg-terminal-gold/10'
                      : 'text-gray-700 dark:text-terminal-fg hover:text-primary-600 dark:hover:text-terminal-gold hover:bg-gray-50 dark:hover:bg-terminal-gold/5'
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <LanguageToggle />
              <ThemeToggle />
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
              <button
                className="p-2 rounded-md text-gray-700 dark:text-terminal-fg hover:text-primary-600 dark:hover:text-terminal-gold hover:bg-gray-50 dark:hover:bg-terminal-gold/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium font-mono ${isActive(link.path)
                    ? 'text-primary-600 dark:text-terminal-gold bg-primary-50 dark:bg-terminal-gold/10'
                    : 'text-gray-700 dark:text-terminal-fg hover:text-primary-600 dark:hover:text-terminal-gold hover:bg-gray-50 dark:hover:bg-terminal-gold/5'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="flex-grow">{children}</main>

      <footer className="bg-white dark:bg-terminal-bg text-gray-700 dark:text-terminal-fg mt-16 border-t border-gray-200 dark:border-terminal-gold/30 shadow-sm dark:shadow-terminal-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 dark:from-terminal-gold dark:to-terminal-gold/80 rounded-lg flex items-center justify-center border border-gray-300 dark:border-terminal-gold">
                  <span className="text-white font-bold font-mono">D</span>
                </div>
                <span className="text-lg font-bold text-gray-900 dark:text-terminal-gold font-mono">DiogenesAI</span>
              </div>
              <p className="text-sm font-mono text-gray-600 dark:text-terminal-fg">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-terminal-gold font-semibold mb-4 font-mono">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2 text-sm font-mono">
                <li>
                  <Link to="/" className="text-gray-600 dark:text-terminal-fg hover:text-primary-600 dark:hover:text-terminal-gold transition-colors">
                    {t('nav.home')}
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-600 dark:text-terminal-fg hover:text-primary-600 dark:hover:text-terminal-gold transition-colors">
                    {t('nav.blog')}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-600 dark:text-terminal-fg hover:text-primary-600 dark:hover:text-terminal-gold transition-colors">
                    {t('nav.about')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-terminal-gold font-semibold mb-4 font-mono">{t('footer.topics')}</h3>
              <ul className="space-y-2 text-sm font-mono">
                <li className="text-gray-600 dark:text-terminal-fg hover:text-primary-600 dark:hover:text-terminal-gold transition-colors cursor-pointer">
                  {t('footer.aiMl')}
                </li>
                <li className="text-gray-600 dark:text-terminal-fg hover:text-primary-600 dark:hover:text-terminal-gold transition-colors cursor-pointer">
                  {t('footer.vibecoding')}
                </li>
                <li className="text-gray-600 dark:text-terminal-fg hover:text-primary-600 dark:hover:text-terminal-gold transition-colors cursor-pointer">
                  {t('footer.solopreneurship')}
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-terminal-gold/30 text-center text-sm font-mono text-gray-600 dark:text-terminal-fg">
            <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

