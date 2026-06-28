/**
 * ==============================================================
 * 🌟 TEMPLATE INSTRUCTIONS: About.jsx 🌟
 * ==============================================================
 * The About section provides a brief introduction.
 * 
 * - Bio text is loaded from portfolioData.js.
 * - The `highlights` array below controls the 3 stat cards on the right.
 * - You can change the Lucide-react icons and text to match your profile.
 * - Additional static text is hardcoded in the <motion.div> below if you want to change it.
 */
import { motion } from 'framer-motion';
import { User, MapPin, GraduationCap, Code2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { PROFILE } from '../data/portfolioData';

const highlights = [
  { icon: Code2, label: 'Backend-First', desc: 'PHP, Laravel, MySQL' },
  { icon: GraduationCap, label: 'CS Student', desc: 'EMSI Engineering' },
  { icon: MapPin, label: 'Morocco', desc: 'Tanger-Tetouan' },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function About() {
  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      <SectionHeading
        title="About Me"
        subtitle="A quick look at who I am and what drives me"
      />

      <div className="grid md:grid-cols-5 gap-8 items-start">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 space-y-5"
        >
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            {PROFILE.bio}
          </p>
          <p className="text-white/50 text-base leading-relaxed">
            I care about writing clean, tested, and maintainable code. Whether it's
            designing a database schema, building a REST API, or crafting a responsive
            frontend — I focus on quality and real-world impact.
          </p>
          <p className="text-white/50 text-base leading-relaxed">
            When I'm not coding, you'll find me exploring Linux, reading about system
            architecture, or contributing to open-source projects.
          </p>
        </motion.div>

        {/* Highlights column */}
        <div className="md:col-span-2 space-y-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="glass-card glow-border p-4 flex items-center gap-4 group hover:bg-surface-light/80 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{item.label}</p>
                <p className="text-white/40 text-xs">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
