import { motion, useScroll, useTransform } from 'framer-motion'

export default function About() {
  const { scrollYProgress } = useScroll({
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div style={{ y }} className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About Me</h2>
            <p className="mt-4 max-w-xl text-slate-600">
              I’m a front‑end engineer and designer focused on crafting immersive web experiences. My
              work blends modern aesthetics, performance, and delightful micro‑interactions.
            </p>
            <p className="mt-3 max-w-xl text-slate-600">
              From 3D hero scenes to subtle parallax, I build interfaces that feel alive while staying
              accessible and fast.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
              <div className="rounded-xl border border-slate-200 bg-white/70 p-4">
                <div className="text-2xl font-bold text-slate-900">5+</div>
                <div className="mt-1 text-slate-600">Years</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white/70 p-4">
                <div className="text-2xl font-bold text-slate-900">30+</div>
                <div className="mt-1 text-slate-600">Projects</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white/70 p-4">
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="mt-1 text-slate-600">Passion</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-blue-50 p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.15)_0%,rgba(255,255,255,0)_60%)]" />
              <div className="relative grid h-full place-items-center rounded-xl bg-white/60 backdrop-blur">
                <div className="text-center">
                  <div className="text-xs font-medium tracking-wide text-indigo-600">Focus</div>
                  <div className="mt-2 text-2xl font-semibold text-slate-900">Design + Engineering</div>
                  <p className="mt-2 max-w-sm text-sm text-slate-600">A balanced approach that marries delightful visuals with robust, maintainable code bases.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
