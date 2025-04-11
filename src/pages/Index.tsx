
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/about/About';
import Portfolio from '@/components/portfolio/Portfolio';
import CaseStudies from '@/components/case-studies/CaseStudies';
import Blog from '@/components/blog/Blog';
import Contact from '@/components/contact/Contact';

const Index: React.FC = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <CaseStudies />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
