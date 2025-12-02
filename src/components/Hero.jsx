import { useState } from "react";

function Hero() {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  const theme = isLightMode ? "light" : "dark";

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Fallback Background Gradient */}
      {/* Dark gradient background that shows if video doesn't load */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      
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

      {/* Dark Overlay */}
      {/* Semi-transparent black overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Top Navigation */}
      {/* Navigation bar positioned at the top */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 pt-6 md:pt-8">
        {/* Logo - Left side */}
        <div className="text-white text-xl md:text-2xl font-bold">
          AI Tools
        </div>
        
        {/* Navigation Links - Right side */}
        <div className="flex items-center gap-6 md:gap-8 text-white text-sm md:text-base font-light">
          <button 
            onClick={toggleMode}
            className="text-white text-sm md:text-base font-light hover:opacity-70 transition-opacity flex items-center gap-2 cursor-pointer bg-transparent border-none p-0"
          >
            <img 
              src="/exposure-time.png" 
              alt="mode icon" 
              className="w-5 h-5"
            />
            {isLightMode ? 'light mode' : 'dark mode'}
          </button>
          <a href="#menu" className="hover:opacity-70 transition-opacity flex items-center gap-2 text-white">
            menu
            <img 
              src="/transparent-hd-white-menu-icon.png" 
              alt="menu icon" 
              className="w-5 h-5"
            />
          </a>
        </div>
      </nav>

      {/* Main Hero Content */}
      {/* Vertically centered content, slightly left-aligned */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl">
          {/* Main Heading - Multi-line, large, light font weight */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-tight mb-6 md:mb-8">
            EXPAND INTO
            <br />
            A NEW ERA
            <br />
            OF INTELLIGENT CREATION
          </h1>

          {/* Sub-text Row */}
          {/* Small row with category and contact link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-white">
            {/* Category label */}
            <span className="text-xs md:text-sm uppercase tracking-wider opacity-80">
              / DIGITAL PORTFOLIO
            </span>
            
            {/* Contact link */}
            <a 
              href="#contact" 
              className="text-sm md:text-base font-light hover:opacity-70 transition-opacity flex items-center gap-2 text-white"
            >
              CONTACT US
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>

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

