/**
 * ==============================================================
 * 🌟 TEMPLATE INSTRUCTIONS: App.jsx 🌟
 * ==============================================================
 * App.jsx acts as the layout and routing wrapper for the entire portfolio.
 * 
 * - The Navbar and Footer are rendered outside the Routes to appear on every page.
 * - Framer Motion's <AnimatePresence> is used to animate page transitions.
 * - Add or remove <Route> elements if you add or remove pages.
 */
import { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
import PdfViewer from './components/PdfViewer';

export default function App() {
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;

      ticking.current = true;
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        if (currentY < lastScrollY.current - 2) {
          setScrollDirection('up');
        } else if (currentY > lastScrollY.current + 2) {
          setScrollDirection('down');
        }
        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isPdfViewer = location.pathname === '/view-pdf';

  return (
    <>
      {!isPdfViewer && <Navbar />}
      <div className={`page-scroll-shell ${scrollDirection === 'up' && !isPdfViewer ? 'page-scroll-shell--reverse' : ''}`}>
        <main>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/view-pdf" element={<PdfViewer />} />
            </Routes>
          </AnimatePresence>
        </main>
        {!isPdfViewer && <Footer />}
      </div>
    </>
  );
}
