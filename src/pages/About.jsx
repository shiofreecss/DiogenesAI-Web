import { useTranslation } from '../hooks/useTranslation'

const About = () => {
  const { t } = useTranslation()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-mono">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-terminal-gold font-mono">{t('about.title')}</h1>
        <p className="text-xl text-gray-600 dark:text-terminal-fg font-mono">
          {t('about.subtitle')}
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 p-8 rounded-xl mb-8 border border-primary-200 dark:border-terminal-gold/30">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-terminal-gold font-mono">{t('about.mission')}</h2>
          <p className="text-gray-700 dark:text-terminal-fg leading-relaxed font-mono">
            {t('about.missionText')}
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-terminal-gold font-mono">{t('about.whatWeCover')}</h2>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <span className="text-primary-600 dark:text-terminal-gold mr-3 font-mono">•</span>
            <div>
              <strong className="text-gray-900 dark:text-terminal-gold font-mono">{t('about.aiMl')}</strong>
              <span className="text-gray-700 dark:text-terminal-fg font-mono">
                {' '}
                {t('about.aiMlDesc')}
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary-600 dark:text-terminal-gold mr-3 font-mono">•</span>
            <div>
              <strong className="text-gray-900 dark:text-terminal-gold font-mono">{t('about.vibecoding')}</strong>
              <span className="text-gray-700 dark:text-terminal-fg font-mono">
                {' '}
                {t('about.vibecodingDesc')}
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary-600 dark:text-terminal-gold mr-3 font-mono">•</span>
            <div>
              <strong className="text-gray-900 dark:text-terminal-gold font-mono">{t('about.solopreneurship')}</strong>
              <span className="text-gray-700 dark:text-terminal-fg font-mono">
                {' '}
                {t('about.solopreneurshipDesc')}
              </span>
            </div>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-terminal-gold font-mono">{t('about.joinJourney')}</h2>
        <p className="text-gray-700 dark:text-terminal-fg leading-relaxed mb-8 font-mono">
          {t('about.joinText')}
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-terminal-gold font-mono">{t('about.connectWithUs')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <a
            href="https://www.facebook.com/groups/diogenesai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl border border-blue-200 dark:border-terminal-gold/30 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            <div className="flex flex-col items-center text-center">
              <svg className="w-12 h-12 mb-3 text-blue-600 dark:text-terminal-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <h3 className="font-semibold text-gray-900 dark:text-terminal-gold font-mono mb-1">Facebook Group</h3>
              <p className="text-sm text-gray-600 dark:text-terminal-fg font-mono">{t('about.joinCommunity')}</p>
            </div>
          </a>

          <a
            href="https://m.me/j/AbbS6ciAcYcqbNBz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl border border-purple-200 dark:border-terminal-gold/30 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            <div className="flex flex-col items-center text-center">
              <svg className="w-12 h-12 mb-3 text-purple-600 dark:text-terminal-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
              </svg>
              <h3 className="font-semibold text-gray-900 dark:text-terminal-gold font-mono mb-1">Facebook Channel</h3>
              <p className="text-sm text-gray-600 dark:text-terminal-fg font-mono">{t('about.chatWithUs')}</p>
            </div>
          </a>

          <a
            href="https://discord.gg/A8YqEQxt"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl border border-indigo-200 dark:border-terminal-gold/30 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            <div className="flex flex-col items-center text-center">
              <svg className="w-12 h-12 mb-3 text-indigo-600 dark:text-terminal-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <h3 className="font-semibold text-gray-900 dark:text-terminal-gold font-mono mb-1">Discord</h3>
              <p className="text-sm text-gray-600 dark:text-terminal-fg font-mono">{t('about.joinDiscord')}</p>
            </div>
          </a>

          <a
            href="https://github.com/DiogenesAI"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl border border-gray-200 dark:border-terminal-gold/30 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            <div className="flex flex-col items-center text-center">
              <svg className="w-12 h-12 mb-3 text-gray-800 dark:text-terminal-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <h3 className="font-semibold text-gray-900 dark:text-terminal-gold font-mono mb-1">GitHub</h3>
              <p className="text-sm text-gray-600 dark:text-terminal-fg font-mono">{t('about.viewProjects')}</p>
            </div>
          </a>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-terminal-gold/30">
          <p className="text-gray-700 dark:text-terminal-fg italic font-mono">
            "The journey of a thousand miles begins with a single step." - Lao Tzu
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

