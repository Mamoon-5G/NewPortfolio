import { Moon, Sun } from "lucide-react";

export const ThemeToggle = ({ isDark, toggle }) => {
    return (
        <button
            onClick={toggle}
            className="fixed bottom-8 right-8 z-50 p-4 glass-strong rounded-full hover:bg-primary/10 transition-all duration-300 shadow-lg hover:scale-110 group"
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6">
                <Sun
                    className={`absolute inset-0 w-6 h-6 text-primary transition-all duration-300 ${
                        isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                    }`}
                />
                <Moon
                    className={`absolute inset-0 w-6 h-6 text-primary transition-all duration-300 ${
                        isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                    }`}
                />
            </div>
        </button>
    );
};
