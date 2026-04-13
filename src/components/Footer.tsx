import { ExternalLink } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 bg-secondary/20">
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-heading font-bold text-lg mb-4">
            <div className="w-5 h-5 rounded-full bg-foreground" />
            Nioscape
          </div>
          <p className="text-sm text-muted-foreground mb-4">AI-powered invisible companion for better digital experiences.</p>
          <div className="flex gap-3">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-xs">𝕏</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><ExternalLink size={14} /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><ExternalLink size={14} /></a>
          </div>
        </div>
        {[
          { title: "Product", links: ["Features", "Pricing", "Use Cases", "Changelog"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
          { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-heading font-semibold text-sm mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/30 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">© 2026 Nioscape. All rights reserved.</p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
