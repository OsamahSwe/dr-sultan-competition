import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import { ArrowRight, Layers } from "lucide-react";
import { getTranslatedStages } from "../data/aiToolsCategorizationData";
import RevealText from "./RevealText";

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

export default function FrameworkOverview({ theme, language }) {
  const { t, i18n } = useTranslation();
  const stages = getTranslatedStages(i18n.language);
  const isLightMode = theme === "light";

  const cardClass = isLightMode 
    ? "bg-slate-50 border-slate-200 hover:border-teal-500/50" 
    : "bg-white/5 border-white/10 hover:border-teal-500/50";
  const headingClass = isLightMode ? "text-slate-900" : "text-white";
  const textClass = isLightMode ? "text-slate-600" : "text-gray-300";

  return (
    <section className={`py-20 md:py-32 px-6 relative ${isLightMode ? "bg-white" : "bg-transparent"}`}>
       <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
            <div className="max-w-2xl">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 ${
                  isLightMode ? "bg-teal-100 text-teal-800" : "bg-teal-500/20 text-teal-300"
                }`}>
                    <Layers size={14} />
                    <span>FRAMEWORK</span>
                </div>
                
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light mb-6 ${headingClass}`}>
                    <RevealText direction="up" delay={0} triggerOnView={true}>
                        {t("frameworkTitle")}
                    </RevealText>
                </h2>
                <p className={`text-lg md:text-xl leading-relaxed ${textClass}`}>
                    <RevealText direction="up" delay={0.1} triggerOnView={true}>
                        {t("frameworkSubtitle")}
                    </RevealText>
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <Link
                    to="/framework"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                        isLightMode 
                        ? "bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-600/20" 
                        : "bg-teal-500 text-black hover:bg-teal-400 shadow-lg shadow-teal-500/20"
                    }`}
                >
                    <span>{t("explore")} Framework</span>
                    <ArrowRight size={18} className="rtl:rotate-180" />
                </Link>
            </motion.div>
        </div>

        <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {stages.map((phase, index) => (
                <motion.div
                    key={phase.id}
                    variants={itemVariants}
                    className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${cardClass}`}
                >
                    <div className="absolute top-8 ltr:right-8 rtl:left-8 text-6xl font-bold opacity-[0.03] select-none">
                        {index + 1}
                    </div>

                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl font-bold ${
                        isLightMode ? "bg-teal-50 text-teal-600" : "bg-teal-500/10 text-teal-400"
                    }`}>
                        {index + 1}
                    </div>

                    <h3 className={`text-xl font-bold mb-3 ${headingClass}`}>
                        {phase.title}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed mb-6 line-clamp-3 ${textClass}`}>
                        {phase.theShift}
                    </p>

                    <div className="flex items-center gap-2 mt-auto">
                        <span className={`text-sm font-medium border-b border-transparent group-hover:border-current transition-all ${
                            isLightMode ? "text-teal-600" : "text-teal-400"
                        }`}>
                            {t("learnMore")}
                        </span>
                        <ArrowRight size={14} className={`transform transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 ${
                             isLightMode ? "text-teal-600" : "text-teal-400"
                        }`} />
                    </div>
                    
                    <Link to={`/phase/${phase.id}`} className="absolute inset-0 z-10" aria-label={`View ${phase.title}`} />
                </motion.div>
            ))}
        </motion.div>

        <div className="mt-12 text-center md:hidden">
             <Link
                to="/framework"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all w-full justify-center ${
                    isLightMode 
                    ? "bg-teal-600 text-white hover:bg-teal-700" 
                    : "bg-teal-500 text-black hover:bg-teal-400"
                }`}
            >
                <span>{t("explore")} Framework</span>
                <ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
        </div>
       </div>
    </section>
  );
}
