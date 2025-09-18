'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Code, BookOpen, Users, Smartphone, Play, Terminal, Star, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('animate-on-scroll');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with animate-on-scroll class
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const features = [
    {
      icon: Terminal,
      title: 'Interactive Coding',
      description: 'Practice coding directly in your browser with our built-in Monaco code editor and real-time execution.',
      color: 'bg-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Tutorials',
      description: 'Learn from beginner to advanced topics with step-by-step explanations and practical examples.',
      color: 'bg-green-500'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join a community of learners and share your knowledge with developers worldwide.',
      color: 'bg-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Learn anywhere, anytime with our mobile-friendly responsive design that works on all devices.',
      color: 'bg-orange-500'
    }
  ];

  const languages = [
    { name: 'JavaScript', icon: '🟨', students: '50K+' },
    { name: 'Python', icon: '🐍', students: '45K+' },
    { name: 'TypeScript', icon: '🔷', students: '30K+' },
    { name: 'HTML/CSS', icon: '🌐', students: '60K+' },
  ];

  const stats = [
    { label: 'Active Students', value: '100K+' },
    { label: 'Coding Challenges', value: '500+' },
    { label: 'Tutorial Hours', value: '200+' },
    { label: 'Success Rate', value: '95%' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300/20 rounded-full animate-float animate-delay-200"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-300/20 rounded-full animate-float animate-delay-400"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className={cn("space-y-8", isVisible ? "animate-fade-in-left" : "opacity-0")}>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Learn Programming with
                  <span className="text-yellow-400 animate-pulse-glow"> Interactive Coding</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed animate-fade-in-up animate-delay-300">
                  Master programming concepts through hands-on practice with our integrated code editor and comprehensive tutorials.
                </p>
              </div>
              
              <div className={cn("flex flex-col sm:flex-row gap-4", isVisible ? "animate-fade-in-up animate-delay-400" : "opacity-0")}>
                <Link
                  href="/tutorials"
                  className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 group hover-lift hover-glow"
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/editor"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 hover-lift"
                >
                  Try Code Editor
                </Link>
              </div>

              {/* Stats */}
              <div className={cn("grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8", isVisible ? "animate-fade-in-up animate-delay-500" : "opacity-0")}>
                {stats.map((stat, index) => (
                  <div key={index} className={cn("text-center hover-lift", `animate-scale-in animate-delay-${600 + index * 100}`)}>
                    <div className="text-2xl lg:text-3xl font-bold text-yellow-400 animate-pulse">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image/Code Preview */}
            <div className={cn("relative", isVisible ? "animate-fade-in-right animate-delay-200" : "opacity-0")}>
              <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden hover-lift animate-pulse-glow">
                <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm ml-4">main.js</div>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="text-gray-500 animate-fade-in-up animate-delay-600">// Welcome to EduCode!</div>
                  <div className="text-blue-400 animate-fade-in-up animate-delay-700">function <span className="text-yellow-400">welcomeMessage</span>() {'{'}</div>
                  <div className="text-white ml-4 animate-fade-in-up animate-delay-800">console.<span className="text-blue-400">log</span>(<span className="text-green-400">&quot;Welcome to EduCode!&quot;</span>);</div>
                  <div className="text-white ml-4 animate-fade-in-up animate-delay-900"><span className="text-purple-400">return</span> <span className="text-green-400">&quot;Happy Learning! 🚀&quot;</span>;</div>
                  <div className="text-blue-400 animate-fade-in-up animate-delay-1000">{'}'}</div>
                  <div className="mt-4 text-yellow-400 animate-fade-in-up animate-delay-1100">welcomeMessage();</div>
                </div>
              </div>
              
              {/* Additional Visual Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/20 rounded-full animate-float animate-delay-300"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-400/20 rounded-full animate-float animate-delay-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose EduCode?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the most effective way to learn programming with our innovative platform designed for modern learners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={cn(
                    "group p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-400 hover-lift animate-on-scroll",
                    `animate-delay-${index * 100}`
                  )}
                >
                  <div className={cn(
                    'w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-float',
                    feature.color,
                    `animate-delay-${index * 200}`
                  )}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Popular Programming Languages
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our most popular programming languages and start your coding journey today.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <Link
                key={index}
                href="/tutorials"
                className={cn(
                  "group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 hover-lift animate-on-scroll",
                  `animate-delay-${index * 100}`
                )}
              >
                <div className="text-center">
                  <div className={cn("text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 animate-float", `animate-delay-${index * 150}`)}>{language.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {language.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-1 text-gray-500 group-hover:text-blue-500 transition-colors duration-300">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{language.students} students</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest programming tutorials, industry insights, and coding best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "10 Essential JavaScript Concepts Every Developer Should Master",
                excerpt: "Dive deep into the fundamental JavaScript concepts that will elevate your programming skills.",
                author: "Sarah Johnson",
                date: "Jan 15, 2024",
                readTime: "8 min read",
                category: "JavaScript",
                image: "/2.jpg"
              },
              {
                title: "Building Your First React Application: A Complete Guide",
                excerpt: "Learn how to create a modern React application from scratch with hooks and components.",
                author: "Mike Chen",
                date: "Jan 12, 2024",
                readTime: "12 min read",
                category: "React",
                image: "/3.jpg"
              },
              {
                title: "The Future of Web Development: Trends to Watch in 2024",
                excerpt: "Explore the latest trends and technologies shaping the future of web development.",
                author: "David Kim",
                date: "Jan 8, 2024",
                readTime: "10 min read",
                category: "Web Development",
                image: "/1.jpg"
              }
            ].map((post, index) => (
              <article
                key={index}
                className={cn(
                  "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover-lift animate-on-scroll",
                  `animate-delay-${index * 200}`
                )}
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to gradient background if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.style.background = 'linear-gradient(to right, rgb(59 130 246), rgb(147 51 234))';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center animate-on-scroll animate-delay-600">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 group hover-lift"
            >
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories / Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from developers who have transformed their careers with EduCode's comprehensive learning platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Rodriguez",
                role: "Frontend Developer at Google",
                image: "👨‍💻",
                testimonial: "EduCode's interactive tutorials helped me land my dream job at Google. The hands-on approach and real-world projects made all the difference in my learning journey.",
                rating: 5
              },
              {
                name: "Sarah Kim",
                role: "Full-Stack Developer",
                image: "👩‍💻",
                testimonial: "I went from complete beginner to building full-stack applications in just 6 months. The community support and structured learning path were incredible.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Software Engineer at Microsoft",
                image: "👨‍💼",
                testimonial: "The coding challenges and practical projects on EduCode prepared me for technical interviews. I'm now working at Microsoft thanks to the skills I learned here.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover-lift animate-on-scroll",
                  `animate-delay-${index * 200}`
                )}
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.testimonial}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your Learning Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our structured learning path designed to take you from beginner to professional developer.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden lg:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Foundation",
                  description: "Start with programming fundamentals, syntax, and basic concepts",
                  duration: "2-4 weeks",
                  topics: ["Variables & Data Types", "Control Structures", "Functions", "Basic Algorithms"]
                },
                {
                  step: "02",
                  title: "Intermediate",
                  description: "Build on your foundation with advanced concepts and real projects",
                  duration: "4-8 weeks",
                  topics: ["Object-Oriented Programming", "Data Structures", "APIs", "Database Basics"]
                },
                {
                  step: "03",
                  title: "Advanced",
                  description: "Master complex topics and industry best practices",
                  duration: "8-12 weeks",
                  topics: ["Design Patterns", "Testing", "Performance", "Security"]
                },
                {
                  step: "04",
                  title: "Professional",
                  description: "Build portfolio projects and prepare for your career",
                  duration: "4-6 weeks",
                  topics: ["Portfolio Projects", "Interview Prep", "Industry Tools", "Career Guidance"]
                }
              ].map((phase, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative animate-on-scroll",
                    `animate-delay-${index * 200}`,
                    index % 2 === 0 ? "lg:pr-1/2" : "lg:pl-1/2"
                  )}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                  
                  <div className={cn(
                    "bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover-lift",
                    index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                  )}>
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {phase.step}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                        <p className="text-blue-600 font-semibold">{phase.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{phase.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {phase.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Stay Updated with EduCode
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Get the latest tutorials, coding tips, and industry insights delivered straight to your inbox. 
              Join over 50,000 developers who trust EduCode for their learning journey.
            </p>
            
            <div className="max-w-md mx-auto animate-on-scroll animate-delay-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="px-8 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 hover-lift">
                  Subscribe
                </button>
              </div>
              <p className="text-indigo-200 text-sm mt-3">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-yellow-400/20 rounded-full animate-float animate-delay-200"></div>
        <div className="absolute bottom-10 left-10 w-12 h-12 bg-blue-300/20 rounded-full animate-float animate-delay-400"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 animate-on-scroll">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed animate-on-scroll animate-delay-200">
            Join thousands of developers who have already transformed their careers with EduCode. 
            Start learning today with our interactive tutorials and coding challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll animate-delay-400">
            <Link
              href="/tutorials"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 group hover-lift hover-glow"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Browse Tutorials
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/practice"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 hover-lift"
            >
              <Play className="mr-2 h-5 w-5" />
              Practice Coding
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
