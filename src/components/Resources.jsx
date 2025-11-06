export default function Resources() {
  return (
    <section id="resources" className="mx-auto max-w-6xl px-6 pt-4 pb-20">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
          Learn more and get support
        </h3>
        <p className="mt-2 text-gray-700">A short list of reputable sources and hotlines. Availability may vary by country.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
          <h4 className="font-semibold text-gray-900">Further reading</h4>
          <ul className="mt-3 list-disc list-inside space-y-1 text-gray-700">
            <li><a className="text-rose-600 hover:underline" href="https://www.unwomen.org/en" target="_blank" rel="noreferrer">UN Women</a> — global research and policy guidance</li>
            <li><a className="text-rose-600 hover:underline" href="https://www.who.int/news-room/fact-sheets/detail/violence-against-women" target="_blank" rel="noreferrer">WHO: Violence against women</a> — health impacts and data</li>
            <li><a className="text-rose-600 hover:underline" href="https://www.equalpaytoday.org/" target="_blank" rel="noreferrer">Equal Pay Today</a> — economic equity resources</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
          <h4 className="font-semibold text-gray-900">Support and hotlines</h4>
          <ul className="mt-3 list-disc list-inside space-y-1 text-gray-700">
            <li>National Domestic Violence Hotline (US): <a className="text-rose-600 hover:underline" href="https://www.thehotline.org/" target="_blank" rel="noreferrer">thehotline.org</a></li>
            <li>RAINN (US sexual assault support): <a className="text-rose-600 hover:underline" href="https://www.rainn.org/" target="_blank" rel="noreferrer">rainn.org</a></li>
            <li>Check local services via your public health department or women's organizations.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
