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
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-xl font-medium tracking-wider uppercase">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in delay-100 text-secondary-foreground">Building the Future
                            <span className="font-serif italic font-normal text-foreground"> One component at a time.</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in delay-200">
                            <p>
                                I'm a passionate full-stack developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I thrive on turning complex problems into elegant solutions. My journey in coding has been fueled by a love for learning and a drive to innovate, making me a versatile asset in any development team.
                            </p>
                            <p>
                                Whether it's crafting seamless user interfaces or optimizing server-side performance, I am dedicated to delivering high-quality code that not only meets but exceeds expectations. I believe in the power of collaboration and continuous improvement, always seeking new challenges to grow my skills and contribute to impactful projects.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or brainstorming ideas for my next big project. I'm excited to connect with like-minded professionals and contribute to the ever-evolving world of technology.
                            </p>
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My mission is to build innovative and user-friendly applications that make a positive impact on people's lives. I am always eager to take on new challenges and collaborate with others to create something truly remarkable. Let's connect and see how we can work together to bring your ideas to life!"
                            </p>
                        </div>
                    </div>
                    {/* Right Colums*/}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <div key={index} className="glass rounded-2xl p-6 glow-border group animate-fade-in delay-400">
                                <div className="text-3xl mb-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20">{typeof item.icon === "string" ? item.icon : <item.icon size={32} className="text-primary"/>}</div>
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