import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "./context/ThemeContext";
import Hero from "./components/Hero";
import FrameworkOverview from "./components/FrameworkOverview";
import ToolDeck from "./components/ToolDeck";
import AboutUs from "./components/AboutUs";
import ToolSelectorOverlay from "./components/ToolSelectorOverlay";
import { ToolSelectorProvider } from "./context/ToolSelectorContext";
import { motion } from "framer-motion";

function Home() {
  const { theme, toggleTheme } = useTheme();
  const { i18n } = useTranslation();
  const language = i18n.language;
  const [isMobile, setIsMobile] = useState(false);
  const [frameworkRemountKey, setFrameworkRemountKey] = useState(0);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  const mainClass =
    theme === "dark" ? "w-full bg-black text-white" : "w-full bg-white text-black";
  const isLightMode = theme === "light";

  // Handle hash navigation (e.g., #try-and-learn, #explore-tools)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#try-and-learn") {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById("try-and-learn");
        if (element) {
          const headerHeight = window.innerWidth < 768 ? 60 : 0;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
    if (hash === "#explore-tools") {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById("explore-tools");
        if (element) {
          const headerHeight = window.innerWidth < 768 ? 60 : 0;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, []);

  // Mobile detection (used to make in-view triggers more reliable on initial mobile load)
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener?.("change", update);
    return () => mql.removeEventListener?.("change", update);
  }, []);

  // Mobile-only: nudge Framer Motion to re-evaluate in-view on first load
  useEffect(() => {
    if (!isMobile) return;
    const id = window.requestAnimationFrame(() => {
      setFrameworkRemountKey((k) => k + 1);
    });
    return () => window.cancelAnimationFrame(id);
  }, [isMobile]);

  const frameworkViewport = useMemo(() => {
    if (!isMobile) return { once: true, amount: 0.35 };
    return { once: true, amount: 0.15, margin: "0px 0px -20% 0px" };
  }, [isMobile]);

  return (
    <ToolSelectorProvider>
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
            onToggleTheme={toggleTheme}
            language={language}
            onToggleLanguage={toggleLanguage}
          />
        </section>

      {/* Framework Overview section */}
      <motion.section
        key={frameworkRemountKey}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={frameworkViewport}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <FrameworkOverview theme={theme} language={language} />
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
      
      {/* Tool Selector Overlay */}
      <ToolSelectorOverlay theme={theme} language={language} />
    </main>
    </ToolSelectorProvider>
  );
}

export default Home;


