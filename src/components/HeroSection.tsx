import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import heroObject from "@/assets/hero-object.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 bg-background/40" />
    <div className="relative z-10 flex flex-col items-center text-center px-6 pt-20">
      <motion.img
        src={heroObject}
        alt="3D Object"
        className="w-48 h-48 md:w-64 md:h-64 mb-8 object-contain"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1
        className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-tight text-foreground"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Step <span className="italic font-normal">into</span> better
        <br />
        digital experiences
      </motion.h1>
      <motion.p
        className="mt-6 text-muted-foreground max-w-xl text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        AI-powered companion that amplifies your focus, accelerates your workflow, and delivers invisible power to every task.
      </motion.p>
      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <a href="#pricing" className="bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
          Get Started
        </a>
        <a href="#about" className="border border-border px-6 py-3 rounded-full text-sm font-medium text-foreground hover:bg-secondary transition-colors">
          Learn More
        </a>
      </motion.div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
