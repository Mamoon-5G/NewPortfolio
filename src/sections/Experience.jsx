import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const experiences = [
  {
    period: 'March 2026 - July 2026',
    title: 'Frontend Web Developer - Intern',
    company: 'HomeFirst Finance Company (HFFC)',
    desc: 'Worked on building and improving web applications using React and TypeScript, with a primary focus on frontend development. Contributed to document processing tools, internal dashboards, and financial applications by building new features, improving existing user interfaces, and refactoring complex components into cleaner and more maintainable code. Worked with APIs, application state, and AI-powered features to create smooth and reliable user experiences. Also collaborated on Python and Django backend projects, where I contributed through code reviews, debugging, refactoring, and improving existing code.',
    tags: ['React', 'TypeScript', 'Python', 'Django', 'Tailwind CSS', 'TanStack Query', 'Vite', 'shadcn/ui', 'Recharts', 'REST APIs', 'Git', 'AI Tools'],
  },
  {
    period: 'June 2022 - August 2022',
    title: 'Frontend Web Developer - Intern',
    company: 'SmartByte StudyLeague IT Solutions',
    desc: 'Worked on developing the frontend for a Fees Management System using HTML, CSS, and JavaScript. Contributed to building user interfaces and implementing features for managing fee-related workflows and data. Collaborated closely with the PHP backend team to integrate frontend functionality with backend APIs and ensure the system worked smoothly. Also worked on improving existing features, fixing issues, and creating a responsive and user-friendly experience.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative z-10 section-padding">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader label="Career Journey" title="Experience that Speaks" />
        <p className="text-center text-muted-foreground mb-8 md:mb-16 -mt-8 md:-mt-12 text-sm md:text-base">
          I've had the privilege of working with diverse teams and technologies, contributing to impactful projects that drive innovation and deliver value to clients.
        </p>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary/50 via-secondary/50 to-transparent" />

          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className={`relative flex flex-col md:flex-row gap-6 md:gap-8 mb-10 md:mb-16 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 glow-border" />
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-6 md:text-right' : 'md:pl-6 md:text-left'} pl-8 md:pl-0`}>
                  <span className="text-xs md:text-sm font-mono text-primary">{exp.period}</span>
                </div>
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pl-6' : 'md:pr-6'} pl-8 md:pl-0`}>
                  <div className="glass-card p-5 md:p-5 rounded-2xl">
                    <h3 className="text-base md:text-lg font-semibold mb-1">{exp.title}</h3>
                    <p className="text-primary text-xs md:text-sm mb-2 md:mb-3">{exp.company}</p>
                    <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">{exp.desc}</p>
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? '' : 'md:justify-end'}`}>
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience