import Hero from "./components/Hero";
import AiToolGallery from "./components/AiToolGallery";
import ToolDeck from "./components/ToolDeck";
import AboutUs from "./components/AboutUs";
import { motion } from "framer-motion";

const tools = [
  {
    id: "chatgpt",
    title: "ChatGPT Studio",
    description:
      "Draft conversations, explore ideas, and prototype assistants in natural language.",
    tag: "CONVERSATION",
    iconBg: "#7c3aed",
    pattern: "waves",
  },
  {
    id: "claude",
    title: "Claude Workspace",
    description:
      "Deep reasoning for strategy docs, product specs, and complex research work.",
    tag: "WRITING",
    iconBg: "#0284c7",
    pattern: "dots",
  },
  {
    id: "gemini",
    title: "Gemini Canvas",
    description:
      "Blend web, text, and images for rich multimodal exploration and analysis.",
    tag: "MULTIMODAL",
    iconBg: "#facc15",
    pattern: "stripes",
  },
  {
    id: "copilot",
    title: "GitHub Copilot",
    description:
      "Inline code suggestions, tests, and refactors directly inside your editor.",
    tag: "CODE",
    iconBg: "#22c55e",
    pattern: "green-dots",
  },
  {
    id: "cursor",
    title: "Cursor Editor",
    description:
      "An AI-native IDE that helps you read, refactor, and ship code faster.",
    tag: "IDE",
    iconBg: "#f97316",
    pattern: "yellow-arc",
  },
  {
    id: "uxpilot",
    title: "UX Pilot",
    description:
      "Generate flows, states, and wireframes for product ideas in minutes.",
    tag: "UX",
    iconBg: "#ef4444",
    pattern: "sprinkles",
  },
];

function Home({ theme = "dark", onToggleTheme }) {
  const mainClass =
    theme === "dark" ? "w-full bg-black text-white" : "w-full bg-white text-black";

  return (
    <main className={mainClass}>
      {/* Hero / Landing section with video */}
      <section className="h-screen">
        <Hero theme={theme} onToggleTheme={onToggleTheme} />
      </section>

      {/* Horizontal AI tool gallery placed directly under hero */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <AiToolGallery theme={theme} />
      </motion.section>

      {/* Center-snapping Tool Deck section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <ToolDeck theme={theme} />
      </motion.section>

      {/* About Us section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <AboutUs theme={theme} />
      </motion.section>
    </main>
  );
}

export default Home;


