import { motion } from "framer-motion";
import feature1 from "@/assets/feature1.jpg";
import feature2 from "@/assets/feature2.jpg";
import feature3 from "@/assets/feature3.jpg";

const features = [
  { img: feature1, title: "The AI Notebook", desc: "Capture ideas in real-time with AI that learns how you think and adapts to your style." },
  { img: feature2, title: "Invisible First Pass", desc: "Drafts, edits and suggestions appear seamlessly in the margins of your writing flow." },
  { img: feature3, title: "A Silent Guide", desc: "Automated workflows that handle the repetitive — so you can focus on what matters." },
];

const FeaturesSection = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <p className="section-label">Introducing Nioscape</p>
      <h2 className="font-heading font-bold text-3xl md:text-4xl max-w-lg mb-12">
        Harness <span className="italic font-normal">invisible power</span> to write faster, focus deeper, and save hours.
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="glass-card rounded-xl overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="overflow-hidden">
              <img src={f.img} alt={f.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
