// Comprehensive data for all AI tools
export const toolsData = {
  chatgpt: {
    id: "chatgpt",
    name: "ChatGPT Studio",
    shortName: "ChatGPT",
    tagline: "Draft conversations, explore ideas, and prototype assistants in natural language.",
    category: "CONVERSATION",
    role: "Conversation & Ideation",
    iconBg: "#7c3aed",
    pattern: "waves",
    color: "#10b981",
    image: "/chatgpt/cover.png",
    link: "https://chat.openai.com",

    overview: "ChatGPT is OpenAI's conversational AI that transforms how you interact with artificial intelligence. Built on advanced language models, it understands context, maintains conversations, and helps you draft, brainstorm, and explore ideas through natural dialogue.",

    keyFeatures: [
      {
        title: "Natural Conversations",
        description: "Engage in fluid, context-aware dialogues that feel remarkably human. ChatGPT remembers what you said earlier in the conversation and builds upon it."
      },
      {
        title: "Content Creation",
        description: "Draft emails, write articles, create stories, or generate marketing copy. ChatGPT adapts its writing style to match your needs and audience."
      },
      {
        title: "Code Assistance",
        description: "Get help with programming tasks, debug code, learn new languages, or generate code snippets in multiple programming languages."
      },
      {
        title: "Learning & Education",
        description: "Explain complex topics in simple terms, get step-by-step tutorials, or explore new subjects through interactive Q&A sessions."
      },
      {
        title: "Custom GPTs",
        description: "Create specialized versions of ChatGPT tailored for specific tasks, workflows, or industries with custom instructions and knowledge."
      }
    ],

    useCases: [
      {
        title: "Content Writers & Marketers",
        description: "Generate blog posts, social media content, ad copy, and marketing materials. Brainstorm campaign ideas and refine messaging.",
        example: "Use ChatGPT to draft multiple variations of product descriptions or create engaging social media posts for your brand."
      },
      {
        title: "Students & Educators",
        description: "Get homework help, understand difficult concepts, create study guides, or generate lesson plans and educational materials.",
        example: "Ask ChatGPT to explain quantum physics in simple terms or create practice problems for algebra."
      },
      {
        title: "Developers & Engineers",
        description: "Debug code, generate boilerplate, understand error messages, or learn new programming languages and frameworks.",
        example: "Paste an error message and get explanations with suggested fixes, or ask for code examples in React or Python."
      },
      {
        title: "Business Professionals",
        description: "Draft emails, create presentations, analyze data, generate reports, or brainstorm business strategies.",
        example: "Generate a professional email template for client communication or create an outline for your next presentation."
      },
      {
        title: "Creative Writers",
        description: "Overcome writer's block, develop characters, plot stories, or explore different narrative styles and genres.",
        example: "Generate story ideas, develop character backstories, or get feedback on your writing style."
      }
    ],

    howToUse: [
      {
        step: 1,
        title: "Start a Conversation",
        description: "Simply type your question or request in the chat box. Be specific about what you need and provide context when helpful."
      },
      {
        step: 2,
        title: "Refine Your Request",
        description: "If the first response isn't quite right, ask ChatGPT to revise it. You can request different tones, lengths, or approaches."
      },
      {
        step: 3,
        title: "Build on Responses",
        description: "Use previous responses as a foundation. Ask follow-up questions, request elaboration, or explore related topics."
      },
      {
        step: 4,
        title: "Use System Prompts",
        description: "Set the context by telling ChatGPT to act as a specific role (e.g., 'Act as a Python expert' or 'Act as a creative writing coach')."
      },
      {
        step: 5,
        title: "Iterate and Experiment",
        description: "Don't settle for the first answer. Try rephrasing your question or asking for alternative perspectives to get the best results."
      }
    ],

    bestPractices: [
      "Be specific and clear in your prompts - the more context you provide, the better the results",
      "Break complex tasks into smaller steps and tackle them one at a time",
      "Use ChatGPT for brainstorming and initial drafts, then refine with your own expertise",
      "Fact-check important information, especially for critical decisions or academic work",
      "Experiment with different phrasings if you're not getting the results you want",
      "Save useful conversations and prompts for future reference"
    ],

    pricing: {
      free: "Access to GPT-3.5 model with standard response times",
      plus: "$20/month for GPT-4 access, faster responses, and priority access during peak times",
      team: "Starting at $25/user/month for collaborative workspaces and admin controls",
      enterprise: "Custom pricing for advanced security, unlimited GPT-4, and dedicated support"
    },

    pros: [
      "Intuitive conversational interface",
      "Wide range of capabilities from coding to creative writing",
      "Regular updates and improvements",
      "Large context window for complex conversations",
      "Custom GPTs for specialized tasks"
    ],

    cons: [
      "Can occasionally produce inaccurate information",
      "Limited knowledge of events after training cutoff",
      "Free tier has usage limitations during peak times",
      "May require multiple iterations for complex tasks"
    ]
  },

  claude: {
    id: "claude",
    name: "Claude Workspace",
    shortName: "Claude",
    tagline: "Deep reasoning for strategy docs, product specs, and complex research work.",
    category: "WRITING",
    role: "Thinking & Writing",
    iconBg: "#0284c7",
    pattern: "dots",
    color: "#fb923c",
    image: "/claude-ai/cover.png",
    link: "https://claude.ai",

    overview: "Claude is Anthropic's AI assistant designed for thoughtful, nuanced work. With industry-leading context windows and a focus on safety and accuracy, Claude excels at deep analysis, long-form writing, and complex reasoning tasks that require careful consideration.",

    keyFeatures: [
      {
        title: "Extended Context Window",
        description: "Process entire books, codebases, or lengthy documents in a single conversation with a 200K token context window."
      },
      {
        title: "Superior Reasoning",
        description: "Claude demonstrates advanced logical thinking and nuanced understanding, making it ideal for complex analytical tasks."
      },
      {
        title: "Long-Form Content",
        description: "Excel at creating detailed reports, comprehensive guides, research papers, and in-depth technical documentation."
      },
      {
        title: "Code Understanding",
        description: "Deeply analyze code architecture, review pull requests, and provide detailed technical explanations with context awareness."
      },
      {
        title: "Constitutional AI",
        description: "Built with safety principles that make Claude more helpful, honest, and harmless in its responses."
      }
    ],

    useCases: [
      {
        title: "Product Managers",
        description: "Create detailed product requirement documents, user stories, and strategic roadmaps with comprehensive analysis.",
        example: "Upload competitor research and ask Claude to synthesize insights and recommend feature priorities."
      },
      {
        title: "Researchers & Analysts",
        description: "Process large datasets, analyze research papers, synthesize information from multiple sources, and generate detailed reports.",
        example: "Feed Claude multiple research papers and ask it to identify common themes, contradictions, and research gaps."
      },
      {
        title: "Technical Writers",
        description: "Create comprehensive documentation, API references, user guides, and technical tutorials with accuracy and clarity.",
        example: "Provide your codebase and ask Claude to generate detailed API documentation with usage examples."
      },
      {
        title: "Legal & Compliance",
        description: "Review contracts, analyze policy documents, and ensure compliance with regulations through careful document analysis.",
        example: "Upload legal documents and ask Claude to summarize key terms, identify potential issues, or compare versions."
      },
      {
        title: "Business Strategy",
        description: "Develop strategic plans, analyze market opportunities, and create detailed business proposals with deep insight.",
        example: "Share market data and ask Claude to perform SWOT analysis or develop go-to-market strategies."
      }
    ],

    howToUse: [
      {
        step: 1,
        title: "Upload Documents",
        description: "Start by uploading relevant files - PDFs, code files, or text documents. Claude can process up to 200K tokens in context."
      },
      {
        step: 2,
        title: "Ask Analytical Questions",
        description: "Request analysis, summaries, or insights. Claude excels at synthesizing information from multiple sources."
      },
      {
        step: 3,
        title: "Request Detailed Outputs",
        description: "Ask for comprehensive reports, detailed explanations, or in-depth analysis. Claude handles long-form content exceptionally well."
      },
      {
        step: 4,
        title: "Iterate with Feedback",
        description: "Refine outputs by providing feedback. Claude adapts well to nuanced requirements and can adjust its approach."
      },
      {
        step: 5,
        title: "Leverage Context",
        description: "Build complex conversations over time. Claude maintains context throughout long discussions."
      }
    ],

    bestPractices: [
      "Upload complete documents rather than excerpts for best analysis",
      "Ask for reasoning and explanation alongside answers for transparency",
      "Use Claude for tasks requiring careful consideration and nuanced understanding",
      "Leverage the extended context for comparing multiple documents or versions",
      "Request structured outputs (outlines, tables, reports) for complex information",
      "Combine multiple sources for comprehensive synthesis and analysis"
    ],

    pricing: {
      free: "Access to Claude with generous usage limits",
      pro: "$20/month for 5x more usage, priority access, and early feature access",
      team: "$30/user/month for collaborative workspaces and centralized billing",
      enterprise: "Custom pricing for enhanced security, higher limits, and dedicated support"
    },

    pros: [
      "Exceptional long-context understanding",
      "Thoughtful, well-reasoned responses",
      "Strong at complex analytical tasks",
      "Excellent for technical and strategic writing",
      "High accuracy and reduced hallucinations"
    ],

    cons: [
      "Slower response times for complex queries",
      "Less playful or creative than some alternatives",
      "May be overly cautious in some responses",
      "Limited multimodal capabilities compared to competitors"
    ]
  },

  gemini: {
    id: "gemini",
    name: "Gemini Canvas",
    shortName: "Gemini",
    tagline: "Blend web, text, and images for rich multimodal exploration and analysis.",
    category: "MULTIMODAL",
    role: "Multimodal",
    iconBg: "#facc15",
    pattern: "stripes",
    color: "#6366f1",
    image: "/gemini-ai/cover.png",
    link: "https://gemini.google.com",

    overview: "Gemini is Google's most capable AI model, designed to be multimodal from the ground up. It seamlessly understands and generates text, images, code, audio, and video, making it perfect for tasks that require processing multiple types of information simultaneously.",

    keyFeatures: [
      {
        title: "True Multimodal Understanding",
        description: "Process text, images, audio, and video simultaneously. Gemini understands the relationship between different modalities natively."
      },
      {
        title: "Google Integration",
        description: "Deep integration with Google Workspace, Search, and other Google services for enhanced productivity and research."
      },
      {
        title: "Visual Analysis",
        description: "Analyze images, charts, diagrams, and visual content with sophisticated understanding of visual elements and context."
      },
      {
        title: "Real-Time Information",
        description: "Access to current web information through Google Search integration for up-to-date responses and fact-checking."
      },
      {
        title: "Advanced Reasoning",
        description: "Sophisticated problem-solving across mathematics, coding, and logical reasoning tasks with step-by-step explanations."
      }
    ],

    useCases: [
      {
        title: "Visual Content Analysis",
        description: "Analyze images, infographics, charts, or diagrams. Extract insights from visual data and understand complex imagery.",
        example: "Upload a chart or diagram and ask Gemini to explain the data, identify trends, or convert it to structured text."
      },
      {
        title: "Research & Information Synthesis",
        description: "Leverage Google Search integration to find current information, fact-check claims, and synthesize web research.",
        example: "Ask about recent events, current trends, or fact-check information with real-time web access."
      },
      {
        title: "Educational Support",
        description: "Learn through multimodal explanations combining text, visuals, and step-by-step reasoning for complex topics.",
        example: "Upload a math problem from a textbook image and get detailed step-by-step solutions with explanations."
      },
      {
        title: "Creative Projects",
        description: "Generate ideas combining text and visual elements, analyze inspiration images, or plan multimodal content.",
        example: "Show reference images and ask Gemini to help develop creative concepts based on visual inspiration."
      },
      {
        title: "Document Processing",
        description: "Extract information from screenshots, PDFs, handwritten notes, or any image-based documents.",
        example: "Upload receipts, forms, or handwritten notes and ask Gemini to extract and organize the information."
      }
    ],

    howToUse: [
      {
        step: 1,
        title: "Upload Visual Content",
        description: "Drag and drop images, screenshots, or documents. Gemini can analyze multiple images in a single conversation."
      },
      {
        step: 2,
        title: "Ask Multimodal Questions",
        description: "Combine visual and text queries. Ask about what's in images, how they relate to your text questions, or request comparisons."
      },
      {
        step: 3,
        title: "Leverage Google Search",
        description: "Ask questions requiring current information. Gemini will search the web when needed and cite sources."
      },
      {
        step: 4,
        title: "Request Detailed Analysis",
        description: "Ask for in-depth explanations of visual content, step-by-step problem solving, or comparative analysis."
      },
      {
        step: 5,
        title: "Integrate with Workspace",
        description: "Use Gemini within Gmail, Docs, and other Google apps for seamless productivity enhancement."
      }
    ],

    bestPractices: [
      "Combine text and images in queries for richer context and better results",
      "Use clear, high-quality images for best visual understanding",
      "Ask Gemini to verify information with web search for current events",
      "Break down complex visual analysis tasks into specific questions",
      "Leverage Google Workspace integration for productivity workflows",
      "Request citations when researching to verify information sources"
    ],

    pricing: {
      free: "Access to Gemini with standard features and Google Search integration",
      advanced: "$19.99/month for Gemini Advanced (Ultra model), 2TB storage, and Workspace integration",
      business: "Part of Google Workspace plans with additional enterprise features",
      enterprise: "Custom enterprise solutions with enhanced security and support"
    },

    pros: [
      "Best-in-class multimodal understanding",
      "Seamless Google ecosystem integration",
      "Real-time web search capabilities",
      "Strong visual and image analysis",
      "Excellent for research and fact-checking"
    ],

    cons: [
      "May prioritize Google sources in search results",
      "Less specialized for pure text tasks compared to alternatives",
      "Response style can be more formal",
      "Limited customization compared to some competitors"
    ]
  },

  copilot: {
    id: "copilot",
    name: "GitHub Copilot",
    shortName: "Copilot",
    tagline: "Inline code suggestions, tests, and refactors directly inside your editor.",
    category: "CODE",
    role: "Coding Assistant",
    iconBg: "#22c55e",
    pattern: "green-dots",
    color: "#0ea5e9",
    image: "/github-copilot-ai/cover.png",
    link: "https://github.com/features/copilot",

    overview: "GitHub Copilot is your AI pair programmer that works directly in your code editor. Powered by OpenAI Codex, it suggests whole lines or entire functions as you type, dramatically accelerating your development workflow and helping you write better code faster.",

    keyFeatures: [
      {
        title: "Inline Code Completion",
        description: "Get intelligent code suggestions as you type. Copilot understands context and suggests complete functions, not just snippets."
      },
      {
        title: "Multi-Language Support",
        description: "Works with dozens of programming languages and frameworks, from Python and JavaScript to Rust and Go."
      },
      {
        title: "Test Generation",
        description: "Automatically generate unit tests, integration tests, and test cases based on your code implementation."
      },
      {
        title: "Code Translation",
        description: "Convert code between programming languages or refactor code to use different patterns and paradigms."
      },
      {
        title: "Documentation Assistance",
        description: "Generate code comments, docstrings, and documentation based on your code's functionality."
      }
    ],

    useCases: [
      {
        title: "Full-Stack Developers",
        description: "Speed up development across frontend, backend, and database code with context-aware suggestions.",
        example: "Start writing a React component and let Copilot suggest complete component structure with hooks and state management."
      },
      {
        title: "Learning New Languages",
        description: "Discover language-specific patterns and best practices as you code in unfamiliar languages or frameworks.",
        example: "Write comments describing what you want to do, and Copilot suggests the correct syntax in your target language."
      },
      {
        title: "Writing Tests",
        description: "Generate comprehensive test suites quickly, including edge cases and common scenarios you might miss.",
        example: "Write a test function signature and let Copilot suggest test cases covering various scenarios."
      },
      {
        title: "Boilerplate Code",
        description: "Eliminate tedious boilerplate writing. Copilot handles repetitive patterns so you focus on unique logic.",
        example: "Start a CRUD API endpoint and Copilot suggests complete implementations with error handling."
      },
      {
        title: "Code Refactoring",
        description: "Modernize legacy code, apply design patterns, or optimize algorithms with AI-assisted suggestions.",
        example: "Select old code and ask Copilot to refactor it using modern patterns or frameworks."
      }
    ],

    howToUse: [
      {
        step: 1,
        title: "Install the Extension",
        description: "Add GitHub Copilot to your editor (VS Code, JetBrains, Neovim, or Visual Studio) and sign in with your GitHub account."
      },
      {
        step: 2,
        title: "Write Comments or Code",
        description: "Start with descriptive comments or begin typing code. Copilot analyzes context from your current file and workspace."
      },
      {
        step: 3,
        title: "Accept or Cycle Suggestions",
        description: "Press Tab to accept suggestions or use keyboard shortcuts to cycle through alternative completions."
      },
      {
        step: 4,
        title: "Use Copilot Chat",
        description: "Ask questions, request explanations, or get help with debugging through the integrated chat interface."
      },
      {
        step: 5,
        title: "Refine and Iterate",
        description: "Edit suggestions to fit your needs. Copilot learns from your edits and improves suggestions over time."
      }
    ],

    bestPractices: [
      "Write clear, descriptive function names and comments to guide suggestions",
      "Review and test all suggested code - treat Copilot as a junior developer",
      "Use Copilot Chat for complex questions or when inline suggestions aren't quite right",
      "Provide context through comments when working on complex or unique functionality",
      "Cycle through multiple suggestions (Alt+[ and Alt+]) to see different approaches",
      "Keep your codebase clean and well-structured for better contextual suggestions"
    ],

    pricing: {
      individual: "$10/month or $100/year for individual developers",
      business: "$19/user/month for teams with centralized management and policy controls",
      enterprise: "$39/user/month with enhanced security, compliance, and enterprise features",
      students: "Free for verified students, teachers, and open-source maintainers"
    },

    pros: [
      "Dramatically speeds up coding workflow",
      "Excellent at generating boilerplate and repetitive code",
      "Supports wide range of languages and frameworks",
      "Integrated directly in your favorite editor",
      "Helpful for learning new languages and patterns"
    ],

    cons: [
      "Can suggest suboptimal or outdated patterns",
      "Requires review and testing of all suggestions",
      "May not understand complex domain-specific logic",
      "Subscription cost for individual developers",
      "Can make you over-reliant on AI assistance"
    ]
  },

  cursor: {
    id: "cursor",
    name: "Cursor Editor",
    shortName: "Cursor",
    tagline: "An AI-native IDE that helps you read, refactor, and ship code faster.",
    category: "IDE",
    role: "AI-Native IDE",
    iconBg: "#f97316",
    pattern: "yellow-arc",
    color: "#a1a1aa",
    image: "/cursor-ai/cover.png",
    link: "https://cursor.sh",

    overview: "Cursor is a modern code editor built from the ground up with AI at its core. It's a fork of VS Code that integrates advanced AI capabilities deeply into every aspect of your coding workflow, from understanding large codebases to making complex edits across multiple files.",

    keyFeatures: [
      {
        title: "Codebase Understanding",
        description: "Ask questions about your entire codebase. Cursor indexes your code and understands relationships between files and functions."
      },
      {
        title: "Multi-File Editing",
        description: "Make coordinated changes across multiple files simultaneously with AI that understands your project structure."
      },
      {
        title: "Inline AI Assistance",
        description: "Get context-aware code completions, refactoring suggestions, and bug fixes as you type with Cmd+K."
      },
      {
        title: "Chat with Codebase",
        description: "Natural language conversations about your code with full project context and the ability to make direct edits."
      },
      {
        title: "Privacy-First Design",
        description: "Choose privacy mode to prevent your code from being stored or used for training, keeping proprietary code secure."
      }
    ],

    useCases: [
      {
        title: "Large Codebase Navigation",
        description: "Quickly understand and navigate complex codebases by asking natural language questions about architecture and flow.",
        example: "Ask 'How does authentication work in this app?' and Cursor shows relevant files with explanations."
      },
      {
        title: "Refactoring Projects",
        description: "Perform major refactors across multiple files with AI that understands dependencies and maintains consistency.",
        example: "Request to rename a function or change an API structure, and Cursor updates all related files."
      },
      {
        title: "Bug Fixing",
        description: "Debug issues faster by asking Cursor to analyze error messages and suggest fixes with full context awareness.",
        example: "Paste an error message and ask Cursor to find and fix the issue across your codebase."
      },
      {
        title: "Feature Implementation",
        description: "Build new features faster with AI that can scaffold code, implement logic, and wire up components.",
        example: "Describe a new feature and Cursor generates the necessary files, components, and connections."
      },
      {
        title: "Code Review & Learning",
        description: "Learn from unfamiliar codebases or technologies by asking Cursor to explain code sections and patterns.",
        example: "Ask Cursor to explain how a complex algorithm works or why certain patterns were used."
      }
    ],

    howToUse: [
      {
        step: 1,
        title: "Download and Install",
        description: "Download Cursor from cursor.sh. It's available for macOS, Windows, and Linux. Your VS Code settings can be imported."
      },
      {
        step: 2,
        title: "Open Your Project",
        description: "Open any codebase. Cursor will index your code to understand structure, dependencies, and relationships."
      },
      {
        step: 3,
        title: "Use Cmd+K for Edits",
        description: "Highlight code and press Cmd+K (Ctrl+K on Windows) to request inline edits, refactors, or improvements."
      },
      {
        step: 4,
        title: "Chat About Your Code",
        description: "Open the chat panel (Cmd+L) to ask questions about your codebase, request explanations, or plan implementations."
      },
      {
        step: 5,
        title: "Let AI Make Changes",
        description: "Review and accept AI-suggested changes. Cursor can edit multiple files and handle complex refactors automatically."
      }
    ],

    bestPractices: [
      "Use @codebase in chat to search across your entire project for relevant context",
      "Enable privacy mode when working with sensitive or proprietary code",
      "Review all AI-generated changes before committing to version control",
      "Use Cmd+K for focused, specific edits and chat for broader questions",
      "Provide clear descriptions of what you want for better AI results",
      "Keep your codebase well-organized for optimal AI understanding"
    ],

    pricing: {
      free: "500 free AI completions and chat messages (resets monthly)",
      pro: "$20/month for unlimited completions with GPT-4, Claude, and other models",
      business: "$40/user/month with centralized billing, admin dashboard, and team features",
      enterprise: "Custom pricing for enhanced security, SOC 2 compliance, and dedicated support"
    },

    pros: [
      "Deep codebase understanding and context",
      "Seamless multi-file editing capabilities",
      "Familiar VS Code interface and extensions",
      "Privacy-focused with optional local mode",
      "Powerful inline editing with Cmd+K"
    ],

    cons: [
      "Requires switching from your current editor",
      "AI usage limits on free tier",
      "Still in active development with occasional bugs",
      "Learning curve for AI-specific features",
      "Subscription cost for full features"
    ]
  },

  uxpilot: {
    id: "uxpilot",
    name: "UX Pilot",
    shortName: "UX Pilot",
    tagline: "Generate flows, states, and wireframes for product ideas in minutes.",
    category: "UX",
    role: "UX & Prototyping",
    iconBg: "#ef4444",
    pattern: "sprinkles",
    color: "#4f46e5",
    image: "/ux-pilot-ai/cover.png",
    link: "https://uxpilot.ai",

    overview: "UX Pilot is an AI-powered design assistant that helps you quickly visualize user flows, generate wireframes, and map out UI states. Perfect for product designers, UX researchers, and anyone who needs to communicate design ideas rapidly without starting from scratch.",

    keyFeatures: [
      {
        title: "Instant User Flows",
        description: "Generate complete user flow diagrams from simple descriptions of your product or feature."
      },
      {
        title: "Wireframe Generation",
        description: "Create low-fidelity wireframes for screens and interactions based on your requirements and best practices."
      },
      {
        title: "State Mapping",
        description: "Automatically map out different UI states (loading, error, empty, success) for comprehensive design coverage."
      },
      {
        title: "Design System Integration",
        description: "Apply consistent design patterns and component libraries to maintain visual coherence across screens."
      },
      {
        title: "Collaboration Tools",
        description: "Share designs with team members, gather feedback, and iterate quickly with built-in collaboration features."
      }
    ],

    useCases: [
      {
        title: "Product Designers",
        description: "Rapidly prototype new features, explore design alternatives, and create comprehensive flow diagrams for stakeholder review.",
        example: "Describe a checkout flow and get instant wireframes for each step including edge cases and error states."
      },
      {
        title: "Product Managers",
        description: "Communicate product requirements visually, create user stories with visual references, and align teams on feature scope.",
        example: "Generate wireframes for a new feature to include in PRDs and use for technical scoping discussions."
      },
      {
        title: "UX Researchers",
        description: "Create mockups for user testing, visualize research findings, and prototype solutions based on user insights.",
        example: "Build low-fidelity prototypes to test with users before investing in high-fidelity designs."
      },
      {
        title: "Startup Founders",
        description: "Quickly visualize product ideas, create investor-ready mockups, and iterate on concepts before hiring designers.",
        example: "Generate complete app flows to communicate your vision to investors or early team members."
      },
      {
        title: "Design Teams",
        description: "Accelerate early-stage design work, maintain consistency across flows, and document design decisions.",
        example: "Create comprehensive design documentation showing all states and flows for developer handoff."
      }
    ],

    howToUse: [
      {
        step: 1,
        title: "Describe Your Feature",
        description: "Write a description of the user flow or feature you want to design. Include key actions and decision points."
      },
      {
        step: 2,
        title: "Generate Initial Flows",
        description: "UX Pilot creates user flow diagrams showing the main paths and decision points in your design."
      },
      {
        step: 3,
        title: "Create Wireframes",
        description: "Select flows or states to expand into wireframes. UX Pilot generates low-fidelity screen layouts."
      },
      {
        step: 4,
        title: "Refine and Iterate",
        description: "Edit generated designs, add details, or request variations. Iterate until the design meets your needs."
      },
      {
        step: 5,
        title: "Export and Share",
        description: "Export designs to Figma, PDF, or image files. Share with team members for feedback and collaboration."
      }
    ],

    bestPractices: [
      "Start with clear user goals and main flows before adding details",
      "Include edge cases and error states in your initial descriptions",
      "Use generated flows as starting points and customize based on your brand",
      "Involve stakeholders early by sharing generated wireframes for feedback",
      "Document design decisions alongside the generated flows",
      "Export to professional tools like Figma for high-fidelity design work"
    ],

    pricing: {
      free: "Limited flows and wireframes per month with basic export options",
      pro: "$29/month for unlimited flows, advanced exports, and collaboration features",
      team: "$99/month for team workspaces, shared libraries, and admin controls",
      enterprise: "Custom pricing for API access, SSO, and dedicated support"
    },

    pros: [
      "Extremely fast for initial design exploration",
      "Helps ensure comprehensive state coverage",
      "Great for non-designers to communicate ideas",
      "Reduces time from concept to prototype",
      "Encourages thinking through complete user flows"
    ],

    cons: [
      "Generated designs may need significant customization",
      "Not a replacement for high-fidelity design tools",
      "Limited customization of visual style",
      "Best for standard patterns, less useful for novel interfaces",
      "Requires export to other tools for production designs"
    ]
  },

  deepseek: {
    id: "deepseek",
    name: "DeepSeek",
    shortName: "DeepSeek",
    tagline: "Fast, efficient open-source intelligence model for code and research.",
    category: "CODE & RESEARCH",
    role: "Code & Research",
    iconBg: "#3a2b73",
    pattern: "circuit",
    color: "#3b82f6",
    image: "/deepseek/cover.png",
    link: "https://www.deepseek.com",

    overview: "DeepSeek is an advanced open-source AI model optimized for technical tasks, code generation, and research. Built with efficiency in mind, it provides fast, accurate responses while being transparent about its capabilities and limitations.",

    keyFeatures: [
      {
        title: "Code Generation",
        description: "Generate high-quality code across multiple programming languages with strong understanding of algorithms and data structures."
      },
      {
        title: "Technical Documentation",
        description: "Create clear, comprehensive technical documentation, API references, and code explanations."
      },
      {
        title: "Research Assistance",
        description: "Help with technical research, paper analysis, and synthesizing complex technical information."
      },
      {
        title: "Performance Optimized",
        description: "Fast inference speeds make DeepSeek ideal for real-time coding assistance and rapid iteration."
      },
      {
        title: "Open Source Transparency",
        description: "Open model weights and training approaches allow for customization and transparency."
      }
    ],

    useCases: [
      {
        title: "Software Engineers",
        description: "Get coding assistance, algorithm implementations, and technical problem-solving support.",
        example: "Request implementations of complex algorithms or data structures with time complexity analysis."
      },
      {
        title: "Data Scientists",
        description: "Generate data analysis code, statistical models, and visualization scripts efficiently.",
        example: "Create complete data analysis pipelines from raw data processing to visualization."
      },
      {
        title: "Technical Researchers",
        description: "Analyze research papers, implement algorithms from papers, and explore technical concepts.",
        example: "Convert mathematical descriptions from research papers into working code implementations."
      },
      {
        title: "Open Source Contributors",
        description: "Leverage open-source AI for projects without vendor lock-in or usage restrictions.",
        example: "Integrate DeepSeek into your own tools and workflows with complete control."
      },
      {
        title: "Students & Educators",
        description: "Learn programming concepts, understand algorithms, and get educational coding support.",
        example: "Get step-by-step explanations of how algorithms work with example implementations."
      }
    ],

    howToUse: [
      {
        step: 1,
        title: "Access the Platform",
        description: "Visit deepseek.com or use the API for integration into your own tools and workflows."
      },
      {
        step: 2,
        title: "Describe Your Task",
        description: "Clearly describe the technical task, including language preferences, constraints, and requirements."
      },
      {
        step: 3,
        title: "Review Generated Code",
        description: "Examine the code output, paying attention to algorithm choices, efficiency, and edge cases."
      },
      {
        step: 4,
        title: "Iterate and Refine",
        description: "Request modifications, optimizations, or alternative approaches as needed."
      },
      {
        step: 5,
        title: "Test and Validate",
        description: "Always test generated code thoroughly with unit tests and edge cases."
      }
    ],

    bestPractices: [
      "Specify programming language, version, and any framework constraints clearly",
      "Request explanations along with code for better understanding",
      "Test all generated code with comprehensive test cases",
      "Use for learning and reference, not just copy-paste solutions",
      "Verify algorithm complexity claims with your own analysis",
      "Consider open-source nature for projects requiring model transparency"
    ],

    pricing: {
      free: "Free access to the model through the web interface with usage limits",
      api: "Pay-per-use API access with competitive pricing",
      selfHosted: "Free to download and run on your own infrastructure with open-source license",
      enterprise: "Custom solutions for large-scale deployments and support"
    },

    pros: [
      "Open-source and transparent",
      "Excellent for technical and coding tasks",
      "Fast inference speeds",
      "No vendor lock-in",
      "Strong algorithm and data structure knowledge"
    ],

    cons: [
      "Less known than commercial alternatives",
      "Smaller ecosystem and community",
      "May require more technical knowledge to self-host",
      "Less polished interface than commercial products",
      "Fewer integrations with mainstream tools"
    ]
  },

  lovable: {
    id: "lovable",
    name: "Lovable AI",
    shortName: "Lovable",
    tagline: "Spin up full-stack apps from prompts and iterations.",
    category: "APP BUILDER",
    role: "App Builder",
    iconBg: "#613dc1",
    pattern: "gradient",
    color: "#f97316",
    image: "/loveable-ai/cover.png",
    link: "https://lovable.dev",

    overview: "Lovable is an AI-powered application builder that transforms natural language descriptions into fully functional full-stack applications. From database schemas to frontend components, Lovable handles the entire development stack, letting you focus on your product vision.",

    keyFeatures: [
      {
        title: "Full-Stack Generation",
        description: "Generate complete applications with frontend, backend, database, and authentication from natural language prompts."
      },
      {
        title: "Iterative Development",
        description: "Continuously refine and expand your app through conversational iterations without starting over."
      },
      {
        title: "Modern Tech Stack",
        description: "Built on modern frameworks and best practices including React, Node.js, and popular databases."
      },
      {
        title: "Instant Deployment",
        description: "Deploy your application instantly with built-in hosting and continuous deployment pipelines."
      },
      {
        title: "Code Access",
        description: "Full access to generated code for customization, learning, or migration to your own infrastructure."
      }
    ],

    useCases: [
      {
        title: "Startup MVPs",
        description: "Build minimum viable products quickly to validate ideas and get user feedback faster.",
        example: "Create a complete SaaS application with user auth, dashboards, and database in hours, not weeks."
      },
      {
        title: "Internal Tools",
        description: "Generate custom internal business tools, admin panels, and workflow automation apps.",
        example: "Build a custom CRM or project management tool tailored to your team's specific needs."
      },
      {
        title: "Prototyping",
        description: "Quickly prototype ideas for client presentations, investor demos, or user testing sessions.",
        example: "Turn a product idea into a working demo to show stakeholders before full development."
      },
      {
        title: "Learning Projects",
        description: "Build real applications while learning full-stack development by examining generated code.",
        example: "Create projects to add to your portfolio while learning modern development practices."
      },
      {
        title: "Rapid Development",
        description: "Accelerate development timelines for standard CRUD applications and common business workflows.",
        example: "Generate the foundation of an app and customize the unique parts manually."
      }
    ],

    howToUse: [
      {
        step: 1,
        title: "Describe Your App",
        description: "Write a detailed description of your application idea, including features, user types, and key workflows."
      },
      {
        step: 2,
        title: "Review Initial Build",
        description: "Lovable generates your app structure, database schema, and core features. Review the initial version."
      },
      {
        step: 3,
        title: "Iterate and Refine",
        description: "Request changes, add features, or modify behavior through natural language. Lovable updates the app accordingly."
      },
      {
        step: 4,
        title: "Test Your App",
        description: "Use the live preview to test functionality, identify issues, and explore the user experience."
      },
      {
        step: 5,
        title: "Deploy or Export",
        description: "Deploy directly through Lovable or export the code to your own repository and hosting."
      }
    ],

    bestPractices: [
      "Start with a clear description of core features before adding complexity",
      "Test thoroughly after each iteration to catch issues early",
      "Use generated code as a learning resource to understand patterns",
      "Plan your data model carefully as it affects the entire app structure",
      "Customize generated code for unique business logic and branding",
      "Consider security implications and add custom auth/validation as needed"
    ],

    pricing: {
      free: "Limited apps and iterations per month with basic features",
      pro: "$49/month for unlimited apps, advanced features, and custom domains",
      team: "$149/month for team collaboration, shared workspaces, and priority support",
      enterprise: "Custom pricing for white-label solutions, SSO, and dedicated infrastructure"
    },

    pros: [
      "Extremely fast from idea to working application",
      "Full control with code export",
      "Modern, production-ready tech stack",
      "Great for MVPs and prototypes",
      "Reduces need for junior development work"
    ],

    cons: [
      "Generated code may need refactoring for complex apps",
      "Limited to supported frameworks and patterns",
      "Not ideal for highly custom or novel architectures",
      "May require development knowledge for customization",
      "Subscription cost for serious usage"
    ]
  },

  codex: {
    id: "codex",
    name: "CodeX",
    shortName: "CodeX",
    tagline: "Experimental code-focused LLM workflows.",
    category: "DEVELOPER TOOLS",
    role: "Developer Tools",
    iconBg: "#1f2933",
    pattern: "matrix",
    color: "#22d3ee",
    image: "/codex-ai/cover.png",
    link: "https://openai.com/codex/",

    overview: "OpenAI Codex is the AI system that powers GitHub Copilot and represents cutting-edge code generation capabilities. While Codex itself is primarily available through integrations, it represents the foundation of modern AI-assisted development tools.",

    keyFeatures: [
      {
        title: "Advanced Code Understanding",
        description: "Deep comprehension of code syntax, semantics, and programming concepts across dozens of languages."
      },
      {
        title: "Natural Language to Code",
        description: "Translate English descriptions into working code with high accuracy and appropriate best practices."
      },
      {
        title: "Code Translation",
        description: "Convert code between programming languages while preserving logic and adapting to language idioms."
      },
      {
        title: "Bug Detection",
        description: "Identify potential bugs, security issues, and code smells with contextual explanations."
      },
      {
        title: "API Integration",
        description: "Available via API for building custom development tools and workflows."
      }
    ],

    useCases: [
      {
        title: "Custom Development Tools",
        description: "Build specialized coding assistants, IDE plugins, or development workflow automation using the Codex API.",
        example: "Create a custom code review tool that checks for project-specific patterns and standards."
      },
      {
        title: "Code Documentation",
        description: "Automatically generate comprehensive documentation, comments, and explanations for existing codebases.",
        example: "Feed legacy code to Codex and generate detailed documentation explaining functionality."
      },
      {
        title: "Learning Platforms",
        description: "Power interactive coding education platforms with real-time hints, solutions, and explanations.",
        example: "Build a coding tutorial platform where students get AI-powered help and feedback."
      },
      {
        title: "Development Automation",
        description: "Automate repetitive coding tasks, boilerplate generation, and common refactoring operations.",
        example: "Create scripts that automatically generate CRUD operations, API endpoints, or test scaffolds."
      },
      {
        title: "Code Analysis Tools",
        description: "Build static analysis tools, code quality checkers, or security vulnerability scanners.",
        example: "Develop tools that analyze code for performance issues or security vulnerabilities."
      }
    ],

    howToUse: [
      {
        step: 1,
        title: "Get API Access",
        description: "Sign up for OpenAI API access and obtain your API key for Codex endpoints."
      },
      {
        step: 2,
        title: "Choose Your Integration",
        description: "Decide whether to use Codex through existing tools like Copilot or build custom integrations."
      },
      {
        step: 3,
        title: "Craft Clear Prompts",
        description: "Write precise natural language descriptions or provide code context for the task you want to accomplish."
      },
      {
        step: 4,
        title: "Process Results",
        description: "Parse and validate the generated code, incorporating it into your workflow or tool."
      },
      {
        step: 5,
        title: "Iterate and Optimize",
        description: "Refine your prompts and integration based on results to improve output quality."
      }
    ],

    bestPractices: [
      "Provide clear, specific prompts with examples when possible",
      "Include context about the programming language, framework, and goals",
      "Always validate and test generated code before using in production",
      "Use for boilerplate and standard patterns; review carefully for complex logic",
      "Consider rate limits and costs when building API integrations",
      "Combine with human code review for critical applications"
    ],

    pricing: {
      api: "Pay-per-use pricing based on tokens processed (pricing varies by model)",
      enterprise: "Volume discounts and dedicated capacity for large-scale deployments",
      copilot: "Access Codex through GitHub Copilot subscription ($10-39/month depending on plan)",
      custom: "Custom agreements for specialized use cases and integrations"
    },

    pros: [
      "Powerful code generation capabilities",
      "Supports many programming languages",
      "Available via API for custom tools",
      "Foundation for proven tools like Copilot",
      "Excellent for boilerplate and standard patterns"
    ],

    cons: [
      "Primarily available through integrations",
      "API access requires technical integration",
      "Pay-per-use can be expensive for heavy usage",
      "Requires careful validation of outputs",
      "Not a standalone product for most users"
    ]
  }
};

// Helper function to get tool by ID
export const getToolById = (id) => {
  return toolsData[id] || null;
};

// Helper function to get all tools as array
export const getAllTools = () => {
  return Object.values(toolsData);
};
