// AI Tools Database
export const aiTools = [
  // Featured Tools
  {
    id: 1,
    name: "ChatGPT",
    slug: "chatgpt",
    category: "ai-chat",
    tags: ["AI Chat", "Writing", "Coding"],
    description: "Trợ lý AI mạnh mẽ từ OpenAI, hỗ trợ hội thoại, viết lách và lập trình với GPT-4.",
    pricing: "FREEMIUM",
    rating: 4.8,
    reviews: 15420,
    featured: true,
    logo: "https://img.icons8.com/color/96/chatgpt.png",
    affiliateLink: "https://chat.openai.com",
    color: "#10a37f"
  },
  {
    id: 2,
    name: "Midjourney",
    slug: "midjourney",
    category: "ai-image",
    tags: ["AI Art", "Image Generation"],
    description: "Tạo hình ảnh nghệ thuật tuyệt đẹp từ văn bản với công nghệ AI tiên tiến nhất.",
    pricing: "PREMIUM",
    rating: 4.9,
    reviews: 8563,
    featured: true,
    logo: "https://img.icons8.com/fluency/96/layers.png",
    affiliateLink: "https://midjourney.com",
    color: "#7c3aed"
  },
  {
    id: 3,
    name: "Claude",
    slug: "claude",
    category: "ai-chat",
    tags: ["AI Chat", "Analysis", "Writing"],
    description: "AI assistant từ Anthropic với khả năng phân tích sâu và đối thoại tự nhiên.",
    pricing: "FREEMIUM",
    rating: 4.7,
    reviews: 6234,
    featured: true,
    logo: "https://img.icons8.com/color/96/bot.png",
    affiliateLink: "https://claude.ai",
    color: "#d4a574"
  },
  {
    id: 4,
    name: "Notion AI",
    slug: "notion-ai",
    category: "ai-productivity",
    tags: ["Productivity", "Writing", "Organization"],
    description: "AI tích hợp trong Notion giúp viết, tóm tắt và tổ chức thông tin hiệu quả.",
    pricing: "PREMIUM",
    rating: 4.6,
    reviews: 4521,
    featured: true,
    logo: "https://img.icons8.com/fluency/96/notion.png",
    affiliateLink: "https://notion.so",
    color: "#000000"
  },

  // AI Video Tools
  {
    id: 5,
    name: "Runway ML",
    slug: "runway-ml",
    category: "ai-video",
    tags: ["Video AI", "Editing", "Generation"],
    description: "Công cụ tạo và chỉnh sửa video bằng AI, hỗ trợ text-to-video và nhiều tính năng sáng tạo.",
    pricing: "FREEMIUM",
    rating: 4.7,
    reviews: 3421,
    featured: false,
    logo: "https://img.icons8.com/fluency/96/video.png",
    affiliateLink: "https://runwayml.com",
    color: "#00d4ff"
  },
  {
    id: 6,
    name: "HeyGen",
    slug: "heygen",
    category: "ai-video",
    tags: ["Video AI", "Avatar", "Text-to-Video"],
    description: "Tạo video chuyên nghiệp với avatar AI như người thật, hỗ trợ 40+ ngôn ngữ.",
    pricing: "FREEMIUM",
    rating: 4.5,
    reviews: 2145,
    featured: false,
    logo: "https://img.icons8.com/fluency/96/video-call.png",
    affiliateLink: "https://heygen.com",
    color: "#ff6b00"
  },

  // AI Image Tools
  {
    id: 7,
    name: "DALL-E 3",
    slug: "dalle-3",
    category: "ai-image",
    tags: ["AI Art", "Image Generation"],
    description: "Công cụ tạo hình ảnh từ văn bản của OpenAI với độ chính xác và chi tiết cao.",
    pricing: "PREMIUM",
    rating: 4.8,
    reviews: 7821,
    featured: false,
    logo: "https://img.icons8.com/fluency/96/image.png",
    affiliateLink: "https://openai.com/dall-e-3",
    color: "#10a37f"
  },
  {
    id: 8,
    name: "Stable Diffusion",
    slug: "stable-diffusion",
    category: "ai-image",
    tags: ["AI Art", "Open Source"],
    description: "Mô hình AI tạo ảnh mã nguồn mở mạnh mẽ, cho phép tùy chỉnh và kiểm soát cao.",
    pricing: "FREE",
    rating: 4.6,
    reviews: 5632,
    featured: false,
    logo: "https://img.icons8.com/fluency/96/picture.png",
    affiliateLink: "https://stability.ai",
    color: "#6366f1"
  },

  // AI Coding Tools
  {
    id: 9,
    name: "GitHub Copilot",
    slug: "github-copilot",
    category: "ai-coding",
    tags: ["Coding", "AI Assistant", "Productivity"],
    description: "Trợ lý lập trình AI giúp viết code nhanh hơn với gợi ý thông minh.",
    pricing: "PREMIUM",
    rating: 4.7,
    reviews: 12456,
    featured: false,
    logo: "https://img.icons8.com/fluency/96/github.png",
    affiliateLink: "https://github.com/features/copilot",
    color: "#000000"
  },
  {
    id: 10,
    name: "Cursor",
    slug: "cursor",
    category: "ai-coding",
    tags: ["Code Editor", "AI", "Development"],
    description: "Code editor được tích hợp AI để lập trình hiệu quả hơn với khả năng tự động hoàn thành code.",
    pricing: "FREEMIUM",
    rating: 4.8,
    reviews: 3421,
    featured: false,
    logo: "https://img.icons8.com/fluency/96/code.png",
    affiliateLink: "https://cursor.sh",
    color: "#3b82f6"
  },

  // AI Marketing Tools
  {
    id: 11,
    name: "Jasper AI",
    slug: "jasper-ai",
    category: "ai-marketing",
    tags: ["Marketing", "Copywriting", "Content"],
    description: "AI copywriting tool giúp tạo nội dung marketing chuyên nghiệp nhanh chóng.",
    pricing: "PREMIUM",
    rating: 4.5,
    reviews: 4521,
    featured: false,
    logo: "https://img.icons8.com/fluency/96/marketing.png",
    affiliateLink: "https://jasper.ai",
    color: "#7c3aed"
  },
  {
    id: 12,
    name: "Copy.ai",
    slug: "copy-ai",
    category: "ai-marketing",
    tags: ["Copywriting", "Marketing", "Content"],
    description: "Tạo nội dung marketing và quảng cáo với AI trong vài giây.",
    pricing: "FREEMIUM",
    rating: 4.4,
    reviews: 3214,
    featured: false,
    logo: "https://img.icons8.com/fluency/96/document.png",
    affiliateLink: "https://copy.ai",
    color: "#10b981"
  },

  // AI Music Tools
  {
    id: 13,
    name: "Suno AI",
    slug: "suno-ai",
    category: "ai-music",
    tags: ["Music", "AI Generation", "Audio"],
    description: "Tạo nhạc và bài hát hoàn chỉnh từ văn bản với AI.",
    pricing: "FREEMIUM",
    rating: 4.6,
    reviews: 2134,
    featured: false,
    logo: "https://img.icons8.com/fluency/96/music.png",
    affiliateLink: "https://suno.ai",
    color: "#ec4899"
  },

  // AI Automation Tools
  {
    id: 14,
    name: "Zapier AI",
    slug: "zapier-ai",
    category: "ai-automation",
    tags: ["Automation", "Workflow", "Integration"],
    description: "Tự động hóa công việc với AI, kết nối hàng ngàn ứng dụng.",
    pricing: "FREEMIUM",
    rating: 4.7,
    reviews: 8934,
    featured: false,
    logo: "https://img.icons8.com/fluency/96/automation.png",
    affiliateLink: "https://zapier.com",
    color: "#ff4a00"
  },

  // AI Design Tools
  {
    id: 15,
    name: "Canva AI",
    slug: "canva-ai",
    category: "ai-design",
    tags: ["Design", "Graphics", "Templates"],
    description: "Thiết kế đồ họa chuyên nghiệp với AI, hàng ngàn template sẵn có.",
    pricing: "FREEMIUM",
    rating: 4.8,
    reviews: 15234,
    featured: false,
    logo: "https://img.icons8.com/fluency/96/canva.png",
    affiliateLink: "https://canva.com",
    color: "#00c4cc"
  },
  {
    id: 16,
    name: "Figma AI",
    slug: "figma-ai",
    category: "ai-design",
    tags: ["UI/UX", "Design", "Collaboration"],
    description: "Công cụ thiết kế giao diện với tính năng AI hỗ trợ design system.",
    pricing: "FREEMIUM",
    rating: 4.9,
    reviews: 12456,
    featured: false,
    logo: "https://img.icons8.com/fluency/96/figma.png",
    affiliateLink: "https://figma.com",
    color: "#a259ff"
  }
];

// Categories for filtering
export const categories = [
  { id: "all", name: "Tất cả AI", icon: "✨" },
  { id: "ai-chat", name: "AI Chat", icon: "💬" },
  { id: "ai-image", name: "AI Image", icon: "🎨" },
  { id: "ai-video", name: "AI Video", icon: "🎬" },
  { id: "ai-coding", name: "AI Coding", icon: "💻" },
  { id: "ai-marketing", name: "AI Marketing", icon: "📢" },
  { id: "ai-music", name: "AI Music", icon: "🎵" },
  { id: "ai-automation", name: "Automation", icon: "⚙️" },
  { id: "ai-design", name: "AI Design", icon: "🎨" },
  { id: "ai-productivity", name: "Productivity", icon: "📊" }
];
