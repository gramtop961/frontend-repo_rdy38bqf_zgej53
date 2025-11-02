import { motion } from 'framer-motion'
import { ExternalLink, Code2, Layout, Layers } from 'lucide-react'

const projects = [
  {
    title: 'Interactive 3D Landing',
    desc: 'A playful product site blending Spline scenes with buttery-smooth parallax.',
    tags: ['React', 'Spline', 'Framer Motion'],
    icon: Layers,
    link: '#'
  },
  {
    title: 'SaaS Dashboard',
    desc: 'Data-dense, minimal UI with focus on clarity, contrast, and speed.',
    tags: ['React', 'Tailwind', 'Charts'],
    icon: Layout,
    link: '#'
  },
  {
    title: 'Design System Kit',
    desc: 'Scalable component library with tokens, themes, and accessibility baked in.',
    tags: ['TypeScript', 'Storybook', 'A11y'],
    icon: Code2,
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Selected Work</h2>
          <p className="mt-3 text-slate-600">A small collection of recent projects focused on interaction, performance, and polish.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('#') ? undefined : '_blank'}
              rel="noreferrer"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform will-change-transform hover:-translate-y-1">
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-indigo-500/10 blur-2xl transition-opacity group-hover:opacity-100" />

              <div className="relative flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 text-white shadow">
                  {p.icon ? <p.icon size={18} /> : null}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <ExternalLink className="ml-auto h-4 w-4 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-slate-200 bg-white/70 px-2.5 py-1 text-xs text-slate-600">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
