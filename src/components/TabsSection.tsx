import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tabContent from "@/assets/tab-content.jpg";

const tabs = ["Content Creation", "Data Analysis", "Research & Insights", "Team Collaboration"];
const tabDescriptions = [
  "From quick drafts to polished pieces, let AI handle the heavy lifting so you can focus on ideas that truly matter.",
  "Transform raw data into actionable insights with automated analysis pipelines and visual storytelling.",
  "Dive deeper with AI that surfaces relevant findings, citations, and connections you might have missed.",
  "Real-time collaboration with AI-assisted workflows that keep your team aligned and productive.",
];

const TabsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="features" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <p className="section-label">Use Cases</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl max-w-lg mb-10">
          Different paths to explore, all guided by one <span className="italic font-normal">silent companion.</span>
        </h2>
        <div className="flex flex-wrap gap-3 mb-10">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                active === i ? "bg-foreground text-background" : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="rounded-xl overflow-hidden">
              <img src={tabContent} alt={tabs[active]} className="w-full object-cover rounded-xl" loading="lazy" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-3">Nioscape for</p>
              <h3 className="font-heading font-semibold text-2xl mb-4">{tabs[active]}</h3>
              <p className="text-muted-foreground mb-6">{tabDescriptions[active]}</p>
              <a href="#pricing" className="inline-flex bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                Get Started
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TabsSection;
