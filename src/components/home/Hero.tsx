
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownCircle, Github, Linkedin, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../shared/AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content - Takes 7 columns on large screens */}
          <div className="lg:col-span-7">
            <AnimatedSection animation="fade-in" delay={200}>
              <h1 className="text-sm uppercase tracking-widest text-primary mb-4">
                Bsc. Computer Science (UG)
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={300}>
              <h2 className="text-5xl md:text-7xl font-bold mb-2">
                <div className="text-highlight-purple">Tharusha</div>
                <div className="text-blue-400">Jayawardena</div>
              </h2>
              <div className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                UI/UX Designer & Developer
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={400}>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                I craft beautiful, functional digital experiences with a focus on user-centered design. 
                From concept to code, I bring ideas to life.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={500}>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/portfolio" className="flex items-center gap-2">
                    View My Work <MoveRight size={16} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={600}>
              <div className="flex gap-6 mt-12">
                <a 
                  href="https://github.com/tharujaye" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Github size={22} />
                  <span className="sr-only">GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/tharujaye" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Linkedin size={22} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right content - Takes 5 columns on large screens */}
          <div className="lg:col-span-5 relative">
            <AnimatedSection 
              animation="fade-in" 
              delay={700}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-highlight-purple to-highlight-cyan/30 blur-3xl absolute top-0 left-0 w-full h-full opacity-20" />
                <img 
                  src="/placeholder.svg" 
                  alt="Tharusha Jayawardena - Creative Professional" 
                  className="relative z-10 rounded-xl w-full h-auto object-cover"
                />
                
                {/* Projects info box */}
                <div className="absolute -top-6 -right-6 bg-black/90 rounded-2xl p-4 shadow-lg border border-border z-20">
                  <p className="text-sm font-medium text-gray-400">Projects</p>
                  <p className="text-2xl font-bold">150+</p>
                </div>
                
                {/* Experience info box */}
                <div className="absolute -bottom-6 -left-6 bg-black/90 rounded-2xl p-4 shadow-lg border border-border z-20">
                  <p className="text-sm font-medium text-gray-400">Experience</p>
                  <p className="text-2xl font-bold">8+ Years</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-foreground/50 hover:text-primary transition-colors">
          <ArrowDownCircle />
          <span className="sr-only">Scroll down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
