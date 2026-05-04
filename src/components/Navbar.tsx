const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-[200]">
    <div className="max-w-[1280px] mx-auto flex items-center justify-between h-16 px-12">
      <a href="#" className="flex items-center gap-2 no-underline">
        <div className="w-5 h-5 rounded-full bg-th-fg flex-shrink-0 shadow-[0_1px_4px_var(--th-shadow-lg)]" />
        <div className="text-[1.1rem] leading-none">
          <span className="font-semibold text-th-fg tracking-[-0.02em]">Thres</span>
          <span className="font-pacifico text-th-muted">hold</span>
        </div>
      </a>

      <div className="flex items-center gap-7 border border-th-border/70 bg-th-card/55 backdrop-blur-[24px] rounded-full px-6 py-2 shadow-[0_2px_16px_var(--th-shadow),inset_0_1px_0_var(--th-glow)]">
        {["services","work","process","pricing","faq"].map((href) => (
          <a
            key={href}
            href={`#${href}`}
            className="text-[0.8rem] text-th-muted no-underline font-normal capitalize hover:text-th-fg transition-colors duration-300"
          >
            {href.charAt(0).toUpperCase() + href.slice(1)}
          </a>
        ))}
      </div>

      <a
        href="#cta"
        className="text-[0.8rem] font-medium px-[22px] py-[9px] rounded-full bg-th-fg text-th-bg no-underline transition-opacity duration-300 shadow-[0_2px_12px_var(--th-shadow-lg)] hover:opacity-80"
      >
        Start a project
      </a>
    </div>
  </nav>
);

export default Navbar;
