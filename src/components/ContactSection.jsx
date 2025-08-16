import {
    Github,
    Instagram,
    Linkedin,
    Mail,
  } from "lucide-react";
  
  export const ContactSection = () => {
    return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let’s <span className="text-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Have a project, an idea, or just want to say hi? I’d love to hear from you.
            </p>
          </div>
  
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* GitHub Card */}
            <a
              href="https://github.com/Pratiksha-KP"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-transparent hover:bg-gradient-to-r hover:from-primary/20 hover:to-purple-500/20"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shrink-0">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                    GitHub
                  </h3>
                  <p className="text-muted-foreground text-sm">Pratiksha-KP</p>
                </div>
              </div>
            </a>
  
            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/pratiksha-k-p-b70a52308/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-transparent hover:bg-gradient-to-r hover:from-primary/20 hover:to-purple-500/20"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shrink-0">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                    LinkedIn
                  </h3>
                  <p className="text-muted-foreground text-sm">pratiksha-kp</p>
                </div>
              </div>
            </a>
  
            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/pratiksha.kp.005/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-transparent hover:bg-gradient-to-r hover:from-primary/20 hover:to-purple-500/20"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shrink-0">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                    Instagram
                  </h3>
                  <p className="text-muted-foreground text-sm">@pratiksha.kp.005</p>
                </div>
              </div>
            </a>
  
            {/* Email Card */}
            <a
              href="mailto:pratikshakpmane@gmail.com"
              className="group bg-card border border-border/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-transparent hover:bg-gradient-to-r hover:from-primary/20 hover:to-purple-500/20"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                    Email
                  </h3>
                  <p className="text-muted-foreground text-sm">pratikshakpmane@gmail.com</p>
                </div>
              </div>
            </a>
          </div>
  
          {/* Bottom text */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm italic">
              I value real connections over spammy noise ✨
            </p>
  
            {/* Optional CTA button */}
            <a
              href="mailto:pratikshakpmane@gmail.com"
              className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              Say Hello 👋
            </a>
          </div>
        </div>
      </section>
    );
  };
  
