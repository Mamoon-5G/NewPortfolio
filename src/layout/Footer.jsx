import { Github, Instagram, Linkedin, Twitter, Code2, Heart } from "lucide-react"

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-transparent py-8 border-t border-border/50">
            <div className="container mx-auto px-6">
                <div className="glass-strong rounded-2xl p-8">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        {/* Left - Brand */}
                        <div className="text-center md:text-left">
                            <a href="#" className="text-2xl font-bold tracking-tight hover:text-primary transition-colors inline-block">
                                Mamoon Siddiqui <span className="text-primary">.</span>
                            </a>
                            <p className="text-sm text-muted-foreground mt-2">
                                Full Stack Developer
                            </p>
                        </div>

                        {/* Center - Quick Links */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {navLinks.map((link, index) => (
                                <a 
                                    href={link.href} 
                                    key={index} 
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Right - Social Links */}
                        <div className="flex items-center justify-center md:justify-end gap-3">
                            {[
                                { icon: Github, href: "https://github.com/mamoon-5g" },
                                { icon: Linkedin, href: "https://linkedin.com/in/mamoon-siddiqui-5g" },
                                { icon: Instagram, href: "https://instagram.com/m_a__siddiqui_5g_" },
                                { icon: Twitter, href: "https://twitter.com/mamoon_4g" },
                                { icon: Code2, href: "https://leetcode.com/u/mamoon-5g" }
                            ].map((social, index) => (
                                <a 
                                    key={index} 
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-muted-foreground transition-colors p-2 rounded-full glass hover:bg-primary/10 hover:text-primary duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Bottom - Copyright */}
                    <div className="mt-8 pt-6 border-t border-border/50 text-center">
                        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
                            Created By Mamoon Ahmad Siddiqui
                            <span className="hidden sm:inline">|</span>
                            <span className="flex items-center gap-1">
                                © {currentYear} All Rights Reserved
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
