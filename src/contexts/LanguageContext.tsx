import React, { createContext, useContext, useState } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    'nav.title': 'ABO FAHD',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'التواصل',
    
    'hero.title': 'ABO FAHD',
    'hero.subtitle': 'مطور سيرفرات شامل | معماري إطار عمل | متخصص واجهات المستخدم',
    'hero.button1': 'عرض أعمالي',
    'hero.button2': 'تواصل معي',
    'hero.scroll': '↓ مرر للأسفل ↓',
    
    'skills.title': 'المهارات التقنية',
    'skills.backend': 'Backend',
    'skills.backend.items': 'برمجة Lua,تطوير C#,تصميم قواعد البيانات,تطوير API',
    'skills.frontend': 'Frontend',
    'skills.frontend.items': 'React/Vue,تطوير NUI,تصميم واجهات,حركات متقدمة',
    'skills.devops': 'DevOps',
    'skills.devops.items': 'إدارة السيرفرات,تحسين الأداء,الأمان,النشر والتطبيق',
    'skills.gaming': 'Gaming',
    'skills.gaming.items': 'خبرة FiveM,ميكانيكا اللعبة,تجربة اللاعب,التوازن',
    
    'projects.title': 'المشاريع المميزة',
    'projects.p1.title': 'إطار عمل FiveM متقدم',
    'projects.p1.desc': 'إطار عمل مخصص بأداء محسّن وقدرات برمجية واسعة',
    'projects.p2.title': 'نظام إدارة السيرفر',
    'projects.p2.desc': 'لوحة تحكم كاملة مع مراقبة فورية وإدارة اللاعبين',
    'projects.p3.title': 'نظام الاقتصاد والأعمال',
    'projects.p3.desc': 'نظام اقتصادي متكامل مع الأعمال والوظائف وآليات التداول',
    'projects.p4.title': 'إطار عمل واجهات مستخدم مخصص',
    'projects.p4.desc': 'نظام واجهات حديث مع تكامل React وتصميم متجاوب',
    
    'contact.title': 'تواصل معي',
    'contact.discord': 'ديسكورد',
    'contact.discord_handle': 'ab0_fahd',
    
    'footer.copyright': '© 2024 ABO FAHD - FiveM Developer. جميع الحقوق محفوظة.',
    'footer.note': 'تم بناؤه بشغف لمجتمع FiveM',
    'music.toggle': 'الموسيقى',
  },
  en: {
    'nav.title': 'ABO FAHD',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    'hero.title': 'ABO FAHD',
    'hero.subtitle': 'Full Stack Server Developer | Framework Architect | UI/UX Specialist',
    'hero.button1': 'View My Work',
    'hero.button2': 'Get In Touch',
    'hero.scroll': '↓ Scroll to explore ↓',
    
    'skills.title': 'Technical Skills',
    'skills.backend': 'Backend',
    'skills.backend.items': 'Lua Scripting,C# Development,Database Design,API Development',
    'skills.frontend': 'Frontend',
    'skills.frontend.items': 'React/Vue,NUI Development,UI Design,Animations',
    'skills.devops': 'DevOps',
    'skills.devops.items': 'Server Management,Performance Optimization,Security,Deployment',
    'skills.gaming': 'Gaming',
    'skills.gaming.items': 'FiveM Expertise,Game Mechanics,Player Experience,Balancing',
    
    'projects.title': 'Featured Projects',
    'projects.p1.title': 'Advanced FiveM Framework',
    'projects.p1.desc': 'Custom framework with optimized performance and extensive scripting capabilities',
    'projects.p2.title': 'Server Management System',
    'projects.p2.desc': 'Complete admin panel with real-time monitoring and player management',
    'projects.p3.title': 'Economy & Business System',
    'projects.p3.desc': 'Full-featured economy system with businesses, jobs, and trading mechanics',
    'projects.p4.title': 'Custom UI Framework',
    'projects.p4.desc': 'Modern UI system with React integration and responsive design',
    
    'contact.title': 'Get In Touch',
    'contact.discord': 'Discord',
    'contact.discord_handle': 'ab0_fahd',
    
    'footer.copyright': '© 2024 ABO FAHD - FiveM Developer. All rights reserved.',
    'footer.note': 'Built with passion for the FiveM community',
    'music.toggle': 'Music',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
