/**
 * AI_STAGES represents the 6 phases of the AI-driven Website Development Framework.
 * Each phase references tool keys from the existing toolsData.js file.
 */
export const AI_STAGES = [
  {
    id: "strategy",
    title: "Product Strategy & Planning",
    theShift: "From manual market research and static PRDs to AI-synthesized roadmaps and automated requirement generation.",
    phaseGoals: [
      "Define project scope using AI market analysis",
      "Generate comprehensive PRDs and User Stories",
      "Automate competitive landscape mapping"
    ],
    prerequisites: [
      "Core business objectives",
      "Target audience definitions",
      "Initial feature wishlist"
    ],
    finalProductBenefit: "A data-backed roadmap that reduces 'requirements churn' by 40% and ensures market alignment.",
    toolKeys: ["chatgpt", "claude", "gemini"]
  },
  {
    id: "design",
    title: "UI/UX Design & Prototyping",
    theShift: "From blank-canvas wireframing to Generative UI and instant design-to-code translations.",
    phaseGoals: [
      "Generate high-fidelity UI mockups from text prompts",
      "Automate accessible color palette and typography scaling",
      "Create interactive prototypes for user testing"
    ],
    prerequisites: [
      "Approved PRD from Phase 1",
      "Brand identity guidelines",
      "User flow diagrams"
    ],
    finalProductBenefit: "Rapid prototyping cycles that allow for 5x more design iterations in the same timeframe.",
    toolKeys: ["uxpilot", "chatgpt"]
  },
  {
    id: "development",
    title: "Development & Agentic Coding",
    theShift: "From manual syntax writing to high-level system architecture design assisted by autonomous coding agents.",
    phaseGoals: [
      "Implement core features with AI-pair programming",
      "Generate boilerplate and repetitive logic via LLMs",
      "Refactor legacy code for modern performance standards"
    ],
    prerequisites: [
      "Design systems/Figma exports",
      "Technical stack selection",
      "Development environment setup"
    ],
    finalProductBenefit: "A production-ready codebase built with 60% faster velocity and standardized code quality.",
    toolKeys: ["cursor", "copilot", "lovable", "deepseek", "codex"]
  },
  {
    id: "qa",
    title: "Quality Assurance & Automated Testing",
    theShift: "From manual test script maintenance to self-healing automated test suites and AI bug detection.",
    phaseGoals: [
      "Generate automated E2E and Unit test cases",
      "Perform AI-driven edge-case simulation",
      "Automate visual regression testing"
    ],
    prerequisites: [
      "Functional feature components",
      "Staging environment",
      "Initial test plan"
    ],
    finalProductBenefit: "99.9% stable deployments with tests that evolve automatically alongside your code changes.",
    toolKeys: ["deepseek", "copilot", "chatgpt"]
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    theShift: "From complex CLI configurations to Natural Language Cloud Management and automated scaling.",
    phaseGoals: [
      "Provision infrastructure using AI-generated IaC (Terraform/Pulumi)",
      "Optimize server resource allocation via predictive analytics",
      "Automate CI/CD pipeline troubleshooting"
    ],
    prerequisites: [
      "Cloud provider account (AWS/GCP/Azure)",
      "Containerization strategy",
      "Security compliance requirements"
    ],
    finalProductBenefit: "Zero-touch infrastructure that scales based on demand while minimizing cloud spend.",
    toolKeys: ["claude", "codex"]
  },
  {
    id: "maintenance",
    title: "Maintenance & Documentation",
    theShift: "From outdated READMEs to live, AI-powered code knowledge bases and automated technical debt mapping.",
    phaseGoals: [
      "Generate live-syncing technical documentation",
      "Perform continuous AI security vulnerability audits",
      "Automate dependency updates and impact analysis"
    ],
    prerequisites: [
      "Live production environment",
      "Incident report logs",
      "Version control history"
    ],
    finalProductBenefit: "A perpetually documented codebase that eliminates onboarding friction for new developers.",
    toolKeys: ["gemini", "claude", "cursor"]
  }
];

