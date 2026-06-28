import { motion } from 'framer-motion';
import { GraduationCap, Target } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { EXPERIENCE } from '../data/portfolioData';

const iconMap = {
  goal: Target,
  education: GraduationCap,
};

export default function Experience() {
  return (
    
    <div id="experience" className="w-full">
     
      <SectionHeading
        title="Education & Experience"
        subtitle="My academic path and professional goals"
      />

      <div className="relative mt-8">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-lavender/30 to-transparent" />

        <div className="space-y-8">
          {EXPERIENCE.map((item, i) => {
            const Icon = iconMap[item.type] || Target;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[14px] md:left-[22px] top-1 w-8 h-8 rounded-full bg-surface border-2 border-primary/50 flex items-center justify-center z-10">
                  <Icon size={14} className="text-primary" />
                </div>

                <div className="glass-card glow-border p-5 md:p-6 hover:bg-surface-light/80 transition-all duration-300">
                  <span className="text-xs font-mono text-accent/70 tracking-wide uppercase">
                    {item.date}
                  </span>
                  <h3 className="text-white font-bold text-base md:text-lg mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
