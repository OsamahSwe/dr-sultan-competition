function ExploreTools({ theme = "dark", language = "en" }) {
  const isDark = theme === "dark";

  return (
    <section
      id="explore-tools"
      className={`w-full min-h-screen scroll-mt-[60px] md:scroll-mt-0 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      {/* Blank section placeholder */}
    </section>
  );
}

export default ExploreTools;
