import { motion } from 'motion/react';
import { Award, CheckCircle } from 'lucide-react';
import { useI18n } from '../i18n';

export default function Certifications() {
  const { t } = useI18n();

  return (
    <section id="certifications" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Award className="w-8 h-8 text-indigo-600" />
              <span>{t.certifications.title}</span>
            </h2>
            <p className="text-gray-600">
              {t.certifications.desc}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.certifications.list.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`flex items-start p-6 rounded-2xl border ${cert.bg} border-gray-200 border-s-4 ${cert.color} hover:shadow-md transition-all`}
            >
              <div className="flex-shrink-0 mt-1 me-4 ms-0">
                <CheckCircle className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h3>
                <div className="flex items-center gap-4 text-sm mb-2 text-gray-700">
                  <span className="font-semibold">{cert.issuer}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
