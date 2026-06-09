import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { HiExternalLink, HiLocationMarker } from "react-icons/hi";
import { linkedinProfile, personalInfo } from "../../data/content";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import AnimatedCounter from "../ui/AnimatedCounter";

export default function LinkedIn() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <AnimatedSection id="linkedin" className="py-16 sm:py-20 md:py-28 section-band">
      <div className="section-container">
        <SectionHeading
          label="LinkedIn"
          title="Professional presence"
          description="Thought leadership, networking, and the story behind the code."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-2xl border border-border/60 card-shadow card-elevate overflow-hidden h-full">
              <div className="h-20 sm:h-24 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent" />

              <div className="px-6 sm:px-8 pb-8 -mt-10 sm:-mt-12">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden ring-4 ring-card card-shadow mb-4">
                  <img
                    src={linkedinProfile.image}
                    alt={`${personalInfo.name} LinkedIn`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "/images/portrait-placeholder.svg";
                    }}
                  />
                </div>

                <h3 className="text-xl font-semibold text-primary">{personalInfo.name}</h3>
                <p className="mt-1.5 text-sm text-secondary leading-relaxed">
                  {linkedinProfile.headline}
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-4 text-xs text-secondary">
                  <span className="inline-flex items-center gap-1">
                    <HiLocationMarker className="w-3.5 h-3.5 text-accent" />
                    {linkedinProfile.location}
                  </span>
                  <span ref={statsRef} className="inline-flex items-center gap-1">
                    <FaLinkedin className="w-3.5 h-3.5 text-accent" />
                    <AnimatedCounter
                      value={linkedinProfile.connections}
                      suffix="+ connections"
                      inView={isInView}
                    />
                  </span>
                </div>

                <Button
                  href={linkedinProfile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-6"
                >
                  <FaLinkedin className="w-4 h-4" />
                  View LinkedIn Profile
                  <HiExternalLink className="w-3.5 h-3.5 opacity-70" />
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3 flex flex-col gap-4 sm:gap-5">
            <p className="text-xs font-medium tracking-widest uppercase text-secondary">
              Featured Posts
            </p>
            {linkedinProfile.featuredPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -3 }}
                className="bg-card rounded-2xl p-5 sm:p-6 border border-border/60 card-shadow card-elevate cursor-default"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="text-base font-semibold text-primary leading-snug">
                    {post.title}
                  </h4>
                  <span className="text-xs text-secondary whitespace-nowrap shrink-0">
                    {post.date}
                  </span>
                </div>
                <p className="text-sm text-secondary leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs font-medium text-accent">{post.engagement}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
