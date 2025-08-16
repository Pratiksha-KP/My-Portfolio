import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "BlogMode",
    description: "A simple and elegant blog application built with Node.js, Express.js and EJS. Create, read, update and delete blog posts with beautiful responsive interface powered by Bootstrap.",
    image: "/BlogMode.png",
    tags: ["Node.js", "Express.js", "EJS", "Bootstrap"],
    demoUrl: "#", // Replace with your deployed app URL when available
    githubUrl: "https://github.com/Pratiksha-KP/blogmode", // Fixed - removed the extra "#"
    isComplete: true
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website showcasing my projects and skills. Built with React and styled with Tailwind CSS, featuring smooth animations and a cosmic theme.",
    image: "/Portfolio.png",
    tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    demoUrl: "#", // This could link to your live portfolio
    githubUrl: "https://github.com/Pratiksha-KP/your-portfolio-repo", // Update with your actual portfolio repo
    isComplete: true
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are the projects I've built during my learning journey. Each one represents a milestone in my development skills and showcases different technologies I've mastered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-xl overflow-hidden shadow-lg card-hover border border-border/50"
            >
              {/* Project Image */}
              <div className="h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain bg-white/5"
                    style={{ objectPosition: 'center' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                
                {/* Fallback when image fails to load */}
                <div 
                  className="w-full h-full flex items-center justify-center text-6xl text-primary/30"
                  style={{ display: project.image ? 'none' : 'flex' }}
                >
                  {project.id === 1 ? "📝" : "💼"}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Status Badge and Top Tags */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.isComplete && (
                    <span className="px-2 py-1 text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20 rounded-full">
                      ✅ Complete
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* All Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-secondary/80 text-secondary-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-105"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-105"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Pratiksha-KP" // Updated with your GitHub username
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};