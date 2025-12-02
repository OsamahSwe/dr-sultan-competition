import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tools = [
  {
    name: "ChatGPT",
    description: "Conversational AI assistant for creation & ideation.",
    image: "/chatgpt/cover.png",
    about: "Great for drafting content, brainstorming ideas, and chatting through concepts in natural language.",
    link: "https://chat.openai.com",
  },
  {
    name: "Claude AI",
    description: "Powerful thinking + writing AI built for long context.",
    image: "/claude-ai/cover.png",
    about: "Excellent at deep analysis, long documents, and thoughtful written output.",
    link: "https://claude.ai",
  },
  {
    name: "Gemini",
    description: "Google’s multimodal AI system.",
    image: "/gemini-ai/cover.png",
    about: "Connects text, images, and the web for research and creative exploration.",
    link: "https://gemini.google.com",
  },
  {
    name: "DeepSeek",
    description: "Fast, efficient open-source intelligence model.",
    image: "/deepseek/cover.png",
    about: "Optimized for speed and efficiency on technical, research, and coding tasks.",
    link: "https://www.deepseek.com",
  },
  {
    name: "GitHub Copilot",
    description: "Inline suggestions that keep your editor moving forward.",
    image: "/github-copilot-ai/cover.png",
    about: "Pairs with you in your editor to suggest code, tests, and small refactors as you type.",
    link: "https://github.com/features/copilot",
  },
  {
    name: "Cursor",
    description: "AI-native code editor that helps you ship faster.",
    image: "/cursor-ai/cover.png",
    about: "Combines a modern editor with AI so you can iterate on code in-place.",
    link: "https://cursor.sh",
  },
  {
    name: "Codex AI",
    description: "Experimental code-focused workflows and dev tools.",
    image: "/codex-ai/cover.png",
    about: "A sandbox for trying new code-generation workflows and dev tooling.",
    link: "",
  },
  {
    name: "Lovable AI",
    description: "Spin up full-stack apps from natural-language prompts.",
    image: "/loveable-ai/cover.png",
    about: "Turn product ideas into working full-stack apps with iterative prompts.",
    link: "https://lovable.dev",
  },
  {
    name: "UX Pilot",
    description: "Generate user flows, wireframes, and UI states in minutes.",
    image: "/ux-pilot-ai/cover.png",
    about: "Quickly visualize UX states and flows to move designs forward faster.",
    link: "https://uxpilot.ai",
  },
];

export default function AiToolGallery() {
  const containerRef = useRef(null);

  const scrollByAmount = (direction) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const card = container.querySelector(".tool-card");
    if (!card) return;

    const style =
      typeof window !== "undefined"
        ? window.getComputedStyle(card)
        : { marginRight: "40" };
    const gap = parseInt(style.marginRight, 10) || 40; // fallback
    const cardWidth = card.offsetWidth + gap;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const current = container.scrollLeft;

    if (direction === "next") {
      const target = Math.min(current + cardWidth, maxScroll);
      container.scrollTo({ left: target, behavior: "smooth" });
    } else {
      const target = Math.max(current - cardWidth, 0);
      container.scrollTo({ left: target, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-28 bg-transparent">
      <div className="max-w-[1400px] mx-auto">
        <div className="carousel relative flex items-center justify-center gap-6">
          <button
            onClick={() => scrollByAmount("prev")}
            className="arrow flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition duration-200 hover:bg-white/25"
            aria-label="Previous tool"
          >
            <ChevronLeft size={26} />
          </button>

          <div className="overflow-hidden px-2" ref={containerRef} id="tool-strip">
            <div className="cards-wrapper flex gap-[40px] py-10">
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="tool-card card flex h-[480px] w-[260px] flex-col items-center justify-start rounded-[28px] bg-white/5 p-6 text-center"
                  style={{ transition: "transform 0.25s ease" }}
                >
                  <div className="card-image-wrapper mb-6 flex h-[180px] w-[180px] items-center justify-center">
                    <img
                      src={tool.image}
                      className="card-image h-full w-full object-contain"
                      alt={tool.name}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {tool.name}
                  </h3>
                  <p
                    className="text-sm text-white/80 leading-relaxed px-3"
                    style={{ maxHeight: "72px", overflow: "hidden" }}
                  >
                    {tool.description}
                  </p>

                  {tool.about && (
                    <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto px-3">
                      {tool.about}
                    </p>
                  )}

                  {tool.link && (
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block rounded-full px-6 py-2 bg-white/10 hover:bg-white/20 transition text-sm backdrop-blur-xl"
                    >
                      Try it now →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scrollByAmount("next")}
            className="arrow flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition duration-200 hover:bg-white/25"
            aria-label="Next tool"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      </div>
    </section>
  );
}

