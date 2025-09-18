'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, Users, Star, ChevronRight, BookOpen, Code, Play } from 'lucide-react';
import { tutorialCategories } from '@/lib/utils';
import { cn } from '@/lib/utils';

const TutorialsPage = () => {
  const [activeCategory, setActiveCategory] = useState('javascript');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const activeData = tutorialCategories.find(cat => cat.id === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400/20 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-blue-300/20 rounded-full animate-float animate-delay-200"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-indigo-300/20 rounded-full animate-float animate-delay-400"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="text-6xl mb-6 animate-float">📚</div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
              Programming Tutorials
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              Master programming concepts with our comprehensive, hands-on tutorials designed for all skill levels.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <nav className="space-y-2">
                {tutorialCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      'w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200',
                      activeCategory === category.id
                        ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                        : 'text-gray-700 hover:bg-gray-50'
                    )}
                  >
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <div className="font-medium">{category.name}</div>
                      <div className="text-sm text-gray-500">
                        {category.tutorials.length} tutorials
                      </div>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content - Tutorials */}
          <div className="lg:col-span-3">
            {activeData && (
              <>
                {/* Category Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">{activeData.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{activeData.name}</h2>
                      <p className="text-gray-600">
                        {activeData.tutorials.length} comprehensive tutorials available
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tutorials Grid */}
                <div className="space-y-6">
                  {activeData.tutorials.map((tutorial, index) => (
                    <div
                      key={tutorial.id}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-2xl font-bold text-blue-600">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <h3 className="text-xl font-semibold text-gray-900">
                                {tutorial.title}
                              </h3>
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {tutorial.description}
                            </p>
                          </div>
                        </div>

                        {/* Tutorial Meta */}
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <span className={cn(
                            'px-3 py-1 rounded-full text-sm font-medium',
                            getDifficultyColor(tutorial.difficulty)
                          )}>
                            {tutorial.difficulty}
                          </span>
                          <div className="flex items-center space-x-1 text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{tutorial.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-500">
                            <BookOpen className="h-4 w-4" />
                            <span className="text-sm">{tutorial.topics.length} topics</span>
                          </div>
                        </div>

                        {/* Topics */}
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-gray-900 mb-2">What you'll learn:</h4>
                          <div className="flex flex-wrap gap-2">
                            {tutorial.topics.map((topic, topicIndex) => (
                              <span
                                key={topicIndex}
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link
                            href={`/tutorials/${tutorial.id}`}
                            className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
                          >
                            <BookOpen className="mr-2 h-4 w-4" />
                            Start Tutorial
                            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                          <Link
                            href="/editor"
                            className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                          >
                            <Code className="mr-2 h-4 w-4" />
                            Try in Editor
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-white py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Practice Your Skills?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Put your knowledge to the test with our interactive coding challenges and practice problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/practice"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 group"
            >
              <Play className="mr-2 h-5 w-5" />
              Practice Problems
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/editor"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              <Code className="mr-2 h-5 w-5" />
              Open Code Editor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorialsPage;
