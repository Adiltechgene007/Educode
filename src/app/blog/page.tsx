'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, Search, Tag, TrendingUp, BookOpen, Code, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential JavaScript Concepts Every Developer Should Master",
      excerpt: "Dive deep into the fundamental JavaScript concepts that will elevate your programming skills and make you a more effective developer.",
      content: "JavaScript is the backbone of modern web development...",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "JavaScript",
      tags: ["JavaScript", "Web Development", "Programming"],
      image: "/api/placeholder/600/300",
      featured: true,
      views: 2500
    },
    {
      id: 2,
      title: "Building Your First React Application: A Complete Guide",
      excerpt: "Learn how to create a modern React application from scratch with hooks, components, and best practices.",
      content: "React has revolutionized the way we build user interfaces...",
      author: "Mike Chen",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "React",
      tags: ["React", "Frontend", "Tutorial"],
      image: "/api/placeholder/600/300",
      featured: true,
      views: 3200
    },
    {
      id: 3,
      title: "Python for Beginners: Your Journey Starts Here",
      excerpt: "Start your programming journey with Python, one of the most beginner-friendly and powerful programming languages.",
      content: "Python's simplicity and versatility make it perfect for beginners...",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Python",
      tags: ["Python", "Beginners", "Programming"],
      image: "/api/placeholder/600/300",
      featured: false,
      views: 1800
    },
    {
      id: 4,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends and technologies shaping the future of web development and how to stay ahead of the curve.",
      content: "The web development landscape is constantly evolving...",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "Web Development",
      tags: ["Trends", "Web Development", "Future"],
      image: "/api/placeholder/600/300",
      featured: true,
      views: 4100
    },
    {
      id: 5,
      title: "Debugging Like a Pro: Advanced Techniques and Tools",
      excerpt: "Master the art of debugging with professional techniques and tools that will save you hours of frustration.",
      content: "Debugging is an essential skill for every developer...",
      author: "Lisa Wang",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Development Tools",
      tags: ["Debugging", "Tools", "Best Practices"],
      image: "/api/placeholder/600/300",
      featured: false,
      views: 2100
    },
    {
      id: 6,
      title: "CSS Grid vs Flexbox: When to Use Which",
      excerpt: "Understanding the differences between CSS Grid and Flexbox will help you choose the right layout method for your projects.",
      content: "CSS Grid and Flexbox are both powerful layout systems...",
      author: "Alex Thompson",
      date: "2024-01-03",
      readTime: "7 min read",
      category: "CSS",
      tags: ["CSS", "Layout", "Design"],
      image: "/api/placeholder/600/300",
      featured: false,
      views: 1900
    }
  ];

  const categories = ['All', 'JavaScript', 'React', 'Python', 'Web Development', 'CSS', 'Development Tools'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              EduCode <span className="text-yellow-400">Blog</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest programming tutorials, industry insights, and coding best practices from our expert developers.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative animate-fade-in-up animate-delay-200">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {searchTerm === '' && selectedCategory === 'All' && (
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in-up">Featured Articles</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredPosts.slice(0, 2).map((post, index) => (
                    <article
                      key={post.id}
                      className={cn(
                        "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover-lift animate-fade-in-up",
                        `animate-delay-${index * 200}`
                      )}
                    >
                      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        {/* Code-themed visual elements */}
                        <div className="absolute top-2 right-2 text-white/30 text-6xl font-mono">{'</>'}</div>
                        <div className="absolute bottom-2 left-2 text-white/20 text-4xl">💻</div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-bold text-lg line-clamp-2">{post.title}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <User className="h-4 w-4 mr-1" />
                          <span className="mr-4">{post.author}</span>
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group"
                          >
                            Read More
                            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Category Filter */}
            <div className="mb-8 animate-fade-in-up">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-lg font-medium transition-all duration-200",
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* All Posts */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in-up">
                {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
              </h2>
              <div className="space-y-8">
                {filteredPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className={cn(
                      "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover-lift animate-fade-in-up",
                      `animate-delay-${index * 100}`
                    )}
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="h-48 md:h-full bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
                          <div className="absolute inset-0 bg-black/20"></div>
                          {/* Dynamic visual elements based on category */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white/30 text-8xl">
                              {post.category === 'JavaScript' && '🟨'}
                              {post.category === 'React' && '⚛️'}
                              {post.category === 'Python' && '🐍'}
                              {post.category === 'Web Development' && '🌐'}
                              {post.category === 'Development Tools' && '🛠️'}
                              {post.category === 'CSS' && '🎨'}
                            </div>
                          </div>
                          <div className="absolute top-2 right-2 text-white/20 text-4xl font-mono">{'{ }'}</div>
                          {post.featured && (
                            <div className="absolute top-4 left-4">
                              <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                                Featured
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-3">
                            {post.category}
                          </span>
                          <User className="h-4 w-4 mr-1" />
                          <span className="mr-4">{post.author}</span>
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-500 flex items-center">
                              <TrendingUp className="h-4 w-4 mr-1" />
                              {post.views} views
                            </span>
                            <Link
                              href={`/blog/${post.id}`}
                              className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group"
                            >
                              Read More
                              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Recent Posts */}
              <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up animate-delay-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.id}`}
                      className="block group"
                    >
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up animate-delay-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Tag className="h-5 w-5 mr-2 text-blue-600" />
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Python', 'CSS', 'Web Development', 'Tutorial', 'Best Practices', 'Debugging'].map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg p-6 text-white animate-fade-in-up animate-delay-500">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-400" />
                  Stay Updated
                </h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Get the latest programming tutorials and insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <button className="w-full bg-yellow-400 text-blue-900 font-semibold py-2 rounded-lg hover:bg-yellow-300 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
