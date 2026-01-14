import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import { ArrowRight, Layers, ArrowLeft } from "lucide-react";
import { getTranslatedStages } from "../data/aiToolsCategorizationData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

function FrameworkPage() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isLightMode = theme === "light";
  
  const stages = getTranslatedStages(i18n.language);

  const mainClass = isLightMode ? "bg-white text-black" : "bg-black text-white";
  const cardClass = isLightMode 
    ? "bg-slate-50 border-slate-200 hover:border-teal-500/50" 
    : "bg-white/5 border-white/10 hover:border-teal-500/50";
  const headingClass = isLightMode ? "text-slate-900" : "text-white";
  const textClass = isLightMode ? "text-slate-600" : "text-gray-300";
  const mutedTextClass = isLightMode ? "text-slate-500" : "text-gray-400";

  return (
    <main className={`min-h-screen ${mainClass}`}>
       {/* Navigation Bar */}
       <nav className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{
        backgroundColor: isLightMode 
          ? "rgba(255, 255, 255, 0.9)" 
          : "rgba(0, 0, 0, 0.9)",
        borderColor: isLightMode ? "rgba(226, 232, 240, 0.5)" : "rgba(255, 255, 255, 0.1)"
      }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            <Link to="/" className="shrink-0">
              <img
                src="/logo.png"
                alt="NEAI Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <Link
              to="/"
              className={`flex items-center gap-2 ${isLightMode ? "text-teal-600" : "text-teal-400"} hover:opacity-70 transition-opacity`}
            >
              <ArrowLeft size={20} className="rtl:rotate-180" />
              <span className="hidden sm:inline">{t("backToHome")}</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2">
              <Layers size={18} className={mutedTextClass} />
              <span className={`text-sm font-medium ${headingClass}`}>{t("frameworkTitle")}</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")}
                className={`text-sm font-medium hover:opacity-70 transition-opacity ${headingClass}`}
              >
                {i18n.language === "en" ? "AR" : "EN"}
              </button>
              <button
                onClick={toggleTheme}
                className="hover:opacity-70 transition-opacity flex items-center"
              >
                <img src="/exposure-time.png" alt="toggle theme" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${headingClass}`}>
            {t("frameworkTitle")}
          </h1>
          <p className={`text-lg md:text-xl ${textClass} leading-relaxed`}>
            {t("frameworkSubtitle")}
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stages.map((phase, index) => (
            <motion.div
              key={phase.id}
              variants={itemVariants}
              className={`group flex flex-col h-full p-8 rounded-2xl border transition-all duration-300 ${cardClass}`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`text-5xl font-bold opacity-20 ${isLightMode ? "text-teal-900" : "text-teal-100"}`}>
                  0{index + 1}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isLightMode ? "bg-teal-100 text-teal-600" : "bg-teal-500/20 text-teal-400"}`}>
                  <Layers size={20} />
                </div>
              </div>

              <h2 className={`text-2xl font-bold mb-4 ${headingClass}`}>
                {phase.title}
              </h2>
              
              <p className={`${textClass} mb-8 flex-grow leading-relaxed`}>
                {phase.theShift}
              </p>

              <Link
                to={`/phase/${phase.id}`}
                className={`inline-flex items-center justify-between w-full px-6 py-3 rounded-xl font-medium transition-all ${
                  isLightMode 
                    ? "bg-white border border-slate-200 text-slate-900 hover:border-teal-500 hover:text-teal-600 shadow-sm" 
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-teal-500/50"
                }`}
              >
                <span>{t("viewDeepDive")}</span>
                <ArrowRight size={18} className="rtl:rotate-180" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

export default FrameworkPage;
