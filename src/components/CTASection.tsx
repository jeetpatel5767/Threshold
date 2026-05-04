const CTASection = () => (
  <section
    className="py-[140px] relative overflow-hidden cta-noise"
    id="cta"
    style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, hsl(220 14% 20%) 0%, hsl(220 12% 12%) 100%)" }}
  >
    {/* Orbs */}
    <div
      className="absolute w-[500px] h-[500px] rounded-full pointer-events-none animate-orb-float"
      style={{
        top: "-120px", left: "-100px",
        background: "radial-gradient(circle, hsl(30 30% 40% / 0.18) 0%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
    <div
      className="absolute w-[400px] h-[400px] rounded-full pointer-events-none animate-orb-float-delay"
      style={{
        bottom: "-80px", right: "-60px",
        background: "radial-gradient(circle, hsl(210 30% 50% / 0.12) 0%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />

    <div className="max-w-[1280px] mx-auto px-12 relative z-[1]">
      <div className="flex flex-col items-center text-center max-w-[680px] mx-auto">
        <p className="text-[0.62rem] tracking-[0.28em] uppercase text-[hsl(215_8%_55%)] mb-6 font-normal">
          Ready to begin
        </p>
        <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-normal tracking-[-0.035em] leading-[1.08] text-[hsl(210_10%_94%)] mb-6">
          Let's build something<br />
          <em className="font-pacifico not-italic font-normal text-[0.9em] text-[hsl(30_15%_65%)]">exceptional</em>{" "}
          <span className="text-[hsl(210_10%_94%)]">together</span>
        </h2>
        <p className="text-[0.9rem] text-[hsl(215_8%_55%)] leading-[1.75] font-normal mb-10 max-w-[480px]">
          Tell us what you're building. We'll tell you exactly how we can help — and if we can't, we'll say so.
        </p>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-[10px] font-['Syne'] text-[0.82rem] font-medium tracking-[0.08em] uppercase py-[14px] px-7 rounded-full bg-[hsl(210_10%_94%)] text-[hsl(220_12%_18%)] no-underline transition-all duration-300 hover:opacity-90 hover:gap-[14px] shadow-[0_4px_24px_hsl(0_0%_0%/0.3)]"
          >
            Start a project
            <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] stroke-current fill-none stroke-2 [stroke-linecap:round]">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-[10px] font-['Syne'] text-[0.82rem] font-medium tracking-[0.08em] uppercase py-[13px] px-7 rounded-full border border-[hsl(215_8%_36%)] text-[hsl(215_8%_70%)] no-underline transition-all duration-300 hover:border-[hsl(215_8%_55%)] hover:text-[hsl(210_10%_90%)] hover:gap-[14px]"
          >
            Book a free call
            <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] stroke-current fill-none stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.19 12 19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
