import { useState } from 'react'
import { Menu, X, Rocket, Github, Linkedin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/60 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white shadow-md">
                <Rocket size={18} />
              </div>
              <span className="font-semibold tracking-tight text-slate-900">My Portfolio</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <button onClick={() => scrollTo('hero')} className="text-slate-700 hover:text-slate-900">Home</button>
              <button onClick={() => scrollTo('projects')} className="text-slate-700 hover:text-slate-900">Projects</button>
              <button onClick={() => scrollTo('about')} className="text-slate-700 hover:text-slate-900">About</button>
              <button onClick={() => scrollTo('contact')} className="text-slate-700 hover:text-slate-900">Contact</button>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-white"> <Github size={16} /> GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-xs font-medium text-white hover:bg-black"> <Linkedin size={16} /> LinkedIn</a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden rounded-xl border border-slate-200 bg-white/70 p-2 text-slate-700">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/20 px-6 py-4">
              <div className="flex flex-col gap-3">
                <button onClick={() => scrollTo('hero')} className="py-2 text-left text-slate-700">Home</button>
                <button onClick={() => scrollTo('projects')} className="py-2 text-left text-slate-700">Projects</button>
                <button onClick={() => scrollTo('about')} className="py-2 text-left text-slate-700">About</button>
                <button onClick={() => scrollTo('contact')} className="py-2 text-left text-slate-700">Contact</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
