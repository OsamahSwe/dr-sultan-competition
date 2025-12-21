function MobileHeader({ theme = "dark", language = "en", onToggleLanguage, onToggleTheme }) {
  const isLightMode = theme === "light";

  return (
    <header className={`mobile-header mobile-header-${theme} fixed top-0 left-0 right-0 z-[1000] hidden`}>
      <div className="flex items-center justify-between px-4 py-3.5">
        {/* Logo - Left side - Always in English */}
        <div
          className={`text-xl font-bold ${
            isLightMode ? "text-black" : "text-white"
          }`}
        >
          AI Tools
        </div>
        
        {/* Navigation Links - Right side - Light Mode furthest right, Language Toggle to its left */}
        <div
          className={`flex items-center gap-3 text-base font-light ${
            isLightMode ? "text-black" : "text-white"
          }`}
        >
          <button
            onClick={onToggleLanguage}
            className="lang-toggle hover:opacity-70 transition-opacity cursor-pointer bg-transparent border-none"
          >
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
          </button>
        </div>
      </div>
    </header>
  );
}

export default MobileHeader;

