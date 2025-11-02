import { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const Item = ({ href, children }) => (
    <a
      href={href}
      className="px-3 py-2 rounded-md text-sm font-medium text-neutral-200 hover:text-white hover:bg-neutral-800/70"
      onClick={() => setOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a href="#home" className="text-white font-semibold tracking-tight">MyPortfolio</a>

          <nav className="hidden md:flex items-center gap-1">
            <Item href="#home">Home</Item>
            <Item href="#studio">3D Studio</Item>
            <Item href="#projects">Projects</Item>
            <Item href="#contact">Contact</Item>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800/70">
              <Github size={18} />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800/70">
              <Linkedin size={18} />
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:text-white hover:bg-neutral-800/70"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-800/80 bg-neutral-950">
          <div className="px-4 py-3 space-y-1">
            <Item href="#home">Home</Item>
            <Item href="#studio">3D Studio</Item>
            <Item href="#projects">Projects</Item>
            <Item href="#contact">Contact</Item>
            <div className="flex items-center gap-2 pt-2">
              <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800/70">
                <Github size={18} />
              </a>
              <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800/70">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
