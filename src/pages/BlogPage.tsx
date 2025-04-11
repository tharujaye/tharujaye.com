
import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock, MoveRight, Search, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of UI Design: Trends to Watch in 2025',
      excerpt: 'Explore emerging UI design trends that will shape the digital landscape in the coming year, from advanced micro-interactions to neomorphic design elements.',
      date: 'Mar 15, 2025',
      readTime: '6 min read',
      category: 'UI/UX Design',
      image: '/placeholder.svg',
      slug: 'future-of-ui-design',
    },
    {
      id: 2,
      title: 'How to Implement Design Systems at Scale',
      excerpt: 'A practical guide to creating, implementing, and maintaining design systems for large organizations.',
      date: 'Feb 28, 2025',
      readTime: '8 min read',
      category: 'Design Systems',
      image: '/placeholder.svg',
      slug: 'design-systems-at-scale',
    },
    {
      id: 3,
      title: 'The Role of Animation in User Experience',
      excerpt: 'How thoughtful animation can enhance user experience and guide users through complex interfaces.',
      date: 'Feb 12, 2025',
      readTime: '5 min read',
      category: 'Animation',
      image: '/placeholder.svg',
      slug: 'animation-in-ux',
    },
    {
      id: 4,
      title: 'Optimizing React Performance for Large Applications',
      excerpt: 'Tips and techniques for improving the performance of React applications as they grow in complexity.',
      date: 'Jan 30, 2025',
      readTime: '10 min read',
      category: 'Development',
      image: '/placeholder.svg',
      slug: 'react-performance',
    },
    {
      id: 5,
      title: 'Typography Best Practices for Web Design',
      excerpt: 'A comprehensive guide to selecting and implementing typography for effective web design.',
      date: 'Jan 15, 2025',
      readTime: '7 min read',
      category: 'UI/UX Design',
      image: '/placeholder.svg',
      slug: 'typography-best-practices',
    },
    {
      id: 6,
      title: 'Building Accessible Web Applications',
      excerpt: 'Strategies and techniques for ensuring your web applications are accessible to all users.',
      date: 'Dec 22, 2024',
      readTime: '9 min read',
      category: 'Development',
      image: '/placeholder.svg',
      slug: 'accessible-web-applications',
    },
    {
      id: 7,
      title: 'Psychology of Colors in UI Design',
      excerpt: 'Understanding how color choices impact user perception and behavior in digital interfaces.',
      date: 'Dec 10, 2024',
      readTime: '6 min read',
      category: 'UI/UX Design',
      image: '/placeholder.svg',
      slug: 'psychology-colors-ui',
    },
    {
      id: 8,
      title: 'From Design to Development: Streamlining Handoff',
      excerpt: 'Best practices for ensuring smooth transitions from design to development phases.',
      date: 'Nov 28, 2024',
      readTime: '8 min read',
      category: 'Workflow',
      image: '/placeholder.svg',
      slug: 'design-development-handoff',
    },
  ];

  const categories = ['all', 'UI/UX Design', 'Development', 'Design Systems', 'Animation', 'Workflow'];
  
  const filteredPosts = blogPosts
    .filter(post => 
      (activeCategory === 'all' || post.category === activeCategory) && 
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-secondary">
          <div className="container">
            <AnimatedSection animation="fade-in" delay={200}>
              <h1 className="text-sm uppercase tracking-widest text-primary mb-4">Blog</h1>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Articles &amp; <span className="highlight-gradient">Insights</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                Thoughts, tutorials, and insights on design, development, and the creative industry.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-24">
          <div className="container">
            {/* Search and filter */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatedSection animation="fade-in" delay={200} className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      placeholder="Search articles..." 
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in" delay={300}>
                  <div className="flex gap-2 overflow-x-auto pb-2 md:justify-end">
                    {categories.slice(0, 4).map((category) => (
                      <Button
                        key={category}
                        variant={activeCategory === category ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveCategory(category)}
                        className="whitespace-nowrap"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Blog posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <AnimatedSection 
                    key={post.id}
                    animation="fade-in"
                    delay={200 + (index % 3) * 100}  
                  >
                    <article className="flex flex-col h-full">
                      <div className="aspect-video overflow-hidden rounded-xl mb-4">
                        <Link to={`/blog/${post.slug}`}>
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                          />
                        </Link>
                      </div>

                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-xs px-2 py-0.5 bg-secondary rounded-full flex items-center gap-1">
                          <Tag size={12} />
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <CalendarDays size={12} />
                          {post.date}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3">
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>

                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 mt-auto"
                      >
                        Read More <MoveRight size={16} />
                      </Link>
                    </article>
                  </AnimatedSection>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                </div>
              )}
            </div>

            {/* Newsletter Section */}
            <AnimatedSection className="text-center mt-20">
              <div className="bg-card border border-border p-12 rounded-xl">
                <h2 className="text-3xl font-bold mb-4">Subscribe to my newsletter</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Stay updated with the latest articles, tutorials, and insights on design and development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Input placeholder="Enter your email" className="sm:flex-1" />
                  <Button>Subscribe</Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
