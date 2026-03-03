import { Button } from "@/components/Button"
import { ArrowRight, ChevronDown, Github, Instagram, Linkedin, Twitter, Download, Code2 } from "lucide-react"
import { BorderButton } from "@/components/BorderButton"

const skills = [
    "HTML",
    "CSS",
    "C/C++",
    "Python",
    "JavaScript",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Git",
    "Github",
    "REST APIs",
    "Vite",
    "AI Tools (ChatGPT, DALL-E, etc.)"
]

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img src="/hero-bg.jpg" alt="Hero background" className="w-full h-full object-cover opacity-40 light:opacity-20" />
                <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div className="absolute w-1.5 h-1.5 rounded-full opacity-60" style={{
                        backgroundColor: "#20b2a5",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`

                    }} />
                ))}
            </div>

            {/* Content */}

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left COlum */}
                    <div className="space-y-8">
                        <div className="animate-fade-in-up">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />Computer  Engineer - Full Stack Developer
                            </span>
                        </div>
                        {/* Headlines */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up delay-200">
                                Crafting <span className="text-primary glow-text">Digital</span>
                                <br />
                                Experiences with
                                <br />
                                <span className="text-primary glow-text font-serif italic font-normal">Code</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in-up delay-400">
                                Hi I'm Mamoon Siddiqui - a passionate Computer Engineer and Full Stack Developer. I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I bring ideas to life through clean, efficient code and innovative design.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4 animate-fade-in-up delay-500">
                            <a href="#contact">
                                <Button size="lg" className="group">
                                    Contact Me <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </a>
                            <a href="https://drive.google.com/file/d/1JzBEKAFUVWGBX7kHiI-47WEb8AydSv2c/view" target="_blank" rel="noopener noreferrer">
                                <BorderButton>
                                    <Download className="w-5 h-5" />
                                    Download Resume
                                </BorderButton>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in-up delay-600">
                            <span className="text-sm text-muted-foreground">Follow Me: </span>
                            {[
                                { icon: Github, href: "https://github.com/mamoon-5g" },
                                { icon: Linkedin, href: "https://linkedin.com/in/mamoon-siddiqui-5g" },
                                { icon: Instagram, href: "https://instagram.com/m_a__siddiqui_5g_" },
                                { icon: Twitter, href: "https://twitter.com/mamoon_4g" },
                                { icon: Code2, href: "https://leetcode.com/u/mamoon-5g" }

                            ].map((social, index) => (
                                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-all p-2 rounded-full glass hover:bg-primary/10 hover:text-primary hover:scale-110 duration-300">
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Right Column */}
                    <div className="relative animate-scale-in delay-400">
                        {/* Profile Image */}
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
                            
                            <div className="relative glass rounded-3xl p-2 glow-border hover:scale-105 transition-transform duration-500">
                                <img src="/profile.png" alt="Mamoon Siddiqui" className="w-full aspect-4/5 object-cover rounded-2xl" />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float hover:scale-110 transition-transform cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                    <span className="text-sm font-medium">Open to Work</span>
                                </div>
                            </div>
                            {/* Stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-2 animate-float delay-500 hover:scale-110 transition-transform cursor-pointer">
                                <div className="text-2xl font-bold text-primary">1+</div>
                                <div className="text-sx text-muted-foreground">Years of Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Skills Section */}
                <div className="mt-20 animate-fade-in-up delay-700">
                    <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work With</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee hover:pause">
                            {[...skills, ...skills].map((skill, index) => (
                                <div key={index} className="shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-primary hover:scale-110 transition-all duration-300 cursor-pointer inline-block">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-in-up delay-800">
                <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-all duration-300 group">
                    <span className="text-xs uppercase tracking-wider font-medium">Scroll Down</span>
                    <ChevronDown className="w-6 h-6 animate-bounce group-hover:translate-y-1 transition-transform" />
                </a>
            </div>
        </section>
    )
}