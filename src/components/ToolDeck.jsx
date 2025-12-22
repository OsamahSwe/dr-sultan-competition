// src/components/ToolDeck.jsx
import React from "react";
import { motion } from "framer-motion";
import "./toolDeck.css";
import { translations } from "../config/translations";

export default function ToolDeck({ theme = "dark", language = "en" }) {
  const t = translations[language];
  
  return (
    <section
      className={`min-h-screen py-20 md:py-32 ${
        theme === "light" ? "tooldeck-section tooldeck-section--light" : "tooldeck-section"
      }`}
    >
      {/* Light mode video background */}
      {theme === "light" && (
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

      <div className="relative z-10">
        <header className="tooldeck-header tooldeck-header--center">
          <div className="text-center">
            <motion.p
              key={`watchAndBuild-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`text-lg md:text-xl font-semibold mb-4 translated-text text-center ${
                language === "ar" ? "arabic-section-title" : ""
              } ${
                theme === "dark" ? "text-teal-300" : "text-teal-600"
              }`}
            >
              {t.watchAndBuild}
            </motion.p>
            <motion.h2
              key={`practicalTutorials-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight translated-text text-center ${
                language === "ar" ? "arabic-section-title" : ""
              } ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              {t.practicalTutorials}
            </motion.h2>
          </div>
        </header>

        <motion.div
          className="mt-10 max-w-[1400px] mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <video
            className="w-full rounded-[28px] shadow-[0_26px_90px_rgba(0,0,0,0.85)] aspect-video object-cover"
            controls
            playsInline
            preload="metadata"
          >
            <source src="/tutorial/CHATGPT-UXPILOT-CURSOR-WEB.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Workflow Strip */}
        <motion.div
          className="mt-16 max-w-6xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-8">
            {/* Step 1: Idea */}
            <div className="flex flex-col items-center text-center max-w-[180px]">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                theme === "dark" ? "bg-slate-800/50" : "bg-slate-100"
              }`}>
                <svg className={`w-8 h-8 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className={`font-semibold mb-2 text-sm md:text-base ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                Idea
              </h3>
              <p className={`text-xs md:text-sm leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-slate-600"
              }`}>
                Start with a rough concept or problem.
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:block flex-shrink-0 mt-8">
              <svg className={`w-6 h-6 ${theme === "dark" ? "text-gray-500" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="md:hidden flex-shrink-0">
              <svg className={`w-6 h-6 ${theme === "dark" ? "text-gray-500" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Step 2: ChatGPT */}
            <div className="flex flex-col items-center text-center max-w-[180px]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 overflow-hidden">
                <img
                  src="/chatgpt/cover.png"
                  alt="ChatGPT"
                  className="w-full h-full object-contain opacity-70"
                />
              </div>
              <h3 className={`font-semibold mb-2 text-sm md:text-base ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                ChatGPT
              </h3>
              <p className={`text-xs md:text-sm leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-slate-600"
              }`}>
                Refine the idea and define requirements.
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:block flex-shrink-0 mt-8">
              <svg className={`w-6 h-6 ${theme === "dark" ? "text-gray-500" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="md:hidden flex-shrink-0">
              <svg className={`w-6 h-6 ${theme === "dark" ? "text-gray-500" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Step 3: UX Pilot */}
            <div className="flex flex-col items-center text-center max-w-[180px]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 overflow-hidden">
                <img
                  src="/ux-pilot-ai/cover.png"
                  alt="UX Pilot"
                  className="w-full h-full object-contain opacity-70"
                />
              </div>
              <h3 className={`font-semibold mb-2 text-sm md:text-base ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                UX Pilot
              </h3>
              <p className={`text-xs md:text-sm leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-slate-600"
              }`}>
                Generate UI flows and wireframes.
              </p>
            </div>

            {/* Arrow 3 */}
            <div className="hidden md:block flex-shrink-0 mt-8">
              <svg className={`w-6 h-6 ${theme === "dark" ? "text-gray-500" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="md:hidden flex-shrink-0">
              <svg className={`w-6 h-6 ${theme === "dark" ? "text-gray-500" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Step 4: ChatGPT (again) */}
            <div className="flex flex-col items-center text-center max-w-[180px]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 overflow-hidden">
                <img
                  src="/chatgpt/cover.png"
                  alt="ChatGPT"
                  className="w-full h-full object-contain opacity-70"
                />
              </div>
              <h3 className={`font-semibold mb-2 text-sm md:text-base ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                ChatGPT
              </h3>
              <p className={`text-xs md:text-sm leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-slate-600"
              }`}>
                Improve prompts and logic.
              </p>
            </div>

            {/* Arrow 4 */}
            <div className="hidden md:block flex-shrink-0 mt-8">
              <svg className={`w-6 h-6 ${theme === "dark" ? "text-gray-500" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="md:hidden flex-shrink-0">
              <svg className={`w-6 h-6 ${theme === "dark" ? "text-gray-500" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Step 5: Cursor */}
            <div className="flex flex-col items-center text-center max-w-[180px]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 overflow-hidden">
                <img
                  src="/cursor-ai/cover.png"
                  alt="Cursor"
                  className="w-full h-full object-contain opacity-70"
                />
              </div>
              <h3 className={`font-semibold mb-2 text-sm md:text-base ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                Cursor
              </h3>
              <p className={`text-xs md:text-sm leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-slate-600"
              }`}>
                Implement and ship the final code.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

