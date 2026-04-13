import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "I've tried every AI tool out there, but this one feels different — like it was crafted to be invisible, make me forget I'm using AI at all. Closer. Perfect for my daily workflow.",
    name: "Joanne S.",
    role: "Product Designer",
  },
  {
    text: "Within days, this transformed my creative process. The balance of simplicity and depth is remarkable — I've been searching for exactly this kind of tool for years.",
    name: "Marco T.",
    role: "Content Strategist",
  },
  {
    text: "What makes this truly special is how it handles complex problems so effortlessly. My clients are impressed with the quality of output. Can't imagine working without it now.",
    name: "Sarah L.",
    role: "Freelance Writer",
  },
];

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <p className="section-label">Social Proof</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl max-w-lg mb-14">
          What others whisper <span className="italic font-normal">about the experience</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="glass-card rounded-xl p-6 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <p className="font-heading font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex gap-2 justify-end mt-8">
          <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
