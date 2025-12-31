import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { translations } from "../config/translations";

function ToolShowcase({ theme = "dark", language = "en" }) {
  const navigate = useNavigate();
  const t = translations[language];
  const isDark = theme === "dark";

  // Claude AI tool data
  const tool = {
    name: "Claude AI",
    subtitle: "Conversational AI assistant for creation, reasoning, and ideation.",
    link: "https://claude.ai",
    heroImage: "/claude-hero/claude-logo-and-app.webp", // optional
    logo: "/claude-ai/cover.png", // fallback
  };

  const handleLearnMore = () => {
    navigate("/tool/claude");
  };

  // Fallback visual logic
  const renderHeroAccent = () => {
    if (tool.heroImage) {
      return (
        <img
          src={tool.heroImage}
          alt={tool.name}
          className="w-full h-full object-contain object-right"
        />
      );
    }
    if (tool.logo) {
      return (
        <img
          src={tool.logo}
          alt={tool.name}
          className="w-full h-full object-contain opacity-40"
        />
      );
    }
    return (
      <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/0" />
    );
  };

  return (
    <section
      id="explore-tools"
      className={`w-full min-h-screen relative scroll-mt-[60px] md:scroll-mt-0 ${
        isDark ? "" : "bg-black"
      }`}
    >
      {/* Dark Mode Background */}
      {isDark && (
        <div className="absolute inset-0 bg-black z-[1] pointer-events-none"></div>
      )}

      {/* Content Layout */}
      <div className="relative z-10 max-w-[1400px] ml-0 lg:ml-12 xl:ml-24 px-12 h-full min-h-screen flex items-center">
        {/* Text Content - Middle Left */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {/* Tool Name */}
          <h1
            className={`text-6xl md:text-7xl lg:text-8xl font-light mb-6 md:mb-8 text-white ${
              language === "ar" ? "arabic-hero" : "leading-tight"
            }`}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {tool.name}
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl font-light opacity-80 mb-8 md:mb-12 text-white ${
              language === "ar" ? "leading-relaxed" : ""
            }`}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {tool.subtitle}
          </p>

          {/* Actions - Horizontal */}
          <div className="flex flex-row gap-4 md:gap-6">
            {/* Primary Button - Try it now */}
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-3 md:py-4 border border-white/30 text-white hover:border-white/50 hover:bg-white/5 font-light text-base md:text-lg transition-all"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {t.tryItNow}
            </a>

            {/* Secondary Link - Learn more */}
            <button
              onClick={handleLearnMore}
              className="text-white/80 hover:text-white hover:opacity-100 font-light text-base md:text-lg transition-opacity flex items-center gap-2 bg-transparent border-none p-0 cursor-pointer"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <span>{t.learnMore}</span>
              <span>{t.arrow}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ToolShowcase;

