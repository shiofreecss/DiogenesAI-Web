import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import { useTranslation } from '../hooks/useTranslation'
import BinaryImage from '../components/BinaryImage'
import { Brain, Code, Lightbulb, Rocket, GraduationCap } from 'lucide-react'

const Knowledge = () => {
    const { t } = useTranslation()

    const categories = [
        {
            id: 'ml',
            title: t('knowledge.ml'),
            tags: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Reinforcement Learning', 'Big Data', 'Algorithms'],
            icon: Brain,
            color: 'blue'
        },
        {
            id: 'aiModels',
            title: t('knowledge.aiModels'),
            tags: ['AI', 'ChatGPT', 'LLM', 'VLM', 'Fine-tuning', 'Deepfake'],
            icon: GraduationCap,
            color: 'purple'
        },
        {
            id: 'vibecoding',
            title: t('knowledge.vibecoding'),
            tags: ['Vibecoding', 'Debugging', 'Coffee', 'Mechanical Keyboards', 'Dark Mode', 'Developer', 'Gear'],
            icon: Code,
            color: 'pink'
        },
        {
            id: 'aiTips',
            title: t('knowledge.aiTips'),
            tags: ['Tips', 'Art', 'Prompt Engineering', 'Design', 'Video', '3D', 'Technology'],
            icon: Lightbulb,
            color: 'orange'
        },
        {
            id: 'solopreneur',
            title: t('knowledge.solopreneur'),
            tags: ['Solopreneurship', 'Business', 'Branding', 'Remote Work', 'Self Discipline', 'Mindset', 'Career', 'Future of Work'],
            icon: Rocket,
            color: 'green'
        }
    ]

    const getPostsByCategory = (categoryTags) => {
        return posts.filter(post =>
            post.tags.some(tag => categoryTags.includes(tag))
        )
    }

    const getColorClasses = (color) => {
        const colors = {
            blue: 'from-blue-500 to-blue-600 shadow-blue-500/50',
            purple: 'from-purple-500 to-purple-600 shadow-purple-500/50',
            pink: 'from-pink-500 to-pink-600 shadow-pink-500/50',
            orange: 'from-orange-500 to-orange-600 shadow-orange-500/50',
            green: 'from-green-500 to-green-600 shadow-green-500/50'
        }
        return colors[color] || colors.blue
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    {/* Badge */}
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full">
                            <Brain className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">Knowledge Base</span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                        {t('knowledge.title')}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-center text-slate-300 max-w-3xl mx-auto">
                        {t('knowledge.subtitle')}
                    </p>
                </div>
            </div>

            {/* Categories */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-16">
                    {categories.map((category) => {
                        const categoryPosts = getPostsByCategory(category.tags)
                        const IconComponent = category.icon

                        if (categoryPosts.length === 0) return null

                        return (
                            <section key={category.id} id={category.id}>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(category.color)} rounded-xl flex items-center justify-center shadow-lg`}>
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white">
                                        {category.title}
                                    </h2>
                                    <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categoryPosts.map((post) => (
                                        <Link
                                            key={post.slug}
                                            to={`/post/${post.slug}`}
                                            className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 flex flex-col"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                            <div className="h-48 relative overflow-hidden">
                                                <BinaryImage title={post.title} />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                                            </div>

                                            <div className="relative p-6 flex-grow flex flex-col">
                                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                                    {post.tags.slice(0, 3).map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                                                    {post.title}
                                                </h3>

                                                <p className="text-slate-300 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
                                                    {post.excerpt}
                                                </p>

                                                <div className="flex items-center text-sm text-slate-400 mt-auto">
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
