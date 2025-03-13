
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import AnimatedHeading from './ui/AnimatedHeading';
import FadeInSection from './ui/FadeInSection';

const EducationCard = ({
  degree,
  institution,
  location,
  year,
  delay
}: {
  degree: string;
  institution: string;
  location?: string;
  year: string;
  delay: number;
}) => {
  return (
    <FadeInSection delay={delay}>
      <div className="glass-effect rounded-lg p-6 card-hover">
        <div className="flex items-start">
          <div className="mr-4 mt-1">
            <GraduationCap size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-medium mb-1">{degree}</h3>
            <p className="text-lg mb-3">{institution}</p>
            
            <div className="flex flex-wrap items-center text-muted-foreground text-sm gap-4">
              {location && (
                <div className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  <span>{location}</span>
                </div>
              )}
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

const ResponsibilityCard = ({
  title,
  organization,
  period,
  details,
  delay
}: {
  title: string;
  organization: string;
  period: string;
  details: string[];
  delay: number;
}) => {
  return (
    <FadeInSection delay={delay}>
      <div className="glass-effect rounded-lg p-6 card-hover">
        <h3 className="text-xl font-medium mb-1">{title}</h3>
        <p className="text-lg mb-1">{organization}</p>
        <p className="text-muted-foreground text-sm mb-3">{period}</p>
        
        <ul className="space-y-2 mt-4">
          {details.map((detail, index) => (
            <li key={index} className="flex">
              <span className="text-primary mr-2">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </FadeInSection>
  );
};

const Education = () => {
  const education = [
    {
      degree: "M.Sc. in Applied Statistics and Informatics",
      institution: "IIT Bombay",
      location: "Mumbai",
      year: "2022",
    },
    {
      degree: "B.Sc. in Statistics (Hons.)",
      institution: "Hindu College, Delhi University",
      location: "Delhi",
      year: "2020",
    }
  ];
  
  const responsibilities = [
    {
      title: "Class Representative",
      organization: "M.Sc. ASI 1st Year and 2nd year, IIT Bombay",
      period: "2020-22",
      details: [
        "Nominated as Class Representative by 34 students to convey academic notices",
        "Eradicated problems related to academic and non-academic by communicating among the Faculty and students"
      ]
    },
    {
      title: "Senior Coordinator",
      organization: "Kurtosis, Annual Fest of Department of Statistics, Hindu College",
      period: "2020",
      details: [
        "Managed a footfall of 200+ participants from all across the University of Delhi"
      ]
    },
    {
      title: "Coordinator and Sub-Coordinator",
      organization: "Kurtosis",
      period: "2018-19",
      details: [
        "Managed coordination activities in the 2nd Year and 1st Year respectively"
      ]
    }
  ];

  return (
    <section id="education" className="section-container bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <AnimatedHeading tag="h2" className="text-center mb-10">
            Education
          </AnimatedHeading>
        </FadeInSection>
        
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              location={edu.location}
              year={edu.year}
              delay={200 + index * 100}
            />
          ))}
        </div>
        
        <FadeInSection delay={400}>
          <h3 className="text-2xl font-medium mt-16 mb-6">Positions of Responsibility</h3>
        </FadeInSection>
        
        <div className="grid md:grid-cols-1 gap-6">
          {responsibilities.map((resp, index) => (
            <ResponsibilityCard
              key={index}
              title={resp.title}
              organization={resp.organization}
              period={resp.period}
              details={resp.details}
              delay={500 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
