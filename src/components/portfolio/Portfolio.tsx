
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  category: string[];
  image: string;
  link: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Finance Dashboard UI',
      category: ['UI/UX', 'Web'],
      image: '/placeholder.svg',
      link: '/portfolio/finance-dashboard',
    },
    {
      id: 2,
      title: 'E-commerce Mobile App',
      category: ['UI/UX', 'Mobile'],
      image: '/placeholder.svg',
      link: '/portfolio/ecommerce-app',
    },
    {
      id: 3,
      title: 'Corporate Rebrand',
      category: ['Branding'],
      image: '/placeholder.svg',
      link: '/portfolio/corporate-rebrand',
    },
    {
      id: 4,
      title: 'Social Media Platform',
      category: ['UI/UX', 'Web'],
      image: '/placeholder.svg',
      link: '/portfolio/social-media-platform',
    },
    {
      id: 5,
      title: 'Restaurant Booking App',
      category: ['UI/UX', 'Mobile'],
      image: '/placeholder.svg',
      link: '/portfolio/restaurant-app',
    },
    {
      id: 6,
      title: 'Health Tracker Dashboard',
      category: ['UI/UX', 'Web'],
      image: '/placeholder.svg',
      link: '/portfolio/health-tracker',
    },
  ];

  const categories = ['all', 'UI/UX', 'Web', 'Mobile', 'Branding'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section className="py-24">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of my recent projects showcasing UI/UX design, 
            web and mobile development, and branding work.
          </p>
        </AnimatedSection>

        {/* Filter buttons */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </AnimatedSection>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              animation="fade-in"
              delay={200 + index * 100}
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/portfolio">View All Projects</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent transition-opacity opacity-0 group-hover:opacity-100 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.category.map(cat => (
            <span 
              key={cat} 
              className="px-3 py-1 bg-primary/20 text-white text-xs rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
        <Button asChild variant="secondary" size="sm" className="w-fit">
          <Link to={project.link} className="flex items-center gap-1">
            View Project <ExternalLink size={14} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Portfolio;
