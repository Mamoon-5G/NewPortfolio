import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/Button";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you for your message! I will get back to you soon.');
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-0.5" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 mx-auto max-w-3xl">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in-up">Get in Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mt-4 mb-4 animate-fade-in-up delay-200">Contact that
                        <span className="font-serif italic font-normal text-foreground"> Connects</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in-up delay-300">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="animate-fade-in-left delay-400">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 glass rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-surface/50 text-foreground"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 glass rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-surface/50 text-foreground"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 glass rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-surface/50 text-foreground resize-none"
                                    placeholder="Your message..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                            >
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-8 animate-fade-in-right delay-500">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                            <p className="text-muted-foreground mb-8">
                                Whether you have a question, want to collaborate, or just want to say hello, feel free to get in touch. I'm always excited to hear about new opportunities!
                            </p>
                        </div>
                        
                        <div className="space-y-4">
                            <a 
                                href="mailto:siddiquimamoon2004ms@gmail.com" 
                                className="flex items-center gap-4 glass p-4 rounded-lg border border-border hover:border-primary/50 hover:scale-105 transition-all duration-300 group"
                            >
                                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Email</div>
                                    <div className="font-medium">siddiquimamoon2004ms@gmail.com</div>
                                </div>
                            </a>
                            
                            <a 
                                href="https://www.linkedin.com/in/mamoon-siddiqui-5g" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 glass p-4 rounded-lg border border-border hover:border-primary/50 hover:scale-105 transition-all duration-300 group"
                            >
                                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                                    <Linkedin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">LinkedIn</div>
                                    <div className="font-medium">Mamoon Siddiqui</div>
                                </div>
                            </a>
                            
                            <a 
                                href="https://github.com/mamoon-5g" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 glass p-4 rounded-lg border border-border hover:border-primary/50 hover:scale-105 transition-all duration-300 group"
                            >
                                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                                    <Github className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">GitHub</div>
                                    <div className="font-medium">mamoon-5g</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}