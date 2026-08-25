import { Button } from "@/components/Button"
import { Menu, X, Download, Star } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
    const [isMobileMenu, setMobileMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Active section detection
            const sections = navLinks.map(l => l.href.slice(1));
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = useCallback((e, href) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        // 1. Immediately update the browser URL bar (e.g. #about, #skills)
        if (href) {
            if (window.history && window.history.pushState) {
                window.history.pushState(null, "", href);
            } else {
                window.location.hash = href;
            }
        }

        // 2. Close mobile menu
        setMobileMenu(false);

        // 3. Scroll to target section
        const targetId = href ? href.replace("#", "") : "";
        if (!targetId || targetId === "hero") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        // Small delay to let mobile drawer close and avoid layout jump
        setTimeout(() => {
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                const headerOffset = 80;
                const elementPosition = targetEl.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }, 60);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`fixed top-0 left-[5px] right-[5px] z-50 transition-all duration-200 pointer-events-none ${
                isScrolled ? "py-2" : "py-3.5 md:py-4"
            }`}
        >
            <div className="w-full pointer-events-auto">
                <motion.div
                    className={`transition-all duration-200 rounded-full px-4 sm:px-6 py-2 md:py-2.5 ${
                        isScrolled
                            ? "glass-strong backdrop-blur-xl shadow-lg shadow-black/15 border border-border/60"
                            : "bg-transparent border border-transparent"
                    }`}
                >
                    <nav className="w-full flex items-center justify-between">
                        <motion.a
                            href="#hero"
                            onClick={(e) => handleScrollTo(e, "#hero")}
                            className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight hover:text-primary transition-none relative cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                        >
                            Mamoon Siddiqui <span className="text-primary transition-none">.</span>
                        </motion.a>

                        <div className="hidden lg:flex items-center">
                            <motion.div
                                className="glass rounded-full px-3 py-1.5 flex items-center gap-1 transition-colors duration-200"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {navLinks.map((link, index) => {
                                    const isActive = activeSection === link.href.slice(1);
                                    return (
                                        <motion.a
                                            key={index}
                                            href={link.href}
                                            onClick={(e) => handleScrollTo(e, link.href)}
                                            className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 relative cursor-pointer ${
                                                isActive
                                                    ? "text-primary bg-primary/10"
                                                    : "text-muted-foreground hover:text-foreground hover:bg-surface/50"
                                            }`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {link.label}
                                            {isActive && (
                                                <motion.span
                                                    layoutId="nav-indicator"
                                                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                                                />
                                            )}
                                        </motion.a>
                                    );
                                })}
                            </motion.div>
                        </div>

                        <div className="hidden md:flex items-center gap-2.5">
                            {/* Star on GitHub Badge */}
                            <motion.a
                                href="https://github.com/Mamoon-5G/NewPortfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full glass hover:bg-secondary/60 text-foreground border border-border/40 transition-all shadow-sm group cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                title="Star NewPortfolio on GitHub"
                            >
                                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 group-hover:rotate-12 transition-transform" />
                                <span>Star Repo</span>
                            </motion.a>

                            <motion.a
                                href="#contact"
                                onClick={(e) => handleScrollTo(e, "#contact")}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="cursor-pointer"
                            >
                                <Button size="sm" className="hidden md:flex">
                                    Let's Talk
                                </Button>
                            </motion.a>
                        </div>

                        <motion.button
                            className="lg:hidden p-1.5 text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                            onClick={() => setMobileMenu((prev) => !prev)}
                            whileTap={{ scale: 0.9 }}
                            aria-label={isMobileMenu ? "Close menu" : "Open menu"}
                        >
                            {isMobileMenu ? (
                                <X size={22} className="transition-transform duration-300" />
                            ) : (
                                <Menu size={22} className="transition-transform duration-300" />
                            )}
                        </motion.button>
                    </nav>
                </motion.div>

                <AnimatePresence>
                    {isMobileMenu && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="lg:hidden glass-strong backdrop-blur-xl mt-2 rounded-2xl overflow-hidden border border-border/60 shadow-xl shadow-black/20"
                        >
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
                            {navLinks.map((link, index) => {
                                const isActive = activeSection === link.href.slice(1);
                                return (
                                    <motion.a
                                        key={index}
                                        href={link.href}
                                        onClick={(e) => handleScrollTo(e, link.href)}
                                        className={`py-3 px-4 text-base md:text-lg font-medium rounded-xl transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                                            isActive
                                                ? "text-primary bg-primary/10 font-semibold"
                                                : "text-muted-foreground hover:text-foreground hover:bg-surface/30"
                                        }`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ x: 6 }}
                                    >
                                        <span className={`w-2 h-2 rounded-full ${isActive ? "bg-primary" : "bg-muted-foreground/40"}`} />
                                        {link.label}
                                    </motion.a>
                                );
                            })}

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                                className="pt-4 border-t border-border/50 mt-2 space-y-3"
                            >
                                <div className="flex gap-3">
                                    <a
                                        href="#contact"
                                        onClick={(e) => handleScrollTo(e, "#contact")}
                                        className="flex-1 cursor-pointer"
                                    >
                                        <Button className="w-full">
                                            Let's Talk
                                        </Button>
                                    </a>
                                    <a
                                        href="https://drive.google.com/file/d/11vOcNRJfDh84g-Ril3KbSSpYM8eJK1-R/view"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setMobileMenu(false)}
                                        className="flex-1 cursor-pointer"
                                    >
                                        <Button variant="secondary" className="w-full">
                                            CV <Download className="w-4 h-4 ml-2" />
                                        </Button>
                                    </a>
                                </div>

                                <a
                                    href="https://github.com/Mamoon-5G/NewPortfolio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileMenu(false)}
                                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-xl glass hover:bg-secondary/50 text-foreground border border-border/40 transition-all cursor-pointer"
                                >
                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    <span>Star this Repo on GitHub</span>
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            </div>
        </motion.header>
    )
}

export default Navbar;
