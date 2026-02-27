import { ArrowUpRight, Github } from "lucide-react"
import { BorderButton } from "@/components/BorderButton"
const projects = [
    {
        title: "Ammar Group of Companies",
        description: "A web application that allows users to track their fitness goals and progress over time.",
        image: "/projects/ammar-group.png",
        technologies: ["React", "Node.js", "Express", "MySQL"],
        link: "https://www.ammargroup.in",
    },
    {
        title: "NutriScan - AI-Powered Nutrition Tracker",
        description: "A web application that allows users to track their fitness goals and progress over time.",
        image: "/projects/nutriscan.png",
        technologies: ["React", "Node.js", "Express", "Python", "TensorFlow"],
        link: "https://nutri-scanner-one.vercel.app/",
        github: "https://github.com/Mamoon-5G/NutriScan"
    },
    {
        title: "Old Portfolio",
        description: "My Old Portfolio website built using HTML, CSS, and JavaScript. It showcases my early projects and serves as a testament to my growth as a developer.",
        image: "/projects/oldport.png",
        technologies: ["React", "Node.js", "Express"],
        link: "https://mamoon-5g.github.io/MyPortfolio",
        // github: "https://github.com/Mamoon-5G/mamoon-5g.github.io"
    },
]

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 mx-auto max-w-3xl">
                    {/* Section Header */}
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mt-4 mb-4">My Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200">Here are some of the projects I've worked on. Each one represents a unique challenge and an opportunity to learn and grow.</p>
                </div>
                {/* Project grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                            <div className="relative overflow-hidden">
                                {/* Overlay links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm">
                                    <a href={project.link} target="_blank" className="text-foreground text-lg font-semibold flex items-center gap-1 rounded-full hover:bg-primary/20 px-2 py-2 hover:text-primary-foreground transition-all
                                    ">
                                        <ArrowUpRight className="w-5 h-5"/>
                                    </a>
                                    <a href={project.github} target="_blank" className="text-foreground text-lg font-semibold flex items-center gap-1 rounded-full hover:bg-primary/20 px-2 py-2 hover:text-primary-foreground transition-all">
                                        <Github className="w-5 h-5"/>
                                    </a>
                                </div>
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-secondary-foreground mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="bg-secondary text-muted-foreground border border-border/50 px-3 py-1 rounded-full text-xs hover:text-primary hover:border-primary/50 transition-all duration-100">{tech}</span>
                                    ))}
                                </div>
                                <div className="flex gap-4 text-sm">
                                    <a href={project.link} target="_blank" className="text-primary hover:text-primary/80">Live Demo</a>
                                    <a href={project.github} target="_blank" className="text-primary hover:text-primary/80">GitHub</a>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
                {/* View All projects button */}
                <div className="text-center mt-12 animate-fade-in delay-500">
                    <BorderButton>
                        View All Projects
                        <ArrowUpRight className="w-5 h-5 ml-2" />
                    </BorderButton>
                </div>
            </div>
        </section>
    )
}