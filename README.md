# DiogenesAI Web - AI Tools & Courses Platform

Trang web chia sẻ công cụ AI và khóa học theo phong cách BenPromptAI.

## 🎨 Tính năng

### 1. **Tools Page** (`/tools`)
- ✨ Danh sách công cụ AI được tuyển chọn
- � Tìm kiếm công cụ theo tên, mô tả, tags
- 🏷️ Lọc theo categories (AI Chat, AI Image, AI Video, AI Coding, etc.)
- ⭐ Hiển thị rating, reviews, pricing
- 🎯 Featured tools section
- 🔗 Affiliate links
- � Dark theme với animations đẹp mắt

### 2. **Courses Page** (`/courses`)
- 📚 Danh sách khóa học AI & ML
- 🔍 Tìm kiếm khóa học
- 🏷️ Lọc theo categories
- 💰 Hiển thị giá, discount
- ⏱️ Thông tin duration, số học viên, số bài học
- 🎓 Certificate badge
- 🎨 Beautiful course cards với thumbnails

### 3. **Design System**
- 🌙 Dark theme with gradient backgrounds
- 💫 Smooth animations & transitions
- 🎨 Modern card-based layouts
- ✨ Hover effects
- 📱 Fully responsive
- 🎯 Premium aesthetics

## 🚀 Cài đặt

```bash
# Clone repository
git clone [your-repo-url]
cd DiogenesAI-Web

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build
```

## 📂 Cấu trúc Project

```
src/
├── components/
│   ├── Layout.jsx           # Main layout với navigation
│   ├── ThemeToggle.jsx      # Dark/Light mode toggle
│   └── LanguageToggle.jsx   # Language selector
├── pages/
│   ├── Home.jsx
│   ├── Tools.jsx            # 🆕 AI Tools listing
│   ├── Courses.jsx          # 🆕 Courses listing
│   ├── Blog.jsx
│   ├── Projects.jsx
│   ├── Knowledge.jsx
│   └── About.jsx
├── data/
│   ├── aiTools.js           # 🆕 AI Tools database
│   └── courses.js           # 🆕 Courses database
├── translations/
│   └── index.js             # Multi-language support
└── App.jsx
```

## 📝 Cách thêm công cụ AI mới

Chỉnh sửa file `src/data/aiTools.js`:

```javascript
{
  id: 17,
  name: "Tool Name",
  slug: "tool-slug",
  category: "ai-chat", // hoặc ai-image, ai-video, etc.
  tags: ["Tag1", "Tag2"],
  description: "Mô tả công cụ...",
  pricing: "FREEMIUM", // hoặc FREE, PREMIUM
  rating: 4.8,
  reviews: 1234,
  featured: true, // hiển thị ở Featured section
  logo: "https://logo-url.png",
  affiliateLink: "https://your-affiliate-link.com",
  color: "#hexcolor"
}
```

## 📚 Cách thêm khóa học mới

Chỉnh sửa file `src/data/courses.js`:

```javascript
{
  id: 11,
  title: "Tên khóa học",
  slug: "course-slug",
  instructor: "Tên giảng viên",
  category: "prompt-engineering", // hoặc business, development, etc.
  tags: ["Tag1", "Tag2"],
  description: "Mô tả khóa học...",
  pricing: "PREMIUM",
  price: 1990000,
  originalPrice: 2990000,
  rating: 4.9,
  students: 1234,
  duration: "12 giờ",
  level: "Beginner to Advanced",
  featured: true,
  thumbnail: "https://image-url.jpg",
  lessons: 45,
  projects: 8,
  certificateIncluded: true,
  affiliateLink: "https://your-affiliate-link.com"
}
```

## 🎨 Categories

### AI Tools Categories:
- `ai-chat` - AI Chat assistants
- `ai-image` - Image generation
- `ai-video` - Video creation
- `ai-coding` - Coding assistants
- `ai-marketing` - Marketing tools
- `ai-music` - Music generation
- `ai-automation` - Automation tools
- `ai-design` - Design tools
- `ai-productivity` - Productivity apps

### Course Categories:
- `prompt-engineering` - Prompt Engineering
- `business` - Business & Productivity
- `machine-learning` - Machine Learning
- `development` - Development
- `content-creation` - Content Creation
- `design` - Design & Art
- `automation` - Automation
- `video` - Video Production
- `data-science` - Data Science

## 🌐 Đa ngôn ngữ

Website hỗ trợ 4 ngôn ngữ:
- 🇻🇳 Tiếng Việt
- 🇺🇸 English
- 🇨🇳 中文
- 🇯🇵 日本語

Để thêm translations, chỉnh sửa `src/translations/index.js`

## 🎯 Navigation

Các trang chính:
- `/` - Trang chủ
- `/tools` - 🆕 Công cụ AI
- `/courses` - 🆕 Khóa học
- `/blog` - Blog
- `/knowledge` - Kiến thức
- `/projects` - Dự án
- `/about` - Giới thiệu

## 🛠️ Tech Stack

- **React** 18 - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Lucide React** - Icons
- **React Markdown** - Markdown rendering

## 📱 Screenshots

### Tools Page
![Tools Page Preview]

### Courses Page
![Courses Page Preview]

## 🎨 Design Inspiration

Thiết kế lấy cảm hứng từ [BenPromptAI](https://www.benpromptai.com/vi/tools):
- Dark theme với gradients
- Card-based layouts
- Smooth animations
- Category filters
- Search functionality
- Premium aesthetics

## 📄 License

MIT License - Feel free to use for your own projects!

## 👨‍💻 Author

**DiogenesAI Team**
- Exploring AI, ML, Vibecoding & Solopreneurship

---

Made with ❤️ by DiogenesAI
