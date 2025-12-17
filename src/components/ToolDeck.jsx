// src/components/ToolDeck.jsx
import React from "react";
import { motion } from "framer-motion";
import "./toolDeck.css";
import TutorialCard from "./TutorialCard";

const tutorials = [
  {
    title: "Build a Modern AI Login Page with ChatGPT | Cursor | UX Pilot",
    videoId: "PfofIwsj3hM",
    youtubeUrl: "https://youtu.be/PfofIwsj3hM?si=itTePnB3W0vJh9vP",
    status: "live",
  },
  {
    title: "Ship Faster with Cursor (Coming Soon)",
    youtubeUrl: null,
    status: "tbd",
  },
  {
    title: "Design Better UX Flows Using AI (Coming Soon)",
    youtubeUrl: null,
    status: "tbd",
  },
];

export default function ToolDeck({ theme = "dark" }) {
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
          <div>
            <p
              className={`text-lg md:text-xl font-semibold mb-3 ${
                theme === "dark" ? "text-teal-300" : "text-teal-600"
              }`}
            >
              Watch & Build
            </p>
            <h2 className="tooldeck-title">
              Practical Tutorials
            </h2>
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
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}


