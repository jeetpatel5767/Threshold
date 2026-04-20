import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["About", "Features", "Pricing", "Use Cases", "FAQ"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  ">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2 text-2xl">
          <div className="w-6 h-6 rounded-full bg-foreground" />
          <span className="inline-flex items-baseline gap-0">
            <span className="font-heading font-extrabold text-foreground">Thres</span>
            <span className="font-into text-[#303030]/90">hold</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 rounded-full border border-white/20 bg-white/10 px-6 py-2 backdrop-blur-md">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-[#121212] hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
        </div>
        <a href="#pricing" className="hidden md:inline-flex text-sm font-medium bg-foreground text-background px-5 py-2 rounded-full hover:opacity-90 transition-opacity">
          Get Started
        </a>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <a href="#pricing" className="text-sm font-medium bg-foreground text-background px-5 py-2 rounded-full text-center">
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
