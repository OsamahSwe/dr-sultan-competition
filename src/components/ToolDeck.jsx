// src/components/ToolDeck.jsx
import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./toolDeck.css";

const tools = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    role: "Conversation & Ideation",
    tagline: "Draft, iterate, and explore ideas in natural language.",
    color: "#0b7c6b",
  },
  {
    id: "claude",
    name: "Claude",
    role: "Thinking & Writing",
    tagline: "Structured reasoning and long-context understanding.",
    color: "#c5663c",
  },
  {
    id: "gemini",
    name: "Gemini",
    role: "Multimodal",
    tagline: "Google’s AI system for text, images, and more.",
    color: "#4c5ed5",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    role: "Code & Research",
    tagline: "Fast, efficient open-source intelligence model.",
    color: "#3a2b73",
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    role: "Coding Assistant",
    tagline: "Write, refactor, and explore code with AI pair programming.",
    color: "#0d3b66",
  },
  {
    id: "lovable",
    name: "Lovable AI",
    role: "App Builder",
    tagline: "Spin up full-stack apps from prompts and iterations.",
    color: "#613dc1",
  },
  {
    id: "uxpilot",
    name: "UX Pilot",
    role: "UX & Prototyping",
    tagline: "Generate flows, wireframes, and UI states in minutes.",
    color: "#145c4c",
  },
  {
    id: "codex",
    name: "CodeX",
    role: "Developer Tools",
    tagline: "Experimental code-focused LLM workflows.",
    color: "#1f2933",
  },
];

export default function ToolDeck({ theme = "dark" }) {
  const trackRef = useRef(null);

  const GAP = 32; // match CSS gap in toolDeck.css

  const scrollStrip = (direction) => {
    const container = trackRef.current;
    if (!container) return;

    const card = container.querySelector(".tool-card");
    if (!card) return;

    const cardWidth = card.offsetWidth + GAP;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (direction === "next") {
      if (container.scrollLeft < maxScroll) {
        container.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }
    } else {
      if (container.scrollLeft > 0) {
        container.scrollBy({
          left: -cardWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      className={
        theme === "light" ? "tooldeck-section tooldeck-section--light" : "tooldeck-section"
      }
    >
      <header className="tooldeck-header">
        <div>
          <p className="tooldeck-kicker">/ DISCOVER AI</p>
          <h2 className="tooldeck-title">
            Explore, Learn, and Master Every AI Tool
          </h2>
        </div>
        <div className="tooldeck-subcopy">
          <div className="tooldeck-toggle">
            <span>—</span>
            <span>≡</span>
          </div>
        </div>
      </header>

      <div className="tooldeck-shell">
        <button
          className="tooldeck-arrow tooldeck-arrow-left"
          onClick={() => scrollStrip("prev")}
          aria-label="Previous tool"
        >
          ‹
        </button>

        <div className="tooldeck-track" ref={trackRef}>
          {tools.map((tool) => (
            <motion.article
              key={tool.id}
              className="tool-card"
              style={{
                "--card-accent": tool.color,
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="tool-card-inner">
                <p className="tool-card-role">{tool.role}</p>
                <h3 className="tool-card-name">{tool.name}</h3>
                <p className="tool-card-tagline">{tool.tagline}</p>
                <div className="tool-card-footer">
                  <span className="tool-card-index">
                    {String(tools.indexOf(tool) + 1).padStart(2, "0")} /{" "}
                    {String(tools.length).padStart(2, "0")}
                  </span>
                  <button className="tool-card-cta">explore tool →</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <button
          className="tooldeck-arrow tooldeck-arrow-right"
          onClick={() => scrollStrip("next")}
          aria-label="Next tool"
        >
          ›
        </button>
      </div>
    </section>
  );
}


