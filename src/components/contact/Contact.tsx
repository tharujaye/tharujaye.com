import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import AnimatedSection from '../shared/AnimatedSection';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});



const Contact: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("form-name", "contact");
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
  
    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        form.reset();
      })
      .catch(() => {
        toast({
          title: "Oops!",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      });
  }
  
  // Contact information
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'tharushajayawardane05@gmail.com',
      link: 'mailto:tharushajayawardane05@gmail.com',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      value: '+94769496380',
      link: 'tel:+94769496380',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      value: 'Ambalangoda, Sri Lanka',
      link: 'https://maps.app.goo.gl/xqSaUyFRhGFmJMx17',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out using the form below or through my contact information.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="fade-in-right">
            <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <Form {...form}>
                <form
                  action="https://formspree.io/f/mgvaqjql" 
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_subject" value="New message from portfolio site" />
                  <input type="hidden" name="_next" value="https://tharujaye.com/thank-you" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition"
                  >
                    Send Message
                  </button>
                </form>
              </Form>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection animation="fade-in-left">
            <div className="h-full flex flex-col">
              <div className="bg-card border border-border p-8 rounded-xl shadow-sm mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">{item.title}</h4>
                        <a 
                          href={item.link}
                          target={item.title === 'Office' ? '_blank' : undefined}
                          rel={item.title === 'Office' ? 'noopener noreferrer' : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border p-8 rounded-xl shadow-sm flex-grow">
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-6">
                  Follow me on social media to stay updated with my latest projects, articles, and design insights.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/tharujaye" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/tharujaye" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a 
                    href="https://behance.net/tharujaye" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <span className="sr-only">Behance</span>
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16.5 6.75h-9v10.5h9a5.25 5.25 0 1 0 0-10.5Z"></path>
                      <path d="M3.75 6.75H9"></path>
                      <path d="M3.75 12h6"></path>
                      <path d="M14.25 15.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://dribbble.com/tharujaye" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <span className="sr-only">Dribbble</span>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
