// Tool-specific translations that will be used alongside toolData.js
export const toolTranslations = {
  chatgpt: {
    en: {
      name: "ChatGPT Studio",
      shortName: "ChatGPT",
      tagline: "Draft conversations, explore ideas, and prototype assistants in natural language.",
      category: "CONVERSATION",
      role: "Conversation & Ideation"
    },
    ar: {
      name: "استوديو ChatGPT",
      shortName: "ChatGPT",
      tagline: "صياغة المحادثات، استكشاف الأفكار، وإنشاء نماذج للمساعدين باللغة الطبيعية.",
      category: "محادثة",
      role: "المحادثة والإبداع"
    }
  },
  claude: {
    en: {
      name: "Claude Workspace",
      shortName: "Claude",
      tagline: "Deep reasoning for strategy docs, product specs, and complex research work.",
      category: "WRITING",
      role: "Thinking & Writing"
    },
    ar: {
      name: "مساحة عمل Claude",
      shortName: "Claude",
      tagline: "تفكير عميق لوثائق الاستراتيجية، ومواصفات المنتجات، والأبحاث المعقدة.",
      category: "كتابة",
      role: "التفكير والكتابة"
    }
  },
  gemini: {
    en: {
      name: "Gemini Canvas",
      shortName: "Gemini",
      tagline: "Blend web, text, and images for rich multimodal exploration and analysis.",
      category: "MULTIMODAL",
      role: "Multimodal"
    },
    ar: {
      name: "لوحة Gemini",
      shortName: "Gemini",
      tagline: "دمج الويب والنصوص والصور للاستكشاف والتحليل متعدد الوسائط.",
      category: "متعدد الوسائط",
      role: "متعدد الوسائط"
    }
  },
  copilot: {
    en: {
      name: "GitHub Copilot",
      shortName: "Copilot",
      tagline: "Inline code suggestions, tests, and refactors directly inside your editor.",
      category: "CODE",
      role: "Coding Assistant"
    },
    ar: {
      name: "GitHub Copilot",
      shortName: "Copilot",
      tagline: "اقتراحات الكود والاختبارات وإعادة الهيكلة مباشرة داخل المحرر.",
      category: "برمجة",
      role: "مساعد البرمجة"
    }
  },
  cursor: {
    en: {
      name: "Cursor Editor",
      shortName: "Cursor",
      tagline: "An AI-native IDE that helps you read, refactor, and ship code faster.",
      category: "IDE",
      role: "AI-Native IDE"
    },
    ar: {
      name: "محرر Cursor",
      shortName: "Cursor",
      tagline: "بيئة تطوير متكاملة بالذكاء الاصطناعي تساعدك على قراءة الكود وإعادة هيكلته ونشره بشكل أسرع.",
      category: "بيئة تطوير",
      role: "بيئة تطوير بالذكاء الاصطناعي"
    }
  },
  uxpilot: {
    en: {
      name: "UX Pilot",
      shortName: "UX Pilot",
      tagline: "Generate flows, states, and wireframes for product ideas in minutes.",
      category: "UX",
      role: "UX & Prototyping"
    },
    ar: {
      name: "UX Pilot",
      shortName: "UX Pilot",
      tagline: "إنشاء التدفقات والحالات والإطارات السلكية لأفكار المنتجات في دقائق.",
      category: "تجربة المستخدم",
      role: "تجربة المستخدم والنماذج الأولية"
    }
  },
  deepseek: {
    en: {
      name: "DeepSeek",
      shortName: "DeepSeek",
      tagline: "Fast, efficient open-source intelligence model for code and research.",
      category: "CODE & RESEARCH",
      role: "Code & Research"
    },
    ar: {
      name: "DeepSeek",
      shortName: "DeepSeek",
      tagline: "نموذج ذكاء مفتوح المصدر سريع وفعال للبرمجة والبحث.",
      category: "برمجة وبحث",
      role: "البرمجة والبحث"
    }
  },
  lovable: {
    en: {
      name: "Lovable AI",
      shortName: "Lovable",
      tagline: "Spin up full-stack apps from prompts and iterations.",
      category: "APP BUILDER",
      role: "App Builder"
    },
    ar: {
      name: "Lovable AI",
      shortName: "Lovable",
      tagline: "إنشاء تطبيقات كاملة من التعليمات والتكرارات.",
      category: "بناء التطبيقات",
      role: "بناء التطبيقات"
    }
  },
  codex: {
    en: {
      name: "CodeX",
      shortName: "CodeX",
      tagline: "Experimental code-focused LLM workflows.",
      category: "DEVELOPER TOOLS",
      role: "Developer Tools"
    },
    ar: {
      name: "CodeX",
      shortName: "CodeX",
      tagline: "سير عمل تجريبي لنماذج اللغة المركزة على البرمجة.",
      category: "أدوات المطورين",
      role: "أدوات المطورين"
    }
  }
};

// Helper function to get translated tool data
export const getTranslatedTool = (toolId, language = 'en') => {
  return toolTranslations[toolId]?.[language] || toolTranslations[toolId]?.en || {};
};
