/**
 * ==============================================================
 * 🌟 TEMPLATE INSTRUCTIONS: Navbar.jsx 🌟
 * ==============================================================
 * The navigation bar component.
 * 
 * - The logo image path is pulled from portfolioData.js (`logoSrc`).
 * - Links in the bottom nav are mapped from `NAV_ITEMS` in portfolioData.js.
 * - Scrolling behavior (hiding at the top, showing on scroll) is configured here.
 */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, assetUrl } from '../data/portfolioData';

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const logoSrc = assetUrl('img/HSB.png');

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-3 left-3 sm:left-4 z-[80]"
      >
        <Link to="/">
          <motion.button
            type="button"
            className="flex items-center rounded-xl border border-white/20 bg-[#0B1425]/72 backdrop-blur-xl px-2 py-1.5 shadow-[0_12px_24px_rgba(0,0,0,0.38)]"
            aria-label="Home"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.img
              src={logoSrc}
              alt="HSB Logo"
              className="w-9 h-9 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1, y: [0, -2, 0] }}
              transition={{
                opacity: { duration: 0.35, ease: 'easeOut' },
                scale: { duration: 0.35, ease: 'easeOut' },
                y: { duration: 2.8, ease: 'easeInOut', repeat: Infinity },
              }}
            />
          </motion.button>
        </Link>
      </motion.header>

      <motion.nav
        initial={false}
        animate={scrollY >= 50
            ? { y: 0, opacity: 1, scale: 1 }
            : { y: 40, opacity: 0, scale: 0.94 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        className={`fixed inset-x-0 bottom-5 z-[70] flex justify-center px-3 sm:px-4 ${
          scrollY >= 50 ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-label="Primary navigation"
      >
        <div className="w-max max-w-[94vw] rounded-full border border-white/15 bg-[#0B1425]/75 backdrop-blur-2xl shadow-[0_18px_36px_rgba(0,0,0,0.42)] px-2 py-2">
          <div className="flex items-center gap-1 md:gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <div key={item.path} className="relative shrink-0">
                  <Link
                    to={item.path}
                    className={`relative z-10 px-3 sm:px-4 md:px-5 py-2.5 rounded-full text-[13px] sm:text-sm font-semibold whitespace-nowrap transition-colors inline-block ${
                      isActive
                        ? 'text-white'
                        : 'text-white/65 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {isActive && (
                    <motion.span
                      layoutId="activeBottomNav"
                      className="absolute inset-0 rounded-full border border-primary/40 bg-gradient-to-r from-primary/28 to-accent/20 shadow-[0_0_0_1px_rgba(145,106,255,0.16),0_8px_18px_rgba(109,65,255,0.28)]"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
