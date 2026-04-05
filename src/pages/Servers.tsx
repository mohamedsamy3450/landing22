import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Users, Globe } from "lucide-react";
import { useState } from "react";

/**
 * Servers Page - Display Discord Servers/Projects
 * Cyberpunk Neon Design
 */

export default function Servers() {
  const { language, toggleLanguage } = useLanguage();
  const isArabic = language === 'ar';
  const [hoveredServer, setHoveredServer] = useState<number | null>(null);

  const servers = [
    {
      name: "مدينة سكوير",
      nameEn: "Square City",
      description: "سيرفر FiveM متقدم مع اقتصاد متكامل وميكانيكا لعبة احترافية",
      descriptionEn: "Advanced FiveM server with integrated economy and professional game mechanics",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663511182267/cmvYshRuqApXV4QB3QuzMv/square-city-logo_2d399af8.gif",
      members: "1.2K+",
      status: "Active",
      link: "https://discord.gg/A4WdECc9",
      features: ["Economy", "Jobs", "Businesses", "Custom Scripts"]
    }
  ];

  return (
    <div className={`min-h-screen bg-background text-foreground overflow-hidden ${isArabic ? 'rtl' : 'ltr'}`} dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
            <span className="text-accent">ABO</span>
            <span className="text-secondary"> FAHD</span>
          </a>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8">
              <a href="/#skills" className="hover:text-accent transition-colors">{isArabic ? 'المهارات' : 'Skills'}</a>
              <a href="/" className="hover:text-accent transition-colors">{isArabic ? 'الرئيسية' : 'Home'}</a>
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
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container text-center max-w-4xl mx-auto px-4">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-black leading-tight">
              <span className="text-accent">{isArabic ? 'سيرفرات' : 'My'}</span>
              <br />
              <span className="text-secondary">{isArabic ? 'ديسكورد' : 'Discord Servers'}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {isArabic ? 'اكتشف السيرفرات الاحترافية التي طورتها' : 'Discover the professional servers I have developed'}
            </p>
          </div>
        </div>
      </section>

      {/* Servers Grid */}
      <section className="relative py-24 overflow-hidden">
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
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {servers.map((server, idx) => (
              <a
                key={idx}
                href={server.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 rounded-lg border border-border bg-card/40 backdrop-blur-sm overflow-hidden cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredServer(idx)}
                onMouseLeave={() => setHoveredServer(null)}
                style={{
                  boxShadow: hoveredServer === idx ? "0 0 40px rgba(255, 0, 255, 0.4)" : "0 0 20px rgba(0, 212, 255, 0.1)",
                  borderColor: hoveredServer === idx ? "#ff00ff" : "var(--border)"
                }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Logo and Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-foreground mb-2">
                        {isArabic ? server.name : server.nameEn}
                      </h3>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-accent" />
                          <span>{server.members}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span>{server.status}</span>
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                  </div>

                  {/* Logo Image */}
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={server.logo} 
                      alt={server.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">
                    {isArabic ? server.description : server.descriptionEn}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {server.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent border border-accent/30 group-hover:border-accent transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <button className="w-full py-2 px-4 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors font-bold flex items-center justify-center gap-2">
                      <span>{isArabic ? 'انضم الآن' : 'Join Now'}</span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-lg">
              {isArabic ? 'المزيد من السيرفرات قريباً...' : 'More servers coming soon...'}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-border bg-background/50">
        <div className="container text-center text-muted-foreground">
          <p>© 2024 ABO FAHD - FiveM Developer. {isArabic ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
          <p className="text-sm mt-2">{isArabic ? 'تم بناؤه بشغف لمجتمع FiveM' : 'Built with passion for the FiveM community'}</p>
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

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
