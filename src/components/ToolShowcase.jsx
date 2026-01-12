import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import { useToolSelector } from "../context/ToolSelectorContext";
import { getToolById } from "../data/toolData";

// Map tool IDs to their hero image filenames (folder structure: /{tool}-hero/{filename})
const getToolHeroImage = (toolId) => {
  const heroImageMap = {
    chatgpt: "0_nu7giaItaETOmJ_d.gif",
    claude: "ysbKYDSKpnGX3Kv5D4gChnc8.webp",
    codex: "codex.gif",
    cursor: "0_VfWmB7dy737ViF0F.gif",
    deepseek: "deepseek_r1_example_en.gif",
    gemini: "Guided Learning Comparison_compressed.gif",
    copilot: "jest_unit_tests.webp", // github-copilot-hero folder
    lovable: "agent-mode-beta.gif",
    uxpilot: "1714335360-matchmakingdesktop-optimize.gif", // ux-pilot-hero folder
  };
  
  const filename = heroImageMap[toolId];
  if (!filename) return null;
  
  // Handle special folder naming cases
  let folderName;
  if (toolId === "copilot") {
    folderName = "github-copilot-hero";
  } else if (toolId === "uxpilot") {
    folderName = "ux-pilot-hero";
  } else if (toolId === "lovable") {
    folderName = "loveable-hero"; // Note: folder uses "loveable" not "lovable"
  } else {
    folderName = `${toolId}-hero`;
  }
  
  return `/${folderName}/${filename}`;
};

function ToolShowcase({ theme: themeProp, language: languageProp }) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { theme: themeContext } = useTheme();
  const { selectedTool } = useToolSelector();

  // Support both props and context with fallback
  const theme = themeProp || themeContext;
  const language = languageProp || i18n.language;
  const isDark = theme === "dark";
  const isLightMode = theme === "light";
  
  // Get tool data from toolData.js, default to claude
  const toolId = selectedTool || "claude";
  const toolData = getToolById(toolId);
  
  // If tool data not found, fallback to claude
  const tool = toolData || getToolById("claude");

  const handleLearnMore = () => {
    navigate(`/tool/${toolId}`);
  };

  const heroImage = getToolHeroImage(toolId);

  return (
    <section
      id="explore-tools"
      className="w-full min-h-screen relative scroll-mt-[60px] md:scroll-mt-0 overflow-hidden"
    >
      {/* Fallback Background Gradient */}
      <div
        className={`absolute inset-0 w-full h-full bg-gradient-to-br ${
          isLightMode
            ? "from-gray-200 via-white to-gray-100"
            : "from-gray-900 via-black to-gray-800"
        }`}
      ></div>

      {/* Video Background - Dark Mode */}
      {isDark && (
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-[1]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-video-v2.mp4" type="video/mp4" />
        </video>
      )}

      {/* Video Background - Light Mode */}
      {isLightMode && (
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-[1] opacity-30"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/light-mode.mp4" type="video/mp4" />
        </video>
      )}

      {/* Overlay for readability */}
      <div
        className={`absolute inset-0 z-[1] pointer-events-none ${
          isLightMode ? "bg-white/40" : "bg-black/50"
        }`}
      ></div>

      {/* Content Layout - Grid: Left content, Right hero image */}
      <div className="relative z-10 max-w-[1400px] ms-0 lg:ms-12 xl:ms-24 px-12 h-full min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[0.9fr_1.5fr] gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Text Content - Left Side */}
          <AnimatePresence mode="wait">
            <motion.div
              key={toolId}
              className="w-full"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {/* Tool Name */}
              <h1
                className={`text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-6 md:mb-8 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                {tool.shortName || tool.name}
              </h1>

              {/* Subtitle */}
              <p
                className={`text-xl md:text-2xl font-light opacity-80 mb-8 md:mb-12 ${
                  isDark ? "text-white" : "text-slate-700"
                } ${language === "ar" ? "leading-relaxed" : ""}`}
              >
                {tool.tagline}
              </p>

              {/* Actions - Horizontal */}
              <div className="flex flex-row gap-4 md:gap-6">
                {/* Primary Button - Try it now */}
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 md:px-8 py-3 md:py-4 border font-light text-base md:text-lg transition-all ${
                    isDark
                      ? "border-white/30 text-white hover:border-white/50 hover:bg-white/5"
                      : "border-slate-300 text-black hover:border-slate-400 hover:bg-slate-50"
                  }`}
                >
                  {t("tryItNow")}
                </a>

                {/* Secondary Link - Learn more */}
                <button
                  onClick={handleLearnMore}
                  className={`font-light text-base md:text-lg transition-opacity flex items-center gap-2 bg-transparent border-none p-0 cursor-pointer ${
                    isDark
                      ? "text-white/80 hover:text-white hover:opacity-100"
                      : "text-slate-700/80 hover:text-black hover:opacity-100"
                  }`}
                >
                  <span>{t("learnMore")}</span>
                  <span>{t("arrow")}</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Hero Image - Right Side (Desktop only, hidden on mobile) */}
          {heroImage && (
            <AnimatePresence mode="wait">
              <motion.div
                key={toolId}
                className="hidden lg:flex relative w-full h-full min-h-[600px] items-center justify-end -me-12 xl:-me-24"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <div className="relative w-full h-full flex items-center justify-end">
                  <img
                    src={heroImage}
                    alt={tool.name}
                    className="w-full h-auto max-h-[900px] xl:max-h-[1000px] 2xl:max-h-[1100px] object-contain object-right rtl:object-left"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}

export default ToolShowcase;
