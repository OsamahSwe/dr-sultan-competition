// src/components/ToolDeck.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./toolDeck.css";
import CarouselArrow from "./CarouselArrow";

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
  const navigate = useNavigate();
  const trackRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index) => {
    const container = trackRef.current;
    const card = cardsRef.current[index];
    if (!container || !card) return;

    const containerWidth = container.offsetWidth;
    const cardWidth = card.offsetWidth;
    const targetScroll =
      card.offsetLeft - (containerWidth / 2 - cardWidth / 2);

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % tools.length;
    setActiveIndex(nextIndex);
    scrollToCard(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + tools.length) % tools.length;
    setActiveIndex(prevIndex);
    scrollToCard(prevIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToCard(0);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={
        theme === "light" ? "tooldeck-section tooldeck-section--light" : "tooldeck-section"
      }
    >
      {theme === "light" && (
        <video
          className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-35"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/light-mode.mp4" type="video/mp4" />
        </video>
      )}

      <div className="relative z-10">
        <header className="tooldeck-header">
          <div>
            <p
              className={`text-lg md:text-xl font-semibold mb-3 ${
                theme === "dark" ? "text-teal-300" : "text-teal-600"
              }`}
            >
              Discover AI
            </p>
            <h2 className="tooldeck-title">
              Explore, Learn, and Master Every AI Tool
            </h2>
          </div>
          {/* Right side subcopy removed per design update */}
        </header>

        <div className="tooldeck-shell relative">
          <button
            type="button"
            className="carousel-arrow left"
            onClick={handlePrev}
            aria-label="Previous tool"
          >
            <CarouselArrow direction="left" />
          </button>

          <div className="tooldeck-track" ref={trackRef}>
          {tools.map((tool, index) => (
            <motion.article
              key={tool.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="tool-card"
              style={{
                "--card-accent": tool.color,
                willChange: "transform, box-shadow",
              }}
              initial={{ scale: 1, rotateX: 0, rotateY: 0, boxShadow: "0 26px 70px rgba(0,0,0,0.55)" }}
              whileHover={{
                scale: 1.015,
                rotateX: -1.5,
                rotateY: 1.5,
                boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
              }}
              transition={{
                type: "tween",
                duration: 0.18,
                ease: "easeOut",
              }}
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
                  <motion.button
                    type="button"
                    onClick={() => navigate(`/tool/${tool.id}`)}
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97, y: 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="tool-card-cta"
                  >
                    explore tool →
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

          <button
            type="button"
            className="carousel-arrow right"
            onClick={handleNext}
            aria-label="Next tool"
          >
            <CarouselArrow direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}


