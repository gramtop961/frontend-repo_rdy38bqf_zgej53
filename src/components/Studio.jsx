import { useState } from 'react';
import Spline from '@splinetool/react-spline';

const SCENE_URL = 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode';

function Card({ title, children, onFocus, focused }) {
  return (
    <div className={`relative w-full rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden ${focused ? 'ring-2 ring-emerald-500' : ''}`}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-neutral-900/80">
        <h3 className="text-sm font-medium text-neutral-200">{title}</h3>
        <button onClick={onFocus} className="text-xs text-emerald-300 hover:text-emerald-200">{focused ? 'Unfocus' : 'Focus'}</button>
      </div>
      <div className="relative aspect-[4/3]">
        {children}
      </div>
    </div>
  );
}

export default function Studio() {
  const [focus, setFocus] = useState('');

  return (
    <section id="studio" className="relative bg-neutral-950 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">3D Studio</h2>
            <p className="text-neutral-400">Multiple interactive embeds to explore different angles and compositions.</p>
          </div>
        </div>

        <div className={`grid gap-6 ${focus ? 'lg:grid-cols-3' : 'lg:grid-cols-3'}`}>
          <div className={`${focus && focus !== 'A' ? 'hidden lg:block' : ''} ${focus === 'A' ? 'lg:col-span-3' : ''}`}>
            <Card title="Primary Model • Perspective A" onFocus={() => setFocus(focus === 'A' ? '' : 'A')} focused={focus === 'A'}>
              <Spline scene={SCENE_URL} style={{ width: '100%', height: '100%' }} />
            </Card>
          </div>

          <div className={`${focus && focus !== 'B' ? 'hidden lg:block' : ''} ${focus === 'B' ? 'lg:col-span-3' : ''}`}>
            <Card title="Primary Model • Perspective B" onFocus={() => setFocus(focus === 'B' ? '' : 'B')} focused={focus === 'B'}>
              <Spline scene={SCENE_URL} style={{ width: '100%', height: '100%' }} />
            </Card>
          </div>

          <div className={`${focus && focus !== 'C' ? 'hidden lg:block' : ''} ${focus === 'C' ? 'lg:col-span-3' : ''}`}>
            <Card title="Detail • Close-up" onFocus={() => setFocus(focus === 'C' ? '' : 'C')} focused={focus === 'C'}>
              <Spline scene={SCENE_URL} style={{ width: '100%', height: '100%' }} />
            </Card>
          </div>
        </div>

        <div className="mt-6 text-xs text-neutral-400">
          Tip: click Focus to enlarge a view without leaving the page. All canvases are fully interactive.
        </div>
      </div>
    </section>
  );
}
