import { useState } from "react";
import Hero from "./components/Hero";
import AiToolGallery from "./components/AiToolGallery";
import ToolDeck from "./components/ToolDeck";
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

      {/* Center-snapping Tool Deck section */}
      <ToolDeck theme={theme} />
    </main>
  );
}

export default Home;


