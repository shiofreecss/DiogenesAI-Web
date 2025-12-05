import { useState, useMemo } from 'react';
import { courses, courseCategories } from '../data/courses';
import { Search, Star, Clock, Users, BookOpen, Award, TrendingUp, Tag } from 'lucide-react';

const Courses = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredCourses = useMemo(() => {
        return courses.filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    const featuredCourses = filteredCourses.filter(course => course.featured);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    {/* Badge */}
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full">
                            <BookOpen className="w-4 h-4 text-purple-400" />
                            <span className="text-sm text-purple-300">Học tập AI</span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 bg-clip-text text-transparent">
                        Khóa học AI & ML<br />chất lượng cao
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-center text-slate-300 max-w-3xl mx-auto mb-12">
                        Nâng cao kỹ năng với các khóa học AI được thiết kế bởi chuyên gia. Từ cơ bản đến nâng cao.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm khóa học..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
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
                        {courseCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium whitespace-nowrap transition-all ${selectedCategory === category.id
                                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
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
                {/* Featured Courses */}
                {featuredCourses.length > 0 && selectedCategory === 'all' && !searchQuery && (
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-white">🔥 Khóa học nổi bật</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {featuredCourses.map((course) => (
                                <CourseCard key={course.id} course={course} featured />
                            ))}
                        </div>
                    </section>
                )}

                {/* All Courses */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-white">
                                {selectedCategory === 'all' ? 'Tất cả khóa học' : courseCategories.find(c => c.id === selectedCategory)?.name}
                            </h2>
                        </div>
                        <div className="text-sm text-slate-400">
                            {filteredCourses.length} khóa học
                        </div>
                    </div>

                    {filteredCourses.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">📚</div>
                            <h3 className="text-xl font-semibold text-white mb-2">Không tìm thấy khóa học nào</h3>
                            <p className="text-slate-400">Thử tìm kiếm với từ khóa khác hoặc chọn category khác</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCourses.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

// Course Card Component
const CourseCard = ({ course, featured = false }) => {
    const discount = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);

    return (
        <div className={`group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 ${featured ? 'lg:col-span-1' : ''}`}>
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                {/* Discount Badge */}
                {discount > 0 && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-lg shadow-lg">
                        -{discount}%
                    </div>
                )}

                {/* Level Badge */}
                <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-lg">
                        {course.level}
                    </span>
                </div>
            </div>

            <div className="relative p-6">
                {/* Title */}
                <h3 className="font-bold text-white text-xl mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {course.title}
                </h3>

                {/* Instructor */}
                <p className="text-sm text-slate-400 mb-3">
                    Bởi {course.instructor}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {course.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="flex items-center gap-1.5 text-slate-300">
                        <Clock className="w-4 h-4 text-purple-400" />
                        <span className="text-xs">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                        <Users className="w-4 h-4 text-purple-400" />
                        <span className="text-xs">{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                        <BookOpen className="w-4 h-4 text-purple-400" />
                        <span className="text-xs">{course.lessons} bài</span>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="flex items-center gap-1 px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg border border-slate-600/50">
                            <Tag className="w-3 h-3" />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-white">{course.rating}</span>
                        </div>
                        <span className="text-xs text-slate-400">
                            ({course.students.toLocaleString()})
                        </span>
                    </div>

                    {/* Certificate */}
                    {course.certificateIncluded && (
                        <div className="flex items-center gap-1 text-purple-400">
                            <Award className="w-4 h-4" />
                            <span className="text-xs font-medium">Certificate</span>
                        </div>
                    )}
                </div>

                {/* Price & CTA */}
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                    <div className="flex items-end justify-between">
                        <div>
                            <div className="text-2xl font-bold text-white">
                                {course.price.toLocaleString('vi-VN')}đ
                            </div>
                            {course.originalPrice > course.price && (
                                <div className="text-sm text-slate-400 line-through">
                                    {course.originalPrice.toLocaleString('vi-VN')}đ
                                </div>
                            )}
                        </div>

                        <a
                            href={course.affiliateLink}
                            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-sm font-semibold rounded-xl transition-all group-hover:shadow-lg group-hover:shadow-purple-500/50"
                        >
                            Đăng ký ngay
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
