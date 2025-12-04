import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CarouselArrow from "./CarouselArrow";

const tools = [
  {
    name: "ChatGPT",
    description: "Conversational AI assistant for creation & ideation.",
    image: "/chatgpt/cover.png",
    about: "Great for drafting content, brainstorming ideas, and chatting through concepts in natural language.",
    link: "https://chat.openai.com",
    accent: "#10b981", // emerald
  },
  {
    name: "Claude AI",
    description: "Powerful thinking + writing AI built for long context.",
    image: "/claude-ai/cover.png",
    about: "Excellent at deep analysis, long documents, and thoughtful written output.",
    link: "https://claude.ai",
    accent: "#fb923c", // warm orange
  },
  {
    name: "Gemini",
    description: "Google’s multimodal AI system.",
    image: "/gemini-ai/cover.png",
    about: "Connects text, images, and the web for research and creative exploration.",
    link: "https://gemini.google.com",
    accent: "#6366f1", // indigo
  },
  {
    name: "DeepSeek",
    description: "Fast, efficient open-source intelligence model.",
    image: "/deepseek/cover.png",
    about: "Optimized for speed and efficiency on technical, research, and coding tasks.",
    link: "https://www.deepseek.com",
    accent: "#3b82f6", // blue
  },
  {
    name: "GitHub Copilot",
    description: "Inline suggestions that keep your editor moving forward.",
    image: "/github-copilot-ai/cover.png",
    about: "Pairs with you in your editor to suggest code, tests, and small refactors as you type.",
    link: "https://github.com/features/copilot",
    accent: "#0ea5e9", // cyan
  },
  {
    name: "Cursor",
    description: "AI-native code editor that helps you ship faster.",
    image: "/cursor-ai/cover.png",
    about: "Combines a modern editor with AI so you can iterate on code in-place.",
    link: "https://cursor.sh",
    accent: "#a1a1aa", // neutral
  },
  {
    name: "Codex AI",
    description: "Experimental code-focused workflows and dev tools.",
    image: "/codex-ai/cover.png",
    about: "A sandbox for trying new code-generation workflows and dev tooling.",
    link: "https://openai.com/codex/",
    accent: "#22d3ee", // teal / neon
  },
  {
    name: "Lovable AI",
    description: "Spin up full-stack apps from natural-language prompts.",
    image: "/loveable-ai/cover.png",
    about: "Turn product ideas into working full-stack apps with iterative prompts.",
    link: "https://lovable.dev",
    accent: "#f97316", // warm gradient-inspired
  },
  {
    name: "UX Pilot",
    description: "Generate user flows, wireframes, and UI states in minutes.",
    image: "/ux-pilot-ai/cover.png",
    about: "Quickly visualize UX states and flows to move designs forward faster.",
    link: "https://uxpilot.ai",
    accent: "#4f46e5", // UX blue/purple
  },
];

