/**
 * ==============================================================
 * 🌟 TEMPLATE INSTRUCTIONS: Footer.jsx 🌟
 * ==============================================================
 * The site footer.
 * 
 * - Social links map directly from portfolioData.js.
 * - The logo and copyright text use data from portfolioData.js.
 * - Feel free to change the text "Built with React..." below.
 */
import { motion } from 'framer-motion';
import { Code2, BriefcaseBusiness, Mail, Heart } from 'lucide-react';
import { PROFILE, assetUrl } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();
  const logoSrc = assetUrl('img/HSB.png');

  const socialLinks = [
    { icon: Code2, href: PROFILE.github, label: 'GitHub' },
    { icon: BriefcaseBusiness, href: PROFILE.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${PROFILE.email}`, label: 'Email' },
  ];

  return (
    <footer className="border-t border-surface-border bg-dark/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.img
              src={logoSrc}
              alt="HSB Logo"
              className="w-9 h-9 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.35)] mx-auto md:mx-0"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1, y: [0, -2, 0] }}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: 0.35, ease: 'easeOut' },
                scale: { duration: 0.35, ease: 'easeOut' },
                y: { duration: 2.8, ease: 'easeInOut', repeat: Infinity },
              }}
            />
            <p className="text-white/30 text-xs mt-1">
              Built with React, Tailwind & Framer Motion
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={s.label}
                className="w-9 h-9 rounded-lg bg-white/5 border border-surface-border flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-surface-border/50 text-center">
          <p className="text-white/25 text-xs flex items-center justify-center gap-1">
            © {year} {PROFILE.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
