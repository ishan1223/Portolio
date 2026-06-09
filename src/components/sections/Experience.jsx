import { motion } from "framer-motion";
import { experience } from "../../data/content";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="py-16 sm:py-20 md:py-28 section-band">
      <div className="section-container">
        <SectionHeading
          label="Experience"
          title="How I've grown"
          description="While I'm actively pursuing internships, here's how I've been building experience and impact."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-2 bottom-2 w-px bg-border" />

          {experience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-0 md:gap-8 mb-10 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden md:block md:w-1/2" />

              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-[15px] h-[15px] rounded-full bg-accent border-[3px] border-background z-10 mt-1.5" />

              <div className="pl-8 md:pl-0 md:w-1/2">
                <div className="bg-card rounded-2xl p-6 border border-border/60 card-shadow card-elevate">
                  <span className="inline-block px-2.5 py-1 text-xs font-medium text-accent bg-accent/10 rounded-md border border-accent/20 mb-3">
                    {item.type}
                  </span>
                  <h3 className="text-lg font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-secondary mt-1">
                    {item.organization} &middot; {item.period}
                  </p>
                  <p className="text-sm text-secondary leading-relaxed mt-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
