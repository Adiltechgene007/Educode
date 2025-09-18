'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CodeEditor from '@/components/CodeEditor';
import { practiceProblems } from '@/lib/utils';
import { BookOpen, Code, Lightbulb, Target } from 'lucide-react';

const EditorPageContent = () => {
  const searchParams = useSearchParams();
  const problemId = searchParams.get('problem');
  const [currentProblem, setCurrentProblem] = useState<any>(null);

  useEffect(() => {
    if (problemId) {
      const problem = practiceProblems.find(p => p.id === problemId);
      setCurrentProblem(problem);
    }
  }, [problemId]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-4 right-10 w-12 h-12 bg-yellow-400/20 rounded-full animate-float"></div>
        <div className="absolute top-8 left-20 w-8 h-8 bg-purple-300/20 rounded-full animate-float animate-delay-200"></div>
        <div className="absolute bottom-4 right-1/4 w-16 h-16 bg-blue-300/20 rounded-full animate-float animate-delay-400"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="text-3xl animate-float">💻</div>
                <h1 className="text-2xl font-bold animate-fade-in-up">
                  {currentProblem ? `Problem: ${currentProblem.title}` : 'Code Editor'}
                </h1>
              </div>
              <p className="text-purple-100 mt-1 animate-fade-in-up animate-delay-200">
                {currentProblem 
                  ? 'Solve the coding challenge below' 
                  : 'Write, run, and test your code in our interactive environment'
                }
              </p>
            </div>
            <div className="flex items-center space-x-2 animate-fade-in-right">
              <Code className="h-6 w-6 text-yellow-400" />
              <span className="text-sm text-purple-100">Interactive Coding Environment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Problem Description (if solving a problem) */}
          {currentProblem && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 h-full overflow-auto">
                <div className="flex items-center space-x-2 mb-4">
                  <Target className="h-5 w-5 text-green-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Problem</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">{currentProblem.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {currentProblem.description}
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Lightbulb className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-medium text-gray-900">Hints</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Think about the problem step by step</li>
                      <li>• Test your solution with different inputs</li>
                      <li>• Consider edge cases</li>
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <BookOpen className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium text-gray-900">Example</span>
                    </div>
                    <div className="bg-gray-50 rounded p-3 text-sm font-mono">
                      <div className="text-gray-600">Input: "Hello"</div>
                      <div className="text-gray-600">Output: "Hello, World!"</div>
                    </div>
                  </div>

                  {currentProblem.difficulty && (
                    <div className="border-t pt-4">
                      <span className="text-sm text-gray-600">Difficulty: </span>
                      <span className={`text-sm font-medium ${
                        currentProblem.difficulty === 'Easy' ? 'text-green-600' :
                        currentProblem.difficulty === 'Medium' ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {currentProblem.difficulty}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Code Editor */}
          <div className={currentProblem ? 'lg:col-span-3' : 'lg:col-span-4'}>
            <CodeEditor
              initialLanguage={currentProblem?.language || 'javascript'}
              initialCode={currentProblem?.starterCode}
              problemId={problemId || undefined}
            />
          </div>
        </div>
      </div>

      {/* Tips Section */}
      {!currentProblem && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Getting Started</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Code className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Choose Your Language</h3>
                  <p className="text-sm text-gray-600">
                    Select from JavaScript, Python, TypeScript, or HTML to start coding.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Target className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Write Your Code</h3>
                  <p className="text-sm text-gray-600">
                    Use our Monaco editor with syntax highlighting and auto-completion.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Lightbulb className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Run & Test</h3>
                  <p className="text-sm text-gray-600">
                    Execute your code and see the results in real-time output panel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const EditorPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading editor...</p>
        </div>
      </div>
    }>
      <EditorPageContent />
    </Suspense>
  );
};

export default EditorPage;
