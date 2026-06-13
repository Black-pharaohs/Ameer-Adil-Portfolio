import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Download, Briefcase } from 'lucide-react';
import { useI18n } from '../i18n';

export default function Hero() {
  const { t, lang } = useI18n();
  const IconArrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-violet-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Briefcase className="w-4 h-4" />
            <span>{t.hero.freelance}</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8"
          >
            {t.hero.greeting} <span className="text-indigo-600">{t.hero.name}</span>
            <br />
            {t.hero.role}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            {t.hero.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 border border-transparent text-base font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <span>{t.hero.viewWork}</span>
              <IconArrow className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border-2 border-gray-200 text-base font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
            >
              <span>{t.hero.contact}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
