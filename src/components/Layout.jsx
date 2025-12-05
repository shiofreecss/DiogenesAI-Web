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
    { path: '/tools', label: t('nav.tools') },
    { path: '/courses', label: t('nav.courses') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/knowledge', label: t('nav.knowledge') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/about', label: t('nav.about') },
  ]

  return (
    <div className="min-h-screen flex flex-col font-mono bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <nav className="bg-slate-900/80 backdrop-blur-lg shadow-lg shadow-blue-500/10 sticky top-0 z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center border border-blue-400 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/50">
                <span className="text-white font-bold text-xl font-mono">D</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent font-mono">DiogenesAI</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex space-x-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-xl text-sm font-medium font-mono transition-all ${isActive(link.path)
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
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
                className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
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
                  className={`block px-4 py-2 rounded-xl text-base font-medium font-mono transition-all ${isActive(link.path)
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
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

      <footer className="bg-slate-900/80 backdrop-blur-lg border-t border-slate-800 shadow-lg shadow-blue-500/5 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center border border-blue-400 shadow-lg shadow-blue-500/50">
                  <span className="text-white font-bold font-mono">D</span>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent font-mono">DiogenesAI</span>
              </div>
              <p className="text-sm font-mono text-slate-300">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 font-mono">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2 text-sm font-mono">
                <li>
                  <Link to="/" className="text-slate-300 hover:text-blue-400 transition-colors">
                    {t('nav.home')}
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-slate-300 hover:text-blue-400 transition-colors">
                    {t('nav.blog')}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate-300 hover:text-blue-400 transition-colors">
                    {t('nav.about')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 font-mono">{t('footer.topics')}</h3>
              <ul className="space-y-2 text-sm font-mono">
                <li className="text-slate-300 hover:text-blue-400 transition-colors cursor-pointer">
                  {t('footer.aiMl')}
                </li>
                <li className="text-slate-300 hover:text-blue-400 transition-colors cursor-pointer">
                  {t('footer.vibecoding')}
                </li>
                <li className="text-slate-300 hover:text-blue-400 transition-colors cursor-pointer">
                  {t('footer.solopreneurship')}
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm font-mono text-slate-400">
            <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

