import { motion } from 'framer-motion';
import { Server, Monitor, Database, Code, Terminal, Users } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SectionContainer from './layout/SectionContainer';
import LogoLoop from './LogoLoop';
import { SKILL_GROUPS } from '../data/portfolioData';

const iconMap = { Server, Monitor, Database, Code, Terminal, Users };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Skills() {
  const logoItems = SKILL_GROUPS.flatMap((group) =>
    group.items.filter(skill => skill.logo).map((skill) => ({
      node: (
        <div className="group relative flex flex-col items-center justify-center px-4 md:px-6 cursor-pointer">
          <img 
            src={skill.logo} 
            alt={skill.name} 
            className="w-10 h-10 object-contain mx-auto opacity-50 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" 
            loading="lazy" 
          />
          <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[11px] font-medium text-white/90 whitespace-nowrap tracking-wide">
            {skill.name}
          </span>
        </div>
      ),
      title: skill.name,
      ariaLabel: skill.name,
    }))
  );

  return (
    <SectionContainer id="skills">
      <SectionHeading
        title="Skills"
        subtitle="Technologies I work with regularly"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SKILL_GROUPS.map((group) => {
          const Icon = iconMap[group.icon] || Server;
          return (
            <motion.div
              key={group.title}
              variants={cardVariants}
              className="glass-card relative overflow-hidden p-6 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-5 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={18} className="text-primary/70 group-hover:text-primary transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base group-hover:text-primary transition-colors duration-300">{group.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{group.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 relative z-10">
                {group.items.map((skill) => (
                  <span 
                    key={skill.name} 
                    className="group/skill flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium text-white/60 bg-white/[0.03] border border-white/[0.08] rounded-md hover:bg-primary/10 hover:text-white hover:border-primary/30 transition-all duration-300"
                  >
                    {skill.logo && (
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className="w-3.5 h-3.5 object-contain opacity-50 group-hover/skill:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px' }}
        transition={{ delay: 0.1, duration: 0.45 }}
        className="mt-10 mb-8 w-full relative overflow-hidden"
      >
        <LogoLoop
          logos={logoItems}
          speed={60}
          logoHeight={32}
          gap={40}
          fadeOut={false}
          pauseOnHover={true}
          ariaLabel="Skills ticker"
          className="relative z-0 py-6"
        />
      </motion.div>
    </SectionContainer>
  );
}
