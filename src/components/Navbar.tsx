import { motion } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useI18n } from '../i18n';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, toggleLang, lang } = useI18n();

  const links = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.certifications, href: '#certifications' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-2xl font-bold text-indigo-600 tracking-tight">
              أمير<span className="text-gray-800">.</span>
            </a>
          </div>
          
          <div className="hidden md:flex flex-row items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
                style={{ fontSize: '0.9rem' }}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
            >
              <Globe className="w-4 h-4" />
              <span style={{ fontSize: '0.9rem' }}>{t.nav.lang}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="text-indigo-600 p-2"
            >
              <Globe className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-b border-gray-100"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
