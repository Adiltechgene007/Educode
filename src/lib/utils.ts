import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const programmingLanguages = [
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '🟨',
    defaultCode: `// Welcome to JavaScript!
function greetUser(name) {
    return \`Hello, \${name}! Welcome to EduCode.\`;
}

console.log(greetUser("Developer"));`,
    description: 'Dynamic programming language for web development'
  },
  {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    defaultCode: `# Welcome to Python!
def greet_user(name):
    return f"Hello, {name}! Welcome to EduCode."

print(greet_user("Developer"))`,
    description: 'Versatile language for beginners and experts'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: '🔷',
    defaultCode: `// Welcome to TypeScript!
interface User {
    name: string;
    age: number;
}

function greetUser(user: User): string {
    return \`Hello, \${user.name}! You are \${user.age} years old.\`;
}

const developer: User = { name: "Developer", age: 25 };
console.log(greetUser(developer));`,
    description: 'JavaScript with static type definitions'
  },
  {
    id: 'html',
    name: 'HTML',
    icon: '🌐',
    defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to EduCode</title>
</head>
<body>
    <h1>Hello, Developer!</h1>
    <p>Welcome to our interactive coding environment.</p>
</body>
</html>`,
    description: 'Markup language for web structure'
  }
];

export const tutorialCategories = [
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '🟨',
    tutorials: [
      {
        id: 'js-basics',
        title: 'JavaScript Fundamentals',
        description: 'Learn variables, functions, and control structures',
        difficulty: 'Beginner',
        duration: '2 hours',
        topics: ['Variables', 'Functions', 'Loops', 'Conditionals']
      },
      {
        id: 'js-dom',
        title: 'DOM Manipulation',
        description: 'Create interactive web pages with JavaScript',
        difficulty: 'Intermediate',
        duration: '3 hours',
        topics: ['DOM Selection', 'Event Handling', 'Dynamic Content']
      },
      {
        id: 'js-async',
        title: 'Asynchronous JavaScript',
        description: 'Master promises, async/await, and API calls',
        difficulty: 'Advanced',
        duration: '4 hours',
        topics: ['Promises', 'Async/Await', 'Fetch API', 'Error Handling']
      }
    ]
  },
  {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    tutorials: [
      {
        id: 'python-basics',
        title: 'Python Fundamentals',
        description: 'Variables, data types, and basic syntax',
        difficulty: 'Beginner',
        duration: '2.5 hours',
        topics: ['Variables', 'Data Types', 'Functions', 'Control Flow']
      },
      {
        id: 'python-oop',
        title: 'Object-Oriented Programming',
        description: 'Classes, objects, and inheritance in Python',
        difficulty: 'Intermediate',
        duration: '3.5 hours',
        topics: ['Classes', 'Objects', 'Inheritance', 'Polymorphism']
      }
    ]
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    icon: '🌐',
    tutorials: [
      {
        id: 'html-basics',
        title: 'HTML Fundamentals',
        description: 'Structure and semantic markup',
        difficulty: 'Beginner',
        duration: '1.5 hours',
        topics: ['HTML Structure', 'Semantic Elements', 'Forms', 'Accessibility']
      },
      {
        id: 'css-styling',
        title: 'CSS Styling',
        description: 'Layouts, flexbox, and responsive design',
        difficulty: 'Intermediate',
        duration: '3 hours',
        topics: ['CSS Selectors', 'Flexbox', 'Grid', 'Responsive Design']
      }
    ]
  }
];

export const practiceProblems = [
  {
    id: 'easy-1',
    title: 'Hello World',
    difficulty: 'Easy',
    description: 'Write a function that returns "Hello, World!"',
    language: 'javascript',
    starterCode: 'function helloWorld() {\n  // Your code here\n}',
    solution: 'function helloWorld() {\n  return "Hello, World!";\n}'
  },
  {
    id: 'easy-2',
    title: 'Sum Two Numbers',
    difficulty: 'Easy',
    description: 'Write a function that takes two numbers and returns their sum',
    language: 'javascript',
    starterCode: 'function sum(a, b) {\n  // Your code here\n}',
    solution: 'function sum(a, b) {\n  return a + b;\n}'
  },
  {
    id: 'medium-1',
    title: 'Reverse String',
    difficulty: 'Medium',
    description: 'Write a function that reverses a string',
    language: 'javascript',
    starterCode: 'function reverseString(str) {\n  // Your code here\n}',
    solution: 'function reverseString(str) {\n  return str.split("").reverse().join("");\n}'
  }
];
