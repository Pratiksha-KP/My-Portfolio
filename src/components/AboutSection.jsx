import { Code, Heart, Lightbulb, Rocket, Coffee, BookOpen, Download, Server, Database } from "lucide-react";
import resumePDF from "../assets/PRATIKSHA.pdf";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Personal intro */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Heart className="h-4 w-4" />
              Hello, I'm Pratiksha!
            </div>
            
            <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              An Aspiring Developer with Big Dreams ✨
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm a passionate beginner developer who fell in love with coding! 💻 
                Currently on an exciting journey of learning web development and turning 
                creative ideas into digital reality.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new songs in spotify, 
                watching movies, or dreaming up my next project. I believe 
                that every expert was once a beginner, and I'm embracing every step 
                of this amazing learning adventure!
              </p>
              
              <div className="flex items-center gap-2 text-sm bg-card/50 rounded-lg p-4 border border-border/50">
                <Coffee className="h-4 w-4 text-primary" />
                <span className="font-medium">Fun fact:</span>
                <span>I debug better with coffee and good music! ☕🎵</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">

<a 
  href={resumePDF} 
  download="Pratiksha_KP_Resume.pdf"
  className="cosmic-button flex items-center gap-2"
>
  <Download className="h-4 w-4" />
  Download CV
</a>


              <a
                href="#projects"
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Code className="h-4 w-4" />
                View My Work
              </a>
            </div>
          </div>

          {/* Right side - Skills/What I'm learning */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              What I'm Learning & Building
            </h4>
            
            <div className="grid grid-cols-1 gap-4">
              {/* Frontend Development */}
              <div className="gradient-border p-6 card-hover group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left flex-1">
                    <h5 className="font-semibold text-lg mb-2">Frontend Development</h5>
                    <p className="text-muted-foreground mb-3">
                      Building beautiful, responsive websites with modern frameworks and styling libraries.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs bg-blue-500/10 text-blue-500 rounded-full">HTML</span>
                      <span className="px-3 py-1 text-xs bg-blue-600/10 text-blue-600 rounded-full">CSS</span>
                      <span className="px-3 py-1 text-xs bg-yellow-500/10 text-yellow-600 rounded-full">JavaScript</span>
                      <span className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-500 rounded-full">React.js</span>
                      <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Tailwind CSS</span>
                      <span className="px-3 py-1 text-xs bg-purple-500/10 text-purple-500 rounded-full">Bootstrap</span>
                      <span className="px-3 py-1 text-xs bg-slate-600/10 text-pink-600 rounded-full">Next.js</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend Development */}
              <div className="gradient-border p-6 card-hover group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left flex-1">
                    <h5 className="font-semibold text-lg mb-2">Backend Development</h5>
                    <p className="text-muted-foreground mb-3">
                      Creating server-side applications and APIs with modern backend technologies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs bg-green-500/10 text-green-500 rounded-full">Node.js</span>
                      <span className="px-3 py-1 text-xs bg-gray-600/10 text-pink-600 rounded-full">Express.js</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Programming Languages */}
              <div className="gradient-border p-6 card-hover group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left flex-1">
                    <h5 className="font-semibold text-lg mb-2">Programming Languages</h5>
                    <p className="text-muted-foreground mb-3">
                      Proficient in multiple programming languages for diverse development needs.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs bg-blue-500/10 text-blue-500 rounded-full">Python</span>
                      <span className="px-3 py-1 text-xs bg-blue-600/10 text-blue-600 rounded-full">C++</span>
                      <span className="px-3 py-1 text-xs bg-gray-600/10 text-pink-600 rounded-full">C</span>
                      <span className="px-3 py-1 text-xs bg-orange-500/10 text-orange-500 rounded-full">Java</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Database Management */}
              <div className="gradient-border p-6 card-hover group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left flex-1">
                    <h5 className="font-semibold text-lg mb-2">Database Management</h5>
                    <p className="text-muted-foreground mb-3">
                      Working with both SQL and NoSQL databases for efficient data storage and retrieval.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs bg-blue-500/10 text-blue-500 rounded-full">PostgreSQL</span>
                      <span className="px-3 py-1 text-xs bg-blue-600/10 text-blue-600 rounded-full">SQL</span>
                      <span className="px-3 py-1 text-xs bg-green-500/10 text-green-500 rounded-full">MongoDB</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Stats */}
            <div className="bg-card/30 rounded-xl p-6 border border-border/50">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Databases</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">∞</div>
                  <div className="text-sm text-muted-foreground">Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};