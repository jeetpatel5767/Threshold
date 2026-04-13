import { motion } from "framer-motion";
import { MessageSquare, Sparkles, RefreshCw } from "lucide-react";

const steps = [
  { icon: MessageSquare, num: "1", title: "Ask", desc: "Share a thought, a question, or a rough idea. That's all it takes." },
  { icon: Sparkles, num: "2", title: "Activate", desc: "Nioscape interprets and begins working behind the scenes to craft what you need." },
  { icon: RefreshCw, num: "3", title: "Refine", desc: "Review, adjust, and iterate — with AI that adapts to your feedback." },
];

const StepsSection = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <p className="section-label">How It Works</p>
      <h2 className="font-heading font-bold text-3xl md:text-4xl max-w-lg mb-14">
        One prompt to begin,
        <br />
        <span className="italic font-normal">three steps</span> to clarity.
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl h-72 md:h-96 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="space-y-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className="flex gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <s.icon size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">
                  <span className="text-accent mr-2">{s.num} —</span>
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StepsSection;
