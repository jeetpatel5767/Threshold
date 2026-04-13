import { motion } from "framer-motion";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="relative rounded-2xl overflow-hidden">
        <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/50" />
        <motion.div
          className="relative z-10 py-20 px-8 md:px-16 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Step into the future,
            <br />
            guided by AI clarity.
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            Join thousands who have already transformed how they work, create, and think.
          </p>
          <div className="flex gap-4">
            <a href="#pricing" className="bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              Get Started
            </a>
            <a href="#about" className="border border-foreground/30 px-6 py-3 rounded-full text-sm font-medium text-foreground hover:bg-foreground/10 transition-colors">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CTASection;
