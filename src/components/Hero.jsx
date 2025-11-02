import { useState } from 'react';
import Spline from '@splinetool/react-spline';

const SCENE_URL = 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode';

export default function Hero() {
  const [interact, setInteract] = useState(true);

  return (
    <section id="home" className="relative bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              Modern • Minimal • 3D-first
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              A calm, professional portfolio with live 3D
            </h1>
            <p className="text-neutral-300 max-w-prose">
              Refined color palette, zero motion for maximal focus, and fully interactive 3D embeds. Drag, pan and explore the models while browsing.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-emerald-400">
                View Projects
              </a>
              <button onClick={() => setInteract((v) => !v)} className="inline-flex items-center justify-center rounded-md border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-800">
                {interact ? 'Lock 3D' : 'Unlock 3D'}
              </button>
            </div>
            <ul className="text-sm text-neutral-400 space-y-1">
              <li>• Thoughtful dark UI with emerald accents</li>
              <li>• No animations or motion effects</li>
              <li>• Multiple interactive 3D elements</li>
            </ul>
          </div>

          <div className="relative aspect-[4/3] w-full rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden">
            <div className={interact ? 'pointer-events-auto absolute inset-0' : 'pointer-events-none absolute inset-0'}>
              <Spline scene={SCENE_URL} style={{ width: '100%', height: '100%' }} />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent">
              <div className="flex items-center justify-between text-xs text-neutral-300">
                <span>Drag to orbit • Scroll to zoom</span>
                <span className="text-emerald-300">Interactive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
