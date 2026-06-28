import { motion } from 'framer-motion';
import { Briefcase, Rocket, Users, BookOpen } from 'lucide-react';
import SectionHeading from './SectionHeading';

const items = [
  {
    icon: Briefcase,
    title: 'PFA Internship',
    description: 'A backend or full-stack internship where I can contribute to production-grade systems and learn from experienced engineers.',
  },
  {
    icon: Rocket,
    title: 'Real-World Impact',
    description: 'Projects that ship to real users — building APIs, dashboards, or tools that solve actual problems.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Working with a team that values code quality, communication, and continuous learning.',
  },
  {
    icon: BookOpen,
    title: 'Growth & Mentorship',
    description: 'An environment where I can deepen my backend skills, explore DevOps practices, and grow as a software engineer.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function LookingFor() {
  return (
    <section id="looking-for" className="section-padding max-w-6xl mx-auto">
      <SectionHeading
        title="What I'm Looking For"
        subtitle="The kind of opportunities and environments where I thrive"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid sm:grid-cols-2 gap-5"
      >
        {items.map((item) => (
          <motion.div
            key={item.title}
            variants={cardVariants}
            className="glass-card glow-border p-6 group hover:bg-surface-light/80 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <item.icon size={20} className="text-primary" />
            </div>
            <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
