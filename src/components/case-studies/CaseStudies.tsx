
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, MoveRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  client: string;
  services: string[];
  image: string;
  link: string;
  featured?: boolean;
}

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, index }) => {
  // Alternate layout for even/odd indexes
  const isEven = index % 2 === 0;

  return (
    <AnimatedSection
      animation={isEven ? "fade-in-right" : "fade-in-left"}
      className="mb-16 lg:mb-24"
    >
      <div className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center",
        !isEven && "lg:flex-row-reverse lg:[direction:rtl]"
      )}>
        <div className={cn(!isEven && "lg:[direction:ltr]")}>
          <div className="relative">
            <span className="absolute -top-4 -left-4 w-20 h-20 bg-primary rounded-full opacity-10" />
            <img 
              src={study.image} 
              alt={study.title} 
              className="rounded-lg shadow-lg w-full h-auto aspect-video object-cover"
            />
          </div>
        </div>

        <div className={cn(!isEven && "lg:[direction:ltr]")}>
          <h3 className="text-primary font-medium mb-2">{study.client}</h3>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">{study.title}</h2>
          <p className="text-muted-foreground mb-6">{study.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {study.services.map((service, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full"
              >
                {service}
              </span>
            ))}
          </div>

          <Button asChild>
            <Link to={study.link} className="flex items-center gap-1">
              View Case Study <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'Reimagining Digital Banking Experience',
      description: 'A comprehensive redesign of the client\'s digital banking platform, focusing on simplifying complex financial data and improving user engagement.',
      client: 'FinTech Co.',
      services: ['UI/UX Design', 'Web Development', 'User Research'],
      image: '/placeholder.svg',
      link: '/portfolio/fintech-redesign',
      featured: true,
    },
    {
      id: 2,
      title: 'E-commerce Mobile App with AR Features',
      description: 'Designed and developed a mobile e-commerce application with augmented reality features, allowing users to visualize products in their space before purchasing.',
      client: 'RetailPlus',
      services: ['Mobile Design', 'AR Development', 'UI/UX'],
      image: '/placeholder.svg',
      link: '/portfolio/retailplus-app',
      featured: true,
    },
    {
      id: 3,
      title: 'Corporate Identity Revitalization',
      description: 'A complete rebranding project that included logo design, visual identity, brand guidelines, and website redesign for a growing tech company.',
      client: 'TechNova',
      services: ['Brand Strategy', 'Visual Identity', 'Web Design'],
      image: '/placeholder.svg',
      link: '/portfolio/technova-rebrand',
      featured: true,
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dive deeper into selected projects where I solved complex problems and delivered exceptional results.
          </p>
        </AnimatedSection>

        <div className="mb-16">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/portfolio" className="flex items-center gap-1">
              Explore All Case Studies <MoveRight size={16} />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CaseStudies;
