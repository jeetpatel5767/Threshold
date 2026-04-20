import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HorizontalBrandSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["105vw", "-220vw"]);

  return (
    <section
      ref={sectionRef}
      className="relative -mt-20 h-[300vh] overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(18,18,18,0.22)_24%,rgba(8,9,12,0.72)_60%,hsl(var(--background))_100%)]"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex items-center whitespace-nowrap">
          <div className="flex items-center gap-10">
            <div className="h-24 w-24 md:h-32 md:w-32 rounded-full bg-foreground shrink-0" />
            <span className="inline-flex items-baseline gap-0 leading-none text-[33vw] md:text-[25vw] lg:text-[20vw]">
              <span className="font-heading font-extrabold text-foreground">Thres</span>
              <span className="font-into text-[#121212]/55">hold</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalBrandSection;
