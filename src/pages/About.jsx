import { useTranslation } from '../hooks/useTranslation'
import { Sparkles, Code, Briefcase, Users, MessageCircle, Github } from 'lucide-react'

const About = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">About Us</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
            {t('about.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-center text-slate-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission Section */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">
                {t('about.mission')}
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                {t('about.missionText')}
              </p>
            </div>
          </div>
        </div>

        {/* What We Cover */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            {t('about.whatWeCover')}
          </h2>

          <div className="space-y-6">
            {/* AI & ML */}
            <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t('about.aiMl')}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {t('about.aiMlDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Vibecoding */}
            <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t('about.vibecoding')}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {t('about.vibecodingDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Solopreneurship */}
            <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-pink-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/50">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t('about.solopreneurship')}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {t('about.solopreneurshipDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Journey */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t('about.joinJourney')}
          </h2>
          <p className="text-slate-300 leading-relaxed text-lg">
            {t('about.joinText')}
          </p>
        </div>

        {/* Connect With Us */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">
            {t('about.connectWithUs')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Facebook Group */}
            <a
              href="https://www.facebook.com/groups/diogenesai"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative flex flex-col items-center text-center">
                <svg className="w-12 h-12 mb-3 text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <h3 className="font-bold text-white mb-1">Facebook</h3>
                <p className="text-sm text-slate-400">{t('about.joinCommunity')}</p>
              </div>
            </a>

            {/* Messenger */}
            <a
              href="https://m.me/j/AbbS6ciAcYcqbNBz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative flex flex-col items-center text-center">
                <MessageCircle className="w-12 h-12 mb-3 text-purple-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white mb-1">Messenger</h3>
                <p className="text-sm text-slate-400">{t('about.chatWithUs')}</p>
              </div>
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/A8YqEQxt"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-indigo-500/50 transition-all hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative flex flex-col items-center text-center">
                <svg className="w-12 h-12 mb-3 text-indigo-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                <h3 className="font-bold text-white mb-1">Discord</h3>
                <p className="text-sm text-slate-400">{t('about.joinDiscord')}</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/DiogenesAI"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all hover:shadow-2xl hover:shadow-slate-500/20 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative flex flex-col items-center text-center">
                <Github className="w-12 h-12 mb-3 text-slate-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white mb-1">GitHub</h3>
                <p className="text-sm text-slate-400">{t('about.viewProjects')}</p>
              </div>
            </a>
          </div>
        </div>

        {/* Quote */}
        <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl"></div>
          <div className="relative">
            <p className="text-slate-300 italic text-lg text-center">
              "The journey of a thousand miles begins with a single step." - Lao Tzu
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
