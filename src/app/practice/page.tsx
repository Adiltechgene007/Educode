'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Play, Code, CheckCircle, Clock, Trophy, Star, ChevronRight, Filter } from 'lucide-react';
import { practiceProblems } from '@/lib/utils';
import { cn } from '@/lib/utils';

const PracticePage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  const difficulties = ['all', 'Easy', 'Medium', 'Hard'];
  const languages = ['all', 'javascript', 'python', 'typescript'];

  const filteredProblems = practiceProblems.filter(problem => {
    const difficultyMatch = selectedDifficulty === 'all' || problem.difficulty === selectedDifficulty;
    const languageMatch = selectedLanguage === 'all' || problem.language === selectedLanguage;
    return difficultyMatch && languageMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'hard':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getLanguageIcon = (language: string) => {
    switch (language) {
      case 'javascript':
        return '🟨';
      case 'python':
        return '🐍';
      case 'typescript':
        return '🔷';
      default:
        return '💻';
    }
  };

  const stats = [
    { label: 'Total Problems', value: '500+', icon: Code },
    { label: 'Completed', value: '0', icon: CheckCircle },
    { label: 'Success Rate', value: '0%', icon: Trophy },
    { label: 'Time Saved', value: '0h', icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-yellow-400/20 rounded-full animate-float"></div>
        <div className="absolute top-20 left-20 w-12 h-12 bg-green-300/20 rounded-full animate-float animate-delay-200"></div>
        <div className="absolute bottom-10 right-1/4 w-20 h-20 bg-emerald-300/20 rounded-full animate-float animate-delay-400"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="text-6xl mb-6 animate-float">🎯</div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
              Practice Problems
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              Sharpen your programming skills with hands-on coding challenges and interactive exercises.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center space-x-2 mb-4">
                <Filter className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              </div>
              
              {/* Difficulty Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Difficulty</h4>
                <div className="space-y-2">
                  {difficulties.map((difficulty) => (
                    <button
                      key={difficulty}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={cn(
                        'w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200',
                        selectedDifficulty === difficulty
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      )}
                    >
                      {difficulty === 'all' ? 'All Levels' : difficulty}
                    </button>
                  ))}
                </div>
              </div>

              {/* Language Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Language</h4>
                <div className="space-y-2">
                  {languages.map((language) => (
                    <button
                      key={language}
                      onClick={() => setSelectedLanguage(language)}
                      className={cn(
                        'w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 flex items-center space-x-2',
                        selectedLanguage === language
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      )}
                    >
                      <span>{language === 'all' ? '💻' : getLanguageIcon(language)}</span>
                      <span>{language === 'all' ? 'All Languages' : language.charAt(0).toUpperCase() + language.slice(1)}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="border-t pt-4">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Your Progress</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Problems Solved:</span>
                    <span className="font-medium">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Current Streak:</span>
                    <span className="font-medium">0 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Best Streak:</span>
                    <span className="font-medium">0 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Problems */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Practice Problems
                  </h2>
                  <p className="text-gray-600">
                    {filteredProblems.length} problems found
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm text-gray-600">Start with easy problems</span>
                </div>
              </div>
            </div>

            {/* Problems List */}
            <div className="space-y-4">
              {filteredProblems.length > 0 ? (
                filteredProblems.map((problem, index) => (
                  <div
                    key={problem.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-lg font-bold text-gray-400">
                              #{index + 1}
                            </span>
                            <h3 className="text-xl font-semibold text-gray-900">
                              {problem.title}
                            </h3>
                            <span className={cn(
                              'px-2 py-1 rounded-full text-xs font-medium border',
                              getDifficultyColor(problem.difficulty)
                            )}>
                              {problem.difficulty}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {problem.description}
                          </p>
                        </div>
                      </div>

                      {/* Problem Meta */}
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-1">
                          <span className="text-lg">{getLanguageIcon(problem.language)}</span>
                          <span className="text-sm text-gray-600 capitalize">{problem.language}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-500">
                          <Code className="h-4 w-4" />
                          <span className="text-sm">Coding Challenge</span>
                        </div>
                      </div>

                      {/* Code Preview */}
                      <div className="bg-gray-900 rounded-lg p-4 mb-4">
                        <div className="text-sm text-gray-300 font-mono">
                          <div className="text-gray-500">// Starter code</div>
                          <pre className="text-green-400 whitespace-pre-wrap">
                            {problem.starterCode}
                          </pre>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href={`/editor?problem=${problem.id}`}
                          className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 group"
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Solve Problem
                          <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200">
                          <Star className="mr-2 h-4 w-4" />
                          Save for Later
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <Code className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No problems found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your filters to see more problems.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedDifficulty('all');
                      setSelectedLanguage('all');
                    }}
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-white py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need More Guidance?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            If you're new to programming, start with our comprehensive tutorials before tackling these challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tutorials"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
            >
              <Code className="mr-2 h-5 w-5" />
              Browse Tutorials
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/editor"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-200"
            >
              <Play className="mr-2 h-5 w-5" />
              Open Code Editor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticePage;
