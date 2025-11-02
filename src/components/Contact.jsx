import { motion } from 'framer-motion'
import { Mail, Send, Download } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let’s build something</h2>
          <p className="mt-3 text-slate-600">Have an idea in mind? I’d love to hear about it and explore how we can bring it to life.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          action="mailto:hello@example.com"
          method="post"
          encType="text/plain"
          className="mx-auto mt-10 max-w-2xl space-y-4 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-medium text-slate-600">Name</label>
              <input required type="text" name="name" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-0 transition focus:border-indigo-400" />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">Email</label>
              <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-indigo-400" />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600">Message</label>
            <textarea required name="message" rows={5} className="mt-1 w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-indigo-400" />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-black">
              <Send size={16} /> Send Message
            </button>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <Download size={16} /> Download Resume
            </a>
            <a href="mailto:hello@example.com" className="ml-auto inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
              <Mail size={16} /> hello@example.com
            </a>
          </div>
        </motion.form>

        <p className="mt-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  )
}
