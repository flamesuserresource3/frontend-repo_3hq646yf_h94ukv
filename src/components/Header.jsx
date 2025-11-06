import { BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-sm">
            <BookOpen className="h-5 w-5" />
          </span>
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-gray-900">
              Breaking the Bias
            </h1>
            <p className="text-sm text-gray-600">A blog on dismantling misogyny</p>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
          <a href="#intro" className="hover:text-gray-900">Intro</a>
          <a href="#effects" className="hover:text-gray-900">Effects</a>
          <a href="#action" className="hover:text-gray-900">What You Can Do</a>
          <a href="#resources" className="hover:text-gray-900">Resources</a>
        </nav>
      </div>
    </header>
  );
}
