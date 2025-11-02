import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.7])

  return (
    <section id="hero" className="relative h-[100svh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 px-4 py-1 text-xs font-medium text-slate-700 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Available for freelance work
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          Modern, Interactive Portfolios
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-5 max-w-2xl text-balance text-base text-slate-600 sm:text-lg">
          I craft clean, high-performance web experiences with playful 3D details and smooth parallax interactions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 hover:bg-black">
            View Projects
          </a>
          <a href="#contact" className="rounded-xl border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 backdrop-blur hover:bg-white">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
