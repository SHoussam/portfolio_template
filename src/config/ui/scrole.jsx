import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

export function useTimelineScroll(containerRef, height) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"]
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return { heightTransform, opacityTransform };
}

export function useRevealOnScroll() {
  useEffect(() => {
    const lineTimers = new WeakMap();

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const blurObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.3 }
    );

    const lineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = setTimeout(() => entry.target.classList.add("drawn"), 200);
            lineTimers.set(entry.target, timer);
          } else {
            const timer = lineTimers.get(entry.target);
            if (timer) {
              clearTimeout(timer);
              lineTimers.delete(entry.target);
            }
            entry.target.classList.remove("drawn");
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll(".reveal-scale").forEach((el) => revealObserver.observe(el));
    document.querySelectorAll(".blur-section").forEach((el) => blurObserver.observe(el));
    document.querySelectorAll(".line-draw").forEach((el) => lineObserver.observe(el));

    return () => {
      document.querySelectorAll(".reveal-scale").forEach((el) => el.classList.remove("active"));
      document.querySelectorAll(".blur-section").forEach((el) => el.classList.remove("in-view"));
      document.querySelectorAll(".line-draw").forEach((el) => el.classList.remove("drawn"));
      revealObserver.disconnect();
      blurObserver.disconnect();
      lineObserver.disconnect();
    };
  }, []);
}

export function useProgressRingOnScroll(waUrl) {
  useEffect(() => {
    const container = document.createElement("div");
    container.className = "progress-ring-container";
    container.innerHTML = `
      <svg class="progress-ring" width="60" height="60">
        <circle cx="30" cy="30" r="28" fill="none" stroke="rgba(124,92,255,0.2)" stroke-width="2"></circle>
        <circle cx="30" cy="30" r="28" fill="none" stroke="#7c5cff" stroke-width="2" stroke-dasharray="175.9" stroke-dashoffset="0" stroke-linecap="round"></circle>
      </svg>
      <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="whatsapp-btn" aria-label="Contact on WhatsApp">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.984-.365-1.739-.757-2.874-2.513-2.96-2.63-.086-.115-.693-.921-.693-1.758 0-.837.433-1.25.589-1.423.156-.174.347-.217.462-.217.115 0 .231.001.332.005.109.004.258-.041.404.308.145.347.491 1.2.534 1.285.044.085.073.184.014.303-.058.12-.088.19-.174.29-.086.1-.181.222-.259.302-.087.087-.174.188-.074.359.099.172.441.728.95 1.18.654.581 1.201.761 1.373.847.173.086.274.073.376-.044.103-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564c.174.087.289.13.332.202.045.072.045.419-.1.824z"></path>
        </svg>
      </a>`;
    document.body.appendChild(container);

    const progressCircle = container.querySelector(".progress-ring circle:last-child");

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const docHeight = scrollHeight - clientHeight;
      const progress = Math.min(Math.max(scrollTop / docHeight, 0), 1);
      const circumference = 2 * Math.PI * 28;

      if (progressCircle) {
        progressCircle.style.strokeDashoffset = circumference - progress * circumference;
      }

      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 20;
      container.classList.toggle("at-bottom", isAtBottom);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      container.remove();
    };
  }, [waUrl]);
}

export function useBottomBarScroll() {
  useEffect(() => {
    const bar = document.getElementById("bottomBar");
    if (!bar) return undefined;

    const links = Array.from(bar.querySelectorAll("a[href^='#']"));
    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);
    const visibilityMap = new Map();
    let activeId = "";

    const setActive = (id) => {
      if (!id || id === activeId) return;
      activeId = id;
      links.forEach((link) => {
        const href = link.getAttribute("href");
        link.classList.toggle("active", href === `#${id}`);
      });
    };

    const updateActiveFromVisible = () => {
      const visible = sections.filter((section) => visibilityMap.get(section.id));
      if (!visible.length) return;

      const targetLine = window.innerHeight * 0.35;
      visible.sort((a, b) => {
        const aDist = Math.abs(a.getBoundingClientRect().top - targetLine);
        const bDist = Math.abs(b.getBoundingClientRect().top - targetLine);
        return aDist - bDist;
      });

      setActive(visible[0].id);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.isIntersecting);
        });
        updateActiveFromVisible();
      },
      {
        threshold: [0.15, 0.35, 0.6],
        rootMargin: "-10% 0px -45% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => {
      bar.classList.toggle("show", window.scrollY > 50);
      updateActiveFromVisible();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);
}

export function Scrole({ heightTransform, opacityTransform }) {
  return (
    <motion.div
      style={{
        height: heightTransform,
        opacity: opacityTransform
      }}
      className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
    />
  );
}
