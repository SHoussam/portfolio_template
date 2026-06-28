import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex gap-1.5 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="w-8 h-1 rounded-full bg-primary" />
        <span className="w-3 h-1 rounded-full bg-accent/60" />
        <span className="w-1.5 h-1 rounded-full bg-lavender/40" />
      </div>
    </motion.div>
  );
}
