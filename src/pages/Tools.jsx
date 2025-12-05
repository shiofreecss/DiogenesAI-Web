import { useState, useMemo } from 'react';
import { aiTools, categories } from '../data/aiTools';
import { Search, Star, ExternalLink, TrendingUp } from 'lucide-react';

const Tools = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredTools = useMemo(() => {
        return aiTools.filter(tool => {
            const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    const featuredTools = filteredTools.filter(tool => tool.featured);
    const allTools = filteredTools;

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
                            <TrendingUp className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">Khám phá AI</span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                        Khám phá các trang web<br />và công cụ AI tốt nhất
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-center text-slate-300 max-w-3xl mx-auto mb-12">
                        Danh sách các công cụ AI hàng đầu được tuyển chọn kỹ lưỡng giúp bạn tăng tốc quy trình làm việc của bạn.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm công cụ AI..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                            />
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                <kbd className="px-3 py-1.5 text-xs font-semibold text-slate-400 bg-slate-700/50 border border-slate-600 rounded-lg">
                                    ⌘K
                                </kbd>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Filter */}
            <div className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium whitespace-nowrap transition-all ${selectedCategory === category.id
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                                        : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50'
                                    }`}
                            >
                                <span>{category.icon}</span>
                                <span className="text-sm">{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Featured Tools */}
                {featuredTools.length > 0 && selectedCategory === 'all' && !searchQuery && (
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-white">✨ AI Nổi Bật Nhất</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {featuredTools.map((tool) => (
                                <ToolCard key={tool.id} tool={tool} featured />
                            ))}
                        </div>
                    </section>
                )}

                {/* All Tools */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-white">
                                {selectedCategory === 'all' ? 'Tất Cả AI' : categories.find(c => c.id === selectedCategory)?.name}
                            </h2>
                        </div>
                        <div className="text-sm text-slate-400">
                            {filteredTools.length} công cụ
                        </div>
                    </div>

                    {filteredTools.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-white mb-2">Không tìm thấy công cụ nào</h3>
                            <p className="text-slate-400">Thử tìm kiếm với từ khóa khác hoặc chọn category khác</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {allTools.map((tool) => (
                                <ToolCard key={tool.id} tool={tool} />
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

// Tool Card Component
const ToolCard = ({ tool, featured = false }) => {
    return (
        <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative p-6">
                {/* Logo & Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 p-2 flex items-center justify-center border border-slate-600 group-hover:scale-110 transition-transform">
                            <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors">
                                {tool.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                                {tool.tags.slice(0, 1).map((tag, i) => (
                                    <span key={i} className="text-xs text-slate-400">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Pricing Badge */}
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-lg ${tool.pricing === 'FREE'
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                            : tool.pricing === 'FREEMIUM'
                                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                        }`}>
                        {tool.pricing}
                    </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {tool.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tool.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg border border-slate-600/50">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="flex items-center gap-3">
                        {/* Rating */}
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < Math.floor(tool.rating)
                                            ? 'fill-yellow-400 text-yellow-400'
                                            : 'fill-slate-700 text-slate-700'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Reviews count */}
                        <span className="text-xs text-slate-400">
                            {tool.reviews.toLocaleString()}
                        </span>
                    </div>

                    {/* Visit Button */}
                    <a
                        href={tool.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors group-hover:shadow-lg group-hover:shadow-blue-500/50"
                    >
                        <span>Visit</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Tools;
