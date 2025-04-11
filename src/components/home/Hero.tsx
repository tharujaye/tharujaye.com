
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownCircle, Github, Linkedin, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../shared/AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedSection animation="fade-in" delay={200}>
              <h1 className="text-sm uppercase tracking-widest text-primary mb-4">
                Creative Professional
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={300}>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="highlight-gradient">Tharusha Jayawardena</span>
                <br />
                UI/UX Designer & Developer
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={400}>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                I craft beautiful, functional digital experiences with a focus on user-centered design. 
                From concept to code, I bring ideas to life.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={500}>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
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
                  href="https://github.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Github size={22} />
                  <span className="sr-only">GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com" 
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

          <AnimatedSection 
            animation="fade-in-left" 
            className="hidden lg:flex justify-end"
            delay={700}
          >
            <div className="relative w-full max-w-md">
              <div className="aspect-square rounded-full bg-gradient-to-br from-highlight-purple to-highlight-cyan/30 blur-3xl absolute top-0 left-0 w-full h-full opacity-20" />
              <img 
                src="/placeholder.svg" 
                alt="Alex Chen - Creative Professional" 
                className="relative z-10 rounded-3xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-lg border border-border z-20">
                <p className="text-sm font-medium">Experience</p>
                <p className="text-2xl font-bold">8+ Years</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-background rounded-2xl p-4 shadow-lg border border-border z-20">
                <p className="text-sm font-medium">Projects</p>
                <p className="text-2xl font-bold">150+</p>
              </div>
            </div>
          </AnimatedSection>
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
