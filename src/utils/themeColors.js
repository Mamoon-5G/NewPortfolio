/**
 * Theme Color Palettes for Dynamic Per-Reload Rotation
 * - DARK_THEME_COLORS: High-contrast, neon & cosmic cyber shades for Dark Mode
 * - LIGHT_THEME_COLORS: Vibrant, crisp, editorial shades for Light Mode
 */

export const DARK_THEME_COLORS = [
  { name: "Cyber Rose", hex: "#f43f5e", rgb: "244, 63, 94", secondaryRgb: "251, 113, 133" }, // Classic Reddish
  { name: "Electric Cyan", hex: "#06b6d4", rgb: "6, 182, 212", secondaryRgb: "34, 211, 238" }, // Cyan / Aqua
  { name: "Neon Violet", hex: "#8b5cf6", rgb: "139, 92, 246", secondaryRgb: "167, 139, 250" }, // Purple / Violet
  { name: "Matrix Emerald", hex: "#10b981", rgb: "16, 185, 129", secondaryRgb: "52, 211, 153" }, // Matrix Green
  { name: "Solar Amber", hex: "#f59e0b", rgb: "245, 158, 11", secondaryRgb: "251, 191, 36" }, // Golden Amber
  { name: "Cobalt Blue", hex: "#3b82f6", rgb: "59, 130, 246", secondaryRgb: "96, 165, 250" }, // Futuristic Blue
];

export const LIGHT_THEME_COLORS = [
  { name: "Emerald Jade", hex: "#10b981", rgb: "16, 185, 129", secondaryRgb: "5, 150, 105" }, // Classic Green
  { name: "Crimson Ruby", hex: "#e11d48", rgb: "225, 29, 72", secondaryRgb: "190, 18, 60" }, // Crisp Rose / Ruby
  { name: "Royal Indigo", hex: "#4f46e5", rgb: "79, 70, 229", secondaryRgb: "67, 56, 202" }, // Deep Indigo
  { name: "Cerulean Blue", hex: "#0284c7", rgb: "2, 132, 199", secondaryRgb: "3, 105, 161" }, // Ocean Blue
  { name: "Vibrant Violet", hex: "#7c3aed", rgb: "124, 58, 237", secondaryRgb: "109, 40, 217" }, // Rich Violet
  { name: "Sunset Ochre", hex: "#d97706", rgb: "217, 119, 6", secondaryRgb: "180, 83, 9" }, // Warm Amber
];

/**
 * Selects initial colors respecting user choice or random shuffle on reload
 */
export const initializeThemeColors = () => {
  if (typeof window === "undefined") {
    return {
      darkColor: DARK_THEME_COLORS[0],
      lightColor: LIGHT_THEME_COLORS[0],
      isShuffle: true,
      darkIndex: 0,
      lightIndex: 0,
    };
  }

  const savedMode = localStorage.getItem("accent_mode"); // "manual" or "shuffle"
  const savedDarkIdx = localStorage.getItem("accent_dark_index");
  const savedLightIdx = localStorage.getItem("accent_light_index");

  const isShuffle = savedMode !== "manual";

  let darkIdx, lightIdx;

  if (isShuffle) {
    darkIdx = Math.floor(Math.random() * DARK_THEME_COLORS.length);
    lightIdx = Math.floor(Math.random() * LIGHT_THEME_COLORS.length);
  } else {
    darkIdx = savedDarkIdx !== null ? parseInt(savedDarkIdx, 10) % DARK_THEME_COLORS.length : 0;
    lightIdx = savedLightIdx !== null ? parseInt(savedLightIdx, 10) % LIGHT_THEME_COLORS.length : 0;
  }

  const darkColor = DARK_THEME_COLORS[darkIdx] || DARK_THEME_COLORS[0];
  const lightColor = LIGHT_THEME_COLORS[lightIdx] || LIGHT_THEME_COLORS[0];

  return {
    darkColor,
    lightColor,
    isShuffle,
    darkIndex: darkIdx,
    lightIndex: lightIdx,
  };
};

export const applyThemeColor = (isDark, colorConfig) => {
  if (typeof document === "undefined" || !colorConfig) return;

  const activeColor = isDark ? colorConfig.darkColor : colorConfig.lightColor;
  if (!activeColor) return;

  const root = document.documentElement;
  root.style.setProperty("--primary-color", activeColor.hex);
  root.style.setProperty("--highlight-color", activeColor.hex);
  root.style.setProperty("--space-glow", activeColor.hex);
  root.style.setProperty("--secondary-fg", activeColor.hex);
};

