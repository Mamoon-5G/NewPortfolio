import { useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAME_STRING = "Mamoon Siddiqui";

export const LoadingScreen = memo(({ isDark }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [typedLength, setTypedLength] = useState(0);

  useEffect(() => {
    // Typewriter effect character by character
    const interval = setInterval(() => {
      setTypedLength((prev) => {
        if (prev < NAME_STRING.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Once typing completes, pause briefly and dismiss
    if (typedLength >= NAME_STRING.length) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 450);

      return () => clearTimeout(timer);
    }
  }, [typedLength]);

  const currentText = NAME_STRING.slice(0, typedLength);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-background pointer-events-none select-none px-4"
        >
          <div className="flex flex-col items-center gap-6 max-w-sm w-full">
            {/* Center Avatar with Pure White Passport Background & Guaranteed Theme Border */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative p-1 rounded-full bg-white shadow-2xl transition-all duration-300"
              style={{
                boxShadow: isDark
                  ? "0 0 0 3.5px rgba(244, 63, 94, 0.85), 0 12px 30px -6px rgba(0, 0, 0, 0.4)"
                  : "0 0 0 3.5px rgba(16, 185, 129, 0.9), 0 12px 30px -6px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <img
                  src="/loader-avatar.png"
                  alt="Mamoon Siddiqui"
                  className="w-full h-full object-cover object-top rounded-full bg-white"
                  loading="eager"
                  decoding="sync"
                />
              </div>
            </motion.div>

            {/* Terminal Command & Name Typewriter Box */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center font-mono w-full text-center"
            >
              {/* Terminal Prompt Header (Green in both Light & Dark) */}
              <div className="text-xs text-muted-foreground/80 tracking-wider flex items-center gap-1.5 mb-1.5">
                <span className="text-emerald-500 dark:text-emerald-400 font-semibold">user@portfolio</span>
                <span className="opacity-60">:</span>
                <span className="text-blue-500 dark:text-blue-400">~</span>
                <span className="opacity-60">$ whoami</span>
              </div>

              {/* Typewriter Output with Green Terminal Block Cursor in both modes */}
              <div className="inline-flex items-center justify-center text-xl md:text-2xl font-bold tracking-tight text-foreground min-h-[32px]">
                <span className="text-foreground">{currentText}</span>
                <span className="inline-block w-2.5 h-5 ml-1.5 bg-emerald-500 dark:bg-emerald-400 animate-pulse align-middle" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default LoadingScreen;
