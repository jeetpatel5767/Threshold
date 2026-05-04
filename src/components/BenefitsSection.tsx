import { useEffect, useRef, useState } from "react";

const BIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-10 h-10 rounded-[10px] border border-th-border/70 bg-[hsl(210_8%_97%/0.8)] flex items-center justify-center mb-5 flex-shrink-0 shadow-[0_1px_6px_var(--th-shadow)] group-hover:[&_svg]:stroke-th-fg">
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-th-muted fill-none stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round] transition-colors duration-300">
      {children}
    </svg>
  </div>
);

const BenefitsSection = () => {
  const [visible, setVisible] = useState<boolean[]>([false, false, false, false, false, false]);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll<HTMLElement>("[data-benefit]");
    if (!cards) return;
    cards.forEach((c) => {
      if (c.getBoundingClientRect().top < window.innerHeight) {
        const i = parseInt(c.dataset.benefit || "0");
        setVisible((v) => { const n = [...v]; n[i] = true; return n; });
      }
    });
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          const i = parseInt(el.dataset.benefit || "0");
          const delay = parseInt(el.dataset.delay || "0");
          setTimeout(() => setVisible((v) => { const n = [...v]; n[i] = true; return n; }), delay);
          obs.unobserve(el);
        }
      }),
      { threshold: 0.08 }
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  const cardBase = "bg-[hsl(210_8%_96%/0.55)] border border-th-border-soft/50 rounded-[20px] p-8 relative overflow-hidden backdrop-blur-[20px] transition-all duration-[400ms] group hover:-translate-y-1";
  const cardShadow = "0 2px 16px var(--th-shadow), inset 0 1px 0 var(--th-glow)";
  const cardShadowHover = "0 8px 36px var(--th-shadow-lg), inset 0 1px 0 var(--th-glow)";

  return (
    <section className="py-[120px] pb-[140px] relative overflow-hidden benefits-grid-bg" ref={ref}
      style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, hsl(215 10% 88%) 0%, hsl(210 8% 91%) 100%)" }}
    >
      <div className="max-w-[1280px] mx-auto px-12 relative z-[1]">
        <p className="flex items-center gap-[10px] text-[0.68rem] tracking-[0.22em] uppercase text-th-light mb-5">
          <span className="inline-block w-5 h-px bg-th-warm flex-shrink-0" />Why Threshold
        </p>
        <div className="grid gap-12 items-end mb-[72px]" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-normal tracking-[-0.03em] leading-[1.1] text-th-fg">
            Built different,<br />delivered <em className="font-pacifico not-italic font-normal text-[0.9em] text-th-muted">right</em>
          </h2>
          <p className="text-[0.88rem] text-th-muted leading-[1.7] font-normal max-w-[380px]">
            Six principles that govern everything we ship — not aspirations, but non-negotiables baked into every project from day one.
          </p>
        </div>

        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "auto auto" }}>
          {/* Featured — spans 2 cols */}
          <div
            data-benefit="0" data-delay="0"
            className={`${cardBase} col-span-2 grid gap-8 items-center bg-[hsl(210_8%_92%/0.65)] transition-[opacity,transform,box-shadow] ${visible[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ gridTemplateColumns: "1fr 1fr", boxShadow: cardShadow }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = cardShadowHover)}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = cardShadow)}
          >
            <div>
              <BIcon><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13L8 3 5 6l2 2" /></BIcon>
              <h3 className="text-[1.1rem] font-normal tracking-[-0.02em] leading-[1.2] mb-[10px] text-th-fg">Design-<em className="font-pacifico not-italic text-[0.9em] text-th-muted">led</em></h3>
              <p className="text-[0.82rem] text-th-muted leading-[1.7] font-normal">Design isn't decoration — it's strategy. Every interface decision maps back to user goals and business outcomes. We lead with design thinking before a single line of code.</p>
            </div>
            <div>
              <div className="text-[clamp(2.8rem,5vw,4.5rem)] font-light tracking-[-0.04em] leading-none mb-2 text-th-fg">97<em className="font-pacifico not-italic text-[0.55em] text-th-warm align-super">%</em></div>
              <p className="text-[0.78rem] text-th-muted leading-[1.5] max-w-[200px]">of our clients rate design quality as the primary reason they chose us</p>
            </div>
          </div>

          {/* Tall — spans 2 rows */}
          <div
            data-benefit="1" data-delay="80"
            className={`${cardBase} row-span-2 flex flex-col justify-between transition-[opacity,transform,box-shadow] ${visible[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ boxShadow: cardShadow }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = cardShadowHover)}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = cardShadow)}
          >
            <div>
              <BIcon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></BIcon>
              <h3 className="text-[1.1rem] font-normal tracking-[-0.02em] leading-[1.2] mb-[10px] text-th-fg">Security-<em className="font-pacifico not-italic text-[0.9em] text-th-muted">first</em></h3>
              <p className="text-[0.82rem] text-th-muted leading-[1.7] font-normal">Security isn't a phase — it's a posture. Threat modelling, OWASP compliance, penetration testing, and zero-trust architecture are standard across every engagement.</p>
            </div>
            <div className="flex gap-5 pt-5 border-t border-th-border/70 mt-6">
              <div><div className="text-[1.3rem] font-normal tracking-[-0.02em] text-th-fg">0<em className="font-pacifico not-italic text-[0.75em] text-th-warm">✓</em></div><div className="text-[0.62rem] text-th-light tracking-[0.05em] mt-[2px]">critical breaches post-launch</div></div>
              <div><div className="text-[1.3rem] font-normal tracking-[-0.02em] text-th-fg">100<em className="font-pacifico not-italic text-[0.75em] text-th-warm">%</em></div><div className="text-[0.62rem] text-th-light tracking-[0.05em] mt-[2px]">audits passed first attempt</div></div>
            </div>
          </div>

          {/* Regular cards */}
          {[
            { i: 2, delay: 160, title: <><em className="font-pacifico not-italic text-[0.9em] text-th-muted">AI</em>-native</>, desc: "We don't bolt AI on afterwards — we architect for it from the start. Custom LLM integrations, agentic workflows, and intelligent automation native to your stack.", icon: <><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></> },
            { i: 3, delay: 220, title: <>Performance-<em className="font-pacifico not-italic text-[0.9em] text-th-muted">obsessed</em></>, desc: "Sub-second load times, 99+ Lighthouse scores, and edge-optimised deployments. Speed is a feature — one we never compromise on.", icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /> },
            { i: 4, delay: 300, title: <>Fully <em className="font-pacifico not-italic text-[0.9em] text-th-muted">transparent</em></>, desc: "Daily updates, staging previews, and open project boards. You always know exactly where your project stands — no black boxes, no surprises at invoice time.", icon: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></> },
            { i: 5, delay: 360, title: <>Built to <em className="font-pacifico not-italic text-[0.9em] text-th-muted">scale</em></>, desc: "Architecture decisions made for where you're going, not just where you are. Modular codebases, design systems, and infra that grows with your ambition without a rewrite.", icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></> },
          ].map(({ i, delay, title, desc, icon }) => (
            <div
              key={i}
              data-benefit={i} data-delay={delay}
              className={`${cardBase} transition-[opacity,transform,box-shadow] ${visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ boxShadow: cardShadow }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = cardShadowHover)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = cardShadow)}
            >
              <BIcon>{icon}</BIcon>
              <h3 className="text-[1.1rem] font-normal tracking-[-0.02em] leading-[1.2] mb-[10px] text-th-fg">{title}</h3>
              <p className="text-[0.82rem] text-th-muted leading-[1.7] font-normal">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex items-center justify-between mt-12 pt-10 border-t border-th-border/70">
          <p className="text-[0.84rem] text-th-muted">
            <strong className="text-th-fg font-medium">Ready to work with a team that holds itself to this standard?</strong><br />Every project. No exceptions.
          </p>
          <a href="#cta" className="inline-flex items-center gap-[10px] text-[0.78rem] font-medium tracking-[0.08em] uppercase text-th-bg bg-th-fg no-underline px-6 py-3 rounded-full transition-all duration-300 hover:opacity-80 hover:gap-[14px] shadow-[0_2px_16px_var(--th-shadow-lg)]">
            Start a project
            <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] stroke-current fill-none stroke-2 [stroke-linecap:round]"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
