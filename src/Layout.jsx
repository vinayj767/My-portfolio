import React from "react";
import { useLocation } from "react-router-dom";
import { Github, Linkedin, Mail, FileText, Menu, X } from "lucide-react";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Leadership', id: 'leadership' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/vinayjain767', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/vinayj767', label: 'GitHub' },
    { icon: Mail, href: 'mailto:vinayj767@gmail.com', label: 'Email' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent hover:from-amber-600 hover:to-amber-500 transition-all duration-300"
            >
              Vinay Jain
            </button>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
              <a
                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8d0719c96_Vinay_Jain.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white font-medium px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FileText className="w-4 h-4 mr-2" />
                View Resume
              </a>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-white border-b border-slate-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-slate-600 hover:text-slate-900 font-medium py-2 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex justify-center space-x-4 pt-4 border-t border-slate-200">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <a
                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8d0719c96_Vinay_Jain.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white font-medium px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FileText className="w-4 h-4 mr-2" />
                View Resume
              </a>
            </div>
          </div>
        )}
      </nav>
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}