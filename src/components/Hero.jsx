export default function Hero() {
  return (
    <section id="intro" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-sky-50" />
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-gray-900">
              The danger of misogyny and its ripple effects
            </h2>
            <p className="mt-5 text-lg text-gray-700 leading-relaxed">
              Misogyny is more than individual prejudice—it is a system of beliefs and practices that devalues women and girls. It harms mental health, restricts opportunity, and fuels violence. This page explores those impacts and offers ways to challenge them in everyday life.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1974&auto=format&fit=crop"
              alt="Hands raised together in solidarity"
              className="w-full h-80 object-cover rounded-xl shadow-xl"
              loading="lazy"
            />
            <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-r from-rose-500/15 to-fuchsia-500/15 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
