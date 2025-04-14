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
                  href="https://www.linkedin.com/in/tharujaye/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Linkedin size={22} />
                  <span className="sr-only">LinkedIn</span>
                </a>

                <a 
                  href="https://github.com/tharujaye" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Github size={22} />
                  <span className="sr-only">GitHub</span>
                </a>

                {/* Added Dribbble Icon */}
                <a 
                  href="https://dribbble.com/tharujaye" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
                  </svg>
                  <span className="sr-only">Dribbble</span>
                </a>

                {/* Adjusted Behance Icon */}
                <a
                  href="https://www.behance.net/tharujaye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18" // Reduced size
                    height="18" // Reduced size
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 11 16 A 1.0001 1.0001 0 0 0 10 17 L 10 33.001953 A 1.0001 1.0001 0 0 0 11 34.001953 L 18.609375 34.001953 A 1.0001 1.0001 0 0 0 18.611328 34.001953 C 19.023753 34.001303 20.47042 33.966143 21.966797 33.263672 C 23.463126 32.561204 25 30.981352 25 28.427734 C 25 26.807744 24.469468 25.587871 23.757812 24.785156 C 23.459976 24.44921 23.181728 24.411563 22.867188 24.205078 C 23.468962 23.501116 24 22.548391 24 21 C 24 18.617325 22.694971 17.138602 21.353516 16.537109 C 20.01206 15.935617 18.632571 16 18.292969 16 L 11 16 z M 30 16 A 1.0001 1.0001 0 1 0 30 18 L 36 18 A 1.0001 1.0001 0 1 0 36 16 L 30 16 z M 12 18 L 18.292969 18 C 18.745366 18 19.721112 17.9963 20.535156 18.361328 C 21.3492 18.726336 22 19.248675 22 21 C 22 22.875889 21.277102 23.235863 20.847656 23.457031 A 1.0001 1.0001 0 0 0 20.980469 25.291016 C 21.358602 25.420639 21.863623 25.662293 22.261719 26.111328 C 22.659815 26.560363 23 27.218725 23 28.427734 C 23 30.258116 22.15731 30.964843 21.117188 31.453125 C 20.077064 31.941407 18.83095 32.001604 18.609375 32.001953 L 12 32.001953 L 12 18 z M 33 19 C 32.087626 19 30.417415 19.181258 28.863281 20.248047 C 27.309148 21.314836 26 23.339397 26 26.5 C 26 29.443402 27.208842 31.444154 28.728516 32.568359 C 30.24819 33.692564 31.970682 34 33.169922 34 C 35.709068 34 37.504491 33.136946 38.580078 31.910156 C 39.573509 30.777073 39.90237 29.440307 39.953125 28.296875 A 1.0001 1.0001 0 0 0 40 28.035156 C 40.000308 28.026556 39.997747 28.016453 39.998047 28.007812 C 39.998097 28.005366 40 28.002441 40 28 A 1.0001 1.0001 0 0 0 39.994141 27.900391 A 1.0001 1.0001 0 0 0 39.994141 27.896484 C 40.048589 26.089131 39.90858 24.000335 38.943359 22.212891 C 37.954617 20.381886 35.96657 19 33 19 z M 15 20 L 15 23 L 17.619141 23 C 17.976141 23 19.166016 22.774547 19.166016 21.435547 C 19.166016 20.095547 17.617859 20 17.380859 20 L 15 20 z M 33 21 C 35.40843 21 36.482883 21.868114 37.181641 23.162109 C 37.747639 24.210254 37.919716 25.618337 37.953125 27 L 35 27 L 31 27 A 1.0001 1.0001 0 0 0 30 28 C 30 28 30.008601 28.252415 30.082031 28.472656 C 30.155441 28.692897 30.300118 28.96418 30.542969 29.207031 C 31.028672 29.692734 31.833333 30 33 30 C 34.166667 30 34.971329 29.692734 35.457031 29.207031 C 35.525631 29.138431 35.534421 29.071375 35.587891 29 L 37.841797 29 C 37.708618 29.554752 37.494684 30.112499 37.076172 30.589844 C 36.398259 31.363054 35.278776 32 33.169922 32 C 32.341162 32 30.975795 31.743483 29.917969 30.960938 C 28.860143 30.178392 28 28.929598 28 26.5 C 28 23.853603 28.930477 22.627945 29.996094 21.896484 C 31.06171 21.165024 32.391374 21 33 21 z M 33.085938 22.601562 C 32.494937 22.601562 32.070422 22.677031 31.732422 22.832031 C 31.394422 22.986031 31.142672 23.219172 30.888672 23.451172 C 30.719672 23.683172 30.549844 23.916563 30.464844 24.226562 C 30.379844 24.458562 30.295875 24.690953 30.296875 25.001953 L 35.705078 25.001953 C 35.620078 24.226953 35.366359 23.607703 34.943359 23.220703 C 34.521359 22.833703 33.930937 22.601562 33.085938 22.601562 z M 15.033203 26 L 15.033203 29.980469 L 17.962891 29.980469 C 18.216891 29.980469 20 29.882453 20 28.064453 C 20 26.244453 18.598891 26 17.962891 26 L 15.033203 26 z"></path>
                  </svg>
                  <span className="sr-only">Behance</span>
                </a>

                {/* Added Medium Icon */}
                <a 
                  href="https://medium.com/@tharujaye" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18" // Reduced size
                    height="18" // Reduced size
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 15.13c5.238 0 9.5 4.262 9.5 9.5s-4.262 9.5-9.5 9.5S5 29.869 5 24.63 9.262 15.13 14.5 15.13M14.5 12.13C7.596 12.13 2 17.727 2 24.63s5.596 12.5 12.5 12.5S27 31.534 27 24.63 21.404 12.13 14.5 12.13L14.5 12.13zM34 16.13c.771 0 3 2.923 3 8.5s-2.229 8.5-3 8.5-3-2.923-3-8.5S33.229 16.13 34 16.13M34 13.13c-3.314 0-6 5.149-6 11.5s2.686 11.5 6 11.5 6-5.149 6-11.5S37.314 13.13 34 13.13L34 13.13zM43.5 14.129999999999999A2.5 10.5 0 1043.5 35.129999999999995 2.5 10.5 0 1043.5 14.129999999999999z"></path>
                  </svg>

                  <span className="sr-only">Medium</span>
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
