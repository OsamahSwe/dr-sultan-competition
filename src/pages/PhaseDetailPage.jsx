import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import { ArrowLeft, CheckCircle2, ArrowRight, ExternalLink, Lightbulb } from "lucide-react";
import { getTranslatedStage } from "../data/aiToolsCategorizationData";
import { getToolById } from "../data/toolData";
import { getTranslatedTool } from "../data/toolTranslations";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

function PhaseDetailPage() {
  const { phaseId } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isLightMode = theme === "light";

  const phase = getTranslatedStage(phaseId, i18n.language);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [phaseId]);

  if (!phase) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isLightMode ? "bg-white text-black" : "bg-black text-white"}`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Phase Not Found</h1>
          <Link to="/framework" className="text-teal-500 hover:underline">Return to Framework</Link>
        </div>
      </div>
    );
  }

  const mainClass = isLightMode ? "bg-white text-black" : "bg-black text-white";
  const cardClass = isLightMode 
    ? "bg-slate-50 border-slate-200" 
    : "bg-white/5 border-white/10";
  const headingClass = isLightMode ? "text-slate-900" : "text-white";
  const textClass = isLightMode ? "text-slate-600" : "text-gray-300";
  const mutedTextClass = isLightMode ? "text-slate-500" : "text-gray-400";
  const subheadingClass = isLightMode ? "text-teal-600" : "text-teal-400";

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
          <Link
            to="/framework"
            className={`flex items-center gap-2 ${subheadingClass} hover:opacity-70 transition-opacity`}
          >
            <ArrowLeft size={20} className="rtl:rotate-180" />
            <span>{t("backToFramework")}</span>
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:block text-sm font-medium opacity-50">
              {t("phase")}: {phase.title}
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

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-16"
        >
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${isLightMode ? "bg-teal-100 text-teal-700" : "bg-teal-500/20 text-teal-300"}`}>
            {t("phaseBenefit")}
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight ${headingClass}`}>
            {phase.title}
          </h1>
          <p className={`text-xl md:text-2xl ${textClass} max-w-4xl leading-relaxed`}>
            {phase.finalProductBenefit}
          </p>
        </motion.div>

        {/* Details Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${headingClass}`}>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${isLightMode ? "bg-teal-100 text-teal-700" : "bg-teal-500/20 text-teal-400"}`}>01</span>
              {t("phaseGoals")}
            </h2>
            <div className={`p-8 rounded-2xl border ${cardClass}`}>
              <ul className="space-y-4">
                {phase.phaseGoals.map((goal, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle2 className={`flex-shrink-0 mt-1 ${isLightMode ? "text-teal-600" : "text-teal-400"}`} size={20} />
                    <span className={textClass}>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${headingClass}`}>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${isLightMode ? "bg-purple-100 text-purple-700" : "bg-purple-500/20 text-purple-400"}`}>02</span>
              {t("whatYouNeedToStart")}
            </h2>
            <div className={`p-8 rounded-2xl border ${cardClass}`}>
              <ul className="space-y-4">
                {phase.prerequisites.map((prereq, idx) => (
                  <li key={idx} className="flex gap-3">
                    <Lightbulb className={`flex-shrink-0 mt-1 ${isLightMode ? "text-purple-600" : "text-purple-400"}`} size={20} />
                    <span className={textClass}>{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Toolset Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <h2 className={`text-3xl font-bold mb-10 ${headingClass}`}>{t("recommendedTools")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phase.toolKeys.map((toolKey) => {
              const tool = getToolById(toolKey);
              if (!tool) return null;
              
              const translatedTool = getTranslatedTool(toolKey, i18n.language);
              
              return (
                <motion.div
                  key={tool.id}
                  variants={fadeInUp}
                  className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${cardClass} hover:shadow-xl`}
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl overflow-hidden"
                    style={{ backgroundColor: `${tool.iconBg}20`, color: tool.iconBg }}
                  >
                   {tool.image ? (
                     <img src={tool.image} alt={tool.name} className="w-full h-full object-cover" />
                   ) : (
                     <span className="font-bold">{tool.shortName[0]}</span>
                   )}
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-2 ${headingClass}`}>
                    {translatedTool.name || tool.name}
                  </h3>
                  
                  <p className={`text-sm mb-6 line-clamp-2 ${mutedTextClass}`}>
                    {translatedTool.tagline || tool.tagline}
                  </p>

                  <Link
                    to={`/tool/${tool.id}`}
                    className={`inline-flex items-center gap-2 font-medium transition-colors ${subheadingClass} hover:opacity-80`}
                  >
                    {t("learnMore")}
                    <ArrowRight size={16} className="rtl:rotate-180" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default PhaseDetailPage;
