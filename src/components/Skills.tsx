
import { Code, Database, Server, Cloud, FileCode } from 'lucide-react';
import AnimatedHeading from './ui/AnimatedHeading';
import FadeInSection from './ui/FadeInSection';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  delay: number;
}

const SkillCategory = ({ title, icon, skills, delay }: SkillCategoryProps) => {
  return (
    <FadeInSection delay={delay}>
      <div className="glass-effect rounded-lg p-6 h-full card-hover">
        <div className="flex items-center mb-4">
          <div className="mr-3 text-primary">{icon}</div>
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-accent rounded-full text-sm font-medium text-accent-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code size={24} />,
      skills: ["Python", "SQL", "PySpark"],
    },
    {
      title: "Machine Learning",
      icon: <Database size={24} />,
      skills: ["Deep Learning", "ETL Pipelines", "Streamlit", "Flask", "Fast API", "Pandas", "Numpy", "MongoDB", "NLP"],
    },
    {
      title: "Cloud & Tools",
      icon: <Cloud size={24} />,
      skills: ["IBM Watson Studio", "AWS"],
    },
    {
      title: "Other Tools",
      icon: <FileCode size={24} />,
      skills: ["MS Office", "Word", "Excel", "Watson Studio", "Git"],
    },
    {
      title: "Courses",
      icon: <Server size={24} />,
      skills: ["Machine Learning (Andrew NG & Stanford University)", "Python for Machine Learning", "Data Science Bootcamp"],
    }
  ];

  return (
    <section id="skills" className="section-container">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <AnimatedHeading tag="h2" className="text-center mb-10">
            Skills & Expertise
          </AnimatedHeading>
        </FadeInSection>
        
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={200 + index * 100}
            />
          ))}
        </div>
        
        <FadeInSection delay={700}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-medium mb-6">Certifications</h3>
            <div className="glass-effect rounded-lg p-6 inline-block">
              <p className="flex items-center">
                <FileCode size={20} className="text-primary mr-2" />
                <span>HackerRank SQL Advanced</span>
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Skills;
