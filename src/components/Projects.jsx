/**
 * ==============================================================
 * 🌟 TEMPLATE INSTRUCTIONS: Projects.jsx 🌟
 * ==============================================================
 * This component displays your portfolio projects.
 * 
 * - Project data is automatically mapped from portfolioData.js (PROJECTS array).
 * - The card layout, images, and hover effects are pre-configured here.
 * - If you want to change the number of technologies shown before adding the "+X" badge,
 *   you can modify the `slice(0, 5)` logic inside the map function below.
 */
import { motion } from 'framer-motion';
import { ExternalLink, Code2, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { PROJECTS } from '../data/portfolioData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
};

export default function Projects() {
  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      id="projects" 
      className="section-padding max-w-7xl mx-auto pt-32"
    >
      <SectionHeading
        title="Featured Projects"
        subtitle="Real-world applications showcasing backend architecture, clean code, and modern tools"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            className="group relative glass-card overflow-hidden flex flex-col rounded-3xl border border-surface-border hover:border-primary/50 hover:-translate-y-2 hover:shadow-glow transition-all duration-500"
          >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 z-[5]" />
            </div>

            {/* Content Section */}
            <div className="p-7 relative flex-1 flex flex-col z-20">
              <h3 className="text-white font-bold text-xl mb-3 group-hover:text-primary-light transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>

              {/* Highlights (if any, showing max 2 to keep cards balanced) */}
              {project.highlights && (
                <ul className="mb-6 space-y-2">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/50 text-xs">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                      <span className="line-clamp-2">{highlight}</span>
                    </li>
                  ))}
                  {project.highlights.length > 2 && (
                    <li className="text-primary/70 text-xs italic pl-6">
                      + {project.highlights.length - 2} more features
                    </li>
                  )}
                </ul>
              )}

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-mono font-medium text-lavender/90 bg-lavender/10 border border-lavender/20 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="px-2.5 py-1 text-[11px] font-mono font-medium text-white/40 bg-white/5 border border-white/10 rounded-md">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 border-t border-white/10 pt-5 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white/80 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300"
                  >
                    <Code2 size={16} />
                    Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-primary/90 hover:bg-primary border border-primary/50 rounded-xl transition-all duration-300 hover:shadow-glow"
                  >
                    <ExternalLink size={16} />
                    Visit Live
                  </a>
                )}
              </div>
            </div>

            {/* Ambient background glow */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/15 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
