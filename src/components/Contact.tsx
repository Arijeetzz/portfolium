
import { Phone, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import AnimatedHeading from './ui/AnimatedHeading';
import FadeInSection from './ui/FadeInSection';

const ContactItem = ({
  icon,
  label,
  value,
  href,
  delay
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  delay: number;
}) => {
  return (
    <FadeInSection delay={delay}>
      <div className="glass-effect rounded-lg p-6 card-hover">
        <div className="flex items-center">
          <div className="mr-4 text-primary">{icon}</div>
          <div>
            <p className="text-sm text-muted-foreground">{label}</p>
            {href ? (
              <a 
                href={href} 
                target={href.startsWith('http') ? "_blank" : undefined}
                rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                {value}
              </a>
            ) : (
              <p className="text-lg font-medium">{value}</p>
            )}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <AnimatedHeading tag="h2" className="text-center mb-10">
            Get In Touch
          </AnimatedHeading>
        </FadeInSection>
        
        <FadeInSection delay={200}>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Feel free to reach out to me for collaborations, opportunities, or just to say hello.
          </p>
        </FadeInSection>
        
        <div className="grid md:grid-cols-2 gap-6">
          <ContactItem
            icon={<Phone size={24} />}
            label="Phone"
            value="+91-9474091691"
            href="tel:+919474091691"
            delay={300}
          />
          
          <ContactItem
            icon={<Mail size={24} />}
            label="Email"
            value="statarijeetSinha@gmail.com"
            href="mailto:statarijeetSinha@gmail.com"
            delay={400}
          />
          
          <ContactItem
            icon={<Linkedin size={24} />}
            label="LinkedIn"
            value="LinkedIn"
            href="https://www.linkedin.com/in/arijeet-sinha/"
            delay={500}
          />
          
          <ContactItem
            icon={<MapPin size={24} />}
            label="Location"
            value="Mumbai, India"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
