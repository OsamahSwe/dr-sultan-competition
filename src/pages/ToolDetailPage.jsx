import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2, Lightbulb, DollarSign, TrendingUp, AlertCircle } from "lucide-react";
import { getToolById } from "../data/toolData";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

function ToolDetailPage({ theme = "dark" }) {
  const { toolId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("features");
  const tool = getToolById(toolId);

  const isLightMode = theme === "light";

  // Scroll to top when component mounts or toolId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [toolId]);

  if (!tool) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isLightMode ? "bg-white text-black" : "bg-black text-white"}`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
          <Link to="/" className="text-teal-500 hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  const mainClass = isLightMode ? "bg-white text-black" : "bg-black text-white";
  const cardClass = isLightMode
    ? "bg-slate-50 border-slate-200"
    : "bg-white/5 border-white/10";
  const headingClass = isLightMode ? "text-black" : "text-white";
  const subheadingClass = isLightMode ? "text-teal-600" : "text-teal-300";
  const textClass = isLightMode ? "text-slate-700" : "text-gray-300";
  const mutedTextClass = isLightMode ? "text-slate-500" : "text-gray-400";

  return (
    <main className={`min-h-screen ${mainClass}`}>
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{
        backgroundColor: isLightMode ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
        borderColor: isLightMode ? "rgba(226, 232, 240, 0.5)" : "rgba(255, 255, 255, 0.1)"
      }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className={`flex items-center gap-2 ${subheadingClass} hover:opacity-70 transition-opacity`}
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center gap-4">
            <span className={`text-sm ${mutedTextClass}`}>{tool.category}</span>
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${isLightMode ? "bg-teal-600 text-white hover:bg-teal-700" : "bg-teal-500 text-black hover:bg-teal-400"} transition-colors`}
            >
              Visit Site
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${isLightMode ? "bg-teal-100 text-teal-700" : "bg-teal-500/20 text-teal-300"}`}
                variants={fadeInUp}
              >
                {tool.role}
              </motion.div>
              <motion.h1
                className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${headingClass}`}
                variants={fadeInUp}
              >
                {tool.name}
              </motion.h1>
              <motion.p
                className={`text-xl md:text-2xl mb-8 ${textClass} leading-relaxed`}
                variants={fadeInUp}
              >
                {tool.tagline}
              </motion.p>
              <motion.p
                className={`text-lg ${mutedTextClass} leading-relaxed mb-8`}
                variants={fadeInUp}
              >
                {tool.overview}
              </motion.p>
              <motion.div className="flex gap-4" variants={fadeInUp}>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-8 py-4 rounded-full text-lg font-medium ${isLightMode ? "bg-teal-600 text-white hover:bg-teal-700" : "bg-teal-500 text-black hover:bg-teal-400"} transition-all hover:scale-105`}
                >
                  Try {tool.shortName}
                </a>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              className="relative"
              variants={fadeInUp}
            >
              <div
                className="rounded-3xl overflow-hidden border-2 shadow-2xl"
                style={{
                  borderColor: tool.color,
                  boxShadow: `0 25px 50px ${tool.color}40`
                }}
              >
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Tab Navigation */}
      <div className={`sticky top-[73px] z-40 border-b backdrop-blur-xl`} style={{
        backgroundColor: isLightMode ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
        borderColor: isLightMode ? "rgba(226, 232, 240, 0.5)" : "rgba(255, 255, 255, 0.1)"
      }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8 overflow-x-auto">
            {["features", "use-cases", "how-to-use", "pricing"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-medium capitalize whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab
                    ? `${isLightMode ? "border-teal-600 text-teal-600" : "border-teal-400 text-teal-400"}`
                    : `border-transparent ${mutedTextClass} hover:${textClass}`
                }`}
              >
                {tab.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Key Features */}
        {activeTab === "features" && (
          <motion.section
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h2 className={`text-3xl md:text-4xl font-bold mb-12 ${headingClass}`} variants={fadeInUp}>
              Key Features
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {tool.keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`p-8 rounded-2xl border ${cardClass}`}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-12 h-12 rounded-full ${isLightMode ? "bg-teal-100" : "bg-teal-500/20"} flex items-center justify-center mb-4`}>
                    <CheckCircle2 className={subheadingClass} size={24} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${headingClass}`}>
                    {feature.title}
                  </h3>
                  <p className={textClass}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Best Practices */}
            <motion.div className="mt-16" variants={fadeInUp}>
              <h3 className={`text-2xl md:text-3xl font-bold mb-8 ${headingClass}`}>
                Best Practices
              </h3>
              <div className={`p-8 rounded-2xl border ${cardClass}`}>
                <ul className="space-y-4">
                  {tool.bestPractices.map((practice, index) => (
                    <li key={index} className="flex gap-4">
                      <Lightbulb className={`${subheadingClass} flex-shrink-0 mt-1`} size={20} />
                      <span className={textClass}>{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Pros & Cons */}
            <motion.div className="mt-16 grid md:grid-cols-2 gap-8" variants={stagger}>
              <motion.div variants={fadeInUp}>
                <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${headingClass}`}>
                  <TrendingUp className={subheadingClass} size={24} />
                  Advantages
                </h3>
                <div className={`p-8 rounded-2xl border ${cardClass}`}>
                  <ul className="space-y-3">
                    {tool.pros.map((pro, index) => (
                      <li key={index} className="flex gap-3">
                        <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={18} />
                        <span className={textClass}>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${headingClass}`}>
                  <AlertCircle className={subheadingClass} size={24} />
                  Considerations
                </h3>
                <div className={`p-8 rounded-2xl border ${cardClass}`}>
                  <ul className="space-y-3">
                    {tool.cons.map((con, index) => (
                      <li key={index} className="flex gap-3">
                        <AlertCircle className="text-amber-500 flex-shrink-0 mt-1" size={18} />
                        <span className={textClass}>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>
        )}

        {/* Use Cases */}
        {activeTab === "use-cases" && (
          <motion.section
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h2 className={`text-3xl md:text-4xl font-bold mb-12 ${headingClass}`} variants={fadeInUp}>
              Use Cases & Applications
            </motion.h2>
            <div className="space-y-8">
              {tool.useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className={`p-8 rounded-2xl border ${cardClass}`}
                  variants={fadeInUp}
                >
                  <h3 className={`text-2xl font-semibold mb-4 ${headingClass}`}>
                    {useCase.title}
                  </h3>
                  <p className={`text-lg mb-4 ${textClass}`}>
                    {useCase.description}
                  </p>
                  <div className={`p-4 rounded-xl ${isLightMode ? "bg-slate-100" : "bg-white/5"} border-l-4`} style={{ borderColor: tool.color }}>
                    <p className={`text-sm font-medium ${mutedTextClass} mb-1`}>Example:</p>
                    <p className={textClass}>{useCase.example}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* How to Use */}
        {activeTab === "how-to-use" && (
          <motion.section
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h2 className={`text-3xl md:text-4xl font-bold mb-12 ${headingClass}`} variants={fadeInUp}>
              How to Use {tool.shortName}
            </motion.h2>
            <div className="space-y-6">
              {tool.howToUse.map((step, index) => (
                <motion.div
                  key={index}
                  className={`p-8 rounded-2xl border ${cardClass} flex gap-6`}
                  variants={fadeInUp}
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold ${isLightMode ? "bg-teal-600 text-white" : "bg-teal-500 text-black"}`}
                  >
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-3 ${headingClass}`}>
                      {step.title}
                    </h3>
                    <p className={textClass}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Pricing */}
        {activeTab === "pricing" && (
          <motion.section
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h2 className={`text-3xl md:text-4xl font-bold mb-12 ${headingClass}`} variants={fadeInUp}>
              Pricing & Plans
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(tool.pricing).map(([tier, description], index) => (
                <motion.div
                  key={tier}
                  className={`p-8 rounded-2xl border ${cardClass} ${index === 1 ? `ring-2 ${isLightMode ? "ring-teal-600" : "ring-teal-400"}` : ""}`}
                  variants={fadeInUp}
                >
                  <div className={`w-12 h-12 rounded-full ${isLightMode ? "bg-teal-100" : "bg-teal-500/20"} flex items-center justify-center mb-4`}>
                    <DollarSign className={subheadingClass} size={24} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 capitalize ${headingClass}`}>
                    {tier.replace(/([A-Z])/g, " $1").trim()}
                  </h3>
                  <p className={textClass}>
                    {description}
                  </p>
                  {index === 1 && (
                    <div className={`mt-4 text-sm font-medium ${subheadingClass}`}>
                      Most Popular
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>

      {/* CTA Section */}
      <motion.section
        className={`py-20 border-t ${isLightMode ? "border-slate-200" : "border-white/10"}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${headingClass}`}>
            Ready to get started with {tool.shortName}?
          </h2>
          <p className={`text-xl mb-8 ${textClass}`}>
            Explore what {tool.shortName} can do for you and transform your workflow today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 rounded-full text-lg font-medium ${isLightMode ? "bg-teal-600 text-white hover:bg-teal-700" : "bg-teal-500 text-black hover:bg-teal-400"} transition-all hover:scale-105 flex items-center gap-2`}
            >
              Try {tool.shortName} Now
              <ExternalLink size={20} />
            </a>
            <button
              onClick={() => navigate("/")}
              className={`px-8 py-4 rounded-full text-lg font-medium border-2 ${isLightMode ? "border-slate-300 text-black hover:bg-slate-50" : "border-white/20 text-white hover:bg-white/5"} transition-all`}
            >
              Explore Other Tools
            </button>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default ToolDetailPage;
