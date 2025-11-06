import ComicHeader from './components/ComicHeader';
import ComicGrid from './components/ComicGrid';
import Moral from './components/Moral';
import AuthorsNote from './components/AuthorsNote';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50 text-gray-900">
      <ComicHeader />
      <main>
        <ComicGrid />
        <Moral />
        <AuthorsNote />
      </main>
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Not Just Jokes</p>
          <p className="mt-2 sm:mt-0">A classroom-ready mini comic promoting respect and equality.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
