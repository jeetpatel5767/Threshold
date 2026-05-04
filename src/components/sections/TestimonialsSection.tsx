import { useEffect, useRef, useState } from "react";

const testimonials = [
  { initials: "JM", name: "James Mercer",   role: "CTO, Luminary Finance",           tag: "Frontend + AI",  quote: <>Working with Threshold was unlike any agency experience I've had. They delivered a product that felt <em className="italic text-col-primary">genuinely considered</em> — every interaction, every edge case, every pixel. Our users noticed immediately.</> },
  { initials: "SR", name: "Sofia Reyes",    role: "Head of Engineering, Vault Pay",  tag: "Cybersecurity",  quote: <>They came in, understood our security posture in days, and fixed vulnerabilities our internal team had missed for months. <em className="italic text-col-primary">Zero drama, maximum impact.</em> We'd cleared SOC 2 in 8 weeks.</> },
  { initials: "AK", name: "Arjun Kapoor",  role: "Product Lead, Aura Health",       tag: "UI/UX Design",   quote: <>The design system they built has scaled across 6 products without breaking. Three years in and <em className="italic text-col-primary">we're still referencing their component library.</em> That's how good the foundations were.</> },
  { initials: "LP", name: "Laura Petit",   role: "CEO, Signal Legal Tech",          tag: "AI Systems",     quote: <>Our AI pipeline went from idea to production in six weeks. The team knew their way around LLMs, infrastructure, and product thinking all at once. <em className="italic text-col-primary">That breadth is rare.</em></> },
  { initials: "DW", name: "David Wu",      role: "Founder, ChainFlow Protocol",     tag: "Web3",           quote: <>$2M TVL in 30 days and not a single critical bug post-audit. <em className="italic text-col-primary">They knew the DeFi space deeply</em> — security, UX, and the on-chain architecture. Exactly the partner we needed.</> },
  { initials: "NB", name: "Nina Berg",     role: "Operations Director, Nexus Logistics", tag: "Full Stack", quote: <>Daily updates, real staging previews, no surprises. The transparency alone was worth it — but then they also delivered <em className="italic text-col-primary">a product our whole team is proud to show.</em></> },
];

const CARDS_VIS = 3;
const T_TOTAL = testimonials.length;
const cardShadow = "0 2px 16px var(--shadow), inset 0 1px 0 var(--glow)";

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const max = T_TOTAL - CARDS_VIS;

  const goTo = (idx: number) => setCurrent(Math.min(Math.max(idx, 0), max));

  useEffect(() => {
    const card = trackRef.current?.querySelector<HTMLElement>(".t-card-item");
    if (!card || !trackRef.current) return;
    const w = card.offsetWidth + 20;
    trackRef.current.style.transform = `translateX(-${current * w}px)`;
  }, [current]);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1 > max ? 0 : c + 1)), 4000);
    return () => clearInterval(t);
  }, [max]);

  const fillPct = ((current + CARDS_VIS) / T_TOTAL) * 100;
  let touchX = 0;

  return (
    <section className="py-[120px] pb-[140px]">
      <div className="max-w-[1280px] mx-auto px-12">
        <p className="flex items-center gap-[10px] text-[0.68rem] tracking-[0.22em] uppercase text-col-dim mb-5">
          <span className="inline-block w-5 h-px bg-col-warm flex-shrink-0" />Client voices
        </p>

        <div className="flex items-end justify-between mb-14">
          <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-normal tracking-[-0.03em] leading-[1.1] text-col-primary max-w-[500px]">
            What <em className="font-pacifico not-italic font-normal text-[0.9em] text-col-tertiary">clients</em><br />say about us
          </h2>
          <div className="flex items-center gap-[10px] flex-shrink-0">
            <button onClick={() => goTo(current - 1)} className="w-[42px] h-[42px] rounded-full border border-col-line/70 bg-col-surface/60 text-col-tertiary flex items-center justify-center cursor-pointer backdrop-blur-[12px] transition-all duration-300 hover:shadow-[0_2px_12px_var(--shadow-lg)] hover:text-col-primary">
              <svg viewBox="0 0 24 24" className="w-[17px] h-[17px] stroke-current fill-none stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <span className="text-[0.72rem] text-col-tertiary min-w-[48px] text-center tracking-[0.06em]">
              <span className="text-col-primary font-medium">{current + 1}</span> / {T_TOTAL}
            </span>
            <button onClick={() => goTo(current + 1)} className="w-[42px] h-[42px] rounded-full border border-col-line/70 bg-col-surface/60 text-col-tertiary flex items-center justify-center cursor-pointer backdrop-blur-[12px] transition-all duration-300 hover:shadow-[0_2px_12px_var(--shadow-lg)] hover:text-col-primary">
              <svg viewBox="0 0 24 24" className="w-[17px] h-[17px] stroke-current fill-none stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden relative">
          <div
            ref={trackRef}
            className="flex gap-5 transition-transform duration-[600ms] [cubic-bezier(0.4,0,0.2,1)] will-change-transform"
            onTouchStart={(e) => { touchX = e.touches[0].clientX; }}
            onTouchEnd={(e) => { const dx = touchX - e.changedTouches[0].clientX; if (Math.abs(dx) > 40) goTo(dx > 0 ? current + 1 : current - 1); }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="t-card-item bg-[hsl(210_8%_96%/0.55)] border border-col-line-soft/50 rounded-[20px] p-9 flex flex-col justify-between min-h-[280px] relative overflow-hidden backdrop-blur-[20px] flex-shrink-0 transition-[box-shadow] duration-[400ms] hover:shadow-[0_6px_32px_var(--shadow-lg),inset_0_1px_0_var(--glow)]"
                style={{ flex: `0 0 calc((100% - 40px) / 3)`, boxShadow: cardShadow }}
              >
                <div className="font-pacifico text-[5rem] leading-[0.8] text-[hsl(215_8%_84%)] absolute top-5 right-6 select-none pointer-events-none">"</div>
                <div>
                  <div className="flex gap-[3px] mb-5">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="w-3 h-3 bg-col-warm star-shape block" />
                    ))}
                  </div>
                  <p className="text-[0.88rem] text-col-tertiary leading-[1.8] font-normal relative z-[1]">{t.quote}</p>
                </div>
                <div className="flex items-center gap-[14px] mt-7 pt-5 border-t border-col-line/70">
                  <div className="w-[38px] h-[38px] rounded-full bg-[hsl(210_8%_90%)] border border-col-line/70 flex items-center justify-center flex-shrink-0 text-[0.68rem] font-medium text-col-tertiary tracking-[0.05em]">{t.initials}</div>
                  <div>
                    <p className="text-[0.84rem] font-medium text-col-primary tracking-[-0.01em]">{t.name}</p>
                    <p className="text-[0.7rem] text-col-dim mt-[2px]">{t.role}</p>
                  </div>
                  <span className="ml-auto text-[0.58rem] tracking-[0.1em] uppercase px-[10px] py-1 rounded-full border border-col-line/70 bg-col-surface/60 text-col-dim whitespace-nowrap">{t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-4 mt-9">
          <div className="flex-1 h-px bg-col-line/70 rounded-px relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 bg-col-secondary rounded-px transition-[width] duration-[600ms] [cubic-bezier(0.4,0,0.2,1)]" style={{ width: `${fillPct}%` }} />
          </div>
          <div className="flex gap-[6px]">
            {testimonials.map((_, i) => (
              <div key={i} onClick={() => goTo(i)} className={`w-1 h-1 rounded-full cursor-pointer transition-all duration-300 ${i === current ? "bg-col-secondary scale-[1.4]" : "bg-col-line/70"}`} />
            ))}
          </div>
        </div>

        {/* Trust logos */}
        <div className="flex items-center gap-8 mt-[72px] pt-12 border-t border-col-line/70 flex-wrap">
          <span className="text-[0.62rem] tracking-[0.2em] uppercase text-col-dim whitespace-nowrap flex-shrink-0">Trusted by</span>
          <div className="w-px h-5 bg-col-line/70 flex-shrink-0" />
          <div className="flex gap-8 items-center flex-wrap">
            {["Luminary","Vault Pay","Aura Health","Signal","ChainFlow","Nexus"].map((l) => (
              <span key={l} className="text-[0.75rem] font-normal tracking-[0.1em] uppercase text-col-dim transition-colors duration-300 hover:text-col-tertiary">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
