import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Studio from './components/Studio';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar />
      <main>
        <Hero />
        <Studio />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
