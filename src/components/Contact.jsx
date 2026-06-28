/**
 * ==============================================================
 * 🌟 TEMPLATE INSTRUCTIONS: Contact.jsx 🌟
 * ==============================================================
 * This is your contact page.
 * 
 * - Form submissions use the standard `mailto:` protocol by default to avoid needing a backend.
 * - If you prefer a real backend, replace the `handleSubmit` logic with an API call 
 *   (e.g., using Formspree or EmailJS).
 * - Contact links (Email, GitHub, LinkedIn, WhatsApp) are pulled from portfolioData.js.
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Code2, BriefcaseBusiness, MessageCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { PROFILE } from '../data/portfolioData';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
};

export default function Contact() {
  const [formHint, setFormHint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);

    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setFormHint('Opening your email app...');
    e.currentTarget.reset();
  };

  const waUrl = `https://wa.me/${PROFILE.whatsapp.number}?text=${encodeURIComponent(PROFILE.whatsapp.message)}`;

  const socials = [
    { icon: Code2, href: PROFILE.github, label: 'GitHub' },
    { icon: BriefcaseBusiness, href: PROFILE.linkedin, label: 'LinkedIn' },
    { icon: MessageCircle, href: waUrl, label: 'WhatsApp' },
    { icon: Mail, href: `mailto:${PROFILE.email}`, label: 'Email' },
  ];

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      id="contact" 
      className="section-padding max-w-5xl mx-auto pt-32"
    >
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project in mind or want to connect? I'd love to hear from you"
      />

      <div className="grid md:grid-cols-5 gap-8">
        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 space-y-4"
        >
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            Whether it's a job opportunity, a collaboration, or just a friendly hello —
            feel free to reach out through any channel.
          </p>

          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glow-border p-4 flex items-center gap-4 group hover:bg-surface-light/80 transition-all duration-300 block"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <social.icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{social.label}</p>
                <p className="text-white/30 text-xs truncate max-w-[200px]">
                  {social.label === 'Email' ? PROFILE.email : social.label === 'WhatsApp' ? 'Send a message' : social.href.replace('https://', '')}
                </p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3 glass-card glow-border p-6 md:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-name" className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full bg-dark-200 border border-surface-border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-dark-200 border border-surface-border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              className="w-full bg-dark-200 border border-surface-border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 resize-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <button type="submit" className="btn-primary">
              <Send size={16} />
              Send Message
            </button>
            {formHint && (
              <span className="text-xs text-accent/70 animate-fade-in">{formHint}</span>
            )}
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
}
