import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CarouselArrow from "./CarouselArrow";
import { translations } from "../config/translations";

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
    description: "Google's multimodal AI system.",
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

export default function AiToolGallery({ theme = "dark", language = "en" }) {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const isDark = theme === "dark";
  const t = translations[language];

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
      className={`w-full relative h-screen flex items-center justify-center overflow-hidden ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      {/* Light mode video background */}
      {!isDark && (
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-30"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/light-mode.mp4" type="video/mp4" />
        </video>
      )}

      {/* Try & Learn Section Title - Top Center */}
      <div className="absolute top-10 md:top-12 left-1/2 -translate-x-1/2 text-center z-20 w-full px-6">
        <motion.h2
          key={`tryAndLearn-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight translated-text text-center mb-4 ${
            language === "ar" ? "arabic-section-title" : ""
          } ${
            isDark ? "text-white" : "text-slate-900"
          }`}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          {t.tryAndLearn}
        </motion.h2>
        <motion.p
          key={`tryAndLearnSubtitle-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`text-sm md:text-base max-w-2xl mx-auto translated-text text-center mb-8 md:mb-0 ${
            language === "ar" ? "arabic-section-title" : ""
          } ${
            isDark ? "text-gray-400" : "text-slate-600"
          }`}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          {t.tryAndLearnSubtitle}
        </motion.p>
      </div>

      {/* Carousel Section */}
      <div className="carousel relative flex items-center justify-center w-full h-full">
          <div className="w-full h-full overflow-x-hidden" id="tool-strip">
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
                      className="relative w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-start"
                    >
                      {/* Desktop: Background Hero Watermark - Watch Dial (Centered) */}
                      <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
                        <img
                          src={tool.image}
                          className={`w-[680px] lg:w-[820px] h-auto object-contain opacity-100 ${
                            isDark
                              ? "mix-blend-screen drop-shadow-[0_0_60px_rgba(255,255,255,0.04)]"
                              : "mix-blend-multiply drop-shadow-[0_0_40px_rgba(0,0,0,0.05)]"
                          }`}
                          alt=""
                          aria-hidden="true"
                        />
                      </div>

                      {/* Mobile: Tool Logo as Block Element */}
                      <div className="flex md:hidden justify-center w-full px-6 mt-8 mb-6">
                        <img
                          src={tool.image}
                          className="w-[60vw] max-w-[260px] h-auto object-contain"
                          alt=""
                          aria-hidden="true"
                        />
                      </div>

                      {/* Content Container - Mobile: Centered, Desktop: Left Aligned */}
                      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-2xl px-6 md:px-8 lg:px-12 w-full">
                        {/* Tool Name - Hero Headline */}
                        <h2
                          className={`text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-4 md:mb-6 ${
                            isDark ? "text-white" : "text-slate-900"
                          } ${language === "ar" ? "leading-snug" : ""}`}
                          dir={language === "ar" ? "rtl" : "ltr"}
                        >
                          {tool.name}
                        </h2>

                        {/* Statement */}
                        <p
                          className={`text-base md:text-xl lg:text-2xl xl:text-3xl leading-relaxed mb-6 md:mb-10 max-w-2xl mobile-description-clamp ${
                            isDark ? "text-gray-300/80 md:text-gray-300" : "text-slate-700/80 md:text-slate-700"
                          } ${language === "ar" ? "leading-relaxed" : ""}`}
                          dir={language === "ar" ? "rtl" : "ltr"}
                        >
                          {tool.description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto mb-6 md:mb-0">
                          <motion.button
                            onClick={() => {
                              const toolId = tool.name.toLowerCase()
                                .replace(/\s+/g, '')
                                .replace('chatgpt', 'chatgpt')
                                .replace('claudeai', 'claude')
                                .replace('gemini', 'gemini')
                                .replace('deepseek', 'deepseek')
                                .replace('githubcopilot', 'copilot')
                                .replace('cursor', 'cursor')
                                .replace('codexai', 'codex')
                                .replace('lovableai', 'lovable')
                                .replace('uxpilot', 'uxpilot');
                              navigate(`/tool/${toolId}`);
                            }}
                            key={`learnMore-${language}-${tool.name}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98, y: 0 }}
                            className={`h-[42px] md:h-auto px-4 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-full font-medium transition-all translated-text w-full md:w-auto ${
                              language === "ar" ? "arabic-button" : ""
                            } ${
                              isDark
                                ? "bg-emerald-500 text-black hover:bg-emerald-400"
                                : "bg-emerald-500 text-black hover:bg-emerald-600"
                            }`}
                            dir={language === "ar" ? "rtl" : "ltr"}
                          >
                            {t.learnMore} {t.arrow}
                          </motion.button>
                          {tool.link && (
                            <motion.a
                              href={tool.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              key={`tryItNow-${language}-${tool.name}`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              whileHover={{ scale: 1.02, y: -1 }}
                              whileTap={{ scale: 0.98, y: 0 }}
                              className={`h-[42px] md:h-auto px-4 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-full font-medium transition-all translated-text w-full md:w-auto ${
                                language === "ar" ? "arabic-button" : ""
                              } ${
                                isDark
                                  ? "border border-white/30 text-white hover:border-white/50 hover:bg-white/5"
                                  : "border border-slate-900/30 text-slate-900 hover:border-slate-900/50 hover:bg-slate-900/5"
                              }`}
                              dir={language === "ar" ? "rtl" : "ltr"}
                            >
                              {t.tryItNow} {t.arrow}
                            </motion.a>
                          )}
                        </div>

                        {/* Mobile: Carousel Arrows - Below Buttons */}
                        <div className="flex md:hidden justify-center items-center gap-3 mt-2">
                          <button
                            type="button"
                            onClick={handlePrev}
                            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                              isDark
                                ? "border-white/25 text-white hover:border-white/45"
                                : "border-slate-900/25 text-slate-900 hover:border-slate-900/45"
                            }`}
                            aria-label="Previous tool"
                          >
                            <CarouselArrow direction="left" />
                          </button>
                          <button
                            type="button"
                            onClick={handleNext}
                            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                              isDark
                                ? "border-white/25 text-white hover:border-white/45"
                                : "border-slate-900/25 text-slate-900 hover:border-slate-900/45"
                            }`}
                            aria-label="Next tool"
                          >
                            <CarouselArrow direction="right" />
                          </button>
                        </div>
                      </div>

                      {/* Desktop: Carousel Arrows - Below Logo */}
                      <div className="hidden md:flex absolute left-1/2 top-[80%] -translate-x-1/2 items-center gap-4 z-20">
                        <button
                          type="button"
                          onClick={handlePrev}
                          className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                            isDark
                              ? "border-white/25 text-white hover:border-white/45"
                              : "border-slate-900/25 text-slate-900 hover:border-slate-900/45"
                          }`}
                          aria-label="Previous tool"
                        >
                          <CarouselArrow direction="left" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                            isDark
                              ? "border-white/25 text-white hover:border-white/45"
                              : "border-slate-900/25 text-slate-900 hover:border-slate-900/45"
                          }`}
                          aria-label="Next tool"
                        >
                          <CarouselArrow direction="right" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
          </div>
        </div>
        {/* End Carousel Section */}
    </section>
  );
}

