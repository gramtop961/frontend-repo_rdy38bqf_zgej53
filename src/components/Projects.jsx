export default function Projects() {
  const items = [
    {
      title: 'Realtime Dashboard',
      desc: 'A clean analytics dashboard with charts, data grid and role-based access.',
      tags: ['React', 'Tailwind', 'API'],
      link: '#',
    },
    {
      title: 'Design System',
      desc: 'Modular UI kit with accessible primitives and dark mode first approach.',
      tags: ['Design', 'Tokens', 'Docs'],
      link: '#',
    },
    {
      title: '3D Showcase',
      desc: 'A gallery of interactive 3D scenes embedded with Spline.',
      tags: ['3D', 'Spline', 'Web'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="bg-neutral-950 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Projects</h2>
          <p className="text-neutral-400">A selection of focused, production-quality work.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <a key={p.title} href={p.link} className="group block rounded-xl border border-neutral-800 bg-neutral-900 p-5 hover:border-emerald-500/40">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-medium">{p.title}</h3>
                <span className="text-[10px] text-emerald-300 border border-emerald-500/30 bg-emerald-500/10 rounded px-2 py-0.5">Case Study</span>
              </div>
              <p className="mt-2 text-sm text-neutral-400">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs text-neutral-300 border border-neutral-700 rounded px-2 py-0.5">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
