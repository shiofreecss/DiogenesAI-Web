import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import Knowledge from './pages/Knowledge'
import Post from './pages/Post'
import About from './pages/About'
import Tools from './pages/Tools'
import Courses from './pages/Courses'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/post/:slug" element={<Post />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Layout>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App

