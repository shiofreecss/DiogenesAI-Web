import { useState } from 'react'

const BinaryImage = ({ title, className = '' }) => {
  const [imageError, setImageError] = useState(false)
  
  // Generate unique binary pattern based on title hash
  const generateBinaryPattern = () => {
    let hash = 0
    for (let i = 0; i < title.length; i++) {
      hash = title.charCodeAt(i) + ((hash << 5) - hash)
    }
    
    // Use hash to seed random but consistent pattern
    const seed = Math.abs(hash)
    const rows = 20
    const cols = 16
    
    return Array.from({length: rows}, (_, i) => {
      // Use seed + row index for consistent pattern
      const rowSeed = (seed + i * 7919) % 2147483647
      return Array.from({length: cols}, (_, j) => {
        const bitSeed = (rowSeed + j * 65537) % 2147483647
        return (bitSeed % 2).toString()
      }).join('')
    })
  }

  const binaryPattern = generateBinaryPattern()
  
  // Use multiple image sources for binary/code theme
  const imageUrls = [
    `https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop&q=80&auto=format`,
    `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&q=80&auto=format`,
    `https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&q=80&auto=format`
  ]
  
  // Select image based on title hash for consistency
  let hash = 0
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash)
  }
  const imageIndex = Math.abs(hash) % imageUrls.length
  const imageUrl = imageUrls[imageIndex]

  if (imageError) {
    // Fallback: Show binary pattern
    return (
      <div className={`w-full h-full bg-gray-900 dark:bg-black flex items-center justify-center p-4 relative ${className}`}>
        <div className="font-mono text-[10px] text-terminal-gold dark:text-terminal-gold leading-tight opacity-90">
          {binaryPattern.map((row, i) => (
            <div key={i} className="whitespace-pre">
              {row}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
    )
  }

  return (
    <div className={`w-full h-full relative ${className}`}>
      <img 
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
        onError={() => setImageError(true)}
        loading="lazy"
      />
      {/* Overlay binary pattern for code aesthetic */}
      <div className="absolute inset-0 bg-gray-900/70 dark:bg-black/70 flex items-center justify-center p-4">
        <div className="font-mono text-[10px] text-terminal-gold dark:text-terminal-gold leading-tight opacity-70">
          {binaryPattern.map((row, i) => (
            <div key={i} className="whitespace-pre">
              {row}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
    </div>
  )
}

export default BinaryImage

