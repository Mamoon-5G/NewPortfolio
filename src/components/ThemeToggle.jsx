import { useState, useRef, useEffect } from "react";
import { Moon, Sun, Palette, Dices, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DARK_THEME_COLORS, LIGHT_THEME_COLORS } from "@/utils/themeColors";

export const ThemeToggle = ({
    isDark,
    toggle,
    themeColors,
    onSelectColorIndex,
    onToggleShuffle
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    // Current palette list based on active dark/light mode
    const currentList = isDark ? DARK_THEME_COLORS : LIGHT_THEME_COLORS;
    const activeIndex = isDark ? themeColors?.darkIndex : themeColors?.lightIndex;

    // Close palette picker when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={containerRef} className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center">
            {/* Color Palette Popover */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute bottom-16 right-0 w-64 p-3.5 rounded-2xl glass-strong border border-border/60 shadow-2xl backdrop-blur-xl"
                    >
                        <div className="flex items-center justify-between mb-3 pb-2 border-t-0 border-b border-border/40">
                            <span className="text-xs font-bold tracking-wider uppercase text-foreground/90 flex items-center gap-1.5">
                                <Palette className="w-3.5 h-3.5 text-primary" />
                                Accent Palette
                            </span>
                            <button
                                onClick={onToggleShuffle}
                                className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-semibold transition-all cursor-pointer ${
                                    themeColors?.isShuffle
                                        ? "bg-primary/20 text-primary border border-primary/30"
                                        : "bg-surface text-muted-foreground hover:text-foreground"
                                }`}
                                title="Shuffle accent color automatically on each reload"
                            >
                                <Dices className={`w-3 h-3 ${themeColors?.isShuffle ? "animate-spin" : ""}`} style={{ animationDuration: "3s" }} />
                                <span>{themeColors?.isShuffle ? "Shuffle On" : "Shuffle Off"}</span>
                            </button>
                        </div>

                        {/* Color Swatches */}
                        <div className="grid grid-cols-6 gap-2">
                            {currentList.map((item, idx) => {
                                const isSelected = activeIndex === idx;
                                return (
                                    <button
                                        key={item.name}
                                        onClick={() => onSelectColorIndex(idx)}
                                        title={item.name}
                                        className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-115 active:scale-95 cursor-pointer shadow-md ${
                                            isSelected ? "ring-2 ring-foreground scale-110" : ""
                                        }`}
                                        style={{ backgroundColor: item.hex }}
                                        aria-label={`Select ${item.name}`}
                                    >
                                        {isSelected && (
                                            <Check className="w-3.5 h-3.5 text-white drop-shadow" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Pill */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="glass-strong rounded-full p-1.5 flex items-center gap-1 shadow-xl border border-border/60 backdrop-blur-xl"
            >
                {/* Palette Popover Toggle Button */}
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="p-2.5 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200 cursor-pointer"
                    aria-label="Customize accent colors"
                    title="Customize Theme Colors"
                >
                    <Palette className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </button>

                <div className="w-[1px] h-4 bg-border/60" />

                {/* Dark / Light Mode Button */}
                <button
                    onClick={toggle}
                    className="p-2.5 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-all duration-200 cursor-pointer"
                    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                    title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    <div className="relative w-4 h-4 md:w-5 md:h-5">
                        <motion.div
                            animate={{
                                rotate: isDark ? 0 : 180,
                                scale: isDark ? 1 : 0,
                                opacity: isDark ? 1 : 0
                            }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0"
                        >
                            <Moon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        </motion.div>
                        <motion.div
                            animate={{
                                rotate: isDark ? -180 : 0,
                                scale: isDark ? 0 : 1,
                                opacity: isDark ? 0 : 1
                            }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0"
                        >
                            <Sun className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        </motion.div>
                    </div>
                </button>
            </motion.div>
        </div>
    );
};

export default ThemeToggle;
