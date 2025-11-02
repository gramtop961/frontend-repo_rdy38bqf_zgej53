import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(60%_80%_at_50%_-20%,#e0e7ff_0%,rgba(255,255,255,0)_60%)]">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
