
import { ArrowDown } from 'lucide-react';
import FadeInSection from './ui/FadeInSection';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-accent/40 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-primary/10 blur-3xl rounded-full translate-x-1/3 translate-y-1/4"></div>
      </div>
      
      <div className="container relative z-10 text-center px-4 sm:px-6 md:px-8">
        <FadeInSection direction="down" delay={200}>
          <span className="inline-block text-sm md:text-base font-medium px-4 py-2 rounded-full bg-accent text-accent-foreground mb-4">
            Senior Manager at YESBANK
          </span>
        </FadeInSection>
        
        <FadeInSection delay={400}>
          <h1 className="mb-4 font-display font-semibold max-w-5xl mx-auto">
            Arijeet Sinha
          </h1>
        </FadeInSection>
        
        <FadeInSection delay={600}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Data Science & ML professional specializing in fraud detection, predictive modeling, and process automation
          </p>
        </FadeInSection>
        
        <FadeInSection delay={800}>
          <button 
            onClick={scrollToAbout}
            className="flex items-center justify-center mx-auto mt-16 w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={20} />
          </button>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Hero;
