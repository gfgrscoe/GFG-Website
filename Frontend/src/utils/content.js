import {
    Code, BookOpen, Database, Trophy, Smartphone, Globe,
    Zap, Layers, FileCode, Terminal,
    Cpu, Layout, Palette, Box , Sparkles, Map, Shield,Lock
} from 'lucide-react';


const resourcesData = {
    DSA: {
        resources: [
            {
                title: 'GeeksforGeeks DSA Course',
                description: 'Complete Data Structures and Algorithms course from basics to advanced. Master arrays, trees, graphs, dynamic programming and more.',
                link: 'https://www.geeksforgeeks.org/data-structures/',
                icon: Code,
                color: 'from-gfg-green to-gfg-ocean',
                tags: ['Arrays', 'Trees', 'Graphs', 'DP'],
                difficulty: 'Beginner',
                isOfficial: true
            },
            {
                title: 'GfG Practice Platform',
                description: 'Practice 1500+ DSA problems categorized by difficulty and topic. Track your progress and prepare for interviews.',
                link: 'https://practice.geeksforgeeks.org/explore?page=1&category[]=Data%20Structures&sortBy=submissions',
                icon: Terminal,
                color: 'from-gfg-navy to-gfg-blue',
                tags: ['Practice', 'Problems', 'Interview'],
                difficulty: 'All Levels',
                isOfficial: true
            },
            {
                title: 'Algorithm Visualizer',
                description: 'Visualize how different algorithms work step-by-step. Perfect for understanding sorting, searching, and graph algorithms.',
                link: 'https://www.geeksforgeeks.org/sorting-algorithms/',
                icon: Layers,
                color: 'from-gfg-accent-orange to-gfg-accent-yellow',
                tags: ['Sorting', 'Searching', 'Visual'],
                difficulty: 'Beginner',
                isOfficial: true
            },
            {
                title: 'Interview Preparation',
                description: 'Company-wise interview experiences, commonly asked questions, and detailed solutions for top tech companies.',
                link: 'https://www.geeksforgeeks.org/company-interview-corner/',
                icon: Zap,
                color: 'from-gfg-accent-purple to-gfg-accent-lime',
                tags: ['FAANG', 'Interview', 'Solutions'],
                difficulty: 'Intermediate',
                isOfficial: true
            },
            {
                title: 'Must Do Coding Questions',
                description: 'Curated list of 450 most important DSA questions for interview preparation. Topic-wise categorization included.',
                link: 'https://www.geeksforgeeks.org/must-coding-questions-company-wise/',
                icon: BookOpen,
                color: 'from-gfg-green to-gfg-ocean',
                tags: ['Curated', 'Interview', 'Practice'],
                difficulty: 'Intermediate',
                isOfficial: true
            },
            {
                title: 'Data Structures Cheat Sheet',
                description: 'Quick reference guide for time and space complexity of all major data structures and operations.',
                link: 'https://www.geeksforgeeks.org/overview-of-data-structures-set-1-linear-data-structures/',
                icon: FileCode,
                color: 'from-gfg-navy to-gfg-blue',
                tags: ['Cheat Sheet', 'Reference', 'Quick'],
                difficulty: 'Beginner',
                isOfficial: true
            }
        ],
        roadmap: {
            steps: [
                {
                    title: 'Learn the Basics',
                    description: 'Start with time complexity, space complexity, and basic mathematical concepts.',
                    duration: '1-2 weeks',
                    topics: ['Time Complexity (Big O)', 'Space Complexity', 'Basic Math', 'Recursion Basics'],
                    resources: [
                        { name: 'GfG - Time Complexity', link: 'https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/' },
                        { name: 'GfG - Recursion', link: 'https://www.geeksforgeeks.org/recursion/' }
                    ]
                },
                {
                    title: 'Master Arrays & Strings',
                    description: 'Learn array manipulation, two-pointer technique, sliding window, and string operations.',
                    duration: '2-3 weeks',
                    topics: ['Array Operations', 'Two Pointer', 'Sliding Window', 'String Manipulation', 'Hashing'],
                    resources: [
                        { name: 'GfG - Array Problems', link: 'https://www.geeksforgeeks.org/array-data-structure/' },
                        { name: 'GfG - String Problems', link: 'https://www.geeksforgeeks.org/string-data-structure/' }
                    ]
                },
                {
                    title: 'Linked Lists & Stacks/Queues',
                    description: 'Understand pointer manipulation and linear data structures.',
                    duration: '2 weeks',
                    topics: ['Singly Linked List', 'Doubly Linked List', 'Stack Implementation', 'Queue Implementation', 'Deque'],
                    resources: [
                        { name: 'GfG - Linked List', link: 'https://www.geeksforgeeks.org/data-structures/linked-list/' },
                        { name: 'GfG - Stack & Queue', link: 'https://www.geeksforgeeks.org/stack-data-structure/' }
                    ]
                },
                {
                    title: 'Trees & Binary Search Trees',
                    description: 'Master tree traversals, BST operations, and tree-based problems.',
                    duration: '3-4 weeks',
                    topics: ['Binary Trees', 'BST Operations', 'Tree Traversals', 'AVL Trees', 'Heap'],
                    resources: [
                        { name: 'GfG - Binary Trees', link: 'https://www.geeksforgeeks.org/binary-tree-data-structure/' },
                        { name: 'GfG - BST', link: 'https://www.geeksforgeeks.org/binary-search-tree-data-structure/' }
                    ]
                },
                {
                    title: 'Graphs & Advanced Structures',
                    description: 'Learn graph representations, traversals, and shortest path algorithms.',
                    duration: '3-4 weeks',
                    topics: ['Graph Representation', 'BFS & DFS', 'Dijkstra', 'Bellman-Ford', 'Union-Find'],
                    resources: [
                        { name: 'GfG - Graph Algorithms', link: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' },
                        { name: 'GfG - Graph Problems', link: 'https://practice.geeksforgeeks.org/explore?page=1&category[]=Graph' }
                    ]
                },
                {
                    title: 'Dynamic Programming',
                    description: 'Master the art of optimization through memorization and tabulation.',
                    duration: '4-6 weeks',
                    topics: ['0/1 Knapsack', 'LCS', 'LIS', 'Matrix Chain', 'DP on Trees', 'DP on Graphs'],
                    resources: [
                        { name: 'GfG - DP Tutorial', link: 'https://www.geeksforgeeks.org/dynamic-programming/' },
                        { name: 'GfG - DP Practice', link: 'https://practice.geeksforgeeks.org/explore?page=1&category[]=Dynamic%20Programming' }
                    ]
                }
            ]
        }
    },
    WebDev: {
        resources: [
            {
                title: 'HTML & CSS Fundamentals',
                description: 'Complete guide to HTML5 and CSS3 from basics to advanced. Learn semantic HTML, flexbox, grid, and responsive design.',
                link: 'https://www.geeksforgeeks.org/html/',
                icon: Layout,
                color: 'from-gfg-green to-gfg-ocean',
                tags: ['HTML', 'CSS', 'Responsive'],
                difficulty: 'Beginner',
                isOfficial: true
            },
            {
                title: 'JavaScript Complete Course',
                description: 'Master JavaScript ES6+, async programming, closures, and modern JS features. Perfect for beginners and intermediates.',
                link: 'https://www.geeksforgeeks.org/javascript/',
                icon: FileCode,
                color: 'from-gfg-navy to-gfg-blue',
                tags: ['JavaScript', 'ES6', 'Async'],
                difficulty: 'Intermediate',
                isOfficial: true
            },
            {
                title: 'React.js Complete Guide',
                description: 'Learn React from scratch - components, hooks, state management, routing, and building real-world applications.',
                link: 'https://www.geeksforgeeks.org/react/',
                icon: Code,
                color: 'from-gfg-accent-orange to-gfg-accent-yellow',
                tags: ['React', 'Hooks', 'Components'],
                difficulty: 'Intermediate',
                isOfficial: true
            },
            {
                title: 'Node.js & Express',
                description: 'Backend development with Node.js and Express. Learn REST APIs, authentication, database integration, and deployment.',
                link: 'https://www.geeksforgeeks.org/nodejs/',
                icon: Database,
                color: 'from-gfg-accent-purple to-gfg-accent-lime',
                tags: ['Node.js', 'Express', 'Backend'],
                difficulty: 'Intermediate',
                isOfficial: true
            },
            {
                title: 'Full-Stack Web Development',
                description: 'Complete MERN stack tutorial. Build full-stack applications from scratch with MongoDB, Express, React, and Node.',
                link: 'https://www.geeksforgeeks.org/mern-stack/',
                icon: Layers,
                color: 'from-gfg-green to-gfg-ocean',
                tags: ['MERN', 'Full-Stack', 'MongoDB'],
                difficulty: 'Advanced',
                isOfficial: true
            },
            {
                title: 'Web Development Projects',
                description: 'Collection of project ideas with source code. Build portfolio-worthy projects to showcase your skills.',
                link: 'https://www.geeksforgeeks.org/web-development-projects/',
                icon: Box,
                color: 'from-gfg-navy to-gfg-blue',
                tags: ['Projects', 'Portfolio', 'Ideas'],
                difficulty: 'All Levels',
                isOfficial: true
            }
        ],
        roadmap: {
            steps: [
                {
                    title: 'HTML & CSS Basics',
                    description: 'Start with the building blocks of web development.',
                    duration: '2-3 weeks',
                    topics: ['HTML5 Semantics', 'CSS Selectors', 'Flexbox', 'CSS Grid', 'Responsive Design'],
                    resources: [
                        { name: 'GfG - HTML Tutorial', link: 'https://www.geeksforgeeks.org/html-tutorial/' },
                        { name: 'GfG - CSS Tutorial', link: 'https://www.geeksforgeeks.org/css-tutorial/' }
                    ]
                },
                {
                    title: 'JavaScript Fundamentals',
                    description: 'Master the language of the web.',
                    duration: '3-4 weeks',
                    topics: ['Variables & Data Types', 'Functions', 'DOM Manipulation', 'ES6 Features', 'Async JavaScript'],
                    resources: [
                        { name: 'GfG - JavaScript Basics', link: 'https://www.geeksforgeeks.org/javascript/' },
                        { name: 'GfG - JS Practice', link: 'https://www.geeksforgeeks.org/javascript-exercises/' }
                    ]
                },
                {
                    title: 'Frontend Framework (React)',
                    description: 'Learn modern frontend development.',
                    duration: '4-6 weeks',
                    topics: ['React Components', 'Hooks', 'State Management', 'React Router', 'API Integration'],
                    resources: [
                        { name: 'GfG - React Tutorial', link: 'https://www.geeksforgeeks.org/react-tutorial/' },
                        { name: 'GfG - React Projects', link: 'https://www.geeksforgeeks.org/reactjs-projects/' }
                    ]
                },
                {
                    title: 'Backend Development (Node.js)',
                    description: 'Build server-side applications.',
                    duration: '4-5 weeks',
                    topics: ['Node.js Basics', 'Express Framework', 'REST APIs', 'Authentication', 'File Operations'],
                    resources: [
                        { name: 'GfG - Node.js Tutorial', link: 'https://www.geeksforgeeks.org/nodejs-tutorial/' },
                        { name: 'GfG - Express.js', link: 'https://www.geeksforgeeks.org/express-js/' }
                    ]
                },
                {
                    title: 'Database Integration',
                    description: 'Learn to work with databases.',
                    duration: '2-3 weeks',
                    topics: ['MongoDB', 'Mongoose', 'SQL Basics', 'Database Design', 'CRUD Operations'],
                    resources: [
                        { name: 'GfG - MongoDB Tutorial', link: 'https://www.geeksforgeeks.org/mongodb-tutorial/' },
                        { name: 'GfG - SQL Tutorial', link: 'https://www.geeksforgeeks.org/sql-tutorial/' }
                    ]
                },
                {
                    title: 'Full-Stack Projects',
                    description: 'Build complete applications.',
                    duration: 'Ongoing',
                    topics: ['MERN Stack', 'Deployment', 'Version Control', 'Best Practices', 'Testing'],
                    resources: [
                        { name: 'GfG - Full Stack Projects', link: 'https://www.geeksforgeeks.org/web-development-projects/' },
                        { name: 'GfG - Git Tutorial', link: 'https://www.geeksforgeeks.org/git-tutorial/' }
                    ]
                }
            ]
        }
    },
    CP: {
        resources: [
            {
                title: 'Competitive Programming Guide',
                description: 'Complete roadmap to master competitive programming. Learn techniques, patterns, and strategies used by top coders.',
                link: 'https://www.geeksforgeeks.org/competitive-programming-a-complete-guide/',
                icon: Trophy,
                color: 'from-gfg-green to-gfg-ocean',
                tags: ['Strategy', 'Roadmap', 'Tips'],
                difficulty: 'All Levels',
                isOfficial: true
            },
            {
                title: 'GfG Practice Arena',
                description: 'Practice problems sorted by difficulty and topic. Participate in weekly contests and climb the leaderboard.',
                link: 'https://practice.geeksforgeeks.org/',
                icon: Code,
                color: 'from-gfg-navy to-gfg-blue',
                tags: ['Practice', 'Contest', 'Problems'],
                difficulty: 'All Levels',
                isOfficial: true
            },
            {
                title: 'Math for CP',
                description: 'Number theory, combinatorics, probability, and other mathematical concepts essential for competitive programming.',
                link: 'https://www.geeksforgeeks.org/mathematical-algorithms/',
                icon: Cpu,
                color: 'from-gfg-accent-orange to-gfg-accent-yellow',
                tags: ['Math', 'Number Theory', 'Combinatorics'],
                difficulty: 'Intermediate',
                isOfficial: true
            },
            {
                title: 'Graph Algorithms for CP',
                description: 'Advanced graph algorithms including shortest paths, MST, network flow, and graph theory problems.',
                link: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/',
                icon: Layers,
                color: 'from-gfg-accent-purple to-gfg-accent-lime',
                tags: ['Graphs', 'Algorithms', 'Advanced'],
                difficulty: 'Advanced',
                isOfficial: true
            },
            {
                title: 'Dynamic Programming Patterns',
                description: 'Learn common DP patterns and when to apply them. Includes practice problems for each pattern.',
                link: 'https://www.geeksforgeeks.org/dynamic-programming/',
                icon: Zap,
                color: 'from-gfg-green to-gfg-ocean',
                tags: ['DP', 'Patterns', 'Optimization'],
                difficulty: 'Advanced',
                isOfficial: true
            },
            {
                title: 'Company Coding Rounds',
                description: 'Previous year coding questions asked in tech companies. Practice company-specific patterns.',
                link: 'https://www.geeksforgeeks.org/company-preparation/',
                icon: BookOpen,
                color: 'from-gfg-navy to-gfg-blue',
                tags: ['Company', 'Interview', 'Practice'],
                difficulty: 'Intermediate',
                isOfficial: true
            }
        ],
        roadmap: {
            steps: [
                {
                    title: 'Build Strong Foundations',
                    description: 'Master basic DSA and learn to code efficiently.',
                    duration: '4-6 weeks',
                    topics: ['Arrays & Strings', 'Basic Math', 'Bit Manipulation', 'Recursion', 'Time Complexity Analysis'],
                    resources: [
                        { name: 'GfG - CP Guide', link: 'https://www.geeksforgeeks.org/competitive-programming-a-complete-guide/' },
                        { name: 'Practice Easy Problems', link: 'https://practice.geeksforgeeks.org/explore?page=1&difficulty[]=0' }
                    ]
                },
                {
                    title: 'Learn Standard Algorithms',
                    description: 'Master commonly used algorithms in contests.',
                    duration: '6-8 weeks',
                    topics: ['Binary Search', 'Sorting Algorithms', 'Greedy Algorithms', 'Two Pointers', 'Sliding Window'],
                    resources: [
                        { name: 'GfG - Algorithms', link: 'https://www.geeksforgeeks.org/fundamentals-of-algorithms/' },
                        { name: 'Practice Medium Problems', link: 'https://practice.geeksforgeeks.org/explore?page=1&difficulty[]=1' }
                    ]
                },
                {
                    title: 'Master Graph Algorithms',
                    description: 'Essential for solving complex CP problems.',
                    duration: '4-6 weeks',
                    topics: ['DFS & BFS', 'Shortest Paths', 'MST', 'Topological Sort', 'Strongly Connected Components'],
                    resources: [
                        { name: 'GfG - Graph Algorithms', link: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' },
                        { name: 'Graph Practice', link: 'https://practice.geeksforgeeks.org/explore?page=1&category[]=Graph' }
                    ]
                },
                {
                    title: 'Dynamic Programming Mastery',
                    description: 'Learn to optimize recursive solutions.',
                    duration: '6-8 weeks',
                    topics: ['Classical DP', 'DP on Trees', 'DP on Graphs', 'Digit DP', 'Bitmask DP'],
                    resources: [
                        { name: 'GfG - DP Complete', link: 'https://www.geeksforgeeks.org/dynamic-programming/' },
                        { name: 'DP Practice', link: 'https://practice.geeksforgeeks.org/explore?page=1&category[]=Dynamic%20Programming' }
                    ]
                },
                {
                    title: 'Advanced Topics',
                    description: 'Level up with advanced concepts.',
                    duration: '8-12 weeks',
                    topics: ['Segment Trees', 'Fenwick Trees', 'Number Theory', 'Game Theory', 'String Algorithms'],
                    resources: [
                        { name: 'GfG - Advanced DS', link: 'https://www.geeksforgeeks.org/advanced-data-structures/' },
                        { name: 'Practice Hard Problems', link: 'https://practice.geeksforgeeks.org/explore?page=1&difficulty[]=2' }
                    ]
                },
                {
                    title: 'Contest Practice',
                    description: 'Regular participation in contests.',
                    duration: 'Ongoing',
                    topics: ['Weekly Contests', 'Virtual Contests', 'Upsolving', 'Speed Optimization', 'Debugging Skills'],
                    resources: [
                        { name: 'GfG Practice Contests', link: 'https://practice.geeksforgeeks.org/contests/' },
                        { name: 'Company Contests', link: 'https://www.geeksforgeeks.org/company-preparation/' }
                    ]
                }
            ]
        }
    },
    AppDev: {
        resources: [
            {
                title: 'Android Development Guide',
                description: 'Complete guide to Android app development using Java and Kotlin. Learn activities, fragments, and material design.',
                link: 'https://www.geeksforgeeks.org/android-tutorial/',
                icon: Smartphone,
                color: 'from-gfg-green to-gfg-ocean',
                tags: ['Android', 'Kotlin', 'Java'],
                difficulty: 'Beginner',
                isOfficial: true
            },
            {
                title: 'React Native Complete Course',
                description: 'Build cross-platform mobile apps with React Native. One codebase for both iOS and Android.',
                link: 'https://www.geeksforgeeks.org/react-native/',
                icon: Code,
                color: 'from-gfg-navy to-gfg-blue',
                tags: ['React Native', 'Cross-Platform', 'JavaScript'],
                difficulty: 'Intermediate',
                isOfficial: true
            },
            {
                title: 'Flutter Development',
                description: 'Build beautiful, natively compiled applications for mobile from a single codebase using Flutter and Dart.',
                link: 'https://www.geeksforgeeks.org/flutter-tutorial/',
                icon: Palette,
                color: 'from-gfg-accent-orange to-gfg-accent-yellow',
                tags: ['Flutter', 'Dart', 'UI'],
                difficulty: 'Intermediate',
                isOfficial: true
            },
            {
                title: 'Mobile UI/UX Design',
                description: 'Learn mobile app design principles, material design guidelines, and creating intuitive user interfaces.',
                link: 'https://www.geeksforgeeks.org/android-ui-layouts/',
                icon: Layout,
                color: 'from-gfg-accent-purple to-gfg-accent-lime',
                tags: ['UI/UX', 'Design', 'Material'],
                difficulty: 'Beginner',
                isOfficial: true
            },
            {
                title: 'Firebase & Backend Services',
                description: 'Integrate Firebase for authentication, real-time database, cloud storage, and push notifications.',
                link: 'https://www.geeksforgeeks.org/firebase-introduction/',
                icon: Database,
                color: 'from-gfg-green to-gfg-ocean',
                tags: ['Firebase', 'Backend', 'Cloud'],
                difficulty: 'Intermediate',
                isOfficial: true
            },
            {
                title: 'App Development Projects',
                description: 'Collection of mobile app project ideas with source code. Build your portfolio with real apps.',
                link: 'https://www.geeksforgeeks.org/android-projects-from-basic-to-advanced-level/',
                icon: Box,
                color: 'from-gfg-navy to-gfg-blue',
                tags: ['Projects', 'Ideas', 'Portfolio'],
                difficulty: 'All Levels',
                isOfficial: true
            }
        ],
        roadmap: {
            steps: [
                {
                    title: 'Choose Your Platform',
                    description: 'Decide between native (Android/iOS) or cross-platform (React Native/Flutter).',
                    duration: '1 week',
                    topics: ['Platform Comparison', 'Native vs Cross-Platform', 'Language Selection', 'IDE Setup'],
                    resources: [
                        { name: 'GfG - Android Tutorial', link: 'https://www.geeksforgeeks.org/android-tutorial/' },
                        { name: 'GfG - Flutter vs React Native', link: 'https://www.geeksforgeeks.org/flutter-vs-react-native/' }
                    ]
                },
                {
                    title: 'Learn the Basics',
                    description: 'Master the fundamentals of your chosen platform.',
                    duration: '3-4 weeks',
                    topics: ['UI Components', 'Layouts', 'Navigation', 'State Management', 'Lifecycle'],
                    resources: [
                        { name: 'GfG - Android Basics', link: 'https://www.geeksforgeeks.org/android-tutorial/' },
                        { name: 'GfG - React Native Basics', link: 'https://www.geeksforgeeks.org/react-native/' }
                    ]
                },
                {
                    title: 'UI/UX Design',
                    description: 'Create beautiful and intuitive user interfaces.',
                    duration: '2-3 weeks',
                    topics: ['Material Design', 'Custom Components', 'Animations', 'Responsive Design', 'Theming'],
                    resources: [
                        { name: 'GfG - Android UI', link: 'https://www.geeksforgeeks.org/android-ui-layouts/' },
                        { name: 'Material Design Guide', link: 'https://www.geeksforgeeks.org/introduction-to-material-design-in-android/' }
                    ]
                },
                {
                    title: 'Networking & APIs',
                    description: 'Connect your app to backend services.',
                    duration: '2-3 weeks',
                    topics: ['REST APIs', 'HTTP Requests', 'JSON Parsing', 'Error Handling', 'Async Operations'],
                    resources: [
                        { name: 'GfG - Retrofit Tutorial', link: 'https://www.geeksforgeeks.org/retrofit-with-kotlin-coroutine-in-android/' },
                        { name: 'API Integration', link: 'https://www.geeksforgeeks.org/how-to-post-data-to-api-using-retrofit-in-android/' }
                    ]
                },
                {
                    title: 'Database & Storage',
                    description: 'Implement local and cloud storage.',
                    duration: '2 weeks',
                    topics: ['SQLite', 'Room Database', 'SharedPreferences', 'Firebase', 'Cloud Storage'],
                    resources: [
                        { name: 'GfG - Room Database', link: 'https://www.geeksforgeeks.org/android-room-with-a-view/' },
                        { name: 'Firebase Integration', link: 'https://www.geeksforgeeks.org/firebase-introduction/' }
                    ]
                },
                {
                    title: 'Publish & Monetize',
                    description: 'Deploy your app to app stores.',
                    duration: '1-2 weeks',
                    topics: ['App Signing', 'Play Store Publishing', 'App Store Guidelines', 'Monetization', 'Analytics'],
                    resources: [
                        { name: 'GfG - Publishing Guide', link: 'https://www.geeksforgeeks.org/how-to-publish-an-android-app-on-google-play-store/' },
                        { name: 'App Projects', link: 'https://www.geeksforgeeks.org/android-projects-from-basic-to-advanced-level/' }
                    ]
                }
            ]
        }
    },
    ML: {
        resources: [
            {
                title: 'Machine Learning Tutorial – GFG',
                description: 'Complete ML introduction covering supervised, unsupervised, and reinforcement learning with examples and mathematical intuition.',
                link: 'https://www.geeksforgeeks.org/machine-learning/',
                icon: Cpu,
                color: 'from-gfg-green to-gfg-ocean',
                tags: ['Supervised', 'Unsupervised', 'Regression'],
                difficulty: 'Beginner',
                isOfficial: true
            },
            {
                title: 'Python for Machine Learning',
                description: 'Learn essential Python libraries used in ML including NumPy, Pandas, Matplotlib, and Seaborn with hands-on examples.',
                link: 'https://www.geeksforgeeks.org/python-programming-language/',
                icon: Code,
                color: 'from-gfg-navy to-gfg-blue',
                tags: ['Python', 'NumPy', 'Pandas'],
                difficulty: 'Beginner',
                isOfficial: true
            },
            {
                title: 'Data Preprocessing & Feature Engineering',
                description: 'Master data cleaning, normalization, encoding, missing value treatment, and feature transformation techniques.',
                link: 'https://www.geeksforgeeks.org/data-preprocessing-machine-learning/',
                icon: Database,
                color: 'from-gfg-accent-orange to-gfg-accent-yellow',
                tags: ['Preprocessing', 'EDA', 'Feature Engineering'],
                difficulty: 'Intermediate',
                isOfficial: true
            },
            {
                title: 'Supervised Learning Algorithms',
                description: 'Understand and implement key ML algorithms including Linear Regression, Logistic Regression, SVM, Decision Trees, and Random Forest.',
                link: 'https://www.geeksforgeeks.org/supervised-learning/',
                icon: Layers,
                color: 'from-gfg-accent-purple to-gfg-accent-lime',
                tags: ['Regression', 'Classification', 'SVM'],
                difficulty: 'Intermediate',
                isOfficial: true
            },
            {
                title: 'Neural Networks & Deep Learning',
                description: 'Introduction to perceptrons, activation functions, backpropagation, ANN architectures, and implementation basics.',
                link: 'https://www.geeksforgeeks.org/introduction-artificial-neural-networks/',
                icon: Zap,
                color: 'from-gfg-green to-gfg-ocean',
                tags: ['Deep Learning', 'ANN', 'Activation'],
                difficulty: 'Advanced',
                isOfficial: true
            },
            {
                title: 'ML Projects & Case Studies',
                description: 'Real-world ML projects with datasets and code including sentiment analysis, recommendation systems, and prediction models.',
                link: 'https://www.geeksforgeeks.org/machine-learning-projects/',
                icon: BookOpen,
                color: 'from-gfg-navy to-gfg-blue',
                tags: ['Projects', 'Case Studies', 'Portfolio'],
                difficulty: 'All Levels',
                isOfficial: true
            }
        ],

        roadmap: {
            steps: [
                {
                    title: 'Python & Math Foundations',
                    description: 'Build strong fundamentals in Python, linear algebra, statistics, and probability.',
                    duration: '2–3 weeks',
                    topics: ['Python Basics', 'NumPy', 'Statistics', 'Probability', 'Linear Algebra'],
                    resources: [
                        { name: 'Python Basics – GFG', link: 'https://www.geeksforgeeks.org/python-programming-language/' },
                        { name: 'Math for ML – GFG', link: 'https://www.geeksforgeeks.org/mathematics-for-machine-learning/' }
                    ]
                },
                {
                    title: 'Data Preprocessing & Visualization',
                    description: 'Learn EDA, data cleaning, visualization techniques, and feature engineering.',
                    duration: '3 weeks',
                    topics: ['EDA', 'Encoding', 'Scaling', 'EDA Plots', 'Feature Selection'],
                    resources: [
                        { name: 'EDA – GFG', link: 'https://www.geeksforgeeks.org/exploratory-data-analysis-in-python/' },
                        { name: 'Data Preprocessing – GFG', link: 'https://www.geeksforgeeks.org/data-preprocessing-machine-learning/' }
                    ]
                },
                {
                    title: 'Supervised & Unsupervised Learning',
                    description: 'Master ML algorithms for regression, classification, clustering, and dimensionality reduction.',
                    duration: '4–6 weeks',
                    topics: ['Regression', 'Classification', 'Clustering', 'Decision Trees', 'SVM', 'K-Means'],
                    resources: [
                        { name: 'Supervised Learning – GFG', link: 'https://www.geeksforgeeks.org/supervised-learning/' },
                        { name: 'Unsupervised Learning – GFG', link: 'https://www.geeksforgeeks.org/unsupervised-learning/' }
                    ]
                },
                {
                    title: 'Model Evaluation & Optimization',
                    description: 'Learn metrics, validation, overfitting control, and optimization techniques.',
                    duration: '3–4 weeks',
                    topics: ['Cross Validation', 'Bias-Variance', 'Regularization', 'Hyperparameter Tuning'],
                    resources: [
                        { name: 'Model Evaluation – GFG', link: 'https://www.geeksforgeeks.org/model-evaluation-in-machine-learning/' },
                        { name: 'Hyperparameter Tuning – GFG', link: 'https://www.geeksforgeeks.org/hyperparameter-tuning/' }
                    ]
                },
                {
                    title: 'Deep Learning Foundations',
                    description: 'Understand neural networks, backpropagation, and introduction to deep learning frameworks.',
                    duration: '4–6 weeks',
                    topics: ['ANN', 'Activation Functions', 'Loss Functions', 'Backpropagation', 'Keras Basics'],
                    resources: [
                        { name: 'Neural Networks Basics', link: 'https://www.geeksforgeeks.org/introduction-artificial-neural-networks/' },
                        { name: 'Deep Learning Tutorial', link: 'https://www.geeksforgeeks.org/deep-learning/' }
                    ]
                },
                {
                    title: 'Projects & Deployment',
                    description: 'Work on real ML projects and learn deployment.',
                    duration: 'Ongoing',
                    topics: ['Flask Deployment', 'Streamlit Apps', 'API Creation', 'ML Pipelines'],
                    resources: [
                        { name: 'ML Projects – GFG', link: 'https://www.geeksforgeeks.org/machine-learning-projects/' },
                        { name: 'Deployment Guide – GFG', link: 'https://www.geeksforgeeks.org/deploying-machine-learning-models/' }
                    ]
                }
            ]
        }
    },
    CyberSecurity: {
    resources: [
        {
            title: 'Cyber Security Tutorial – GFG',
            description: 'Complete introduction to cyber security concepts including threats, vulnerabilities, attacks, cryptography, and defense mechanisms.',
            link: 'https://www.geeksforgeeks.org/cyber-security-tutorial/',
            icon: Shield,
            color: 'from-gfg-green to-gfg-ocean',
            tags: ['Security', 'Basics', 'Threats'],
            difficulty: 'Beginner',
            isOfficial: true
        },
        {
            title: 'Cryptography Basics',
            description: 'Learn encryption, hashing, digital signatures, public-key infrastructure, and secure communication techniques.',
            link: 'https://www.geeksforgeeks.org/cryptography-and-its-types/',
            icon: Lock,
            color: 'from-gfg-navy to-gfg-blue',
            tags: ['Encryption', 'Hashing', 'PKI'],
            difficulty: 'Intermediate',
            isOfficial: true
        },
        {
            title: 'Network Security Fundamentals',
            description: 'Understand firewalls, IDS/IPS, secure protocols, port scanning, and network-layer attacks.',
            link: 'https://www.geeksforgeeks.org/network-security/',
            icon: Globe,
            color: 'from-gfg-accent-orange to-gfg-accent-yellow',
            tags: ['Network', 'Protocols', 'Attacks'],
            difficulty: 'Intermediate',
            isOfficial: true
        },
        {
            title: 'Ethical Hacking Basics',
            description: 'Learn reconnaissance, scanning, enumeration, exploitation, and vulnerability analysis techniques used by ethical hackers.',
            link: 'https://www.geeksforgeeks.org/ethical-hacking-tutorial/',
            icon: Terminal,
            color: 'from-gfg-accent-purple to-gfg-accent-lime',
            tags: ['Ethical Hacking', 'Recon', 'Tools'],
            difficulty: 'Intermediate',
            isOfficial: true
        },
        {
            title: 'Web Application Security',
            description: 'Master OWASP Top 10 vulnerabilities including SQLi, XSS, CSRF, authentication flaws, and security misconfigurations.',
            link: 'https://www.geeksforgeeks.org/web-application-security/',
            icon: Code,
            color: 'from-gfg-green to-gfg-ocean',
            tags: ['OWASP', 'Web Security', 'Pentesting'],
            difficulty: 'Advanced',
            isOfficial: true
        },
        {
            title: 'CyberSecurity Projects',
            description: 'Real-world projects like keyloggers, port scanners, malware analysis, password strength checkers & secure login systems.',
            link: 'https://www.geeksforgeeks.org/cyber-security-projects/',
            icon: BookOpen,
            color: 'from-gfg-navy to-gfg-blue',
            tags: ['Projects', 'Pentesting', 'Tools'],
            difficulty: 'All Levels',
            isOfficial: true
        }
    ],

    roadmap: {
        steps: [
            {
                title: 'Cyber Security Fundamentals',
                description: 'Understand core security principles, threat types, attack surfaces, and CIA triad.',
                duration: '2–3 weeks',
                topics: ['CIA Triad', 'Threats', 'Malware Types', 'Security Models'],
                resources: [
                    { name: 'GfG – Cyber Security Basics', link: 'https://www.geeksforgeeks.org/cyber-security-tutorial/' },
                    { name: 'GfG – Malware Types', link: 'https://www.geeksforgeeks.org/types-of-malware/' }
                ]
            },
            {
                title: 'Networking & System Security',
                description: 'Build strong networking fundamentals required for cybersecurity roles.',
                duration: '3–4 weeks',
                topics: ['TCP/IP', 'Ports & Protocols', 'Firewalls', 'IDS/IPS', 'Linux Basics'],
                resources: [
                    { name: 'Network Security – GFG', link: 'https://www.geeksforgeeks.org/network-security/' },
                    { name: 'Linux Commands – GFG', link: 'https://www.geeksforgeeks.org/category/linux-commands/' }
                ]
            },
            {
                title: 'Cryptography',
                description: 'Learn how modern security systems protect data.',
                duration: '3 weeks',
                topics: ['Encryption', 'Hashing', 'Digital Signatures', 'Certificates', 'OAuth'],
                resources: [
                    { name: 'Cryptography – GFG', link: 'https://www.geeksforgeeks.org/cryptography-and-its-types/' },
                    { name: 'Hashing Algorithms', link: 'https://www.geeksforgeeks.org/hash-functions-and-list/types-hashing/' }
                ]
            },
            {
                title: 'Ethical Hacking & Pentesting',
                description: 'Learn penetration testing workflows, tools, and vulnerability discovery.',
                duration: '4–6 weeks',
                topics: ['Reconnaissance', 'Scanning', 'Vulnerability Analysis', 'Metasploit', 'Burp Suite'],
                resources: [
                    { name: 'Ethical Hacking Tutorial – GFG', link: 'https://www.geeksforgeeks.org/ethical-hacking-tutorial/' },
                    { name: 'Web App Security — GFG', link: 'https://www.geeksforgeeks.org/web-application-security/' }
                ]
            },
            {
                title: 'Advanced CyberSecurity',
                description: 'Move to advanced topics like incident response, SIEM, malware analysis, and forensics.',
                duration: '6–8 weeks',
                topics: ['Forensics', 'SIEM', 'Incident Response', 'Reverse Engineering', 'Malware Analysis'],
                resources: [
                    { name: 'Incident Response – GFG', link: 'https://www.geeksforgeeks.org/incident-response/' },
                    { name: 'Cyber Forensics – GFG', link: 'https://www.geeksforgeeks.org/cyber-forensics/' }
                ]
            },
            {
                title: 'CyberSecurity Projects & Certifications',
                description: 'Work on real systems, build tools, and prepare for certifications.',
                duration: 'Ongoing',
                topics: ['Pentesting Projects', 'CTFs', 'Bug Bounty', 'CEH', 'Security+'],
                resources: [
                    { name: 'Cyber Security Projects – GFG', link: 'https://www.geeksforgeeks.org/cyber-security-projects/' },
                    { name: 'CTF Practice', link: 'https://www.geeksforgeeks.org/capture-the-flag-ctf-challenges/' }
                ]
            }
        ]
    }
}

};

export { resourcesData }