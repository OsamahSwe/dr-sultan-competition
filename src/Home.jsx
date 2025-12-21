import Hero from "./components/Hero";
import AiToolGallery from "./components/AiToolGallery";
import ToolDeck from "./components/ToolDeck";
import AboutUs from "./components/AboutUs";
import MobileHeader from "./components/MobileHeader";
import { motion } from "framer-motion";

function Home({ theme = "dark", onToggleTheme, language = "en", onToggleLanguage }) {
  const mainClass =
    theme === "dark" ? "w-full bg-black text-white" : "w-full bg-white text-black";
  const isLightMode = theme === "light";

  return (
    <>
      <MobileHeader
        theme={theme}
        language={language}
        onToggleLanguage={onToggleLanguage}
        onToggleTheme={onToggleTheme}
      />
      <main className={`${mainClass} relative`}>
      {/* Full-page light mode video background */}
      {isLightMode && (
        <video
          className="fixed inset-0 w-full h-full object-cover pointer-events-none z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/light-mode.mp4" type="video/mp4" />
        </video>
      )}

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
        {/* Hero / Landing section with video */}
        <section className="h-screen">
          <Hero
            theme={theme}
            onToggleTheme={onToggleTheme}
            language={language}
            onToggleLanguage={onToggleLanguage}
          />
        </section>

      {/* Horizontal AI tool gallery placed directly under hero */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <AiToolGallery theme={theme} language={language} />
      </motion.section>

      {/* Center-snapping Tool Deck section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <ToolDeck theme={theme} language={language} />
      </motion.section>

      {/* About Us section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <AboutUs theme={theme} language={language} />
      </motion.section>
      </div>
    </main>
    </>
  );
}

export default Home;


