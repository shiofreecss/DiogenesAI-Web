import { projects } from '../data/projects'
import { useTranslation } from '../hooks/useTranslation'
import BinaryImage from '../components/BinaryImage'

const Projects = () => {
    const { t } = useTranslation()

    return (
        <div className="font-mono min-h-screen bg-gray-50 dark:bg-terminal-bg">
            {/* Header */}
            <section className="bg-white dark:bg-terminal-bg border-b border-gray-200 dark:border-terminal-gold/30 pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-terminal-gold font-mono">
                        {t('projects.title')}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-terminal-fg max-w-2xl mx-auto font-mono">
                        {t('projects.subtitle')}
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white dark:bg-gray-900 rounded-xl shadow-md dark:shadow-terminal-gold/20 overflow-hidden border border-gray-200 dark:border-terminal-gold/30 flex flex-col"
                            >
                                <div className="h-48 relative overflow-hidden bg-gray-200 dark:bg-gray-800">
                                    {/* Use BinaryImage as placeholder if no image, or actual image if available */}
                                    <BinaryImage title={project.title} />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-2 py-1 bg-primary-100 dark:bg-terminal-gold/20 text-primary-700 dark:text-terminal-gold rounded-full font-mono border border-primary-300 dark:border-terminal-gold/50"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-terminal-gold font-mono">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-terminal-fg text-sm mb-6 font-mono flex-grow">
                                        {project.description}
                                    </p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-center bg-primary-600 dark:bg-terminal-gold text-white dark:text-terminal-bg px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 dark:hover:bg-terminal-gold/80 transition-colors font-mono"
                                    >
                                        {t('projects.viewProject')}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
