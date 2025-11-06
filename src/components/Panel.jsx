export default function Panel({ number, title, children }) {
  return (
    <div className="relative rounded-xl border border-black/10 bg-white shadow-sm overflow-hidden">
      <div className="absolute left-3 top-3 h-7 w-7 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-semibold">
        {number}
      </div>
      <div className="p-5 sm:p-6">
        {title && (
          <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
        )}
        <div className="text-gray-800 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
