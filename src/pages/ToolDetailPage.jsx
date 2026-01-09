import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
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

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url) => {
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  return match ? match[1] : null;
};

// Helper function to get YouTube thumbnail URL
const getYouTubeThumbnail = (youtubeUrl) => {
  const videoId = getYouTubeVideoId(youtubeUrl);
  if (!videoId) return null;
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

// Helper function to extract TikTok video ID from URL
const getTikTokVideoId = (url) => {
  // TikTok URLs can be in formats like:
  // https://www.tiktok.com/@username/video/1234567890
  // https://vm.tiktok.com/xxxxx/
  const match = url.match(/tiktok\.com\/.*\/video\/(\d+)/) || url.match(/vm\.tiktok\.com\/(\w+)/);
  return match ? match[1] : null;
};

// Tutorial data mapping tool IDs to their YouTube tutorials
const TOOL_TUTORIALS = {
  uxpilot: [
    {
      title: "UX Pilot – Full Tutorial",
      description: "Complete walkthrough with real examples",
      youtubeUrl: "https://youtu.be/wtrrbMwb51I?si=IPq5WcycJroRKQe_",
      tiktokUrl: "https://www.tiktok.com/@neai_tech/video/7592630171362970901?is_from_webapp=1&sender_device=pc"
    }
  ],
  lovable: [
    {
      title: "Lovable – Full Tutorial",
      description: "Complete walkthrough with real examples",
      youtubeUrl: "https://youtu.be/xphj2fo9E6E?si=tY8T7IPESSAumNmG",
      tiktokUrl: "https://www.tiktok.com/@neai_tech/video/7592635319950839061?is_from_webapp=1&sender_device=pc"
    }
  ],
  cursor: [
    {
      title: "Cursor – Full Tutorial",
      description: "Complete walkthrough with real examples",
      youtubeUrl: "https://youtu.be/uH_7EmNHE_4?si=Lylzn_DN9eC9wEm4",
      tiktokUrl: "https://www.tiktok.com/@neai_tech/video/7593293137095986452?is_from_webapp=1&sender_device=pc"
    }
  ]
};

// Helper function to map tool IDs to screenshot folder names
const getScreenshotFolderName = (toolId) => {
  const folderMap = {
    uxpilot: "ux-pilot",
    lovable: "loveable",
  };
  return folderMap[toolId] || toolId;
};

// Helper function to test if an image exists
const testImageExists = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    let resolved = false;
    
    const cleanup = () => {
      if (!resolved) {
        resolved = true;
      }
    };
    
    img.onload = () => {
      cleanup();
      resolve(true);
    };
    
    img.onerror = () => {
      cleanup();
      resolve(false);
    };
    
    // Add a timeout to prevent hanging
    setTimeout(() => {
      if (!resolved) {
        resolved = true;
        resolve(false);
      }
    }, 1000);
    
    img.src = src;
  });
};

