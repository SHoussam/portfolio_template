/**
 * ==============================================================
 * 🌟 TEMPLATE INSTRUCTIONS: Hero.jsx 🌟
 * ==============================================================
 * This is the landing section of your portfolio.
 * 
 * - The background is animated using the LiquidEther component.
 * - Text (name, title) comes from portfolioData.js.
 * - You can change the status badge text ("Open to internship opportunities") here.
 * - Button links and icons can be modified in the "CTA Buttons" section below.
 */
import { Component } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import LiquidEther from './LiquidEther';
import { PROFILE, HERO_BADGES } from '../data/portfolioData';
import { HERO_LIQUID_ETHER_PARAMS } from '../config/shaders/liquidEtherParams';

class EtherBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-accent/10" />;
    }
    return this.props.children;
  }
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* LiquidEther animated background */}
      <EtherBoundary>
        <div className="absolute inset-0 w-full h-full">
          <LiquidEther {...HERO_LIQUID_ETHER_PARAMS} />
        </div>
      </EtherBoundary>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark z-[1]" />

      {/* Content */}
      <div className="relative z-[2] max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium text-white/70">Open to internship opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4"
        >
          <span className="text-white">{PROFILE.name.split(' ')[0]} </span>
          <span className="text-gradient">{PROFILE.name.split(' ')[1]}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl font-medium text-white/70 mb-4"
        >
          {PROFILE.title}
        </motion.p>

        {/* Subtitle */}
       

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/projects" className="btn-primary group">
            <ExternalLink size={18} />
            View Projects
          </Link>
          <a 
            href={`/view-pdf?file=${encodeURIComponent(PROFILE.cv)}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-outline group"
          >
            <FileText size={18} />
            View CV
          </a>
          <Link to="/contact" className="btn-outline group">
            <Mail size={18} />
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2]"
      >
        
        
      </motion.div>
    </section>
  );
}
