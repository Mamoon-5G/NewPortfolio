import { Button } from "@/components/Button"
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
    const [isMobilemenu, setMobileMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 right-0 left-0 bg-transparent py-5 z-50 transition-all duration-500 ${isScrolled ? "glass-strong py-3 backdrop-blur-md shadow-lg" : ""}`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary transition-colors duration-300">Mamoon Siddiqui <span className="text-primary">.</span></a>

                {/* Desktop Navbar */}
                <div className="hidden sm:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-all duration-300">{link.label}</a>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}

                <div className="hidden md:block">
                    <a href="#contact">
                        <Button size="sm">Contact Me</Button>
                    </a>
                </div>

                {/* Burger Icon */}

                <button className="md:hidden p-2 text-foreground hover:cursor-pointer transition-transform hover:scale-110 duration-300" onClick={() => setMobileMenu((prev) => !prev)}>
                    {isMobilemenu ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}

            {isMobilemenu && <div className="md:hidden glass-strong animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-3">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} onClick={() => setMobileMenu(false)} className="py-2 text-lg text-muted-foreground hover:text-foreground transition-colors duration-300">{link.label}</a>
                    ))}

                    <a href="#contact" onClick={() => setMobileMenu(false)}>
                        <Button>Contact Me</Button>
                    </a>
                </div>
            </div>}
        </header>
    )
}