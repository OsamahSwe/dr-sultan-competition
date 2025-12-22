// src/components/ToolDeck.jsx
import React from "react";
import { motion } from "framer-motion";
import "./toolDeck.css";
import TutorialCard from "./TutorialCard";
import { translations } from "../config/translations";

export default function ToolDeck({ theme = "dark", language = "en" }) {
  const t = translations[language];
  
  const tutorials = [
    {
      title: t.tutorialTitle,
      videoId: "PfofIwsj3hM",
      youtubeUrl: "https://youtu.be/PfofIwsj3hM?si=itTePnB3W0vJh9vP",
      status: "live",
    },
    {
      title: t.comingSoon,
      youtubeUrl: null,
      status: "tbd",
    },
    {
      title: t.comingSoon,
      youtubeUrl: null,
      status: "tbd",
    },
  ];
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
          className="mt-10 max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {tutorials.map((tutorial, index) => (
            <TutorialCard
              // exactly three featured cards, no more
              key={index}
              title={tutorial.title}
              youtubeUrl={tutorial.youtubeUrl}
              videoId={tutorial.videoId}
              status={tutorial.status}
              language={language}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}


