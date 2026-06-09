import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { githubStats, personalInfo } from "../../data/content";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

const stats = [
  { label: "Repositories", value: githubStats.repositories, icon: FaCodeBranch },
  { label: "Stars", value: githubStats.stars, icon: FaStar },
  { label: "Followers", value: githubStats.followers, icon: HiUsers },
];

export default function GitHub() {
  return (
    <AnimatedSection id="github" className="py-16 sm:py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          label="GitHub"
          title="Open source activity"
          description="Consistent contributions and a growing presence in the developer community."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border/50 card-shadow flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center border border-border/50">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-primary">{stat.value}</p>
                <p className="text-sm text-secondary">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 card-shadow"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-primary">Contribution Graph</h3>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              View Profile
            </motion.a>
          </div>

          <div className="overflow-x-auto pb-2">
            <ContributionHeatmap />
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function ContributionHeatmap() {
  const weeks = 52;
  const days = 7;
  const levels = [0, 1, 2, 3, 4];

  const generateData = () => {
    const data = [];
    for (let w = 0; w < weeks; w++) {
      const week = [];
      for (let d = 0; d < days; d++) {
        const seed = (w * 7 + d) * 13;
        const level = levels[seed % 5];
        week.push(level);
      }
      data.push(week);
    }
    return data;
  };

  const heatmapData = generateData();

  const levelColors = [
    "bg-border/40",
    "bg-primary/15",
    "bg-primary/30",
    "bg-primary/55",
    "bg-primary/80",
  ];

  return (
    <div className="flex gap-[3px] min-w-[680px]">
      {heatmapData.map((week, wi) => (
        <div key={wi} className="flex flex-col gap-[3px]">
          {week.map((level, di) => (
            <div
              key={di}
              className={`w-[11px] h-[11px] rounded-[2px] ${levelColors[level]}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
