const educationData = [
    {
        year: "2020 - 2023",
        degree: "Diploma in Computer Engineering",
        institution: "M.H Saboo Siddik Polytechnic, Mumbai",
        details: "Graduated with a percentage of 86%, with coursework focused on programming languages, computer networks, and software development. Completed a project on developing a mobile application for local event management."
    },
    {
        year: "2023 - 2026",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        institution: "Shah and Anchor Kutchhi Engineering College, Mumbai",
        details: "Graduated with a CGPA of 8.5, with coursework focused on data structures, algorithms, databases, and software engineering. Completed a capstone project on building a scalable web application for real-time data visualization."
    }
]

export const Education = () => {
    return (
        <section id="education" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-0.5" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 mx-auto max-w-3xl">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Academic Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mt-4 mb-4 animate-fade-in delay-100">Education that
                        <span
                            className="font-serif italic font-normal text-foreground"> Shapes</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in delay-200">
                        My academic journey has been a blend of rigorous coursework and hands-on projects, providing me with a strong foundation in computer science principles and practical skills.
                    </p>
                </div>
                {/* Education Timeline */}
                <div className="relative border-l border-border/50 ml-4">
                    <div className="timeline-glow absolute left-0 md:left-0.5 top-0 b-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-0.5 shadow-[0_0_25px_rgba(32,178,170,0.5)]" />
                    <div className="space-y-12">
                        {educationData.map((edu, index) => (
                            <div key={index} className="relative grid md:grid-cols-2 gap-7 animate-fade-in"
                                style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" />
                                {/* Content */}
                                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                        <span className="text-sm text-primary font-medium">{edu.year}</span>
                                        <h3 className="text-xl font-semibold mt-2">{edu.degree}</h3>
                                        <p className="text-muted-foreground">{edu.institution}</p>
                                        <p className="text-sm text-muted-foreground mt-4">{edu.details}</p>
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