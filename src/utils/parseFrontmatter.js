export function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)
  
  if (!match) {
    return { metadata: {}, content }
  }
  
  const frontmatter = match[1]
  const markdown = match[2]
  
  const metadata = {}
  const lines = frontmatter.split('\n')
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) continue
    
    const key = line.substring(0, colonIndex).trim()
    let value = line.substring(colonIndex + 1).trim()
    
    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    
    // Handle arrays (tags) - check if it's a comma-separated list
    if (key === 'tags' && value.includes(',')) {
      metadata[key] = value.split(',').map(item => item.trim())
    } else {
      // Try to parse as number if it looks like one
      if (!isNaN(value) && value.trim() !== '') {
        metadata[key] = Number(value)
      } else {
        metadata[key] = value
      }
    }
  }
  
  return { metadata, content: markdown }
}

