export default function CallToAction() {
  return (
    <section id="action" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl bg-gradient-to-br from-rose-500 via-fuchsia-600 to-sky-600 p-[1px] shadow-lg">
          <div className="rounded-2xl bg-white p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Small actions, real change
                </h3>
                <p className="mt-3 text-gray-700">
                  You don't need a big platform to make a difference. Start with conversations, choose media that treats people with dignity, and support policies that protect equality.
                </p>
              </div>
              <ul className="space-y-3 text-gray-800">
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-rose-500" /> Learn how to intervene safely when you witness harassment.</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-500" /> Challenge jokes or comments that demean women.</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-sky-500" /> Share and amplify stories from women and marginalized voices.</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" /> Support local organizations working to end gender-based violence.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
