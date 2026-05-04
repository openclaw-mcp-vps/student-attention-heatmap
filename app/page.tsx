export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Education Tech
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Where Students{" "}
          <span className="text-[#58a6ff]">Lose Focus</span>{" "}
          During Videos
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Ingest your Vimeo or YouTube analytics, generate interactive engagement heatmaps, and get AI-powered suggestions to fix the exact moments students zone out.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $11/mo
        </a>
        {/* Heatmap Preview */}
        <div className="mt-14 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left">
          <p className="text-xs text-[#8b949e] mb-3 uppercase tracking-widest">Engagement Heatmap Preview</p>
          <div className="flex gap-1 h-10 items-end">
            {[90,85,80,75,60,40,30,25,50,70,65,55,45,35,20,15,30,55,70,80,85,88,90,92].map((v, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${v}%`,
                  backgroundColor: v > 70 ? "#238636" : v > 45 ? "#d29922" : "#da3633"
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-[#8b949e]">
            <span>0:00</span><span>Drop-off at 2:10</span><span>End</span>
          </div>
          <p className="mt-4 text-sm text-[#58a6ff] border border-[#1f6feb] bg-[#0d1117] rounded-lg px-4 py-2">
            AI Suggestion: Shorten the intro by 45 seconds — 68% of viewers skip past 1:30.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$11</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</p>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              "Unlimited video heatmaps",
              "YouTube & Vimeo integration",
              "AI improvement suggestions",
              "Drop-off alerts & reports",
              "Export data as CSV"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which video platforms are supported?",
              a: "We currently support YouTube and Vimeo. Simply connect your account and we pull engagement data automatically."
            },
            {
              q: "How does the AI generate improvement suggestions?",
              a: "We analyze drop-off patterns, rewatch segments, and skip behavior, then surface actionable edits — like trimming slow sections or adding chapter markers."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel with one click from your dashboard. You keep access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg p-5 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} Student Attention Heatmap. All rights reserved.
      </footer>
    </main>
  );
}
