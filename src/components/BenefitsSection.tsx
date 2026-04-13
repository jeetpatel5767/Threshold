import { motion } from "framer-motion";
import { Zap, Shield, Clock, BarChart3, Globe, Layers } from "lucide-react";

const benefits = [
  { icon: Zap, title: "True Performance", desc: "Optimized for speed so nothing slows you down." },
  { icon: Shield, title: "Always in Control", desc: "Privacy-first design that keeps your data secure." },
  { icon: Clock, title: "Capture Focus", desc: "Eliminate distractions with streamlined workflows." },
  { icon: BarChart3, title: "Smart Analytics", desc: "Track and measure what matters to your growth." },
  { icon: Globe, title: "Access Anywhere", desc: "Available on every device, wherever you go." },
  { icon: Layers, title: "Built to Scale", desc: "From solo to enterprise, grows with your ambition." },
];

const BenefitsSection = () => (
  <section className="py-24 md:py-32 bg-secondary/30">
    <div className="container mx-auto px-6">
      <p className="section-label">Benefits</p>
      <h2 className="font-heading font-bold text-3xl md:text-4xl max-w-lg mb-14">
        Invisible power at your side, delivering <span className="italic font-normal">tangible benefits</span> every day.
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            className="glass-card rounded-xl p-6 hover:border-accent/30 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
              <b.icon size={18} className="text-accent" />
            </div>
            <h3 className="font-heading font-semibold mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