export default function AiToolGallery({ theme = "dark" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDark = theme === "dark";

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % tools.length;
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + tools.length) % tools.length;
    setActiveIndex(prevIndex);
  };

  return (
    <section
      className={`w-full ${
        isDark ? "bg-black py-20 md:py-24" : "bg-slate-50 py-20 md:py-24"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div
          className={`${
            isDark
              ? ""
              : "rounded-[32px] bg-white/80 shadow-[0_32px_110px_rgba(15,23,42,0.12)] border border-slate-200/60 backdrop-blur-md px-4 md:px-8 pt-10 md:pt-12 pb-12 md:pb-14"
          }`}
        >
        <div className="mb-10 md:mb-12 text-center">
          <p
            className={`text-lg md:text-xl font-semibold mb-4 ${
              isDark ? "text-teal-300" : "text-teal-600"
            }`}
          >
            AI Tools
          </p>
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Step Into the AI Era |{" "}
            <span
              className={`${
                isDark ? "text-teal-300" : "text-teal-600"
              } font-semibold`}
            >
              Try the Tools
            </span>
          </h2>
        </div>

        <div className="carousel relative flex items-center justify-center">
          <button
            type="button"
            onClick={handlePrev}
            className="carousel-arrow left"
            aria-label="Previous tool"
          >
            <CarouselArrow direction="left" />
          </button>

          <div className="overflow-hidden px-2 w-full" id="tool-strip">
            <div className="py-10">
              <AnimatePresence mode="wait" initial={false}>
                {(() => {
                  const tool = tools[activeIndex];
                  return (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                      className={`tool-card card flex h-[480px] w-full max-w-[1100px] mx-auto flex-col items-center justify-start rounded-[28px] p-6 md:p-10 text-center relative overflow-hidden ${
                        isDark
                          ? "border border-white/10"
                          : "border border-transparent shadow-[0_22px_55px_rgba(15,23,42,0.35)]"
                      }`}
                      style={{
                        transition: "transform 0.25s ease",
                        background: isDark
                          ? `radial-gradient(circle at 0% 0%, ${
                              tool.accent ?? "#22c55e"
                            }33, transparent 55%), radial-gradient(circle at 100% 100%, #020617, #000000 75%)`
                          : tool.name === "Cursor"
                            ? "linear-gradient(135deg, #0f0f17, #202736)" // dark futuristic
                            : tool.name === "Codex AI"
                              ? "linear-gradient(135deg, #0d0b1f, #1a1c3c)" // neon coding
                              : tool.name === "Lovable AI"
                                ? "linear-gradient(135deg, #1a0c25, #281338)" // soft romantic
                                : `linear-gradient(135deg,
                                    color-mix(in srgb, ${tool.accent ?? "#22c55e"} 80%, #ffffff),
                                    color-mix(in srgb, ${tool.accent ?? "#22c55e"} 55%, #020617)
                                  )`,
                      }}
                    >
                  <motion.div
                    className={`card-image-wrapper mb-6 flex h-[180px] w-[180px] items-center justify-center rounded-3xl ${
                      isDark ? "bg-black/40" : "bg-white/10"
                    }`}
                    style={{
                      boxShadow: `0 0 40px ${(tool.accent ?? "#22c55e") + "55"}`,
                    }}
                    animate={{
                      scale: [1, 1.02, 1],
                      boxShadow: [
                        `0 0 40px ${(tool.accent ?? "#22c55e") + "55"}`,
                        `0 0 60px ${(tool.accent ?? "#22c55e") + "aa"}`,
                        `0 0 40px ${(tool.accent ?? "#22c55e") + "55"}`,
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src={tool.image}
                      className="card-image h-full w-full object-contain"
                      alt={tool.name}
                    />
                  </motion.div>

                  <h3
                    className={`text-xl font-semibold mb-3 ${
                      isDark ? "text-white" : "text-white"
                    }`}
                  >
                    {tool.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed px-3 ${
                      isDark ? "text-white/80" : "text-white/90"
                    }`}
                    style={{ maxHeight: "72px", overflow: "hidden" }}
                  >
                    {tool.description}
                  </p>

                  {tool.about && (
                    <p
                      className={`text-sm mt-3 max-w-md mx-auto px-3 ${
                        isDark ? "text-gray-400" : "text-slate-100/90"
                      }`}
                    >
                      {tool.about}
                    </p>
                  )}

                  {tool.link && (
                    <motion.a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97, y: 0 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className={`mt-4 inline-block rounded-full px-6 py-2 text-sm transition backdrop-blur-xl ${
                        isDark
                          ? "bg-white/10 text-white hover:bg-white/20"
                          : "bg-slate-900 text-white shadow-md hover:bg-slate-800"
                      }`}
                    >
                      Try it now →
                    </motion.a>
                  )}
                  </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="carousel-arrow right"
            aria-label="Next tool"
          >
            <CarouselArrow direction="right" />
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}

