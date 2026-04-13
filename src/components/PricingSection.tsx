import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tag: "Free",
    price: "€0",
    period: "/month",
    desc: "Perfect for trying out Nioscape with basic features and limited usage.",
    cta: "Start for Free",
    highlight: false,
    features: ["5 projects", "Basic AI assistance", "Community support", "1 GB storage"],
  },
  {
    name: "Pro",
    tag: "Popular",
    price: "€29",
    period: "/month",
    desc: "For professionals who need advanced features and higher limits.",
    cta: "Upgrade to Pro",
    highlight: true,
    features: ["Unlimited projects", "Advanced AI models", "Priority support", "50 GB storage", "Custom workflows"],
  },
  {
    name: "Enterprise",
    tag: "Pro Plus",
    price: "Custom",
    period: "",
    desc: "Tailored solutions for teams and organizations with complex needs.",
    cta: "Contact Sales",
    highlight: false,
    features: ["Everything in Pro", "Dedicated account manager", "SSO & SAML", "Unlimited storage", "Custom integrations"],
  },
];

const periods = ["Monthly", "Yearly", "Lifetime"];

const PricingSection = () => {
  const [period, setPeriod] = useState(0);

  return (
    <section id="pricing" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <p className="section-label">Pricing</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl max-w-lg mb-10">
          Choose the plan that matches <span className="italic font-normal">your ambition</span>
        </h2>
        <div className="flex gap-2 mb-12">
          {periods.map((p, i) => (
            <button
              key={p}
              onClick={() => setPeriod(i)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                period === i ? "bg-foreground text-background" : "bg-secondary text-muted-foreground"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              className={`rounded-xl p-6 flex flex-col ${
                p.highlight ? "bg-foreground text-background" : "glass-card"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className={`text-xs font-medium mb-1 ${p.highlight ? "text-background/60" : "text-muted-foreground"}`}>{p.tag}</p>
              <h3 className="font-heading font-bold text-2xl mb-1">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="font-heading font-bold text-3xl">{p.price}</span>
                <span className={`text-sm ${p.highlight ? "text-background/60" : "text-muted-foreground"}`}>{p.period}</span>
              </div>
              <p className={`text-sm mb-6 ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>{p.desc}</p>
              <a
                href="#"
                className={`text-sm font-medium px-5 py-2.5 rounded-full text-center mb-6 transition-opacity hover:opacity-90 ${
                  p.highlight ? "bg-background text-foreground" : "bg-accent text-accent-foreground"
                }`}
              >
                {p.cta}
              </a>
              <ul className="space-y-3 mt-auto">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${p.highlight ? "text-background/80" : "text-muted-foreground"}`}>
                    <Check size={14} className={p.highlight ? "text-background/60" : "text-accent"} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
