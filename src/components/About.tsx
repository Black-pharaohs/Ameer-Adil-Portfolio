import { motion } from 'motion/react';
import { Target, Lightbulb, Compass } from 'lucide-react';
import { useI18n } from '../i18n';

export default function About() {
  const { t, lang } = useI18n();

  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Target className="w-6 h-6 text-indigo-600" />;
      case 1: return <Lightbulb className="w-6 h-6 text-violet-600" />;
      case 2: return <Compass className="w-6 h-6 text-blue-600" />;
      default: return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
              {t.about.title}
              <span className={`absolute bottom-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-1/2 h-1 bg-indigo-600 rounded-full`}></span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t.about.p1_1} <span className="font-semibold text-gray-900">{t.about.p1_2}</span>{t.about.p1_3} 
              <span className="text-indigo-600 font-medium"> {t.about.p1_4}</span>{t.about.p1_5}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t.about.p2}
            </p>
            
            <div className="flex gap-4">
              <div className="text-center bg-gray-50 px-6 py-4 rounded-xl border border-gray-100 flex-1">
                <span className="block text-3xl font-bold text-indigo-600 mb-1">+4</span>
                <span className="text-sm font-medium text-gray-500">{t.about.certs}</span>
              </div>
              <div className="text-center bg-gray-50 px-6 py-4 rounded-xl border border-gray-100 flex-1">
                <span className="block text-3xl font-bold text-violet-600 mb-1">+3</span>
                <span className="text-sm font-medium text-gray-500">{t.about.langs}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {t.about.strengths.map((item, index) => (
              <div key={index} className="flex gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                    {getIcon(index)}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
