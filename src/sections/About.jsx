import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
    {
        icon: "💻",
        title: "Full-Stack Developer",
        description: "Experienced in building scalable web applications using React, Node.js, and MongoDB."
    },
    {
        icon: Code2,
        title: "Problem Solver",
        description: "Strong analytical skills with a passion for solving complex coding challenges and optimizing performance."
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Excellent team player with experience working in agile environments and collaborating with cross-functional teams."
    },
    {
        icon: Rocket,
        title: "Continuous Learner",
        description: "Committed to staying up-to-date with the latest technologies and continuously improving my skills."
    },
    {
        icon: Lightbulb,
        title: "Innovative Thinker",
        description: "Creative problem-solving mindset with a focus on delivering innovative solutions."
    },
]
export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Colums*/}
                    <div className="space-y-8">
                        <div className="animate-fade-in-left">
                            <span className="text-secondary-foreground text-xl font-medium tracking-wider uppercase">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in-left delay-200 text-secondary-foreground">Building the Future
                            <span className="font-serif italic font-normal text-foreground"> One component at a time.</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in-left delay-300">
                            <p>
                                I’m a Computer Science student who simply enjoys building and learning. I started coding out of curiosity and gradually developed an interest in solving logical problems and creating structured solutions. I like working on projects where I can experiment, improve, and understand the reasoning behind every line of code.
                            </p>
                            <p>
                                Apart from academics, I’ve explored competitive programming, small automation ideas, and web-based projects. I prefer keeping things simple, clean, and efficient rather than overcomplicating solutions.
                            </p>
                            <p>
                                Apart from academics, I’ve explored competitive programming, small automation ideas, and web-based projects. I prefer keeping things simple, clean, and efficient rather than overcomplicating solutions.
                            </p>
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in-left delay-400 hover:scale-105 transition-transform duration-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My mission is to build innovative and user-friendly applications that make a positive impact on people's lives. I am always eager to take on new challenges and collaborate with others to create something truly remarkable. Let's connect and see how we can work together to bring your ideas to life!"
                            </p>
                        </div>
                    </div>
                    {/* Right Colums*/}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <div key={index} className="glass rounded-2xl p-6 glow-border group animate-fade-in-right hover:scale-105 hover:border-primary/50 transition-all duration-300" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                                <div className="text-3xl mb-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">{typeof item.icon === "string" ? item.icon : <item.icon size={32} className="text-primary" />}</div>
                                <h3 className="text-xl font-semibold text-secondary-foreground mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-lg font-semibold mb-2">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}