const translations = {
  strategy: {
    ar: {
      title: "استراتيجية المنتج والتخطيط",
      theShift: "من أبحاث السوق اليدوية ووثائق المتطلبات الثابتة إلى خرائط طريق مولدة بالذكاء الاصطناعي وتوليد المتطلبات آلياً.",
      phaseGoals: [
        "تحديد نطاق المشروع باستخدام تحليل السوق بالذكاء الاصطناعي",
        "توليد وثائق متطلبات وقصص مستخدمين شاملة",
        "أتمتة رسم خريطة المنافسين"
      ],
      prerequisites: [
        "أهداف العمل الأساسية",
        "تعريف الجمهور المستهدف",
        "قائمة الميزات الأولية"
      ],
      finalProductBenefit: "خارطة طريق مدعومة بالبيانات تقلل 'تغيير المتطلبات' بنسبة 40% وتضمن توافق السوق."
    }
  },
  design: {
    ar: {
      title: "تصميم واجهة وتجربة المستخدم والنماذج الأولية",
      theShift: "من التخطيط الهيكلي على لوحة بيضاء إلى واجهات مولدة ومترجمة فورياً إلى كود.",
      phaseGoals: [
        "توليد نماذج واجهات عالية الدقة من النصوص",
        "أتمتة لوحات الألوان والخطوط المتوافقة",
        "إنشاء نماذج أولية تفاعلية لاختبار المستخدم"
      ],
      prerequisites: [
        "وثيقة المتطلبات المعتمدة من المرحلة 1",
        "إرشادات هوية العلامة التجارية",
        "مخططات تدفق المستخدم"
      ],
      finalProductBenefit: "دورات نماذج أولية سريعة تسمح بـ 5 أضعاف تكرارات التصميم في نفس الإطار الزمني."
    }
  },
  development: {
    ar: {
      title: "التطوير والبرمجة بالوكلاء الذكية",
      theShift: "من كتابة التعليمات البرمجية يدوياً إلى تصميم بنية النظام بمساعدة وكلاء البرمجة المستقلين.",
      phaseGoals: [
        "تنفيذ الميزات الأساسية بمساعدة البرمجة الزوجية بالذكاء الاصطناعي",
        "توليد الكود الروتيني والمنطق المكرر عبر النماذج اللغوية",
        "إعادة هيكلة الكود القديم لمعايير الأداء الحديثة"
      ],
      prerequisites: [
        "أنظمة التصميم/تصديرات Figma",
        "اختيار التقنيات البرمجية",
        "إعداد بيئة التطوير"
      ],
      finalProductBenefit: "قاعدة برمجية جاهزة للإنتاج تم إنشاؤها بسرعة أكبر بنسبة 60% وجودة كود موحدة."
    }
  },
  qa: {
    ar: {
      title: "ضمان الجودة والاختبار الآلي",
      theShift: "من صيانة نصوص الاختبار اليدوية إلى أجنحة اختبار ذاتية الإصلاح واكتشاف الأخطاء بالذكاء الاصطناعي.",
      phaseGoals: [
        "توليد حالات اختبار شاملة ووحدات آلياً",
        "محاكاة الحالات النادرة بالذكاء الاصطناعي",
        "أتمتة اختبار الانحدار البصري"
      ],
      prerequisites: [
        "مكونات الميزات الوظيفية",
        "بيئة التجربة (Staging)",
        "خطة الاختبار الأولية"
      ],
      finalProductBenefit: "نشر مستقر بنسبة 99.9% مع اختبارات تتطور تلقائياً جنباً إلى جنب مع تغييرات الكود."
    }
  },
  devops: {
    ar: {
      title: "العمليات (DevOps) والبنية التحتية",
      theShift: "من تكوينات سطر الأوامر المعقدة إلى إدارة السحابة باللغة الطبيعية والتوسع الآلي.",
      phaseGoals: [
        "توفير البنية التحتية باستخدام الكود المولد بالذكاء الاصطناعي (Terraform/Pulumi)",
        "تحسين تخصيص موارد الخادم عبر التحليلات التنبؤية",
        "أتمتة استكشاف أخطاء خطوط النشر (CI/CD)"
      ],
      prerequisites: [
        "حساب مزود السحاب (AWS/GCP/Azure)",
        "استراتيجية الحاويات (Containerization)",
        "متطلبات الامتثال الأمني"
      ],
      finalProductBenefit: "بنية تحتية بدون تدخل يدوي تتوسع بناءً على الطلب مع تقليل تكاليف السحابة."
    }
  },
  maintenance: {
    ar: {
      title: "الصيانة والتوثيق",
      theShift: "من ملفات README القديمة إلى قواعد معرفة حية للكود وخرائط ديون تقنية آلية.",
      phaseGoals: [
        "توليد توثيق تقني متزامن وحي",
        "إجراء تدقيقات أمنية مستمرة بالذكاء الاصطناعي",
        "أتمتة تحديثات التبعيات وتحليل التأثير"
      ],
      prerequisites: [
        "بيئة إنتاج حية",
        "سجلات تقارير الحوادث",
        "تاريخ التحكم في الإصدار"
      ],
      finalProductBenefit: "قاعدة برمجية موثقة بشكل دائم تقضي على صعوبات انضمام المطورين الجدد."
    }
  }
};

export const getTranslatedStages = (language = 'en') => {
  if (language === 'en') return AI_STAGES;
  
  return AI_STAGES.map(stage => {
    const trans = translations[stage.id]?.[language];
    if (!trans) return stage;
    return { ...stage, ...trans };
  });
};

export const getTranslatedStage = (id, language = 'en') => {
  const stage = AI_STAGES.find(s => s.id === id);
  if (!stage) return null;
  
  const trans = translations[id]?.[language];
  if (!trans || language === 'en') return stage;
  
  return { ...stage, ...trans };
};