import { motion } from 'motion/react';
import { Database, LayoutTemplate, Terminal } from 'lucide-react';
import { useI18n } from '../i18n';

export default function Skills() {
  const { t } = useI18n();

  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Terminal className="w-6 h-6 text-indigo-600" />;
      case 1: return <Database className="w-6 h-6 text-violet-600" />;
      case 2: return <LayoutTemplate className="w-6 h-6 text-blue-600" />;
      default: return null;
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.skills.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.skills.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.skills.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-50 rounded-lg">
                  {getIcon(index)}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
