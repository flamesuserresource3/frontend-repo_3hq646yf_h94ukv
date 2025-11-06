import Header from './components/Header';
import Hero from './components/Hero';
import Effects from './components/Effects';
import CallToAction from './components/CallToAction';
import Resources from './components/Resources';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Effects />
        <CallToAction />
        <Resources />
      </main>
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Breaking the Bias</p>
          <p className="mt-2 sm:mt-0">Built for education and advocacy.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
