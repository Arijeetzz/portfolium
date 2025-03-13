
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "py-2 bg-white/80 dark:bg-black/60 backdrop-blur-md shadow-sm" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl font-display font-medium">
          <span className="text-primary">Arijeet</span> Sinha
        </a>
        
        {isMobile ? (
          <>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {mobileMenuOpen && (
              <div className="fixed inset-0 top-[60px] z-50 bg-background animate-fade-in">
                <nav className="flex flex-col items-center justify-center h-full">
                  <ul className="flex flex-col items-center space-y-8 text-xl">
                    <li><button onClick={() => scrollToSection('about')} className="link-underline">About</button></li>
                    <li><button onClick={() => scrollToSection('experience')} className="link-underline">Experience</button></li>
                    <li><button onClick={() => scrollToSection('projects')} className="link-underline">Projects</button></li>
                    <li><button onClick={() => scrollToSection('education')} className="link-underline">Education</button></li>
                    <li><button onClick={() => scrollToSection('skills')} className="link-underline">Skills</button></li>
                    <li><button onClick={() => scrollToSection('contact')} className="link-underline">Contact</button></li>
                  </ul>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav>
            <ul className="flex items-center space-x-8">
              <li><button onClick={() => scrollToSection('about')} className="link-underline">About</button></li>
              <li><button onClick={() => scrollToSection('experience')} className="link-underline">Experience</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="link-underline">Projects</button></li>
              <li><button onClick={() => scrollToSection('education')} className="link-underline">Education</button></li>
              <li><button onClick={() => scrollToSection('skills')} className="link-underline">Skills</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="link-underline">Contact</button></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
