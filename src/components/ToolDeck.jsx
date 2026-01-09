// src/components/ToolDeck.jsx
import React from "react";
import { motion } from "framer-motion";
import "./toolDeck.css";
import { translations } from "../config/translations";

export default function ToolDeck({ theme = "dark", language = "en" }) {
  const t = translations[language];
  
  return (
    <section
      className={`h-screen relative ${
        theme === "light" ? "tooldeck-section tooldeck-section--light" : "tooldeck-section"
      }`}
    >
      {/* Dark mode video background */}
      {theme === "dark" && (
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/try-and-learn.mp4" type="video/mp4" />
        </video>
      )}

      {/* Light mode video background */}
      {theme === "light" && (
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-30 z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/light-mode.mp4" type="video/mp4" />
        </video>
      )}

      <div className="relative z-10">
        {/* Two-column layout: Left text, Right video */}
        <div className="max-w-[1400px] ml-0 lg:ml-12 xl:ml-24 px-6 md:px-12 w-full h-full flex flex-col justify-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-[0.25fr_4fr] gap-8 lg:gap-48 xl:gap-72">
            {/* Left Side: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full flex flex-col h-full px-6 md:pl-6 lg:pl-8 md:pr-12 lg:pr-16 md:-ml-16 lg:-ml-20"
            >
              <div className="max-w-4xl mt-12 md:mt-[30vh] lg:-translate-y-[1.5em]">
                {/* Headline: Stacked, large, left-aligned */}
                <h1
                  className={`text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight mb-6 md:mb-8 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  WATCH IDEAS
                  <br />
                  TURN INTO
                  <br />
                  REAL PRODUCTS
                </h1>
              </div>
            </motion.div>

            {/* Right Side: Video + Workflow Icons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full h-full flex flex-col items-center lg:items-start lg:relative"
            >
              {/* Video Container with glow effect - Centered vertically */}
              <div className="relative rounded-[28px] overflow-hidden border border-cyan-500/20 shadow-[0_0_40px_rgba(6,182,212,0.3),0_26px_90px_rgba(0,0,0,0.85)] w-full lg:w-[200%] lg:max-h-[120vh] lg:absolute lg:top-[calc(50%+8vh)] lg:left-[calc(50%+8vw)] lg:-translate-x-1/2 lg:-translate-y-1/2">
                <video
                  className="w-full h-full object-contain rounded-[28px]"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  onMouseEnter={(e) => {
                    e.target.controls = true;
                  }}
                  onMouseLeave={(e) => {
                    e.target.controls = false;
                  }}
                >
                  <source src="/tutorial/CHATGPT-UXPILOT-CURSOR-WEB.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Workflow Strip - Directly below video, center-aligned */}
              <motion.div
                className="mt-8 md:mt-12 lg:absolute lg:top-[calc(50%+36vh)] lg:left-[calc(50%-2.8vw)] lg:-translate-x-1/2 lg:mt-0 flex flex-col items-center w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <div className="flex flex-row items-center justify-center gap-2 md:gap-8 lg:gap-10">
            {/* Step 1: Idea */}
            <div className="flex flex-col items-center text-center max-w-[180px] lg:max-w-[200px]">
              <div className={`w-10 h-10 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px] rounded-full flex items-center justify-center mb-0 md:mb-3 ${
                theme === "dark" ? "bg-slate-800/50" : "bg-slate-100"
              }`}>
                <svg className={`w-5 h-5 md:w-8 md:h-8 lg:w-9 lg:h-9 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className={`hidden md:block font-semibold mb-2 text-sm md:text-base ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                {t.idea}
              </h3>
              <p className={`hidden md:block text-xs md:text-sm leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-slate-600"
              } ${language === "ar" ? "leading-relaxed" : ""}`}
              >
                {t.ideaDescription}
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="flex-shrink-0">
              <svg className={`w-3 h-3 md:w-6 md:h-6 ${theme === "dark" ? "text-gray-500" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Step 2: ChatGPT */}
            <div className="flex flex-col items-center text-center max-w-[180px] lg:max-w-[200px]">
              <div className="w-10 h-10 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px] rounded-full flex items-center justify-center mb-0 md:mb-3 overflow-hidden">
                <img
                  src="/chatgpt/cover.png"
                  alt="ChatGPT"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className={`hidden md:block font-semibold mb-2 text-sm md:text-base ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                {t.chatgptStep1}
              </h3>
              <p className={`hidden md:block text-xs md:text-sm leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-slate-600"
              } ${language === "ar" ? "leading-relaxed" : ""}`}
              >
                {t.chatgptStep1Description}
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="flex-shrink-0">
              <svg className={`w-3 h-3 md:w-6 md:h-6 ${theme === "dark" ? "text-gray-500" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Step 3: UX Pilot */}
            <div className="flex flex-col items-center text-center max-w-[180px] lg:max-w-[200px]">
              <div className="w-10 h-10 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px] rounded-full flex items-center justify-center mb-0 md:mb-3 overflow-hidden">
                <img
                  src="/ux-pilot-ai/cover.png"
                  alt="UX Pilot"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className={`hidden md:block font-semibold mb-2 text-sm md:text-base ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                {t.uxPilotStep}
              </h3>
              <p className={`hidden md:block text-xs md:text-sm leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-slate-600"
              } ${language === "ar" ? "leading-relaxed" : ""}`}
              >
                {t.uxPilotStepDescription}
              </p>
            </div>

            {/* Arrow 3 */}
            <div className="flex-shrink-0">
              <svg className={`w-3 h-3 md:w-6 md:h-6 ${theme === "dark" ? "text-gray-500" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Step 4: ChatGPT (again) */}
            <div className="flex flex-col items-center text-center max-w-[180px] lg:max-w-[200px]">
              <div className="w-10 h-10 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px] rounded-full flex items-center justify-center mb-0 md:mb-3 overflow-hidden">
                <img
                  src="/chatgpt/cover.png"
                  alt="ChatGPT"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className={`hidden md:block font-semibold mb-2 text-sm md:text-base ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                {t.chatgptStep2}
              </h3>
              <p className={`hidden md:block text-xs md:text-sm leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-slate-600"
              } ${language === "ar" ? "leading-relaxed" : ""}`}
              >
                {t.chatgptStep2Description}
              </p>
            </div>

            {/* Arrow 4 */}
            <div className="flex-shrink-0">
              <svg className={`w-3 h-3 md:w-6 md:h-6 ${theme === "dark" ? "text-gray-500" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Step 5: Cursor */}
            <div className="flex flex-col items-center text-center max-w-[180px] lg:max-w-[200px]">
              <div className="w-10 h-10 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px] rounded-full flex items-center justify-center mb-0 md:mb-3 overflow-hidden">
                <img
                  src="/cursor-ai/cover.png"
                  alt="Cursor"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className={`hidden md:block font-semibold mb-2 text-sm md:text-base ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                {t.cursorStep}
              </h3>
              <p className={`hidden md:block text-xs md:text-sm leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-slate-600"
              } ${language === "ar" ? "leading-relaxed" : ""}`}
              >
                {t.cursorStepDescription}
              </p>
            </div>
                </div>
                {/* Mobile workflow label - below all icons, single line */}
                <p className={`md:hidden mt-4 text-lg font-semibold text-center whitespace-nowrap ${
                  theme === "dark" ? "text-white/80" : "text-slate-700/80"
                }`}>
                  Idea → Design → Build → Ship
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

