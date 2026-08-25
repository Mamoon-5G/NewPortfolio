import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Contact } from "@/sections/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";
import { PlexusBackground } from "@/components/PlexusBackground";
import {
  initializeThemeColors,
  applyThemeColor,
  DARK_THEME_COLORS,
  LIGHT_THEME_COLORS
} from "@/utils/themeColors";

import {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import {
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

/* =========================
   HELPERS
========================= */
const getInitialTheme = () => {
  if (typeof window === "undefined") return true;

  const saved = localStorage.getItem("theme");
  if (saved) return saved !== "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

function App() {
  const prefersReducedMotion = useReducedMotion();

  /* =========================
     STATE & DYNAMIC PALETTE
  ========================= */
  const [isDark, setIsDark] = useState(getInitialTheme);
  const [isMobile, setIsMobile] = useState(false);
  const [themeColors, setThemeColors] = useState(initializeThemeColors);
  const activeThemeColor = isDark ? themeColors.darkColor : themeColors.lightColor;

  /* =========================
     PALETTE SELECTION & SHUFFLE HANDLERS
  ========================= */
  const handleSelectColorIndex = useCallback((index) => {
    setThemeColors((prev) => {
      let next;
      if (isDark) {
        const darkColor = DARK_THEME_COLORS[index] || DARK_THEME_COLORS[0];
        localStorage.setItem("accent_dark_index", index);
        localStorage.setItem("accent_mode", "manual");
        next = { ...prev, darkIndex: index, darkColor, isShuffle: false };
      } else {
        const lightColor = LIGHT_THEME_COLORS[index] || LIGHT_THEME_COLORS[0];
        localStorage.setItem("accent_light_index", index);
        localStorage.setItem("accent_mode", "manual");
        next = { ...prev, lightIndex: index, lightColor, isShuffle: false };
      }
      applyThemeColor(isDark, next);
      return next;
    });
  }, [isDark]);

  const handleToggleShuffle = useCallback(() => {
    setThemeColors((prev) => {
      const nextShuffle = !prev.isShuffle;
      if (nextShuffle) {
        localStorage.setItem("accent_mode", "shuffle");
        const darkIdx = Math.floor(Math.random() * DARK_THEME_COLORS.length);
        const lightIdx = Math.floor(Math.random() * LIGHT_THEME_COLORS.length);
        const next = {
          darkColor: DARK_THEME_COLORS[darkIdx],
          lightColor: LIGHT_THEME_COLORS[lightIdx],
          darkIndex: darkIdx,
          lightIndex: lightIdx,
          isShuffle: true
        };
        applyThemeColor(isDark, next);
        return next;
      } else {
        localStorage.setItem("accent_mode", "manual");
        return { ...prev, isShuffle: false };
      }
    });
  }, [isDark]);

  /* =========================
     MOBILE DETECTION (optimized)
  ========================= */
  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px), (pointer: coarse)");

    const handleChange = () => setIsMobile(media.matches);
    handleChange();

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  /* =========================
     THEME & COLOR SYNC ON MOUNT / CHANGE
  ========================= */
  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark);
    applyThemeColor(isDark, themeColors);
  }, [isDark, themeColors]);

  /* =========================
     THEME TOGGLE (single source of truth)
  ========================= */
  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;

      document.documentElement.classList.toggle("light", !next);
      localStorage.setItem("theme", next ? "dark" : "light");
      applyThemeColor(next, themeColors);

      return next;
    });
  }, [themeColors]);

  /* =========================
     SCROLL OPTIMIZATION
  ========================= */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          document.documentElement.style.setProperty(
            "--scroll-y",
            `${window.scrollY}px`
          );
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================
     CURSOR MOTION
  ========================= */
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = useMemo(
    () => ({
      damping: 25,
      stiffness: 700,
      mass: 0.1,
    }),
    []
  );

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const enableEffects = !isMobile && !prefersReducedMotion;

  const handleMouseMove = useCallback(
    (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY, enableEffects]
  );

  useEffect(() => {
    if (!enableEffects) return;

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove, enableEffects]);

  /* =========================
     RENDER
  ========================= */
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <PlexusBackground isDark={isDark} activeThemeColor={activeThemeColor} />
      <LoadingScreen isDark={isDark} />

      {enableEffects && (
        <CustomCursor
          cursorXSpring={cursorXSpring}
          cursorYSpring={cursorYSpring}
        />
      )}

      <Navbar />

      <main>
        <div className="relative">
          <Hero />
        </div>

        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />

      <ThemeToggle
        isDark={isDark}
        toggle={toggleTheme}
        themeColors={themeColors}
        onSelectColorIndex={handleSelectColorIndex}
        onToggleShuffle={handleToggleShuffle}
      />
    </div>
  );
}

export default App;