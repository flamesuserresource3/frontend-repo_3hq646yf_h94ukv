import HeroCover from './components/HeroCover';
import AnimatedComic from './components/AnimatedComic';
import Description from './components/Description';
import Signature from './components/Signature';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50 text-gray-900">
      <HeroCover />
      <main>
        <AnimatedComic />
        <Description />
        <Signature />
      </main>
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Not Just Jokes</p>
          <p className="mt-2 sm:mt-0">An animated mini comic promoting respect and equality.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
