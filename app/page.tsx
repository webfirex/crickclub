'use client'

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-sm px-5">

        {/* PROFILE */}
        <div className="flex flex-col items-center text-center">
          <div className="w-28 h-28 rounded-full border-4 border-yellow-400 flex items-center justify-center">
            <img
              src="https://i.ibb.co/NgQr4fcq/2026-01-17-19-59-33.jpg"
              alt="profile"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>

          <h1 className="mt-4 text-3xl font-bold text-yellow-400">
            Dream 11 Come Back 🏏
          </h1>

          <p className="mt-1 text-sm text-yellow-300">
            👥 25K+ Active Members
          </p>

          <div className="mt-3 flex gap-2">
            <span className="px-3 py-1 rounded-full bg-green-700/30 text-green-400 text-xs">
              🏆 Head Office
            </span>
            <span className="px-3 py-1 rounded-full bg-red-700/30 text-red-400 text-xs">
              ⚡ Real Winner
            </span>
          </div>
        </div>

        {/* STATS */}
        <div className="my-6 grid grid-cols-3 gap-3">
          <div className="bg-green-900/40 border border-green-500 rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-green-400">32,000+</p>
            <p className="text-xs text-gray-300">1 cr winners</p>
          </div>

          <div className="bg-red-900/40 border border-red-500 rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-red-400">95%</p>
            <p className="text-xs text-gray-300">Win Rate</p>
          </div>

          <div className="bg-yellow-900/40 border border-yellow-500 rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-yellow-400">4.9 ★</p>
            <p className="text-xs text-gray-300">Rating</p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="https://effervescent-tiramisu-982385.netlify.app"
          className="relative overflow-hidden block w-full text-center py-4 animate-btnpulse rounded-xl font-extrabold text-lg tracking-wide"
        >
          <span className="relative z-10">
            🚀 Join Telegram Channel
          </span>

          <span
            className="absolute inset-0 animate-gradient
              bg-gradient-to-r
              from-green-700
              via-blue-400
              via-blue-700
              to-red-700"
          />
        </a>

        {/* BADGES */}
        <div className="mt-6 grid grid-cols-4 gap-2 bg-green-950/40 border border-green-700 rounded-xl p-4 text-center text-xs">
          <div className="flex flex-col items-center gap-1">
            <span className="text-green-400 text-lg">✔</span>
            <span>Verified</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-yellow-400 text-lg">🔒</span>
            <span>Secure</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-red-400 text-lg">📈</span>
            <span>Profitable</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-yellow-300 text-lg">⭐</span>
            <span>Top Rated</span>
          </div>
        </div>

      </div>

    </main>
  )
}
