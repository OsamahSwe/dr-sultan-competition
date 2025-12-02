import { motion } from "framer-motion";

const aiTools = [
  {
    name: "ChatGPT",
    category: "Conversation & Ideation",
    description:
      "Draft content, explore ideas, and prototype agents with a versatile conversational model.",
    theme: "from-emerald-400/40 via-emerald-500/20 to-slate-900/60",
  },
  {
    name: "Claude",
    category: "Long-form Reasoning",
    description:
      "Handle complex documents, deep analysis, and structured reasoning with natural tone.",
    theme: "from-amber-300/40 via-orange-500/20 to-slate-900/60",
  },
  {
    name: "Gemini",
    category: "Multimodal Intelligence",
    description:
      "Connect vision, text, and the web for research, creative exploration, and experimentation.",
    theme: "from-sky-400/40 via-blue-500/20 to-slate-900/60",
  },
  {
    name: "DeepSeek",
    category: "Code & Research",
    description:
      "Fast, precise responses tuned for developers and technical workflows.",
    theme: "from-fuchsia-400/40 via-purple-500/20 to-slate-900/60",
  },
  {
    name: "GitHub Copilot",
    category: "In-Editor Coding",
    description:
      "Inline code suggestions, test generation, and refactors directly in your IDE.",
    theme: "from-teal-300/40 via-cyan-500/20 to-slate-900/60",
  },
  {
    name: "Midjourney",
    category: "Visual Exploration",
    description:
      "High‑fidelity image generation for brand visuals, mood boards, and concept art.",
    theme: "from-pink-400/40 via-rose-500/20 to-slate-900/60",
  },
];

function AIToolShowcase() {
  return (
    <section className="w-full bg-black text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <header className="mb-6 md:mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-teal-300/70 mb-2">
              / LIVE TOOL DECK
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight">
              Slide through the current AI landscape.
            </h2>
          </div>
          <p className="text-xs md:text-sm text-gray-300 max-w-sm">
            Horizontally scroll to explore each tool. Cards snap into the
            center so you always have a clear focal point.
          </p>
        </header>

        <div className="flex items-center justify-between px-6 md:px-8 lg:px-20 mb-2 text-[11px] uppercase tracking-[0.2em] text-gray-500">
          <span>drag horizontally</span>
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-gray-600" />
            <span className="text-xs">☰</span>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex gap-10 overflow-x-scroll no-scrollbar snap-x snap-mandatory px-20 py-20 scroll-smooth">
          {aiTools.map((tool, index) => (
            <motion.article
              key={tool.name}
              className={`snap-center w-[80vw] h-[60vh] rounded-3xl overflow-hidden bg-black/20 border border-white/10 p-10 shadow-xl shrink-0 relative flex flex-col justify-between bg-gradient-to-br ${tool.theme}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)]" />

              <div className="relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gray-200/80 mb-4">
                    {tool.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                    {tool.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-100/90 max-w-md leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between text-xs md:text-sm text-gray-100/90">
                  <span className="uppercase tracking-[0.2em] text-gray-200/80">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(aiTools.length).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-gray-100/90">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-100/60 bg-black/40">
                        ⇆
                      </span>
                      <span>drag</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIToolShowcase;


