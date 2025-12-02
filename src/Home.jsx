import { useState } from "react";
import Hero from "./components/Hero";
import AiToolGallery from "./components/AiToolGallery";
import ToolDeck from "./components/ToolDeck";
import { motion } from "framer-motion";

const tools = [
  {
    title: "Vision Studio",
    description:
      "Generate cinematic visuals, concept art, and brand assets in seconds.",
    tag: "IMAGES",
  },
  {
    title: "CopyFlow",
    description:
      "Long-form copy, landing pages, and emails tuned to your brand voice.",
    tag: "TEXT",
  },
  {
    title: "Prompt Lab",
    description:
      "Test and refine prompts for ChatGPT, Claude, and other LLMs.",
    tag: "WORKFLOWS",
  },
];

function Home() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const mainClass =
    theme === "dark" ? "w-full bg-black text-white" : "w-full bg-white text-black";

  return (
    <main className={mainClass}>
      {/* Hero / Landing section with video */}
      <section className="h-screen">
        <Hero theme={theme} onToggleTheme={toggleTheme} />
      </section>

      {/* Horizontal AI tool gallery placed directly under hero */}
      <AiToolGallery theme={theme} />

      {/* AI tools section with scroll reveal animation */}
      <motion.section
        id="ai-tools"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className={`pt-20 pb-24 px-6 md:px-12 lg:px-20 ${
          theme === "dark" ? "bg-black" : "bg-slate-50"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 md:mb-14">
            <p
              className={`text-xs md:text-sm uppercase tracking-[0.25em] mb-3 ${
                theme === "dark" ? "text-teal-300/80" : "text-teal-600"
              }`}
            >
              / AI TOOLKIT
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
              Curated tools for
              <span
                className={`block md:inline md:ml-3 ${
                  theme === "dark" ? "text-teal-300" : "text-teal-500"
                }`}
              >
                intelligent creation.
              </span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {tools.map((tool) => (
              <article
                key={tool.title}
                className={`group border rounded-2xl p-6 md:p-7 flex flex-col justify-between transition-all duration-300 ${
                  theme === "dark"
                    ? "border-white/10 bg-white/5 hover:border-teal-300/70 hover:bg-white/10 backdrop-blur-sm"
                    : "border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]"
                }`}
              >
                <div>
                  <p
                    className={`text-[11px] uppercase tracking-[0.2em] mb-3 ${
                      theme === "dark" ? "text-teal-300/80" : "text-teal-600/80"
                    }`}
                  >
                    {tool.tag}
                  </p>
                  <h3 className="text-lg md:text-xl font-light mb-3">
                    {tool.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {tool.description}
                  </p>
                </div>
                <button
                  className={`mt-6 inline-flex items-center text-xs md:text-sm transition-colors ${
                    theme === "dark"
                      ? "text-teal-200 group-hover:text-white"
                      : "text-teal-600 group-hover:text-teal-500"
                  }`}
                >
                  explore tool
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Center-snapping Tool Deck section */}
      <ToolDeck theme={theme} />
    </main>
  );
}

export default Home;


