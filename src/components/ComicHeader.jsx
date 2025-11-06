import { BookOpen, Users } from 'lucide-react';

export default function ComicHeader() {
  return (
    <header className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BookOpen className="h-8 w-8" />
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Not Just Jokes: A Mini Comic About Everyday Misogyny
          </h1>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium">
          <Users className="h-5 w-5" />
          <span>By Aisha Khan & Leo Martinez</span>
        </div>
      </div>
    </header>
  );
}
