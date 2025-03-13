
import AnimatedHeading from './ui/AnimatedHeading';
import FadeInSection from './ui/FadeInSection';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <AnimatedHeading tag="h2" className="text-center mb-10">
            About Me
          </AnimatedHeading>
        </FadeInSection>
        
        <div className="grid md:grid-cols-12 gap-8">
          <FadeInSection className="md:col-span-7" delay={200}>
            <div className="space-y-4">
              <p>
                I'm a data science professional with expertise in machine learning, fraud detection, 
                and predictive modeling. Currently serving as a Senior Manager at YESBANK in Mumbai, 
                I specialize in developing end-to-end ML solutions that drive business outcomes.
              </p>
              <p>
                My work focuses on creating sophisticated models for fraud detection, income prediction, 
                and credit risk assessment, utilizing technologies like IBM Watson Studio, Python, and 
                various ML libraries.
              </p>
              <p>
                With a strong academic background in Statistics and Informatics from IIT Bombay, 
                I combine theoretical knowledge with practical implementation skills to solve 
                complex business problems.
              </p>
              <p>
                Beyond my professional work, I enjoy charcoal painting, playing flute and chess, 
                cricket, and trekking.
              </p>
            </div>
          </FadeInSection>
          
          <FadeInSection className="md:col-span-5" delay={400}>
            <div className="glass-effect rounded-lg p-6 h-full">
              <h3 className="text-lg font-medium mb-4">Quick Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-medium w-24 flex-shrink-0">Location:</span>
                  <span>Mumbai, India</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24 flex-shrink-0">Experience:</span>
                  <span>Senior Manager at YESBANK</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24 flex-shrink-0">Education:</span>
                  <span>M.Sc. in Applied Statistics & Informatics, IIT Bombay</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24 flex-shrink-0">Expertise:</span>
                  <span>ML, Fraud Detection, Predictive Modeling, Data Science</span>
                </li>
              </ul>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default About;
