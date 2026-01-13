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
    ],

    translations: {
      ar: {
        overview: "ChatGPT هو الذكاء الاصطناعي للمحادثة من OpenAI الذي يغير طريقة تفاعلك مع الذكاء الاصطناعي. مبني على نماذج لغوية متقدمة، يفهم السياق، ويحافظ على المحادثات، ويساعدك في الصياغة والعصف الذهني واستكشاف الأفكار من خلال حوار طبيعي.",
        keyFeatures: [
          {
            title: "محادثات طبيعية",
            description: "انخرط في حوارات سائلة وواعية بالسياق تشعر وكأنها بشرية للغاية. يتذكر ChatGPT ما قلته سابقًا في المحادثة ويبني عليه."
          },
          {
            title: "إنشاء المحتوى",
            description: "صياغة رسائل البريد الإلكتروني، كتابة المقالات، إنشاء القصص، أو توليد نصوص تسويقية. يتكيف ChatGPT مع أسلوب الكتابة لتلبية احتياجاتك وجمهورك."
          },
          {
            title: "المساعدة البرمجية",
            description: "احصل على مساعدة في مهام البرمجة، وتصحيح الكود، وتعلم لغات جديدة، أو إنشاء مقتطفات برمجية بلغات برمجة متعددة."
          },
          {
            title: "التعلم والتعليم",
            description: "شرح مواضيع معقدة بعبارات بسيطة، والحصول على دروس خطوة بخطوة، أو استكشاف مواضيع جديدة من خلال جلسات أسئلة وأجوبة تفاعلية."
          },
          {
            title: "GPTs مخصصة",
            description: "إنشاء نسخ متخصصة من ChatGPT مصممة لمهام أو سير عمل أو صناعات محددة مع تعليمات ومعرفة مخصصة."
          }
        ],
        useCases: [
          {
            title: "كتاب المحتوى والمسوقون",
            description: "إنشاء منشورات مدونة، ومحتوى لوسائل التواصل الاجتماعي، ونصوص إعلانية، ومواد تسويقية. العصف الذهني لأفكار الحملات وتحسين الرسائل.",
            example: "استخدم ChatGPT لصياغة عدة تنويعات من وصف المنتج أو إنشاء منشورات جذابة لوسائل التواصل الاجتماعي لعلامتك التجارية."
          },
          {
            title: "الطلاب والمعلمون",
            description: "الحصول على مساعدة في الواجبات المنزلية، وفهم المفاهيم الصعبة، وإنشاء أدلة دراسية، أو توليد خطط دروس ومواد تعليمية.",
            example: "اطلب من ChatGPT شرح فيزياء الكم بعبارات بسيطة أو إنشاء مسائل تدريبية للجبر."
          },
          {
            title: "المطورون والمهندسون",
            description: "تصحيح الكود، وإنشاء نصوص برمجية معيارية، وفهم رسائل الخطأ، أو تعلم لغات وأطر برمجة جديدة.",
            example: "الصق رسالة خطأ واحصل على تفسيرات مع إصلاحات مقترحة، أو اطلب أمثلة برمجية بلغة React أو Python."
          },
          {
            title: "محترفو الأعمال",
            description: "صياغة رسائل بريد إلكتروني، وإنشاء عروض تقديمية، وتحليل البيانات، وتوليد التقارير، أو العصف الذهني لاستراتيجيات الأعمال.",
            example: "قم بإنشاء نموذج بريد إلكتروني احترافي للتواصل مع العملاء أو إنشاء مخطط تفصيلي لعرضك التقديمي التالي."
          },
          {
            title: "الكتاب المبدعون",
            description: "تغلب على قفلة الكاتب، وطور الشخصيات، وحبك القصص، أو استكشف أنماطًا وأنواعًا سردية مختلفة.",
            example: "قم بتوليد أفكار للقصص، أو تطوير خلفيات للشخصيات، أو احصل على تعليقات حول أسلوب كتابتك."
          }
        ],
        howToUse: [
          {
            step: 1,
            title: "ابدأ محادثة",
            description: "ببساطة اكتب سؤالك أو طلبك في مربع الدردشة. كن محددًا بشأن ما تحتاجه وقدم سياقًا عندما يكون ذلك مفيدًا."
          },
          {
            step: 2,
            title: "حسن طلبك",
            description: "إذا لم تكن الاستجابة الأولى صحيحة تمامًا، اطلب من ChatGPT مراجعتها. يمكنك طلب نبرات أو أطوال أو أساليب مختلفة."
          },
          {
            step: 3,
            title: "ابنِ على الاستجابات",
            description: "استخدم الاستجابات السابقة كأساس. اطرح أسئلة متابعة، أو اطلب توضيحًا، أو استكشف مواضيع ذات صلة."
          },
          {
            step: 4,
            title: "استخدم تعليمات النظام",
            description: "حدد السياق من خلال إخبار ChatGPT بالتصرف كدور محدد (مثل، 'تصرف كخبير Python' أو 'تصرف كمدرب للكتابة الإبداعية')."
          },
          {
            step: 5,
            title: "كرر وجرب",
            description: "لا ترضَ بالإجابة الأولى. حاول إعادة صياغة سؤالك أو طلب وجهات نظر بديلة للحصول على أفضل النتائج."
          }
        ],
        bestPractices: [
          "كن محددًا وواضحًا في مطالباتك - كلما قدمت سياقًا أكثر، كانت النتائج أفضل",
          "قسّم المهام المعقدة إلى خطوات أصغر وتعامل معها واحدة تلو الأخرى",
          "استخدم ChatGPT للعصف الذهني والمسودات الأولية، ثم نقحها بخبرتك الخاصة",
          "تحقق من صحة المعلومات المهمة، خاصة للقرارات الحاسمة أو العمل الأكاديمي",
          "جرب صياغات مختلفة إذا لم تحصل على النتائج التي تريدها",
          "احفظ المحادثات والمطالبات المفيدة للرجوع إليها في المستقبل"
        ],
        pricing: {
          free: "الوصول إلى نموذج GPT-3.5 مع أوقات استجابة قياسية",
          plus: "20 دولارًا/شهر للوصول إلى GPT-4، واستجابات أسرع، وأولوية الوصول خلال أوقات الذروة",
          team: "يبدأ من 25 دولارًا/مستخدم/شهر لمساحات العمل التعاونية وضوابط الإدارة",
          enterprise: "تسعير مخصص للأمان المتقدم، وGPT-4 غير محدود، ودعم مخصص"
        },
        pros: [
          "واجهة محادثة بديهية",
          "مجموعة واسعة من القدرات من البرمجة إلى الكتابة الإبداعية",
          "تحديثات وتحسينات منتظمة",
          "نافذة سياق كبيرة للمحادثات المعقدة",
          "GPTs مخصصة للمهام المتخصصة"
        ],
        cons: [
          "يمكن أن ينتج معلومات غير دقيقة في بعض الأحيان",
          "معرفة محدودة بالأحداث بعد تاريخ التدريب",
          "الطبقة المجانية لها قيود استخدام خلال أوقات الذروة",
          "قد يتطلب تكرارات متعددة للمهام المعقدة"
        ]
      }
    }
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
    ],

    translations: {
      ar: {
        overview: "Claude هو مساعد الذكاء الاصطناعي من Anthropic المصمم للعمل المدروس والدقيق. مع نوافذ سياق رائدة في الصناعة والتركيز على السلامة والدقة، يتفوق Claude في التحليل العميق والكتابة الطويلة ومهام التفكير المعقدة التي تتطلب دراسة متأنية.",
        keyFeatures: [
          {
            title: "نافذة سياق ممتدة",
            description: "معالجة كتب كاملة، أو قواعد أكواد، أو مستندات طويلة في محادثة واحدة باستخدام نافذة سياق تبلغ 200 ألف رمز."
          },
          {
            title: "تفكير متفوق",
            description: "يظهر Claude تفكيرًا منطقيًا متقدمًا وفهمًا دقيقًا، مما يجعله مثاليًا للمهام التحليلية المعقدة."
          },
          {
            title: "محتوى طويل",
            description: "التفوق في إنشاء تقارير مفصلة، وأدلة شاملة، وأوراق بحثية، ووثائق تقنية متعمقة."
          },
          {
            title: "فهم الكود",
            description: "تحليل بنية الكود بعمق، ومراجعة طلبات السحب، وتقديم تفسيرات تقنية مفصلة مع الوعي بالسياق."
          },
          {
            title: "الذكاء الاصطناعي الدستوري",
            description: "مبني بمبادئ السلامة التي تجعل Claude أكثر فائدة، وصدقًا، وأقل ضررًا في استجاباته."
          }
        ],
        useCases: [
          {
            title: "مديرو المنتجات",
            description: "إنشاء وثائق متطلبات المنتج المفصلة، وقصص المستخدمين، وخرائط الطريق الاستراتيجية مع تحليل شامل.",
            example: "قم بتحميل أبحاث المنافسين واطلب من Claude تجميع الرؤى والتوصية بأولويات الميزات."
          },
          {
            title: "الباحثون والمحللون",
            description: "معالجة مجموعات البيانات الكبيرة، وتحليل الأوراق البحثية، وتجميع المعلومات من مصادر متعددة، وتوليد تقارير مفصلة.",
            example: "قم بتغذية Claude بأوراق بحثية متعددة واطلب منه تحديد المواضيع المشتركة والتناقضات والفجوات البحثية."
          },
          {
            title: "الكتاب التقنيون",
            description: "إنشاء وثائق شاملة، ومراجع API، وأدلة مستخدم، ودروس تقنية بدقة ووضوح.",
            example: "قدم قاعدة الكود الخاصة بك واطلب من Claude إنشاء وثائق API مفصلة مع أمثلة الاستخدام."
          },
          {
            title: "القانون والامتثال",
            description: "مراجعة العقود، وتحليل وثائق السياسة، وضمان الامتثال للوائح من خلال تحليل الوثائق بعناية.",
            example: "قم بتحميل الوثائق القانونية واطلب من Claude تلخيص المصطلحات الرئيسية، أو تحديد المشكلات المحتملة، أو مقارنة الإصدارات."
          },
          {
            title: "استراتيجية الأعمال",
            description: "تطوير خطط استراتيجية، وتحليل فرص السوق، وإنشاء مقترحات أعمال مفصلة برؤية عميقة.",
            example: "شارك بيانات السوق واطلب من Claude إجراء تحليل SWOT أو تطوير استراتيجيات الذهاب إلى السوق."
          }
        ],
        howToUse: [
          {
            step: 1,
            title: "رفع المستندات",
            description: "ابدأ برفع الملفات ذات الصلة - ملفات PDF، ملفات الكود، أو المستندات النصية. يمكن لـ Claude معالجة ما يصل إلى 200 ألف رمز في السياق."
          },
          {
            step: 2,
            title: "اطرح أسئلة تحليلية",
            description: "اطلب التحليل أو الملخصات أو الرؤى. يتفوق Claude في تجميع المعلومات من مصادر متعددة."
          },
          {
            step: 3,
            title: "اطلب مخرجات مفصلة",
            description: "اطلب تقارير شاملة، أو تفسيرات مفصلة، أو تحليلاً متعمقًا. يتعامل Claude مع المحتوى الطويل بشكل جيد للغاية."
          },
          {
            step: 4,
            title: "كرر مع التعليقات",
            description: "نقح المخرجات من خلال تقديم التعليقات. يتكيف Claude جيدًا مع المتطلبات الدقيقة ويمكنه تعديل نهجه."
          },
          {
            step: 5,
            title: "استفد من السياق",
            description: "ابنِ محادثات معقدة بمرور الوقت. يحافظ Claude على السياق طوال المناقشات الطويلة."
          }
        ],
        bestPractices: [
          "قم بتحميل مستندات كاملة بدلاً من مقتطفات للحصول على أفضل تحليل",
          "اطلب التفكير والتفسير جنبًا إلى جنب مع الإجابات للشفافية",
          "استخدم Claude للمهام التي تتطلب دراسة متأنية وفهمًا دقيقًا",
          "استفد من السياق الممتد لمقارنة مستندات أو إصدارات متعددة",
          "اطلب مخرجات منظمة (مخططات، جداول، تقارير) للمعلومات المعقدة",
          "ادمج مصادر متعددة للتجميع والتحليل الشامل"
        ],
        pricing: {
          free: "الوصول إلى Claude مع حدود استخدام سخية",
          pro: "20 دولارًا/شهر لاستخدام أكثر بـ 5 أضعاف، وأولوية الوصول، والوصول المبكر للميزات",
          team: "30 دولارًا/مستخدم/شهر لمساحات العمل التعاونية والفواتير المركزية",
          enterprise: "تسعير مخصص للأمان المعزز، وحدود أعلى، ودعم مخصص"
        },
        pros: [
          "فهم استثنائي للسياق الطويل",
          "استجابات مدروسة ومبنية على المنطق",
          "قوي في المهام التحليلية المعقدة",
          "ممتاز للكتابة التقنية والاستراتيجية",
          "دقة عالية وهلوسة منخفضة"
        ],
        cons: [
          "أوقات استجابة أبطأ للاستفسارات المعقدة",
          "أقل مرحًا أو إبداعًا من بعض البدائل",
          "قد يكون حذرًا للغاية في بعض الاستجابات",
          "قدرات متعددة الوسائط محدودة مقارنة بالمنافسين"
        ]
      }
    }
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
    ],

    translations: {
      ar: {
        overview: "Gemini هو نموذج الذكاء الاصطناعي الأكثر قدرة من Google، المصمم ليكون متعدد الوسائط منذ البداية. يفهم ويولد النصوص والصور والأكواد والصوت والفيديو بسلاسة، مما يجعله مثاليًا للمهام التي تتطلب معالجة أنواع متعددة من المعلومات في وقت واحد.",
        keyFeatures: [
          {
            title: "فهم حقيقي متعدد الوسائط",
            description: "معالجة النصوص والصور والصوت والفيديو في وقت واحد. يفهم Gemini العلاقة بين الوسائط المختلفة بشكل أصلي."
          },
          {
            title: "تكامل Google",
            description: "تكامل عميق مع Google Workspace والبحث وخدمات Google الأخرى لتحسين الإنتاجية والبحث."
          },
          {
            title: "التحليل البصري",
            description: "تحليل الصور والمخططات والرسوم البيانية والمحتوى البصري بفهم متطور للعناصر البصرية والسياق."
          },
          {
            title: "معلومات في الوقت الفعلي",
            description: "الوصول إلى معلومات الويب الحالية من خلال تكامل بحث Google للحصول على استجابات محدثة والتحقق من الحقائق."
          },
          {
            title: "تفكير متقدم",
            description: "حل المشكلات المعقدة عبر الرياضيات والبرمجة ومهام التفكير المنطقي مع تفسيرات خطوة بخطوة."
          }
        ],
        useCases: [
          {
            title: "تحليل المحتوى البصري",
            description: "تحليل الصور والرسوم البيانية والمخططات. استخراج الرؤى من البيانات البصرية وفهم الصور المعقدة.",
            example: "قم بتحميل مخطط أو رسم بياني واطلب من Gemini شرح البيانات أو تحديد الاتجاهات أو تحويلها إلى نص منظم."
          },
          {
            title: "البحث وتجميع المعلومات",
            description: "الاستفادة من تكامل بحث Google للعثور على المعلومات الحالية، والتحقق من الادعاءات، وتجميع أبحاث الويب.",
            example: "اسأل عن الأحداث الأخيرة أو الاتجاهات الحالية أو تحقق من صحة المعلومات من خلال الوصول إلى الويب في الوقت الفعلي."
          },
          {
            title: "الدعم التعليمي",
            description: "التعلم من خلال تفسيرات متعددة الوسائط تجمع بين النص والمرئيات والتفكير خطوة بخطوة للمواضيع المعقدة.",
            example: "قم بتحميل مسألة رياضية من صورة كتاب مدرسي واحصل على حلول مفصلة خطوة بخطوة مع التفسيرات."
          },
          {
            title: "المشاريع الإبداعية",
            description: "توليد أفكار تجمع بين النص والعناصر البصرية، أو تحليل صور الإلهام، أو تخطيط محتوى متعدد الوسائط.",
            example: "اعرض صورًا مرجعية واطلب من Gemini المساعدة في تطوير مفاهيم إبداعية بناءً على الإلهام البصري."
          },
          {
            title: "معالجة المستندات",
            description: "استخراج المعلومات من لقطات الشاشة، وملفات PDF، والملاحظات المكتوبة بخط اليد، أو أي مستندات تستند إلى الصور.",
            example: "قم بتحميل الإيصالات أو النماذج أو الملاحظات المكتوبة بخط اليد واطلب من Gemini استخراج المعلومات وتنظيمها."
          }
        ],
        howToUse: [
          {
            step: 1,
            title: "رفع المحتوى البصري",
            description: "قم بسحب وإفلات الصور أو لقطات الشاشة أو المستندات. يمكن لـ Gemini تحليل صور متعددة في محادثة واحدة."
          },
          {
            step: 2,
            title: "اطرح أسئلة متعددة الوسائط",
            description: "اجمع بين الاستفسارات البصرية والنصية. اسأل عما في الصور، وكيف ترتبط بأسئلتك النصية، أو اطلب مقارنات."
          },
          {
            step: 3,
            title: "استفد من بحث Google",
            description: "اطرح أسئلة تتطلب معلومات حالية. سيبحث Gemini في الويب عند الحاجة ويستشهد بالمصادر."
          },
          {
            step: 4,
            title: "اطلب تحليلاً مفصلاً",
            description: "اطلب تفسيرات متعمقة للمحتوى البصري، أو حل المشكلات خطوة بخطوة، أو التحليل المقارن."
          },
          {
            step: 5,
            title: "تكامل مع Workspace",
            description: "استخدم Gemini داخل Gmail و Docs وتطبيقات Google الأخرى لتحسين الإنتاجية بسلاسة."
          }
        ],
        bestPractices: [
          "اجمع بين النص والصور في الاستفسارات للحصول على سياق أغنى ونتائج أفضل",
          "استخدم صورًا واضحة وعالية الجودة للحصول على أفضل فهم بصري",
          "اطلب من Gemini التحقق من المعلومات من خلال البحث في الويب للأحداث الجارية",
          "قسّم مهام التحليل البصري المعقدة إلى أسئلة محددة",
          "استفد من تكامل Google Workspace لسير العمل الإنتاجي",
          "اطلب الاستشهادات عند البحث للتحقق من مصادر المعلومات"
        ],
        pricing: {
          free: "الوصول إلى Gemini مع الميزات القياسية وتكامل بحث Google",
          advanced: "19.99 دولارًا/شهر لـ Gemini Advanced (نموذج Ultra)، وسعة تخزين 2 تيرابايت، وتكامل Workspace",
          business: "جزء من خطط Google Workspace مع ميزات مؤسسية إضافية",
          enterprise: "حلول مؤسسية مخصصة مع أمان ودعم معززين"
        },
        pros: [
          "فهم متعدد الوسائط هو الأفضل في فئته",
          "تكامل سلس مع نظام Google البيئي",
          "قدرات البحث في الويب في الوقت الفعلي",
          "تحليل بصري وصوري قوي",
          "ممتاز للبحث والتحقق من الحقائق"
        ],
        cons: [
          "قد يعطي الأولوية لمصادر Google في نتائج البحث",
          "أقل تخصصًا للمهام النصية البحتة مقارنة بالبدائل",
          "يمكن أن يكون أسلوب الاستجابة أكثر رسمية",
          "تخصيص محدود مقارنة ببعض المنافسين"
        ]
      }
    }
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
    ],

    translations: {
      ar: {
        overview: "GitHub Copilot هو مبرمجك المزدوج بالذكاء الاصطناعي الذي يعمل مباشرة في محرر الكود الخاص بك. مدعومًا بـ OpenAI Codex، يقترح سطورًا كاملة أو دوال بأكملها أثناء الكتابة، مما يسرع بشكل كبير سير عمل التطوير الخاص بك ويساعدك على كتابة كود أفضل وأسرع.",
        keyFeatures: [
          {
            title: "إكمال الكود المضمن",
            description: "احصل على اقتراحات كود ذكية أثناء الكتابة. يفهم Copilot السياق ويقترح دوال كاملة، وليس فقط مقتطفات."
          },
          {
            title: "دعم متعدد اللغات",
            description: "يعمل مع عشرات لغات البرمجة والأطر، من Python و JavaScript إلى Rust و Go."
          },
          {
            title: "توليد الاختبارات",
            description: "قم بإنشاء اختبارات الوحدات، واختبارات التكامل، وحالات الاختبار تلقائيًا بناءً على تنفيذ الكود الخاص بك."
          },
          {
            title: "ترجمة الكود",
            description: "تحويل الكود بين لغات البرمجة أو إعادة هيكلة الكود لاستخدام أنماط ونماذج مختلفة."
          },
          {
            title: "المساعدة في التوثيق",
            description: "إنشاء تعليقات الكود، وسلاسل الوثائق، والتوثيق بناءً على وظائف الكود الخاص بك."
          }
        ],
        useCases: [
          {
            title: "مطورو Full-Stack",
            description: "تسريع التطوير عبر الواجهة الأمامية والخلفية وقاعدة البيانات مع اقتراحات واعية بالسياق.",
            example: "ابدأ في كتابة مكون React ودع Copilot يقترح هيكل المكون الكامل مع الـ hooks وإدارة الحالة."
          },
          {
            title: "تعلم لغات جديدة",
            description: "اكتشف الأنماط وأفضل الممارسات الخاصة باللغة أثناء البرمجة في لغات أو أطر غير مألوفة.",
            example: "اكتب تعليقات تصف ما تريد القيام به، ويقترح Copilot الصيغة الصحيحة في لغتك المستهدفة."
          },
          {
            title: "كتابة الاختبارات",
            description: "أنشئ مجموعات اختبار شاملة بسرعة، بما في ذلك الحالات الحدية والسيناريوهات الشائعة التي قد تفوتك.",
            example: "اكتب توقيع دالة اختبار ودع Copilot يقترح حالات اختبار تغطي سيناريوهات مختلفة."
          },
          {
            title: "الكود المعياري (Boilerplate)",
            description: "تخلص من كتابة الكود المعياري الممل. يتعامل Copilot مع الأنماط المتكررة لكي تركز على المنطق الفريد.",
            example: "ابدأ نقطة نهاية API لعمليات CRUD ويقترح Copilot تطبيقات كاملة مع معالجة الأخطاء."
          },
          {
            title: "إعادة هيكلة الكود",
            description: "تحديث الكود القديم، أو تطبيق أنماط التصميم، أو تحسين الخوارزميات باقتراحات مدعومة بالذكاء الاصطناعي.",
            example: "حدد الكود القديم واطلب من Copilot إعادة هيكلته باستخدام أنماط أو أطر حديثة."
          }
        ],
        howToUse: [
          {
            step: 1,
            title: "تثبيت الامتداد",
            description: "أضف GitHub Copilot إلى المحرر الخاص بك (VS Code، JetBrains، Neovim، أو Visual Studio) وقم بتسجيل الدخول باستخدام حساب GitHub الخاص بك."
          },
          {
            step: 2,
            title: "اكتب تعليقات أو كود",
            description: "ابدأ بتعليقات وصفية أو ابدأ بكتابة الكود. يحلل Copilot السياق من ملفك الحالي ومساحة العمل."
          },
          {
            step: 3,
            title: "اقبل أو بدل الاقتراحات",
            description: "اضغط على Tab لقبول الاقتراحات أو استخدم اختصارات لوحة المفاتيح للتنقل بين الإكمالات البديلة."
          },
          {
            step: 4,
            title: "استخدم Copilot Chat",
            description: "اطرح أسئلة، أو اطلب تفسيرات، أو احصل على مساعدة في التصحيح من خلال واجهة الدردشة المدمجة."
          },
          {
            step: 5,
            title: "نقح وكرر",
            description: "قم بتحرير الاقتراحات لتناسب احتياجاتك. يتعلم Copilot من تعديلاتك ويحسن الاقتراحات بمرور الوقت."
          }
        ],
        bestPractices: [
          "اكتب أسماء دوال وتعليقات وصفية واضحة لتوجيه الاقتراحات",
          "راجع واختبر جميع الكود المقترح - تعامل مع Copilot كمطور مبتدئ",
          "استخدم Copilot Chat للأسئلة المعقدة أو عندما لا تكون الاقتراحات المضمنة صحيحة تمامًا",
          "قدم سياقًا من خلال التعليقات عند العمل على وظائف معقدة أو فريدة",
          "تنقل بين اقتراحات متعددة (Alt+[ و Alt+]) لرؤية نهج مختلفة",
          "حافظ على قاعدة الكود الخاصة بك نظيفة ومنظمة جيدًا للحصول على اقتراحات سياقية أفضل"
        ],
        pricing: {
          individual: "10 دولارات/شهر أو 100 دولار/سنة للمطورين الأفراد",
          business: "19 دولارًا/مستخدم/شهر للفرق مع إدارة مركزية وضوابط السياسة",
          enterprise: "39 دولارًا/مستخدم/شهر مع أمان معزز، وامتثال، وميزات مؤسسية",
          students: "مجاني للطلاب المعتمدين، والمعلمين، والمشرفين على المصادر المفتوحة"
        },
        pros: [
          "يسرع سير عمل البرمجة بشكل كبير",
          "ممتاز في توليد الكود المعياري والمتكرر",
          "يدعم مجموعة واسعة من اللغات والأطر",
          "مدمج مباشرة في المحرر المفضل لديك",
          "مفيد لتعلم لغات وأنماط جديدة"
        ],
        cons: [
          "يمكن أن يقترح أنماطًا دون المستوى الأمثل أو قديمة",
          "يتطلب مراجعة واختبار جميع الاقتراحات",
          "قد لا يفهم المنطق الخاص بالمجال المعقد",
          "تكلفة الاشتراك للمطورين الأفراد",
          "يمكن أن يجعلك تعتمد بشكل مفرط على مساعدة الذكاء الاصطناعي"
        ]
      }
    }
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
    ],

    translations: {
      ar: {
        overview: "Cursor هو محرر كود حديث مبني من الألف إلى الياء مع وجود الذكاء الاصطناعي في جوهره. إنه نسخة معدلة من VS Code تدمج قدرات الذكاء الاصطناعي المتقدمة بعمق في كل جانب من جوانب سير عمل البرمجة الخاص بك، من فهم قواعد الكود الكبيرة إلى إجراء تعديلات معقدة عبر ملفات متعددة.",
        keyFeatures: [
          {
            title: "فهم قاعدة الكود",
            description: "اطرح أسئلة حول قاعدة الكود بالكامل. يقوم Cursor بفهرسة الكود الخاص بك وفهم العلاقات بين الملفات والدوال."
          },
          {
            title: "تحرير متعدد الملفات",
            description: "قم بإجراء تغييرات منسقة عبر ملفات متعددة في وقت واحد باستخدام ذكاء اصطناعي يفهم هيكل مشروعك."
          },
          {
            title: "مساعدة الذكاء الاصطناعي المضمنة",
            description: "احصل على إكمال كود واعٍ بالسياق، واقتراحات إعادة الهيكلة، وإصلاحات الأخطاء أثناء الكتابة باستخدام Cmd+K."
          },
          {
            title: "الدردشة مع قاعدة الكود",
            description: "محادثات باللغة الطبيعية حول الكود الخاص بك مع سياق كامل للمشروع والقدرة على إجراء تعديلات مباشرة."
          },
          {
            title: "تصميم يراعي الخصوصية",
            description: "اختر وضع الخصوصية لمنع تخزين الكود الخاص بك أو استخدامه للتدريب، والحفاظ على الكود الخاص آمنًا."
          }
        ],
        useCases: [
          {
            title: "التنقل في قواعد الكود الكبيرة",
            description: "افهم وتنقل بسرعة في قواعد الكود المعقدة من خلال طرح أسئلة باللغة الطبيعية حول البنية والتدفق.",
            example: "اسأل 'كيف تعمل المصادقة في هذا التطبيق؟' ويعرض Cursor الملفات ذات الصلة مع التفسيرات."
          },
          {
            title: "مشاريع إعادة الهيكلة",
            description: "قم بإجراء عمليات إعادة هيكلة كبيرة عبر ملفات متعددة باستخدام ذكاء اصطناعي يفهم التبعيات ويحافظ على الاتساق.",
            example: "اطلب إعادة تسمية دالة أو تغيير هيكل API، ويقوم Cursor بتحديث جميع الملفات ذات الصلة."
          },
          {
            title: "إصلاح الأخطاء",
            description: "قم بتصحيح المشكلات بشكل أسرع من خلال مطالبة Cursor بتحليل رسائل الخطأ واقتراح إصلاحات مع وعي كامل بالسياق.",
            example: "الصق رسالة خطأ واطلب من Cursor العثور على المشكلة وإصلاحها عبر قاعدة الكود الخاصة بك."
          },
          {
            title: "تنفيذ الميزات",
            description: "قم ببناء ميزات جديدة بشكل أسرع باستخدام ذكاء اصطناعي يمكنه إنشاء هيكل الكود، وتنفيذ المنطق، وربط المكونات.",
            example: "صف ميزة جديدة ويقوم Cursor بإنشاء الملفات والمكونات والاتصالات اللازمة."
          },
          {
            title: "مراجعة الكود والتعلم",
            description: "تعلم من قواعد الكود أو التقنيات غير المألوفة من خلال مطالبة Cursor بشرح أقسام الكود والأنماط.",
            example: "اطلب من Cursor شرح كيفية عمل خوارزمية معقدة أو سبب استخدام أنماط معينة."
          }
        ],
        howToUse: [
          {
            step: 1,
            title: "تنزيل وتثبيت",
            description: "قم بتنزيل Cursor من cursor.sh. متاح لأنظمة macOS و Windows و Linux. يمكن استيراد إعدادات VS Code الخاصة بك."
          },
          {
            step: 2,
            title: "افتح مشروعك",
            description: "افتح أي قاعدة كود. سيقوم Cursor بفهرسة الكود الخاص بك لفهم الهيكل والتبعيات والعلاقات."
          },
          {
            step: 3,
            title: "استخدم Cmd+K للتعديلات",
            description: "قم بتمييز الكود واضغط على Cmd+K (Ctrl+K على Windows) لطلب تعديلات مضمنة أو إعادة هيكلة أو تحسينات."
          },
          {
            step: 4,
            title: "الدردشة حول الكود الخاص بك",
            description: "افتح لوحة الدردشة (Cmd+L) لطرح أسئلة حول قاعدة الكود الخاصة بك، أو طلب تفسيرات، أو تخطيط التنفيذ."
          },
          {
            step: 5,
            title: "دع الذكاء الاصطناعي يجري التغييرات",
            description: "راجع واقبل التغييرات المقترحة من الذكاء الاصطناعي. يمكن لـ Cursor تحرير ملفات متعددة ومعالجة عمليات إعادة الهيكلة المعقدة تلقائيًا."
          }
        ],
        bestPractices: [
          "استخدم @codebase في الدردشة للبحث عبر مشروعك بالكامل للحصول على سياق ذي صلة",
          "قم بتمكين وضع الخصوصية عند العمل مع كود حساس أو خاص",
          "راجع جميع التغييرات التي تم إنشاؤها بواسطة الذكاء الاصطناعي قبل الالتزام بالتحكم في الإصدار",
          "استخدم Cmd+K للتعديلات المركزة والمحددة والدردشة للأسئلة الأوسع",
          "قدم أوصافًا واضحة لما تريده للحصول على نتائج ذكاء اصطناعي أفضل",
          "حافظ على قاعدة الكود الخاصة بك منظمة بشكل جيد لفهم أمثل للذكاء الاصطناعي"
        ],
        pricing: {
          free: "500 إكمال ذكاء اصطناعي ورسائل دردشة مجانية (تتم إعادة تعيينها شهريًا)",
          pro: "20 دولارًا/شهر لإكمال غير محدود مع GPT-4 و Claude ونماذج أخرى",
          business: "40 دولارًا/مستخدم/شهر مع فواتير مركزية ولوحة تحكم إدارية وميزات الفريق",
          enterprise: "تسعير مخصص للأمان المعزز وامتثال SOC 2 ودعم مخصص"
        },
        pros: [
          "فهم عميق لقاعدة الكود والسياق",
          "قدرات تحرير سلسة لملفات متعددة",
          "واجهة VS Code مألوفة وامتدادات",
          "يركز على الخصوصية مع وضع محلي اختياري",
          "تحرير مضمن قوي باستخدام Cmd+K"
        ],
        cons: [
          "يتطلب التحول من المحرر الحالي الخاص بك",
          "حدود استخدام الذكاء الاصطناعي في الطبقة المجانية",
          "لا يزال قيد التطوير النشط مع وجود أخطاء عرضية",
          "منحنى التعلم للميزات الخاصة بالذكاء الاصطناعي",
          "تكلفة الاشتراك للميزات الكاملة"
        ]
      }
    }
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
    ],

    translations: {
      ar: {
        overview: "UX Pilot هو مساعد تصميم مدعوم بالذكاء الاصطناعي يساعدك على تصور تدفقات المستخدم بسرعة، وإنشاء إطارات سلكية، ورسم خرائط لحالات واجهة المستخدم. مثالي لمصممي المنتجات، وباحثي تجربة المستخدم، وأي شخص يحتاج إلى توصيل أفكار التصميم بسرعة دون البدء من الصفر.",
        keyFeatures: [
          {
            title: "تدفقات مستخدم فورية",
            description: "إنشاء مخططات تدفق مستخدم كاملة من أوصاف بسيطة لمنتجك أو ميزتك."
          },
          {
            title: "توليد الإطارات السلكية",
            description: "إنشاء إطارات سلكية منخفضة الدقة للشاشات والتفاعلات بناءً على متطلباتك وأفضل الممارسات."
          },
          {
            title: "رسم خرائط الحالات",
            description: "رسم خرائط تلقائية لحالات واجهة المستخدم المختلفة (التحميل، الخطأ، الفارغة، النجاح) لتغطية تصميم شاملة."
          },
          {
            title: "تكامل نظام التصميم",
            description: "تطبيق أنماط تصميم متسقة ومكتبات مكونات للحفاظ على التماسك البصري عبر الشاشات."
          },
          {
            title: "أدوات التعاون",
            description: "مشاركة التصاميم مع أعضاء الفريق، وجمع الملاحظات، والتكرار بسرعة مع ميزات التعاون المدمجة."
          }
        ],
        useCases: [
          {
            title: "مصممو المنتجات",
            description: "النمذجة السريعة لميزات جديدة، واستكشاف بدائل التصميم، وإنشاء مخططات تدفق شاملة لمراجعة أصحاب المصلحة.",
            example: "صف تدفق الدفع واحصل على إطارات سلكية فورية لكل خطوة بما في ذلك الحالات الحدية وحالات الخطأ."
          },
          {
            title: "مديرو المنتجات",
            description: "توصيل متطلبات المنتج بصريًا، وإنشاء قصص مستخدمين مع مراجع بصرية، ومواءمة الفرق حول نطاق الميزة.",
            example: "أنشئ إطارات سلكية لميزة جديدة لتضمينها في مستندات متطلبات المنتج واستخدمها لمناقشات النطاق التقني."
          },
          {
            title: "باحثو تجربة المستخدم",
            description: "إنشاء نماذج لاختبار المستخدم، وتصور نتائج البحث، ونمذجة الحلول بناءً على رؤى المستخدم.",
            example: "قم ببناء نماذج أولية منخفضة الدقة للاختبار مع المستخدمين قبل الاستثمار في تصميمات عالية الدقة."
          },
          {
            title: "مؤسسو الشركات الناشئة",
            description: "تصور أفكار المنتجات بسرعة، وإنشاء نماذج جاهزة للمستثمرين، وتكرار المفاهيم قبل توظيف مصممين.",
            example: "أنشئ تدفقات تطبيقات كاملة لتوصيل رؤيتك للمستثمرين أو أعضاء الفريق الأوائل."
          },
          {
            title: "فرق التصميم",
            description: "تسريع أعمال التصميم في المراحل المبكرة، والحفاظ على الاتساق عبر التدفقات، وتوثيق قرارات التصميم.",
            example: "أنشئ وثائق تصميم شاملة تظهر جميع الحالات والتدفقات لتسليم المطورين."
          }
        ],
        howToUse: [
          {
            step: 1,
            title: "صف ميزتك",
            description: "اكتب وصفًا لتدفق المستخدم أو الميزة التي تريد تصميمها. قم بتضمين الإجراءات الرئيسية ونقاط القرار."
          },
          {
            step: 2,
            title: "توليد التدفقات الأولية",
            description: "ينشئ UX Pilot مخططات تدفق مستخدم تظهر المسارات الرئيسية ونقاط القرار في تصميمك."
          },
          {
            step: 3,
            title: "إنشاء إطارات سلكية",
            description: "حدد التدفقات أو الحالات للتوسع في إطارات سلكية. يولد UX Pilot تخطيطات شاشة منخفضة الدقة."
          },
          {
            step: 4,
            title: "نقح وكرر",
            description: "قم بتحرير التصاميم التي تم إنشاؤها، وأضف تفاصيل، أو اطلب تنويعات. كرر حتى يلبي التصميم احتياجاتك."
          },
          {
            step: 5,
            title: "تصدير ومشاركة",
            description: "قم بتصدير التصاميم إلى Figma أو PDF أو ملفات صور. شارك مع أعضاء الفريق للملاحظات والتعاون."
          }
        ],
        bestPractices: [
          "ابدأ بأهداف مستخدم وتدفقات رئيسية واضحة قبل إضافة التفاصيل",
          "قم بتضمين الحالات الحدية وحالات الخطأ في أوصافك الأولية",
          "استخدم التدفقات التي تم إنشاؤها كنقاط بداية وقم بالتخصيص بناءً على علامتك التجارية",
          "أشرك أصحاب المصلحة مبكرًا من خلال مشاركة الإطارات السلكية التي تم إنشاؤها للملاحظات",
          "وثق قرارات التصميم جنبًا إلى جنب مع التدفقات التي تم إنشاؤها",
          "قم بالتصدير إلى أدوات احترافية مثل Figma لأعمال التصميم عالية الدقة"
        ],
        pricing: {
          free: "تدفقات وإطارات سلكية محدودة شهريًا مع خيارات تصدير أساسية",
          pro: "29 دولارًا/شهر لتدفقات غير محدودة، وتصدير متقدم، وميزات تعاون",
          team: "99 دولارًا/شهر لمساحات عمل الفريق، ومكتبات مشتركة، وضوابط إدارية",
          enterprise: "تسعير مخصص للوصول إلى API، وتسجيل الدخول الموحد، ودعم مخصص"
        },
        pros: [
          "سريع للغاية لاستكشاف التصميم الأولي",
          "يساعد على ضمان تغطية شاملة للحالات",
          "رائع لغير المصممين لتوصيل الأفكار",
          "يقلل الوقت من المفهوم إلى النموذج الأولي",
          "يشجع على التفكير في تدفقات المستخدم الكاملة"
        ],
        cons: [
          "قد تحتاج التصاميم التي تم إنشاؤها إلى تخصيص كبير",
          "ليس بديلاً عن أدوات التصميم عالية الدقة",
          "تخصيص محدود للأسلوب البصري",
          "الأفضل للأنماط القياسية، وأقل فائدة للواجهات الجديدة",
          "يتطلب التصدير إلى أدوات أخرى لتصاميم الإنتاج"
        ]
      }
    }
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
    ],

    translations: {
      ar: {
        overview: "DeepSeek هو نموذج ذكاء اصطناعي مفتوح المصدر متقدم ومحسن للمهام التقنية وتوليد الكود والبحث. تم بناؤه مع وضع الكفاءة في الاعتبار، ويوفر استجابات سريعة ودقيقة مع التحلي بالشفافية حول قدراته وقيوده.",
        keyFeatures: [
          {
            title: "توليد الكود",
            description: "إنشاء كود عالي الجودة عبر لغات برمجة متعددة مع فهم قوي للخوارزميات وهياكل البيانات."
          },
          {
            title: "التوثيق التقني",
            description: "إنشاء وثائق تقنية واضحة وشاملة، ومراجع API، وتفسيرات للكود."
          },
          {
            title: "المساعدة في البحث",
            description: "المساعدة في البحث التقني، وتحليل الأوراق، وتجميع المعلومات التقنية المعقدة."
          },
          {
            title: "تحسين الأداء",
            description: "تجعل سرعات الاستدلال السريعة DeepSeek مثاليًا للمساعدة في البرمجة في الوقت الفعلي والتكرار السريع."
          },
          {
            title: "شفافية المصدر المفتوح",
            description: "تسمح أوزان النموذج المفتوحة وأساليب التدريب بالتخصيص والشفافية."
          }
        ],
        useCases: [
          {
            title: "مهندسو البرمجيات",
            description: "الحصول على مساعدة في البرمجة، وتنفيذ الخوارزميات، ودعم حل المشكلات التقنية.",
            example: "اطلب تنفيذ خوارزميات معقدة أو هياكل بيانات مع تحليل تعقيد الوقت."
          },
          {
            title: "علماء البيانات",
            description: "توليد كود تحليل البيانات، والنماذج الإحصائية، ونصوص التصور بكفاءة.",
            example: "أنشئ خطوط أنابيب كاملة لتحليل البيانات من معالجة البيانات الخام إلى التصور."
          },
          {
            title: "الباحثون التقنيون",
            description: "تحليل الأوراق البحثية، وتنفيذ الخوارزميات من الأوراق، واستكشاف المفاهيم التقنية.",
            example: "حول الأوصاف الرياضية من الأوراق البحثية إلى تطبيقات كود عاملة."
          },
          {
            title: "المساهمون في المصادر المفتوحة",
            description: "الاستفادة من الذكاء الاصطناعي مفتوح المصدر للمشاريع دون التقيد بالمورد أو قيود الاستخدام.",
            example: "ادمج DeepSeek في أدواتك وسير عملك الخاصة مع تحكم كامل."
          },
          {
            title: "الطلاب والمعلمون",
            description: "تعلم مفاهيم البرمجة، وفهم الخوارزميات، والحصول على دعم تعليمي للبرمجة.",
            example: "احصل على تفسيرات خطوة بخطوة لكيفية عمل الخوارزميات مع أمثلة للتنفيذ."
          }
        ],
        howToUse: [
          {
            step: 1,
            title: "الوصول إلى المنصة",
            description: "قم بزيارة deepseek.com أو استخدم API للتكامل في أدواتك وسير عملك."
          },
          {
            step: 2,
            title: "صف مهمتك",
            description: "صف المهمة التقنية بوضوح، بما في ذلك تفضيلات اللغة والقيود والمتطلبات."
          },
          {
            step: 3,
            title: "راجع الكود الذي تم إنشاؤه",
            description: "افحص مخرجات الكود، مع الانتباه إلى خيارات الخوارزميات، والكفاءة، والحالات الحدية."
          },
          {
            step: 4,
            title: "نقح وكرر",
            description: "اطلب تعديلات أو تحسينات أو مناهج بديلة حسب الحاجة."
          },
          {
            step: 5,
            title: "اختبر وتحقق",
            description: "اختبر دائمًا الكود الذي تم إنشاؤه بدقة مع اختبارات الوحدات والحالات الحدية."
          }
        ],
        bestPractices: [
          "حدد لغة البرمجة والإصدار وأي قيود إطار عمل بوضوح",
          "اطلب تفسيرات مع الكود لفهم أفضل",
          "اختبر جميع الكود الذي تم إنشاؤه بحالات اختبار شاملة",
          "استخدمه للتعلم والمرجع، وليس فقط لنسخ الحلول ولصقها",
          "تحقق من ادعاءات تعقيد الخوارزميات بتحليلك الخاص",
          "ضع في اعتبارك طبيعة المصدر المفتوح للمشاريع التي تتطلب شفافية النموذج"
        ],
        pricing: {
          free: "وصول مجاني إلى النموذج من خلال واجهة الويب مع حدود للاستخدام",
          api: "دفع مقابل استخدام API بأسعار تنافسية",
          selfHosted: "مجاني للتنزيل والتشغيل على بنيتك التحتية الخاصة برخصة مفتوحة المصدر",
          enterprise: "حلول مخصصة لعمليات النشر واسعة النطاق والدعم"
        },
        pros: [
          "مفتوح المصدر وشفاف",
          "ممتاز للمهام التقنية والبرمجة",
          "سرعات استدلال سريعة",
          "لا يوجد تقيد بمورد",
          "معرفة قوية بالخوارزميات وهياكل البيانات"
        ],
        cons: [
          "أقل شهرة من البدائل التجارية",
          "نظام بيئي ومجتمع أصغر",
          "قد يتطلب المزيد من المعرفة التقنية للاستضافة الذاتية",
          "واجهة أقل صقلًا من المنتجات التجارية",
          "تكاملات أقل مع الأدوات السائدة"
        ]
      }
    }
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
    ],

    translations: {
      ar: {
        overview: "Lovable هو منشئ تطبيقات مدعوم بالذكاء الاصطناعي يحول الأوصاف باللغة الطبيعية إلى تطبيقات كاملة الوظائف. من مخططات قواعد البيانات إلى مكونات الواجهة الأمامية، يتعامل Lovable مع مكدس التطوير بأكمله، مما يتيح لك التركيز على رؤية منتجك.",
        keyFeatures: [
          {
            title: "توليد كامل المكدس (Full-Stack)",
            description: "إنشاء تطبيقات كاملة مع الواجهة الأمامية والخلفية وقاعدة البيانات والمصادقة من مطالبات اللغة الطبيعية."
          },
          {
            title: "تطوير تكراري",
            description: "نقح ووسع تطبيقك باستمرار من خلال تكرارات المحادثة دون البدء من جديد."
          },
          {
            title: "مكدس تقني حديث",
            description: "مبني على أطر عمل حديثة وأفضل الممارسات بما في ذلك React و Node.js وقواعد البيانات الشائعة."
          },
          {
            title: "نشر فوري",
            description: "انشر تطبيقك فورًا مع استضافة مدمجة وخطوط أنابيب النشر المستمر."
          },
          {
            title: "الوصول إلى الكود",
            description: "وصول كامل إلى الكود الذي تم إنشاؤه للتخصيص أو التعلم أو الانتقال إلى بنيتك التحتية الخاصة."
          }
        ],
        useCases: [
          {
            title: "المنتجات الأولية للشركات الناشئة (MVPs)",
            description: "بناء منتجات الحد الأدنى القابلة للتطبيق بسرعة للتحقق من الأفكار والحصول على تعليقات المستخدمين بشكل أسرع.",
            example: "أنشئ تطبيق SaaS كامل مع مصادقة المستخدم ولوحات المعلومات وقاعدة البيانات في ساعات وليس أسابيع."
          },
          {
            title: "الأدوات الداخلية",
            description: "إنشاء أدوات أعمال داخلية مخصصة، ولوحات إدارة، وتطبيقات أتمتة سير العمل.",
            example: "أنشئ CRM مخصصًا أو أداة إدارة مشاريع مصممة خصيصًا لاحتياجات فريقك المحددة."
          },
          {
            title: "النماذج الأولية",
            description: "نمذجة الأفكار بسرعة لعروض العملاء، أو عروض المستثمرين، أو جلسات اختبار المستخدم.",
            example: "حول فكرة منتج إلى عرض تجريبي عملي لعرضه على أصحاب المصلحة قبل التطوير الكامل."
          },
          {
            title: "مشاريع التعلم",
            description: "بناء تطبيقات حقيقية أثناء تعلم تطوير الويب الكامل من خلال فحص الكود الذي تم إنشاؤه.",
            example: "أنشئ مشاريع لإضافتها إلى محفظتك أثناء تعلم ممارسات التطوير الحديثة."
          },
          {
            title: "التطوير السريع",
            description: "تسريع جداول التطوير لتطبيقات CRUD القياسية وسير عمل الأعمال الشائع.",
            example: "أنشئ أساس التطبيق وخصص الأجزاء الفريدة يدويًا."
          }
        ],
        howToUse: [
          {
            step: 1,
            title: "صف تطبيقك",
            description: "اكتب وصفًا مفصلاً لفكرة تطبيقك، بما في ذلك الميزات وأنواع المستخدمين وسير العمل الرئيسي."
          },
          {
            step: 2,
            title: "راجع البناء الأولي",
            description: "يولد Lovable هيكل التطبيق ومخطط قاعدة البيانات والميزات الأساسية. راجع الإصدار الأولي."
          },
          {
            step: 3,
            title: "نقح وكرر",
            description: "اطلب تغييرات، أو أضف ميزات، أو عدل السلوك من خلال اللغة الطبيعية. يقوم Lovable بتحديث التطبيق وفقًا لذلك."
          },
          {
            step: 4,
            title: "اختبر تطبيقك",
            description: "استخدم المعاينة الحية لاختبار الوظائف وتحديد المشكلات واستكشاف تجربة المستخدم."
          },
          {
            step: 5,
            title: "انشر أو صدر",
            description: "انشر مباشرة من خلال Lovable أو صدر الكود إلى المستودع والاستضافة الخاصة بك."
          }
        ],
        bestPractices: [
          "ابدأ بوصف واضح للميزات الأساسية قبل إضافة التعقيد",
          "اختبر بدقة بعد كل تكرار لاكتشاف المشكلات مبكرًا",
          "استخدم الكود الذي تم إنشاؤه كمورد تعليمي لفهم الأنماط",
          "خطط لنموذج بياناتك بعناية حيث يؤثر على هيكل التطبيق بأكمله",
          "خصص الكود الذي تم إنشاؤه لمنطق الأعمال الفريد والعلامة التجارية",
          "ضع في اعتبارك الآثار الأمنية وأضف مصادقة/تحقق مخصص حسب الحاجة"
        ],
        pricing: {
          free: "تطبيقات وتكرارات محدودة شهريًا مع ميزات أساسية",
          pro: "49 دولارًا/شهر لتطبيقات غير محدودة، وميزات متقدمة، ونطاقات مخصصة",
          team: "149 دولارًا/شهر لتعاون الفريق، ومساحات العمل المشتركة، ودعم الأولوية",
          enterprise: "تسعير مخصص للحلول ذات العلامة البيضاء، وتسجيل الدخول الموحد، والبنية التحتية المخصصة"
        },
        pros: [
          "سريع للغاية من الفكرة إلى التطبيق العملي",
          "تحكم كامل مع تصدير الكود",
          "مكدس تقني حديث وجاهز للإنتاج",
          "رائع للمنتجات الأولية والنماذج الأولية",
          "يقلل الحاجة إلى أعمال التطوير للمبتدئين"
        ],
        cons: [
          "قد يحتاج الكود الذي تم إنشاؤه إلى إعادة هيكلة للتطبيقات المعقدة",
          "مقصور على الأطر والأنماط المدعومة",
          "ليس مثاليًا للهندسة المعمارية المخصصة للغاية أو الجديدة",
          "قد يتطلب معرفة بالتطوير للتخصيص",
          "تكلفة الاشتراك للاستخدام الجاد"
        ]
      }
    }
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
    ],

    translations: {
      ar: {
        overview: "OpenAI Codex هو نظام الذكاء الاصطناعي الذي يشغل GitHub Copilot ويمثل قدرات توليد كود متطورة. بينما يتوفر Codex نفسه بشكل أساسي من خلال التكاملات، فإنه يمثل أساس أدوات التطوير الحديثة المساعدة بالذكاء الاصطناعي.",
        keyFeatures: [
          {
            title: "فهم متقدم للكود",
            description: "فهم عميق لصيغة الكود، ودلالاته، ومفاهيم البرمجة عبر عشرات اللغات."
          },
          {
            title: "من اللغة الطبيعية إلى الكود",
            description: "ترجمة الأوصاف الإنجليزية إلى كود عملي بدقة عالية وأفضل الممارسات المناسبة."
          },
          {
            title: "ترجمة الكود",
            description: "تحويل الكود بين لغات البرمجة مع الحفاظ على المنطق والتكيف مع مصطلحات اللغة."
          },
          {
            title: "اكتشاف الأخطاء",
            description: "تحديد الأخطاء المحتملة، والمشكلات الأمنية، ورائحة الكود مع تفسيرات سياقية."
          },
          {
            title: "تكامل API",
            description: "متاح عبر API لبناء أدوات تطوير مخصصة وسير عمل."
          }
        ],
        useCases: [
          {
            title: "أدوات تطوير مخصصة",
            description: "بناء مساعدي برمجة متخصصين، أو إضافات IDE، أو أتمتة سير عمل التطوير باستخدام Codex API.",
            example: "أنشئ أداة مراجعة كود مخصصة تتحقق من الأنماط والمعايير الخاصة بالمشروع."
          },
          {
            title: "توثيق الكود",
            description: "توليد توثيق شامل، وتعليقات، وتفسيرات لقواعد الكود الحالية تلقائيًا.",
            example: "قم بتغذية الكود القديم لـ Codex وتوليد توثيق مفصل يشرح الوظائف."
          },
          {
            title: "منصات التعلم",
            description: "تشغيل منصات تعليم البرمجة التفاعلية بتلميحات وحلول وتفسيرات في الوقت الفعلي.",
            example: "بناء منصة دروس برمجة حيث يحصل الطلاب على مساعدة وتعليقات مدعومة بالذكاء الاصطناعي."
          },
          {
            title: "أتمتة التطوير",
            description: "أتمتة مهام البرمجة المتكررة، وتوليد الكود المعياري، وعمليات إعادة الهيكلة الشائعة.",
            example: "أنشئ نصوصًا تولد تلقائيًا عمليات CRUD أو نقاط نهاية API أو هياكل اختبار."
          },
          {
            title: "أدوات تحليل الكود",
            description: "بناء أدوات تحليل ثابتة، أو مدققات جودة الكود، أو ماسحات الثغرات الأمنية.",
            example: "تطوير أدوات تحلل الكود لمشكلات الأداء أو الثغرات الأمنية."
          }
        ],
        howToUse: [
          {
            step: 1,
            title: "احصل على وصول API",
            description: "سجل للحصول على وصول OpenAI API واحصل على مفتاح API الخاص بك لنقاط نهاية Codex."
          },
          {
            step: 2,
            title: "اختر التكامل الخاص بك",
            description: "قرر ما إذا كنت ستستخدم Codex من خلال أدوات موجودة مثل Copilot أو بناء تكاملات مخصصة."
          },
          {
            step: 3,
            title: "صغ مطالبات واضحة",
            description: "اكتب أوصافًا دقيقة باللغة الطبيعية أو قدم سياق الكود للمهمة التي تريد إنجازها."
          },
          {
            step: 4,
            title: "عالج النتائج",
            description: "حلل وتحقق من الكود الذي تم إنشاؤه، وقم بدمجه في سير عملك أو أداتك."
          },
          {
            step: 5,
            title: "كرر وحسن",
            description: "نقح مطالباتك وتكاملك بناءً على النتائج لتحسين جودة المخرجات."
          }
        ],
        bestPractices: [
          "قدم مطالبات واضحة ومحددة مع أمثلة عندما يكون ذلك ممكنًا",
          "قم بتضمين سياق حول لغة البرمجة والإطار والأهداف",
          "تحقق دائمًا واختبر الكود الذي تم إنشاؤه قبل استخدامه في الإنتاج",
          "استخدمه للكود المعياري والأنماط القياسية؛ راجع بعناية للمنطق المعقد",
          "ضع في اعتبارك حدود المعدل والتكاليف عند بناء تكاملات API",
          "اجمع مع مراجعة الكود البشري للتطبيقات الحساسة"
        ],
        pricing: {
          api: "تسعير الدفع لكل استخدام بناءً على الرموز المعالجة (يختلف التسعير حسب النموذج)",
          enterprise: "خصومات الحجم والسعة المخصصة لعمليات النشر واسعة النطاق",
          copilot: "الوصول إلى Codex من خلال اشتراك GitHub Copilot (10-39 دولارًا/شهر حسب الخطة)",
          custom: "اتفاقيات مخصصة لحالات الاستخدام المتخصصة والتكاملات"
        },
        pros: [
          "قدرات توليد كود قوية",
          "يدعم العديد من لغات البرمجة",
          "متاح عبر API للأدوات المخصصة",
          "أساس لأدوات مثبتة مثل Copilot",
          "ممتاز للكود المعياري والأنماط القياسية"
        ],
        cons: [
          "متاح بشكل أساسي من خلال التكاملات",
          "يتطلب وصول API تكاملاً تقنيًا",
          "يمكن أن يكون الدفع لكل استخدام مكلفًا للاستخدام المكثف",
          "يتطلب تحققًا دقيقًا من المخرجات",
          "ليس منتجًا مستقلاً لمعظم المستخدمين"
        ]
      }
    }
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