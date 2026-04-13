import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["About", "Features", "Pricing", "Use Cases", "FAQ"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2 font-heading font-bold text-lg text-foreground">
          <div className="w-6 h-6 rounded-full bg-foreground" />
          Nioscape
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
