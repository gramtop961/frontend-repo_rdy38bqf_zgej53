export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-950 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Get in touch</h2>
          <p className="text-neutral-400">Have a question or a project in mind? Let’s talk.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <form className="lg:col-span-2 rounded-xl border border-neutral-800 bg-neutral-900 p-6 space-y-4" action="mailto:hello@example.com" method="post">
            <div>
              <label className="block text-sm text-neutral-300 mb-1" htmlFor="name">Name</label>
              <input id="name" name="name" className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-neutral-300 mb-1" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="you@domain.com" />
            </div>
            <div>
              <label className="block text-sm text-neutral-300 mb-1" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Tell me about your project" />
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-emerald-400" type="submit">Send Email</button>
              <a href="#home" className="text-sm text-neutral-300 hover:text-white">Back to top</a>
            </div>
          </form>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <h3 className="text-white font-medium">Availability</h3>
            <p className="mt-2 text-neutral-400 text-sm">I’m currently open for freelance projects and full‑time opportunities. Based in GMT, working remotely worldwide.</p>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                <dt className="text-neutral-400">Email</dt>
                <dd className="text-neutral-200">hello@example.com</dd>
              </div>
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                <dt className="text-neutral-400">Location</dt>
                <dd className="text-neutral-200">Remote • GMT</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-neutral-400">Services</dt>
                <dd className="text-neutral-200">Web • UI • 3D</dd>
              </div>
            </dl>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-neutral-500">© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
      </div>
    </section>
  );
}
