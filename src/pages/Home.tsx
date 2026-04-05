import { Button } from "@/components/ui/button";
import { MessageCircle, ExternalLink, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import AudioPlayer from "@/components/AudioPlayer";

/**
 * FiveM Developer Portfolio - Cyberpunk Neon Design
 * 
 * Design Philosophy:
 * - Dark cyberpunk aesthetic with neon cyan (#00d4ff) and magenta (#ff00ff) accents
 * - High-tech, gaming-inspired visual language
 * - Bilingual support (Arabic & English)
 * - Smooth animations and interactive elements
 * - Professional yet bold presentation
 */

export default function Home() {
  const { language, toggleLanguage, t } = useLanguage();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const isArabic = language === 'ar';

  const projects = [
    {
      title: t('projects.p1.title'),
      description: t('projects.p1.desc'),
      tags: ["Lua", "C#", "Performance", "Framework"],
      icon: "⚙️"
    },
    {
      title: t('projects.p2.title'),
      description: t('projects.p2.desc'),
      tags: ["Dashboard", "Admin", "Real-time", "Database"],
      icon: "🛠️"
    },
    {
      title: t('projects.p3.title'),
      description: t('projects.p3.desc'),
      tags: ["Economy", "Business", "Gameplay", "Mechanics"],
      icon: "💰"
    },
    {
      title: t('projects.p4.title'),
      description: t('projects.p4.desc'),
      tags: ["UI/UX", "React", "NUI", "Design"],
      icon: "🎨"
    }
  ];

  const skillsData = [
    { 
      category: t('skills.backend'),
      items: t('skills.backend.items').split(',')
    },
    { 
      category: t('skills.frontend'),
      items: t('skills.frontend.items').split(',')
    },
    { 
      category: t('skills.devops'),
      items: t('skills.devops.items').split(',')
    },
    { 
      category: t('skills.gaming'),
      items: t('skills.gaming.items').split(',')
    }
  ];

  return (
    <div className={`min-h-screen bg-background text-foreground overflow-hidden ${isArabic ? 'rtl' : 'ltr'}`} dir={isArabic ? 'rtl' : 'ltr'}>
      <AudioPlayer />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold">
              <span className="text-accent">ABO</span>
              <span className="text-secondary"> FAHD</span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8">
              <a href="#skills" className="hover:text-accent transition-colors">{t('nav.skills')}</a>
              <a href="#projects" className="hover:text-accent transition-colors">{t('nav.projects')}</a>
              <a href="#contact" className="hover:text-accent transition-colors">{t('nav.contact')}</a>
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:border-accent transition-colors"
              title={isArabic ? "Switch to English" : "التبديل إلى العربية"}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-bold">{isArabic ? 'EN' : 'AR'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663511182267/cmvYshRuqApXV4QB3QuzMv/hero-cyberpunk-YDj6kdhVmkXGcMh83LbP2x.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
        </div>

        {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(0, 212, 255, 0.05) 25%, rgba(0, 212, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 212, 255, 0.05) 75%, rgba(0, 212, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 212, 255, 0.05) 25%, rgba(0, 212, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 212, 255, 0.05) 75%, rgba(0, 212, 255, 0.05) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px"
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container text-center max-w-4xl mx-auto px-4">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                <span className="text-accent drop-shadow-lg" style={{ textShadow: "0 0 20px rgba(0, 212, 255, 0.8)" }}>
                  FiveM
                </span>
                <br />
                <span className="text-secondary drop-shadow-lg" style={{ textShadow: "0 0 20px rgba(255, 0, 255, 0.8)" }}>
                  {t('hero.title')}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/servers">
                <Button 
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/80 text-lg px-8 py-6 rounded-lg font-bold"
                  style={{ boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)" }}
                >
                  {t('hero.button1')}
                </Button>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-12 animate-bounce">
              <div className="text-accent">{t('hero.scroll')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663511182267/cmvYshRuqApXV4QB3QuzMv/skills-section-cmpeEDNv7kVMupNQeZRSKD.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background"></div>
        </div>

        <div className="relative z-10 container">
          <h2 className="text-5xl font-black text-center mb-16">
            <span className="text-accent">{isArabic ? 'المهارات' : 'Technical'}</span> <span className="text-secondary">{isArabic ? 'التقنية' : 'Skills'}</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((skillGroup, idx) => (
              <div 
                key={idx}
                className="group relative p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-accent transition-all duration-300"
                style={{
                  boxShadow: "0 0 20px rgba(0, 212, 255, 0.1)",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(0, 212, 255, 0.4)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#00d4ff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.1)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }}
              >
                <h3 className="text-xl font-bold text-accent mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                      <span className="text-secondary">▸</span> {skill.trim()}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663511182267/cmvYshRuqApXV4QB3QuzMv/projects-bg-QFkzJMqNm9UEHXhEj4kXfb.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-background via-background/80 to-background"></div>
        </div>

        <div className="relative z-10 container">
          <h2 className="text-5xl font-black text-center mb-16">
            <span className="text-secondary">{isArabic ? 'المشاريع' : 'Featured'}</span> <span className="text-accent">{isArabic ? 'المميزة' : 'Projects'}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-lg border border-border bg-card/40 backdrop-blur-sm overflow-hidden cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  boxShadow: hoveredProject === idx ? "0 0 40px rgba(255, 0, 255, 0.4)" : "0 0 20px rgba(0, 212, 255, 0.1)",
                  borderColor: hoveredProject === idx ? "#ff00ff" : "var(--border)"
                }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{project.icon}</div>
                    <ExternalLink className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent border border-accent/30 hover:border-accent transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Discord Only */}
      <section id="contact" className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663511182267/cmvYshRuqApXV4QB3QuzMv/contact-neon-YpWDGfRB7A2sSPDC6YrPCL.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background"></div>
        </div>

        <div className="relative z-10 container">
          <h2 className="text-5xl font-black text-center mb-16">
            <span className="text-accent">{isArabic ? 'تواصل' : 'Contact'}</span> <span className="text-secondary">{isArabic ? 'معي' : 'Me'}</span>
          </h2>

          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {[
              { icon: MessageCircle, label: t('contact.discord'), value: t('contact.discord_handle'), href: "https://discord.com/users/ab0_fahd" }
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <a
                  key={idx}
                  href={contact.href}
                  className="group p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-secondary transition-all duration-300 text-center"
                  style={{
                    boxShadow: "0 0 20px rgba(0, 212, 255, 0.1)"
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(255, 0, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.1)";
                  }}
                >
                  <Icon className="w-8 h-8 text-secondary mx-auto mb-3 group-hover:text-accent transition-colors" />
                  <h3 className="font-bold text-foreground mb-1">{contact.label}</h3>
                  <p className="text-muted-foreground text-sm">{contact.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-border bg-background/50">
        <div className="container text-center text-muted-foreground">
          <p>{t('footer.copyright')}</p>
          <p className="text-sm mt-2">{t('footer.note')}</p>
        </div>
      </footer>

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
