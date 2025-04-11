
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '../shared/AnimatedSection';
import { CalendarDays, Clock, MoveRight, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
  featured?: boolean;
}

const Blog: React.FC = () => {
  const featuredPost: BlogPost = {
    id: 1,
    title: 'The Future of UI Design: Trends to Watch in 2025',
    excerpt: 'Explore emerging UI design trends that will shape the digital landscape in the coming year, from advanced micro-interactions to neomorphic design elements.',
    date: 'Mar 15, 2025',
    readTime: '6 min read',
    category: 'UI/UX Design',
    image: '/placeholder.svg',
    slug: 'future-of-ui-design',
    featured: true,
  };

  const blogPosts: BlogPost[] = [
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
  ];

  return (
    <section className="py-24">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on design, development, and creative technology.
          </p>
        </AnimatedSection>

        {/* Featured Post */}
        <AnimatedSection animation="fade-in" className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="aspect-video overflow-hidden rounded-xl">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <span className="text-sm px-3 py-1 bg-secondary rounded-full">{featuredPost.category}</span>
              <h3 className="text-2xl lg:text-3xl font-bold mt-4 mb-3">
                <Link to={`/blog/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                  {featuredPost.title}
                </Link>
              </h3>
              <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <CalendarDays size={16} />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              
              <Button asChild>
                <Link to={`/blog/${featuredPost.slug}`}>
                  Read Article
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Regular Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection 
              key={post.id}
              animation="fade-in"
              delay={200 + index * 100}  
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

                <div className="flex items-center gap-2 mb-3">
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
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/blog">View All Articles</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Blog;
