import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white" />
      <div className="relative mx-auto max-w-6xl px-6 h-full flex items-end pb-8">
        <div className="backdrop-blur-sm bg-white/70 rounded-lg p-4 sm:p-6 shadow ring-1 ring-black/5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Not Just Jokes — A Mini Comic About Everyday Misogyny
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-700">
            Created by Joseph Victor S and Andrea Joya Renata
          </p>
        </div>
      </div>
    </section>
  );
}
