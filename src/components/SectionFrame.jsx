function SectionFrame({ children }) {
  return (
    <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 my-16 md:my-20">
      <div className="rounded-[32px] bg-white/85 shadow-[0_32px_110px_rgba(15,23,42,0.16)] border border-slate-200/70 backdrop-blur-md px-4 md:px-10 py-10 md:py-14">
        {children}
      </div>
    </div>
  );
}

export default SectionFrame;


