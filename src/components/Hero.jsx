import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import { useToolSelector } from "../context/ToolSelectorContext";
import RevealText from "./RevealText";

const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function Hero({ theme: themeProp, onToggleTheme: onToggleThemeProp, language: languageProp, onToggleLanguage: onToggleLanguageProp }) {
  const { theme: themeContext, toggleTheme: toggleThemeContext } = useTheme();
  const { t, i18n } = useTranslation();
  const { isToolSelectorOpen } = useToolSelector();

  // Use props if provided (for backward compatibility), otherwise use context
  const theme = themeProp || themeContext;
  const onToggleTheme = onToggleThemeProp || toggleThemeContext;
  const language = languageProp || i18n.language;
  const onToggleLanguage = onToggleLanguageProp || (() => i18n.changeLanguage(i18n.language === "en" ? "ar" : "en"));

  const isLightMode = theme === "light";
  const headingLines = t("heroHeading").split("\n");

  return (
    <section className={`relative h-screen w-full overflow-hidden ${isToolSelectorOpen ? "opacity-60 transition-opacity duration-300" : ""}`}>
      {/* Fallback Background Gradient */}
      <div
        className={`absolute inset-0 w-full h-full bg-gradient-to-br ${
          isLightMode
            ? "from-gray-200 via-white to-gray-100"
            : "from-gray-900 via-black to-gray-800"
        }`}
      ></div>
      
      {/* Video Background - Dark Mode */}
      {/* Dark mode video that shows when theme is dark */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-video-v2.mp4" type="video/mp4" />
      </video>

      {/* Video Background - Light Mode */}
      {/* Light mode video that shows when theme is light */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/light-mode.mp4" type="video/mp4" />
      </video>

      {/* Overlay for readability */}
      <div
        className={`absolute inset-0 z-10 ${
          isLightMode ? "bg-white/40" : "bg-black/50"
        }`}
      ></div>

      {/* Top Navigation */}
      {/* Navigation bar positioned at the top */}
      <nav className="hero-top-nav relative z-20 flex items-center justify-between px-6 md:px-12 pt-6 md:pt-8">
        {/* Logo - Left side */}
        <motion.div
          key={language}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <RevealText
            direction="up"
            delay={0}
            triggerOnView={true}
            className=""
          >
            <img
              src="/logo.png"
              alt="NEAI Logo"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </RevealText>
        </motion.div>
        
        {/* Navigation Links - Right side */}
        <div
          className={`flex items-center gap-7 md:gap-10 text-base md:text-lg font-light ${
            isLightMode ? "text-black" : "text-white"
          }`}
        >
          <button
            onClick={onToggleLanguage}
            className="lang-toggle hover:opacity-70 transition-opacity cursor-pointer bg-transparent border-none"
          >
            <span className="lang-label-full">
              <RevealText
                direction="up"
                delay={100}
                triggerOnView={true}
                className=""
              >
                English | العربية
              </RevealText>
            </span>
            <span className="lang-label-short">EN | AR</span>
          </button>
          <button
            onClick={onToggleTheme}
            className="hover:opacity-70 transition-opacity flex items-center gap-2 cursor-pointer bg-transparent border-none p-0"
          >
            <img
              src="/exposure-time.png"
              alt="mode icon"
              className="w-6 h-6"
            />
            <RevealText
              direction="up"
              delay={150}
              triggerOnView={true}
              className=""
            >
              {isLightMode ? t("darkMode") : t("lightMode")}
            </RevealText>
          </button>
          {/* <a
            href="#menu"
            className="hover:opacity-70 transition-opacity flex items-center gap-2"
          >
            menu
            <img
              src="/transparent-hd-white-menu-icon.png"
              alt="menu icon"
              className="w-6 h-6"
            />
          </a> */}
        </div>
      </nav>

      {/* Main Hero Content */}
      {/* Vertically centered content, slightly left-aligned */}
      <motion.div
        className="relative z-20 flex flex-col justify-center h-full px-6 md:px-12 lg:px-16"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={language}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Main Heading - Multi-line, light font weight */}
              {/* This English hero text stays in English with exact typography even when language is Arabic */}
              <h1
                className={`text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight mb-6 md:mb-8 ${
                  isLightMode ? "text-black" : "text-white"
                }`}
              >
                {headingLines.map((line, index) => (
                  <span key={index}>
                    <RevealText
                      direction="up"
                      delay={200 + index * 100}
                      triggerOnView={true}
                      className=""
                    >
                      {line}
                    </RevealText>
                    {index < headingLines.length - 1 && <br />}
                  </span>
                ))}
              </h1>

              {/* Sub-text Row */}
              {/* Small row with about us link */}
              <div
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 ${
                  language === "ar" ? "mt-5 md:mt-6" : ""
                } ${
                  isLightMode ? "text-black" : "text-white"
                }`}
              >
                {/* About Us link */}
                <a
                  href="#about-us"
                  className={`hero-cta ${
                    language === "ar" 
                      ? "arabic-hero-cta" 
                      : "font-light"
                  } hover:opacity-70 transition-opacity flex items-center gap-2`}
                >
                  <RevealText
                    direction="up"
                    delay={400}
                    triggerOnView={true}
                    className=""
                  >
                    {t("aboutUs")}
                  </RevealText>
                  <span className="text-lg">{t("arrow")}</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Side Label */}
      {/* Vertical label on the right edge of the screen */}
      <div className="absolute end-0 top-1/2 -translate-y-1/2 z-20">
        <div
          className={`backdrop-blur-md px-2 py-12 rounded-s-lg border ${
            isLightMode
              ? "bg-gradient-to-b from-teal-200 via-cyan-200/90 to-emerald-200/90 border-teal-300/80 shadow-[0_10px_30px_rgba(34,197,94,0.25)]"
              : "bg-teal-400/20 border-white/10 shadow-[0_10px_24px_rgba(16,185,129,0.35)]"
          }`}
        >
          <div
            className={`text-xs font-semibold uppercase tracking-wider transform -rotate-90 whitespace-nowrap ${
              isLightMode ? "text-teal-800" : "text-white"
            }`}
          >
            AI
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

