import { motion } from "framer-motion";
import { translations } from "../config/translations";

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function AboutUs({ theme = "dark", language = "en" }) {
  const isDark = theme === "dark";
  const t = translations[language];

  const teamMembers = [
    {
      name: "Osamah Alosaimi",
      role: t.teamMember,
      photo: "/team/osamah.png",
    },
    {
      name: "Abdullah Barakeh",
      role: t.teamMember,
      photo: "/team/abdullah.png",
    },
    {
      name: "Dr. Sultan Alsarra",
      role: t.instructor,
      photo: "/team/drsultan.png",
    },
  ];

  return (
    <motion.section
      id="about-us"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className={`min-h-screen w-full py-20 md:py-32 px-6 md:px-12 ${
        isDark ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 md:mb-20 pt-8 md:pt-12">
          <div>
            <motion.p
              key={`meetTheTeam-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`text-lg md:text-xl font-semibold mb-3 translated-text ${
                language === "ar" ? "arabic-section-title" : ""
              } ${
                isDark ? "text-teal-300" : "text-teal-600"
              }`}
            >
              {t.meetTheTeam}
            </motion.p>
            <motion.h2
              key={`aboutUs-title-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight translated-text ${
                language === "ar" ? "arabic-section-title" : ""
              } ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {t.aboutUs}
            </motion.h2>
          </div>
        </motion.div>

        {/* Team Grid - Triangular Layout */}
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* First Row: Osamah and Abdullah */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-4xl">
            {teamMembers.slice(0, 2).map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center"
              >
                {/* Photo Container */}
                <motion.div
                  className={`relative mb-6 rounded-2xl overflow-hidden ${
                    isDark ? "bg-white/5" : "bg-slate-200/50"
                  }`}
                  style={{
                    width: "280px",
                    height: "280px",
                  }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className={`w-full h-full object-cover ${
                      isDark ? "" : "brightness-90"
                    }`}
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center ${
                          isDark ? "text-white/40" : "text-slate-400"
                        }">
                          <span class="text-4xl">👤</span>
                        </div>
                      `;
                    }}
                  />
                  {/* Subtle glow effect */}
                  {isDark && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  )}
                </motion.div>

                {/* Name and Role */}
                <h3
                  className={`text-xl md:text-2xl font-semibold mb-2 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {member.name}
                </h3>
                <p
                  className={`text-sm md:text-base ${
                    isDark ? "text-white/60" : "text-slate-500"
                  }`}
                >
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Second Row: Dr. Sultan (centered) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            {/* Photo Container */}
            <motion.div
              className={`relative mb-6 rounded-2xl overflow-hidden ${
                isDark ? "bg-white/5" : "bg-slate-200/50"
              }`}
              style={{
                width: "280px",
                height: "280px",
              }}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img
                src={teamMembers[2].photo}
                alt={teamMembers[2].name}
                className={`w-full h-full object-cover ${
                  isDark ? "" : "brightness-90"
                }`}
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center ${
                      isDark ? "text-white/40" : "text-slate-400"
                    }">
                      <span class="text-4xl">👤</span>
                    </div>
                  `;
                }}
              />
              {/* Subtle glow effect */}
              {isDark && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              )}
            </motion.div>

            {/* Name and Role */}
            <h3
              className={`text-xl md:text-2xl font-semibold mb-2 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {teamMembers[2].name}
            </h3>
            <p
              className={`text-sm md:text-base ${
                isDark ? "text-white/60" : "text-slate-500"
              }`}
            >
              {teamMembers[2].role}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutUs;

