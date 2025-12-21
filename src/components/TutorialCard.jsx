import { motion } from "framer-motion";
import { translations } from "../config/translations";

function TutorialCard({ title, youtubeUrl, videoId, status, language = "en" }) {
  const t = translations[language];
  const isLive = status === "live" && youtubeUrl && videoId;
  const thumbnailUrl = isLive
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null;

  const baseClasses =
    "group relative flex flex-col overflow-hidden rounded-[28px] bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-slate-950/95 border border-white/8 shadow-[0_26px_90px_rgba(0,0,0,0.85)] w-full max-w-[460px] h-[300px]";

  const content = (
    <>
      <div className="relative aspect-[16/9] overflow-hidden">
        {isLive ? (
          <img
            src={thumbnailUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-800 via-slate-900 to-black flex items-center justify-center">
            <div className="h-20 w-20 rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-md flex items-center justify-center text-xs font-semibold tracking-[0.25em] uppercase text-slate-300/80">
              AI
            </div>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

        {/* Play icon or Coming Soon label */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {isLive ? (
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/65 backdrop-blur-md border border-white/20 shadow-[0_0_40px_rgba(15,23,42,0.9)] transition-transform duration-300 group-hover:scale-110">
              <div className="ml-0.5 h-0 w-0 border-y-[9px] border-y-transparent border-l-[16px] border-l-white" />
            </div>
          ) : (
            <motion.div
              key={`comingSoon-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`rounded-full bg-black/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-100/90 border border-white/15 translated-text ${
                language === "ar" ? "arabic-body" : ""
              }`}
            >
              {t.comingSoon}
            </motion.div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 px-6 pb-6 pt-4">
        <motion.span
          key={`practicalTutorial-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`inline-flex items-center rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300 translated-text ${
            language === "ar" ? "arabic-body" : ""
          }`}
        >
          {t.practicalTutorial}
        </motion.span>
        <motion.h3
          key={`tutorial-title-${language}-${title}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`text-base md:text-lg lg:text-xl font-medium leading-snug text-white text-center translated-text ${
            language === "ar" ? "arabic-body" : ""
          }`}
        >
          {title}
        </motion.h3>
      </div>
    </>
  );

  if (isLive) {
    return (
      <motion.a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03, y: -4, boxShadow: "0 30px 95px rgba(0,0,0,0.95)" }}
        whileTap={{ scale: 0.98, y: 0 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className={`${baseClasses} cursor-pointer`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      className={`${baseClasses} opacity-80`}
      initial={{ opacity: 0.8 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {content}
    </motion.div>
  );
}

export default TutorialCard;

