import { motion } from "framer-motion";
import { Play } from "lucide-react";

// Global GIF size standard - matches largest rendered dimension
// YouTube cards should match GIF sizing for visual consistency
const DESKTOP_GIF_MAX_HEIGHT = "max-h-[900px] xl:max-h-[1000px] 2xl:max-h-[1100px]";

function YoutubeCard({ title, description, thumbnail, youtubeUrl, theme = "dark", language = "en" }) {
  const isDark = theme === "dark";
  const isLightMode = theme === "light";

  const baseClasses = `group relative flex flex-col overflow-hidden rounded-2xl border shadow-[0_26px_90px_rgba(0,0,0,0.85)] w-full transition-all duration-300 ${
    isLightMode
      ? "bg-white/85 border-slate-200/70 backdrop-blur-md"
      : "bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-slate-950/95 border-white/8 backdrop-blur-md"
  }`;

  const handleClick = (e) => {
    e.preventDefault();
    if (youtubeUrl) {
      window.open(youtubeUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.a
      href={youtubeUrl}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`${baseClasses} cursor-pointer`}
    >
      {/* Thumbnail Container */}
      <div className={`relative w-full overflow-hidden ${DESKTOP_GIF_MAX_HEIGHT}`} style={{ aspectRatio: '16/9' }}>
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
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
              <Play className={`${isLightMode ? "text-slate-600" : "text-slate-300/80"}`} size={32} fill="currentColor" />
            </div>
          </div>
        )}

        {/* Overlay gradient */}
        <div className={`pointer-events-none absolute inset-0 ${
          isLightMode 
            ? "bg-gradient-to-t from-black/60 via-black/20 to-transparent" 
            : "bg-gradient-to-t from-black/80 via-black/35 to-transparent"
        }`} />

        {/* Play button overlay - visible on mobile, hover on desktop */}
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
      <div className={`flex flex-col gap-2 px-4 md:px-6 pb-4 md:pb-6 pt-3 md:pt-4 ${
        isLightMode ? "bg-white/60" : "bg-transparent"
      }`}>
        <h3 className={`text-sm md:text-base font-semibold leading-snug ${
          isLightMode ? "text-slate-900" : "text-white"
        } ${language === "ar" ? "arabic-body" : ""}`}>
          {title}
        </h3>
        {description && (
          <p className={`text-xs md:text-sm leading-relaxed ${
            isLightMode ? "text-slate-600" : "text-gray-300"
          } ${language === "ar" ? "arabic-body leading-relaxed" : ""}`}>
            {description}
          </p>
        )}
      </div>
    </motion.a>
  );
}

export default YoutubeCard;

