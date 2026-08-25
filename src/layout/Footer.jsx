import { Github, Instagram, Linkedin, Twitter, Code2, Heart, Rocket, Star } from "lucide-react"
import { motion } from "framer-motion"

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
];

const socialLinks = [
    { icon: Github, href: "https://github.com/Mamoon-5G", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/mamoon-siddiquii", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/m_a_siddiqui_5g", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/MamoonAhmadSidd", label: "Twitter" },
    { icon: Code2, href: "https://leetcode.com/u/Mamoon-5G", label: "LeetCode" }
]

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-8 md:py-10 border-t border-border/40">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-strong rounded-2xl p-6 md:p-8"
                >
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
                        <div className="text-center md:text-left">
                            <motion.a
                                href="#"
                                className="text-2xl font-bold tracking-tight hover:text-primary transition-colors inline-block"
                                whileHover={{ scale: 1.05 }}
                            >
                                Mamoon Siddiqui <span className="text-primary">.</span>
                            </motion.a>
                            <p className="text-xs md:text-sm text-muted-foreground mt-1.5">
                                Full Stack Developer | Problem Solver
                            </p>
                            <div className="flex items-center gap-2 mt-3 justify-center md:justify-start">
                                <Rocket className="w-3.5 h-3.5 text-primary animate-bounce" />
                                <span className="text-xs text-primary font-medium">Building the future, one line at a time</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 px-2 py-1 rounded hover:bg-primary/5"
                                    whileHover={{ scale: 1.05, y: -1 }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>

                        <div className="flex items-center justify-center md:justify-end gap-2">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="text-muted-foreground transition-all p-2 rounded-xl glass hover:bg-primary/10 hover:text-primary duration-300"
                                    whileHover={{ scale: 1.15, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <social.icon className="w-4 h-4 md:w-4.5 md:h-4.5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Open Source Star on GitHub Banner */}
                    <div className="mt-6 pt-5 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <motion.a
                            href="https://github.com/Mamoon-5G/NewPortfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-xl glass hover:bg-secondary/60 text-foreground border border-border/40 transition-all shadow-sm group"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Github className="w-3.5 h-3.5 text-foreground" />
                            <span>Enjoying this portfolio?</span>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-400/15 text-amber-500 font-semibold text-[11px] border border-amber-400/25 group-hover:bg-amber-400/25 transition-colors">
                                <Star className="w-3 h-3 fill-amber-400 text-amber-400 group-hover:rotate-12 transition-transform" />
                                Star on GitHub
                            </span>
                        </motion.a>

                        <motion.a
                            href="#"
                            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                            whileHover={{ y: -2 }}
                        >
                            <span>Back to top</span>
                            <Rocket className="w-3 h-3 text-primary" />
                        </motion.a>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/15">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center text-xs text-muted-foreground">
                            <p className="flex items-center gap-1.5 flex-wrap justify-center">
                                <span>Created with</span>
                                <Heart className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                                <span>by Mamoon Ahmad Siddiqui</span>
                            </p>
                            <p>
                                © {currentYear} All Rights Reserved
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer;
