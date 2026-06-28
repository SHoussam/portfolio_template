import { motion } from 'framer-motion';
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificates from "./Certificates";
import LookingFor from "./LookingFor";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
};

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero />
      <About />
      <Skills />
      
      <section className="section-padding max-w-7xl mx-auto w-full px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 w-full">
          <div className="flex-1 w-full lg:w-1/2">
            <Experience />
          </div>
          <div className="flex-1 w-full lg:w-1/2">
            <Certificates />
          </div>
        </div>
      </section>

      <LookingFor />
    </motion.div>
  );
}
