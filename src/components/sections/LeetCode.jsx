import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";
import { leetcodeStats } from "../../data/content";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import AnimatedCounter from "../ui/AnimatedCounter";

const difficultyConfig = [
  { key: "easy", label: "Easy", value: leetcodeStats.easy, color: "bg-emerald-500", text: "text-emerald-600 dark:text-emerald-400" },
  { key: "medium", label: "Medium", value: leetcodeStats.medium, color: "bg-amber-500", text: "text-amber-600 dark:text-amber-400" },
  { key: "hard", label: "Hard", value: leetcodeStats.hard, color: "bg-rose-500", text: "text-rose-600 dark:text-rose-400" },
];

function ProgressBar({ value, max, color, inView, delay = 0 }) {
  const percent = max > 0 ? (value / max) * 100 : 0;

  return (
    <div className="h-2 bg-surface rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${percent}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
        className={`h-full rounded-full ${color}`}
      />
    </div>
  );
}

export default function LeetCode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <AnimatedSection id="leetcode" className="py-16 sm:py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          label="LeetCode"
          title="Problem-solving track record"
          description="Consistent practice building the algorithmic foundation behind great software."
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 bg-card rounded-2xl p-6 sm:p-8 border border-border/60 card-shadow accent-glow flex flex-col items-center justify-center text-center card-elevate"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
              <SiLeetcode className="w-7 h-7 text-accent" />
            </div>
            <p className="text-5xl sm:text-6xl font-semibold text-primary tracking-tight">
              <AnimatedCounter value={leetcodeStats.totalSolved} inView={isInView} />
            </p>
            <p className="mt-2 text-secondary text-sm">Total Problems Solved</p>
            <p className="mt-1 text-xs text-secondary">@{leetcodeStats.username}</p>

            <div className="w-full mt-8 pt-6 border-t border-border/50">
              <p className="text-xs uppercase tracking-widest text-secondary mb-2">
                Contest Rating
              </p>
              <p className="text-3xl font-semibold text-accent">
                <AnimatedCounter value={leetcodeStats.contestRating} inView={isInView} />
              </p>
            </div>

            <Button
              href={leetcodeStats.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-6"
            >
              <SiLeetcode className="w-4 h-4" />
              View LeetCode Profile
              <HiExternalLink className="w-3.5 h-3.5 opacity-70" />
            </Button>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {difficultyConfig.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-5 sm:p-6 border border-border/60 card-shadow card-elevate"
              >
                <p className={`text-xs font-semibold uppercase tracking-wider ${item.text} mb-3`}>
                  {item.label}
                </p>
                <p className="text-3xl sm:text-4xl font-semibold text-primary mb-4">
                  <AnimatedCounter value={item.value} inView={isInView} duration={1400} />
                </p>
                <ProgressBar
                  value={item.value}
                  max={leetcodeStats.totalSolved}
                  color={item.color}
                  inView={isInView}
                  delay={0.2 + index * 0.1}
                />
                <p className="mt-2 text-xs text-secondary">
                  {Math.round((item.value / leetcodeStats.totalSolved) * 100)}% of total
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="sm:col-span-3 bg-surface/80 rounded-2xl p-5 sm:p-6 border border-border/60"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-primary">Difficulty Distribution</p>
                  <p className="text-xs text-secondary mt-1">
                    Balanced practice across easy, medium, and hard problems
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-secondary">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Easy {leetcodeStats.easy}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    Medium {leetcodeStats.medium}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    Hard {leetcodeStats.hard}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex h-3 rounded-full overflow-hidden gap-0.5">
                {difficultyConfig.map((item) => (
                  <motion.div
                    key={item.key}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{
                      flex: item.value,
                      transformOrigin: "left",
                    }}
                    className={`${item.color} first:rounded-l-full last:rounded-r-full`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
