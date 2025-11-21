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

