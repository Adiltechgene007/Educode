'use client';

import { useState, useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { Play, Save, Download, Settings, RotateCcw, Copy, Check } from 'lucide-react';
import { programmingLanguages } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface CodeEditorProps {
  initialLanguage?: string;
  initialCode?: string;
  problemId?: string;
}

const CodeEditor = ({ initialLanguage = 'javascript', initialCode, problemId }: CodeEditorProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
  const [code, setCode] = useState(initialCode || '');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [theme, setTheme] = useState('vs-dark');
  const [fontSize, setFontSize] = useState(14);
  const [copied, setCopied] = useState(false);
  const editorRef = useRef<any>(null);

  const currentLanguage = programmingLanguages.find(lang => lang.id === selectedLanguage);

  useEffect(() => {
    if (!initialCode && currentLanguage) {
      setCode(currentLanguage.defaultCode);
    }
  }, [selectedLanguage, currentLanguage, initialCode]);

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Running code...\n');

    try {
      // Simulate code execution (in a real app, you'd send this to a backend service)
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (selectedLanguage === 'javascript') {
        try {
          // Create a safe execution environment
          const logs: string[] = [];
          const originalConsoleLog = console.log;
          
          // Override console.log to capture output
          console.log = (...args: any[]) => {
            logs.push(args.map(arg => 
              typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(' '));
          };

          // Execute the code
          const func = new Function(code);
          const result = func();
          
          // Restore console.log
          console.log = originalConsoleLog;
          
          let output = '';
          if (logs.length > 0) {
            output += logs.join('\n') + '\n';
          }
          if (result !== undefined) {
            output += `Return value: ${typeof result === 'object' ? JSON.stringify(result, null, 2) : result}`;
          }
          
          setOutput(output || 'Code executed successfully (no output)');
        } catch (error) {
          setOutput(`Error: ${(error as Error).message}`);
        }
      } else {
        // For other languages, show a simulated output
        setOutput(`Code executed successfully!\n\n// Note: This is a demo environment.\n// In a production app, code would be executed on a secure backend server.\n\nLanguage: ${currentLanguage?.name}\nCode length: ${code.length} characters`);
      }
    } catch (error) {
      setOutput(`Execution error: ${(error as Error).message}`);
    } finally {
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    if (currentLanguage) {
      setCode(currentLanguage.defaultCode);
      setOutput('');
    }
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  const downloadCode = () => {
    const extension = selectedLanguage === 'javascript' ? 'js' : 
                     selectedLanguage === 'typescript' ? 'ts' :
                     selectedLanguage === 'python' ? 'py' : 'txt';
    
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Toolbar */}
      <div className="bg-gray-100 border-b border-gray-200 p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Language Selector */}
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Language:</label>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {programmingLanguages.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.icon} {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={runCode}
              disabled={isRunning}
              className={cn(
                'inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                isRunning
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              )}
            >
              <Play className="mr-2 h-4 w-4" />
              {isRunning ? 'Running...' : 'Run Code'}
            </button>
            
            <button
              onClick={copyCode}
              className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
            
            <button
              onClick={resetCode}
              className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
            
            <button
              onClick={downloadCode}
              className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              <Download className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Settings Row */}
        <div className="flex items-center space-x-4 mt-3 pt-3 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-600">Theme:</label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="vs-dark">Dark</option>
              <option value="light">Light</option>
              <option value="hc-black">High Contrast</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-600">Font Size:</label>
            <select
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value={12}>12px</option>
              <option value={14}>14px</option>
              <option value={16}>16px</option>
              <option value={18}>18px</option>
              <option value={20}>20px</option>
            </select>
          </div>
        </div>
      </div>

      {/* Editor and Output */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Code Editor */}
        <div className="flex-1 min-h-0">
          <Editor
            height="100%"
            language={selectedLanguage === 'html' ? 'html' : selectedLanguage}
            value={code}
            onChange={(value) => setCode(value || '')}
            onMount={handleEditorDidMount}
            theme={theme}
            options={{
              fontSize,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              wordWrap: 'on',
              lineNumbers: 'on',
              folding: true,
              selectOnLineNumbers: true,
              automaticLayout: true,
              tabSize: 2,
              insertSpaces: true,
            }}
          />
        </div>

        {/* Output Panel */}
        <div className="lg:w-1/3 border-t lg:border-t-0 lg:border-l border-gray-200 bg-gray-900 text-green-400 font-mono">
          <div className="p-4 border-b border-gray-700 bg-gray-800">
            <h3 className="text-sm font-medium text-gray-300">Output</h3>
          </div>
          <div className="p-4 h-64 lg:h-full overflow-auto">
            <pre className="text-sm whitespace-pre-wrap">
              {output || 'Click "Run Code" to see output here...'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
