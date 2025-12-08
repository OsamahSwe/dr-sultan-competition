import { motion } from "framer-motion";

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

function Hero({ theme = "dark", onToggleTheme }) {
  const isLightMode = theme === "light";

  return (
    <section className="relative h-screen w-full overflow-hidden">
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
        <source src="/hero-video.mp4" type="video/mp4" />
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
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 pt-6 md:pt-8">
        {/* Logo - Left side */}
        <div
          className={`text-xl md:text-2xl font-bold ${
            isLightMode ? "text-black" : "text-white"
          }`}
        >
          AI Tools
        </div>
        
        {/* Navigation Links - Right side */}
        <div
          className={`flex items-center gap-7 md:gap-10 text-base md:text-lg font-light ${
            isLightMode ? "text-black" : "text-white"
          }`}
        >
          <button
            onClick={onToggleTheme}
            className="hover:opacity-70 transition-opacity flex items-center gap-2 cursor-pointer bg-transparent border-none p-0"
          >
            <img
              src="/exposure-time.png"
              alt="mode icon"
              className="w-6 h-6"
            />
            {isLightMode ? "dark mode" : "light mode"}
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
        <motion.div className="max-w-4xl" variants={heroItem}>
          {/* Main Heading - Multi-line, large, light font weight */}
          <motion.h1
            className={`text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight mb-6 md:mb-8 ${
              isLightMode ? "text-black" : "text-white"
            }`}
            variants={heroItem}
          >
            EXPAND INTO
            <br />
            A NEW ERA
            <br />
            OF INTELLIGENT CREATION
          </motion.h1>

          {/* Sub-text Row */}
          {/* Small row with category and contact link */}
          <motion.div
            className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 ${
              isLightMode ? "text-black" : "text-white"
            }`}
            variants={heroItem}
          >
            {/* Category label */}
            <span className="text-xs md:text-sm uppercase tracking-wider opacity-80">
              / DIGITAL PORTFOLIO
            </span>
            
            {/* Contact link */}
            <a
              href="#contact"
              className="text-sm md:text-base font-light hover:opacity-70 transition-opacity flex items-center gap-2"
            >
              CONTACT US
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Side Label */}
      {/* Vertical label on the right edge of the screen */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
        <div className="bg-teal-400/20 backdrop-blur-sm px-2 py-12 rounded-l-lg">
          <div className="text-white text-xs font-light uppercase tracking-wider transform -rotate-90 whitespace-nowrap">
            AI
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

