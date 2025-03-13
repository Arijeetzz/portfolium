
import { Code, ExternalLink } from 'lucide-react';
import AnimatedHeading from './ui/AnimatedHeading';
import FadeInSection from './ui/FadeInSection';
import { cn } from '@/lib/utils';

const ProjectCard = ({
  title,
  description,
  technologies,
  points,
  delay
}: {
  title: string;
  description: string;
  technologies: string[];
  points: string[];
  delay: number;
}) => {
  return (
    <FadeInSection delay={delay}>
      <div className="glass-effect rounded-lg overflow-hidden card-hover h-full">
        <div className="p-6">
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Key Points:</h4>
            <ul className="space-y-2">
              {points.map((point, idx) => (
                <li key={idx} className="flex">
                  <span className="text-primary mr-2">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Machine Learning with Amazon AWS for Real Estate Price Prediction",
      description: "A predictive model for real estate prices in Gurgaon using web-scraped data and machine learning algorithms.",
      technologies: ["Python", "AWS", "Selenium", "Beautiful Soup", "Pandas", "Seaborn", "Matplotlib", "Cosine Similarity", "Streamlit"],
      points: [
        "Collected and processed real estate data using web scraping techniques with Selenium and Beautiful Soup",
        "Visualized data using Pandas, Seaborn, and Matplotlib for better insights",
        "Implemented recommender system using Cosine Similarity with TF-IDF",
        "Improved prediction accuracy to 15% through advanced preprocessing and feature engineering",
        "Deployed the model as a web application using Streamlit with analytics and prediction page"
      ],
    }
  ];

  return (
    <section id="projects" className="section-container">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <AnimatedHeading tag="h2" className="text-center mb-10">
            Academic Projects
          </AnimatedHeading>
        </FadeInSection>
        
        <div className="grid md:grid-cols-1 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              points={project.points}
              delay={200 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
