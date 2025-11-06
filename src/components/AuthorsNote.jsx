export default function AuthorsNote() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-12">
      <div className="rounded-xl border border-black/10 bg-gradient-to-br from-rose-50 to-indigo-50 p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">Author’s Note</h3>
        <p className="text-gray-800 leading-relaxed">
          We made this comic to show how everyday comments can silence people, even when no one means
          harm. Noticing bias, naming it kindly, and sharing roles fairly helps everyone learn and do
          their best. Respect isn’t a big speech—it’s a daily habit we choose together.
        </p>
        <div className="mt-4 text-sm text-gray-600">
          Identity: Aisha Khan (she/her), Leo Martinez (he/him)
        </div>
      </div>
    </section>
  );
}
