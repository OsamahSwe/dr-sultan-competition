import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import { useToolSelector } from "../context/ToolSelectorContext";
import { getAllTools } from "../data/toolData";

// Get all tools from toolData and create config
const getAllToolConfig = () => {
  const allTools = getAllTools();
  // Order the tools as specified: chatgpt, claude, codex, cursor, deepseek, gemini, loveable, ux-pilot
  const toolOrder = ["chatgpt", "claude", "codex", "cursor", "deepseek", "gemini", "lovable", "uxpilot"];
  
  return toolOrder
    .map(id => allTools.find(tool => tool.id === id))
    .filter(Boolean);
};

function ToolSelectorOverlay({ theme: themeProp, language: languageProp }) {
  const { isToolSelectorOpen, selectedTool, closeToolSelector, selectTool } = useToolSelector();
  const { t, i18n } = useTranslation();
  const { theme: themeContext } = useTheme();
  const panelRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

  // Support both props and context with fallback
  const theme = themeProp || themeContext;
  const language = languageProp || i18n.language;
  const isLightMode = theme === "light";

  const toolConfig = getAllToolConfig();

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isToolSelectorOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      
      // Apply scroll lock class
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore scroll position and unlock body
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isToolSelectorOpen]);

  // Handle ESC key to close
  useEffect(() => {
    if (!isToolSelectorOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeToolSelector();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isToolSelectorOpen, closeToolSelector]);

  // Focus trap
  useEffect(() => {
    if (!isToolSelectorOpen || !panelRef.current) return;

    const focusableElements = panelRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstFocusableRef.current = firstElement;
    lastFocusableRef.current = lastElement;

    // Focus first element when overlay opens
    firstElement?.focus();

    const handleTab = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isToolSelectorOpen]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeToolSelector();
    }
  };

  // Handle tool selection - all tools are clickable
  const handleToolClick = (toolId) => {
    selectTool(toolId);
  };

  // Animation variants with reduced motion support
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const panelVariants = {
    hidden: prefersReducedMotion
      ? { opacity: 0 }
      : { opacity: 0, scale: 0.95 },
    visible: prefersReducedMotion
      ? { opacity: 1 }
      : { opacity: 1, scale: 1 },
  };

  return (
    <AnimatePresence>
      {isToolSelectorOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          transition={{ duration: 0.2 }}
          style={{
            backgroundColor: isLightMode ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.65)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="tool-selector-title"
        >
          <motion.div
            ref={panelRef}
            className={`w-full max-w-[640px] rounded-xl md:rounded-2xl backdrop-blur-md ${
              isLightMode
                ? "bg-white/85 border border-slate-200/70 shadow-[0_32px_110px_rgba(15,23,42,0.16)]"
                : "bg-black/40 border border-white/10 shadow-[0_32px_110px_rgba(0,0,0,0.8)]"
            } max-h-[90vh] overflow-y-auto overscroll-contain`}
            style={{ WebkitOverflowScrolling: 'touch' }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={panelVariants}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 md:p-6 lg:p-8">
              {/* Title */}
              <h2
                id="tool-selector-title"
                className={`text-xl md:text-2xl lg:text-3xl font-light mb-2 ${
                  isLightMode ? "text-black" : "text-white"
                } ${language === "ar" ? "arabic-section-title" : ""}`}
              >
                {t("chooseYourTool")}
              </h2>

              {/* Subtitle - Hidden on mobile */}
              <p
                className={`hidden md:block text-sm md:text-base mb-4 md:mb-6 lg:mb-8 ${
                  isLightMode ? "text-gray-600" : "text-gray-400"
                } ${language === "ar" ? "leading-relaxed" : ""}`}
              >
                {t("eachToolDifferent")}
              </p>

              {/* Tool Cards Grid - Single column on mobile, 2 columns on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3 lg:gap-4">
                {toolConfig.map((tool) => {
                  const isSelected = selectedTool === tool.id;

                  // Use custom description for Claude, tagline for others
                  const description = tool.id === "claude" 
                    ? "Think · Reason · Create"
                    : tool.tagline;

                  // Get tool's accent color for selected state
                  const toolColor = tool.color || "#14b8a6"; // Default to teal if no color
                  
                  // Convert hex to rgba for opacity control
                  const hexToRgba = (hex, alpha) => {
                    const r = parseInt(hex.slice(1, 3), 16);
                    const g = parseInt(hex.slice(3, 5), 16);
                    const b = parseInt(hex.slice(5, 7), 16);
                    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
                  };

                  return (
                    <button
                      key={tool.id}
                      onClick={() => handleToolClick(tool.id)}
                      className={`relative p-3 md:p-4 lg:p-5 rounded-xl text-left transition-all border ${
                        isSelected
                          ? "backdrop-blur-sm"
                          : isLightMode
                          ? "bg-white/60 border-slate-200/50 hover:border-slate-300/50 hover:bg-white/70 backdrop-blur-sm"
                          : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10 backdrop-blur-sm"
                      } focus:outline-none focus:ring-1 focus:ring-offset-1 ${
                        isLightMode 
                          ? "focus:ring-slate-400/30 focus:ring-offset-white/85" 
                          : "focus:ring-white/20 focus:ring-offset-black/40"
                      } min-h-[48px] md:min-h-0`}
                      style={
                        isSelected 
                          ? {
                              // Selection styles - ONLY applied when isSelected === true
                              borderColor: hexToRgba(toolColor, 0.5),
                              backgroundColor: isLightMode 
                                ? hexToRgba(toolColor, 0.08)
                                : hexToRgba(toolColor, 0.12),
                              boxShadow: `0 0 0 1px ${hexToRgba(toolColor, 0.25)}, 0 4px 12px ${hexToRgba(toolColor, 0.15)}`,
                            }
                          : {
                              // Explicitly clear selection styles when NOT selected
                              borderColor: undefined,
                              backgroundColor: undefined,
                              boxShadow: undefined,
                            }
                      }
                      aria-label={tool.name}
                    >
                      {/* Tool Logo and Name - Always visible */}
                      {tool.image && (
                        <div className="flex items-center gap-3">
                          <img
                            src={tool.image}
                            alt={tool.shortName || tool.name}
                            className="w-10 h-10 md:w-12 md:h-12 object-contain flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h3
                              className={`text-base md:text-lg font-medium ${
                                isLightMode ? "text-black" : "text-white"
                              }`}
                            >
                              {tool.shortName || tool.name}
                            </h3>
                          </div>
                        </div>
                      )}

                      {/* Description - Hidden on mobile, visible on desktop */}
                      <p
                        className={`hidden md:block text-sm leading-relaxed mt-3 ${
                          isLightMode ? "text-gray-600" : "text-gray-400"
                        }`}
                      >
                        {description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ToolSelectorOverlay;