function ToolDetailPage({ theme = "dark" }) {
  const { toolId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("features");
  const [screenshots, setScreenshots] = useState([]);
  const [isLoadingScreenshots, setIsLoadingScreenshots] = useState(false);
  const tabScrollRef = useRef(null);
  const tool = getToolById(toolId);

  const isLightMode = theme === "light";

  // Scroll to top when component mounts or toolId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [toolId]);

  // Load screenshots when toolId changes or set-up tab becomes active
  useEffect(() => {
    if (!tool) return;

    const loadScreenshots = async () => {
      setIsLoadingScreenshots(true);
      setScreenshots([]);

      const folderName = getScreenshotFolderName(toolId);
      const basePath = `/install-screenshots/${folderName}/`;
      const foundScreenshots = [];
      let consecutiveFailures = 0;
      const maxConsecutiveFailures = 3;
      const maxImages = 50;

      // Try loading numbered images sequentially (1.png, 2.png, ...)
      for (let i = 1; i <= maxImages; i++) {
        const imagePath = `${basePath}${i}.png`;
        const exists = await testImageExists(imagePath);

        if (exists) {
          foundScreenshots.push(imagePath);
          consecutiveFailures = 0;
        } else {
          consecutiveFailures++;
          if (consecutiveFailures >= maxConsecutiveFailures) {
            break;
          }
        }
      }

      setScreenshots(foundScreenshots);
      setIsLoadingScreenshots(false);
    };

    // Only load if set-up tab is active
    if (activeTab === "set-up") {
      loadScreenshots();
    }
  }, [toolId, activeTab, tool]);

  // Handle tab scroll fade visibility
  useEffect(() => {
    const tabContainer = tabScrollRef.current;
    if (!tabContainer) return;

    const updateScrollClasses = () => {
      const { scrollLeft, scrollWidth, clientWidth } = tabContainer;
      const isAtStart = scrollLeft <= 1;
      const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 1;

      tabContainer.classList.toggle("scrolled-left", isAtStart);
      tabContainer.classList.toggle("scrolled-right", isAtEnd);
    };

    // Initial check
    updateScrollClasses();

    // Listen to scroll events
    tabContainer.addEventListener("scroll", updateScrollClasses);
    
    // Also check on resize (content might change)
    window.addEventListener("resize", updateScrollClasses);

    return () => {
      tabContainer.removeEventListener("scroll", updateScrollClasses);
      window.removeEventListener("resize", updateScrollClasses);
    };
  }, []);

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
    <main className={`min-h-screen ${mainClass}`} style={{ backgroundColor: isLightMode ? "#ffffff" : "#000000" }}>
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{
        backgroundColor: isLightMode 
          ? "rgba(255, 255, 255, 1)" 
          : "rgba(0, 0, 0, 1)",
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
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 md:mb-6 ${isLightMode ? "bg-teal-100 text-teal-700" : "bg-teal-500/20 text-teal-300"}`}
                variants={fadeInUp}
              >
                {tool.role}
              </motion.div>
              <motion.h1
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-4 md:mb-6 ${headingClass}`}
                variants={fadeInUp}
              >
                {tool.name}
              </motion.h1>
              <motion.p
                className={`text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 ${textClass} leading-relaxed`}
                variants={fadeInUp}
              >
                {tool.tagline}
              </motion.p>
              <motion.p
                className={`text-base md:text-lg ${mutedTextClass} leading-relaxed mb-6 md:mb-8`}
                variants={fadeInUp}
              >
                {tool.overview}
              </motion.p>
              <motion.div className="flex gap-4" variants={fadeInUp}>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium ${isLightMode ? "bg-teal-600 text-white hover:bg-teal-700" : "bg-teal-500 text-black hover:bg-teal-400"} transition-all hover:scale-105`}
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
          <div ref={tabScrollRef} className="flex gap-8 overflow-x-auto tab-scroll">
            {["features", "use-cases", "how-to-use", "pricing", "set-up", "tutorials"].map((tab) => (
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

        {/* Set Up */}
        {activeTab === "set-up" && (
          <motion.section
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h2 className={`text-3xl md:text-4xl font-bold mb-12 ${headingClass}`} variants={fadeInUp}>
              Set Up {tool.shortName}
            </motion.h2>
            
            {isLoadingScreenshots ? (
              <motion.p className={textClass} variants={fadeInUp}>
                Loading setup instructions...
              </motion.p>
            ) : screenshots.length > 0 ? (
              <div className="space-y-8">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={`screenshot-${index}`}
                    className="flex justify-center w-full"
                  >
                    <img
                      src={screenshot}
                      alt={`Setup step ${index + 1}`}
                      className="w-full rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <motion.p className={textClass} variants={fadeInUp}>
                Setup instructions coming soon.
              </motion.p>
            )}
          </motion.section>
        )}

        {/* Tutorials */}
        {activeTab === "tutorials" && (
          <motion.section
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h2 className={`text-3xl md:text-4xl font-bold mb-12 ${headingClass}`} variants={fadeInUp}>
              Tutorials
            </motion.h2>
            
            {TOOL_TUTORIALS[toolId] && TOOL_TUTORIALS[toolId].length > 0 ? (
              <div className="space-y-8">
                {TOOL_TUTORIALS[toolId].map((tutorial, index) => (
                  <div key={index} className="space-y-4">
                    {/* TikTok Embed - Mobile Only */}
                    {tutorial.tiktokUrl && (
                      <motion.div
                        className="block md:hidden"
                        variants={fadeInUp}
                      >
                        <div className={`relative flex flex-col overflow-hidden rounded-2xl border ${cardClass}`}>
                          {/* TikTok Embed Container */}
                          <div className="relative w-full aspect-[9/16] overflow-hidden bg-black">
                            <blockquote 
                              className="tiktok-embed" 
                              cite={tutorial.tiktokUrl}
                              data-video-id={getTikTokVideoId(tutorial.tiktokUrl)}
                              style={{ maxWidth: '100%', minWidth: '325px' }}
                            >
                              <section>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={tutorial.tiktokUrl}
                                  className="text-white/80 hover:text-white text-sm"
                                >
                                  View on TikTok
                                </a>
                              </section>
                            </blockquote>
                            <script async src="https://www.tiktok.com/embed.js"></script>
                          </div>

                          {/* Content Section */}
                          <div className={`flex flex-col gap-2 px-6 py-4 ${
                            isLightMode ? "bg-slate-50" : "bg-transparent"
                          }`}>
                            <h3 className={`text-lg font-semibold leading-snug ${headingClass}`}>
                              {tutorial.title}
                            </h3>
                            {tutorial.description && (
                              <p className={`text-sm leading-relaxed ${textClass}`}>
                                {tutorial.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* YouTube Card - Desktop Only */}
                    <motion.a
                      href={tutorial.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hidden md:flex group relative flex-col overflow-hidden rounded-2xl border ${cardClass} cursor-pointer transition-all duration-300 hover:scale-[1.02]`}
                      variants={fadeInUp}
                      whileHover={{ y: -2 }}
                    >
                      {/* Thumbnail Container */}
                      <div className="relative w-full aspect-[16/9] overflow-hidden">
                        {getYouTubeThumbnail(tutorial.youtubeUrl) ? (
                          <img
                            src={getYouTubeThumbnail(tutorial.youtubeUrl)}
                            alt={tutorial.title}
                            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className={`h-full w-full flex items-center justify-center ${
                            isLightMode 
                              ? "bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200" 
                              : "bg-gradient-to-br from-slate-800 via-slate-900 to-black"
                          }`}>
                            <div className={`h-20 w-20 rounded-full border backdrop-blur-md flex items-center justify-center ${
                              isLightMode
                                ? "border-slate-300/50 bg-slate-100/60"
                                : "border-white/10 bg-slate-900/60"
                            }`}>
                              <div className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[18px] border-l-white" />
                            </div>
                          </div>
                        )}

                        {/* Overlay gradient */}
                        <div className={`pointer-events-none absolute inset-0 ${
                          isLightMode 
                            ? "bg-gradient-to-t from-black/60 via-black/20 to-transparent" 
                            : "bg-gradient-to-t from-black/80 via-black/35 to-transparent"
                        }`} />

                        {/* Play button overlay */}
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                          <div className={`flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full backdrop-blur-md border shadow-[0_0_40px_rgba(0,0,0,0.9)] transition-all duration-300 ${
                            isLightMode
                              ? "bg-black/50 border-white/30 md:opacity-0 md:group-hover:opacity-100"
                              : "bg-black/65 border-white/20 md:opacity-0 md:group-hover:opacity-100"
                          } opacity-100`}>
                            <div className="ml-1 h-0 w-0 border-y-[10px] md:border-y-[12px] border-y-transparent border-l-[18px] md:border-l-[20px] border-l-white" />
                          </div>
                        </div>

                        {/* YouTube red accent indicator */}
                        <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-red-600/90 backdrop-blur-sm border border-red-500/50">
                          <span className="text-[10px] font-semibold text-white uppercase tracking-wider">YouTube</span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className={`flex flex-col gap-2 px-6 py-4 ${
                        isLightMode ? "bg-slate-50" : "bg-transparent"
                      }`}>
                        <h3 className={`text-lg font-semibold leading-snug ${headingClass}`}>
                          {tutorial.title}
                        </h3>
                        {tutorial.description && (
                          <p className={`text-sm leading-relaxed ${textClass}`}>
                            {tutorial.description}
                          </p>
                        )}
                      </div>
                    </motion.a>

                    {/* Fallback: Show YouTube on mobile if no TikTok URL */}
                    {!tutorial.tiktokUrl && (
                      <motion.a
                        href={tutorial.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block md:hidden group relative flex flex-col overflow-hidden rounded-2xl border ${cardClass} cursor-pointer transition-all duration-300`}
                        variants={fadeInUp}
                      >
                        {/* Thumbnail Container */}
                        <div className="relative w-full aspect-[16/9] overflow-hidden">
                          {getYouTubeThumbnail(tutorial.youtubeUrl) ? (
                            <img
                              src={getYouTubeThumbnail(tutorial.youtubeUrl)}
                              alt={tutorial.title}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className={`h-full w-full flex items-center justify-center ${
                              isLightMode 
                                ? "bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200" 
                                : "bg-gradient-to-br from-slate-800 via-slate-900 to-black"
                            }`}>
                              <div className={`h-20 w-20 rounded-full border backdrop-blur-md flex items-center justify-center ${
                                isLightMode
                                  ? "border-slate-300/50 bg-slate-100/60"
                                  : "border-white/10 bg-slate-900/60"
                              }`}>
                                <div className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[18px] border-l-white" />
                              </div>
                            </div>
                          )}

                          {/* Play button overlay */}
                          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <div className={`flex h-14 w-14 items-center justify-center rounded-full backdrop-blur-md border shadow-[0_0_40px_rgba(0,0,0,0.9)] ${
                              isLightMode
                                ? "bg-black/50 border-white/30"
                                : "bg-black/65 border-white/20"
                            }`}>
                              <div className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[18px] border-l-white" />
                            </div>
                          </div>

                          {/* YouTube indicator */}
                          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-red-600/90 backdrop-blur-sm border border-red-500/50">
                            <span className="text-[10px] font-semibold text-white uppercase tracking-wider">YouTube</span>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className={`flex flex-col gap-2 px-6 py-4 ${
                          isLightMode ? "bg-slate-50" : "bg-transparent"
                        }`}>
                          <h3 className={`text-lg font-semibold leading-snug ${headingClass}`}>
                            {tutorial.title}
                          </h3>
                          {tutorial.description && (
                            <p className={`text-sm leading-relaxed ${textClass}`}>
                              {tutorial.description}
                            </p>
                          )}
                        </div>
                      </motion.a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <motion.div
                className={`relative flex flex-col overflow-hidden rounded-2xl border ${cardClass} opacity-60`}
                variants={fadeInUp}
              >
                {/* Placeholder Thumbnail Container */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <div className={`h-full w-full flex items-center justify-center ${
                    isLightMode 
                      ? "bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200" 
                      : "bg-gradient-to-br from-slate-800 via-slate-900 to-black"
                  }`}>
                    <div className={`h-20 w-20 rounded-full border backdrop-blur-md flex items-center justify-center ${
                      isLightMode
                        ? "border-slate-300/50 bg-slate-100/60"
                        : "border-white/10 bg-slate-900/60"
                    }`}>
                      <div className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[18px] border-l-white opacity-50" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`flex flex-col gap-2 px-6 py-4 ${
                  isLightMode ? "bg-slate-50" : "bg-transparent"
                }`}>
                  <h3 className={`text-lg font-semibold leading-snug ${headingClass}`}>
                    Tutorials coming soon
                  </h3>
                  <p className={`text-sm leading-relaxed ${mutedTextClass}`}>
                    We're working on adding tutorials for this tool.
                  </p>
                </div>
              </motion.div>
            )}
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
              onClick={() => navigate("/#try-and-learn")}
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
