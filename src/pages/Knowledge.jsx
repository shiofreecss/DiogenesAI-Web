import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import { useTranslation } from '../hooks/useTranslation'
import BinaryImage from '../components/BinaryImage'

const Knowledge = () => {
    const { t } = useTranslation()

    const categories = [
        {
            id: 'ml',
            title: t('knowledge.ml'),
            tags: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Reinforcement Learning', 'Big Data', 'Algorithms'],
            icon: '🤖'
        },
        {
            id: 'aiModels',
            title: t('knowledge.aiModels'),
            tags: ['AI', 'ChatGPT', 'LLM', 'VLM', 'Fine-tuning', 'Deepfake'],
            icon: '🧠'
        },
        {
            id: 'vibecoding',
            title: t('knowledge.vibecoding'),
            tags: ['Vibecoding', 'Debugging', 'Coffee', 'Mechanical Keyboards', 'Dark Mode', 'Developer', 'Gear'],
            icon: '✨'
        },
        {
            id: 'aiTips',
            title: t('knowledge.aiTips'),
            tags: ['Tips', 'Art', 'Prompt Engineering', 'Design', 'Video', '3D', 'Technology'],
            icon: '💡'
        },
        {
            id: 'solopreneur',
            title: t('knowledge.solopreneur'),
            tags: ['Solopreneurship', 'Business', 'Branding', 'Remote Work', 'Self Discipline', 'Mindset', 'Career', 'Future of Work'],
            icon: '🚀'
        }
    ]

    const getPostsByCategory = (categoryTags) => {
        return posts.filter(post =>
            post.tags.some(tag => categoryTags.includes(tag))
        )
    }

    return (
        <div className="font-mono min-h-screen bg-gray-50 dark:bg-terminal-bg">
            {/* Header */}
            <section className="bg-white dark:bg-terminal-bg border-b border-gray-200 dark:border-terminal-gold/30 pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-terminal-gold font-mono">
                        {t('knowledge.title')}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-terminal-fg max-w-2xl mx-auto font-mono">
                        {t('knowledge.subtitle')}
                    </p>
                </div>
            </section>

            {/* Categories */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-16">
                    {categories.map((category) => {
                        const categoryPosts = getPostsByCategory(category.tags)

                        if (categoryPosts.length === 0) return null

                        return (
                            <section key={category.id} id={category.id}>
                                <div className="flex items-center gap-4 mb-8 border-b border-gray-200 dark:border-terminal-gold/30 pb-4">
                                    <span className="text-4xl">{category.icon}</span>
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-terminal-gold font-mono">
                                        {category.title}
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {categoryPosts.map((post) => (
                                        <Link
                                            key={post.slug}
                                            to={`/post/${post.slug}`}
                                            className="bg-white dark:bg-gray-900 rounded-xl shadow-md dark:shadow-terminal-gold/20 hover:shadow-xl transition-shadow overflow-hidden group border border-gray-200 dark:border-terminal-gold/30 flex flex-col"
                                        >
                                            <div className="h-48 relative overflow-hidden">
                                                <BinaryImage title={post.title} />
                                            </div>
                                            <div className="p-6 flex-grow flex flex-col">
                                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                                    {post.tags.slice(0, 3).map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="text-xs px-2 py-1 bg-primary-100 dark:bg-terminal-gold/20 text-primary-700 dark:text-terminal-gold rounded-full font-mono border border-primary-300 dark:border-terminal-gold/50"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-terminal-gold group-hover:text-primary-600 dark:group-hover:text-terminal-gold transition-colors font-mono line-clamp-2">
                                                    {post.title}
                                                </h3>
                                                <p className="text-gray-600 dark:text-terminal-fg text-sm mb-4 line-clamp-3 font-mono flex-grow">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex items-center text-sm text-gray-500 dark:text-terminal-fg/70 font-mono mt-auto">
                                                    <span>{post.date}</span>
                                                    <span className="mx-2">•</span>
                                                    <span>{post.readTime} min read</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Knowledge
