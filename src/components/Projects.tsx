import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useI18n } from '../i18n';

export default function Projects() {
  const { t } = useI18n();
  const images = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.projects.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.projects.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.projects.list.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={images[index]} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <button className="text-gray-500 hover:text-indigo-600 flex items-center gap-1 text-sm font-medium transition-colors">
                    <Github className="w-4 h-4" />
                    <span>{t.projects.source}</span>
                  </button>
                  <button className="text-gray-500 hover:text-indigo-600 flex items-center gap-1 text-sm font-medium transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>{t.projects.preview}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
