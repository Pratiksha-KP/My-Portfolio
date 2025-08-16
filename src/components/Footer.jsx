import { ArrowUp, Heart } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-4 bg-card border-t border-border/50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Center - Made with love */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">&copy; {new Date().getFullYear()}</span>
            <span className="text-sm">•</span>
            <span className="text-sm">Made with ❤️</span>
            <span className="text-sm">by</span>
            <span className="text-sm font-medium text-foreground">Pratiksha</span>
          </div>
        </div>

        {/* Right - Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-105"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};