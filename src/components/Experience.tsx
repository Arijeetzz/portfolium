
import { BriefcaseIcon, ArrowRight } from 'lucide-react';
import AnimatedHeading from './ui/AnimatedHeading';
import FadeInSection from './ui/FadeInSection';
import { cn } from '@/lib/utils';

const ExperienceItem = ({ 
  title, 
  company, 
  period, 
  details,
  delay 
}: { 
  title: string;
  company: string;
  period: string;
  details: string[];
  delay: number;
}) => {
  return (
    <FadeInSection 
      className="mb-10 last:mb-0" 
      delay={delay}
    >
      <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-3 before:h-3 before:bg-primary before:rounded-full before:z-10">
        <div className={cn(
          "absolute top-[6px] left-[6px] h-full w-px bg-border",
          "last:bg-transparent"
        )} />
        
        <div className="mb-2">
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex flex-wrap items-center gap-x-2 text-muted-foreground">
            <span>{company}</span>
            <span className="text-primary">•</span>
            <span>{period}</span>
          </div>
        </div>
        
        <ul className="space-y-2 mt-4">
          {details.map((item, index) => (
            <li key={index} className="flex">
              <ArrowRight size={18} className="flex-shrink-0 text-primary mt-1 mr-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </FadeInSection>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Senior Manager",
      company: "YESBANK, Mumbai",
      period: "May'22-ongoing",
      details: [
        "Created end-to-end ML Models for Fraud Detection with an 80% accuracy rate and raised same-day alerts for possible frauds of CA-SA customers",
        "Optimized bank resources by automating the alert generating process using IBM Watson Studio, saving 3 hours of manual labor daily",
        "Built an Income Prediction Model using ML algorithms to predict income using Credit Bureau features for cross-selling",
        "Developed and deployed XGBoost model for T+1 screening of SA customers at onboarding, enhancing fraud detection",
        "Created segments based on probability of default using combination of credit-related variables, achieving 86% accuracy",
        "Calculated ECL using PD and LGD information for retail products in Python",
        "Calculated PD and Loss Given Default for FY-23 based on 12-month historical data with performance period"
      ],
    }
  ];

  return (
    <section id="experience" className="section-container bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <AnimatedHeading tag="h2" className="text-center mb-10">
            Work Experience
          </AnimatedHeading>
        </FadeInSection>
        
        <div className="mt-12">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              details={exp.details}
              delay={200 + index * 100}
            />
          ))}
        </div>
        
        <FadeInSection delay={400}>
          <div className="mt-10 pt-6 border-t">
            <h4 className="flex items-center text-lg font-medium mb-4">
              <BriefcaseIcon size={20} className="text-primary mr-2" />
              Key Achievements
            </h4>
            <ul className="space-y-2">
              <li className="flex">
                <ArrowRight size={18} className="flex-shrink-0 text-primary mt-1 mr-2" />
                <span>Efficiently handled direct AD-Hoc Data requests from CRO Desk.</span>
              </li>
              <li className="flex">
                <ArrowRight size={18} className="flex-shrink-0 text-primary mt-1 mr-2" />
                <span>Pioneered IBM Watson Studio usage, training 100+ team members.</span>
              </li>
              <li className="flex">
                <ArrowRight size={18} className="flex-shrink-0 text-primary mt-1 mr-2" />
                <span>Awarded Rising Star for Transaction Monitoring Models and Yes-Star for Master Rating Scale.</span>
              </li>
            </ul>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Experience;
