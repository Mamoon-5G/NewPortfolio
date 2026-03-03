const experiences = [
    {
        company: "HomeFirst Finance Company (HFFC)",
        role: "Frontend Web Developer - Intern",
        duration: "March 2026 - Present",
        description: "Currently working on building and enhancing the company's web applications using React, TypeScript, and various AI tools. Responsible for implementing new features, optimizing existing code, and collaborating with the team to deliver high-quality software solutions.",
        technologies: ["React", "TypeScript", "AI Tools (ChatGPT, DALL-E, etc.)"],
        current: true
    },
    {
        company: "SmartByte StudyLeague IT Solutions",
        role: "Frontend Web Developer - Intern",
        duration: "June 2022 - August 2022",
        description: "Worked on developing and maintaining web applications using HTML, CSS, JavaScript, PHP, and MySQL. Collaborated with cross-functional teams to design and implement new features, optimize performance, and ensure a seamless user experience.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        current: false
    },
]

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-0.5" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 mx-auto max-w-3xl">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in-up">Career Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mt-4 mb-4 animate-fade-in-up delay-200">Experience that
                        <span
                            className="font-serif italic font-normal text-foreground"> Speaks</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in-up delay-300">
                        I've had the privilege of working with diverse teams and technologies, contributing to impactful projects that drive innovation and deliver value to clients.
                    </p>
                </div>
                {/* Timeline */}
                <div className="relative border-l border-border/50 ml-4">
                    <div className="timeline-glow absolute left-0 md:left-0.5 top-0 b-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-0.5 shadow-[0_0_25px_rgba(32,178,170,0.5)]" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative grid md:grid-cols-2 gap-7 animate-fade-in-up"
                                style={{ animationDelay: `${(index + 3) * 150}ms` }}>

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />}
                                </div>

                                {/* Content */}
                                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 hover:scale-105 transition-all duration-500`}>
                                        <span className="text-sm text-primary font-medium">{exp.duration}</span>
                                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                                        <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>{exp.technologies.map((tech, techIdx) => (
                                            <span key={techIdx} className="inline-block bg-primary/10 text-muted-foreground px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-primary/20 hover:scale-105 transition-all">{tech}</span>
                                        ))}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}