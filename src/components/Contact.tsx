import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useI18n } from '../i18n';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const { t, lang } = useI18n();

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) error = t.contact.errors.nameReq;
      else if (value.trim().length < 2) error = t.contact.errors.nameMin;
    } else if (name === 'email') {
      if (!value.trim()) error = t.contact.errors.emailReq;
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = t.contact.errors.emailInv;
    } else if (name === 'message') {
      if (!value.trim()) error = t.contact.errors.msgReq;
      else if (value.trim().length < 10) error = t.contact.errors.msgMin;
      else if (value.length > 500) error = t.contact.errors.msgMax;
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (touched[id]) {
      setErrors(prev => ({ ...prev, [id]: validateField(id, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
    setErrors(prev => ({ ...prev, [id]: validateField(id, value) }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };
    
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });
    
    return !Object.values(newErrors).some(err => err !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.contact.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden"
          >
            {/* BG details */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">{t.contact.infoTitle}</h3>
              <p className="text-indigo-100 mb-12 leading-relaxed">
                {t.contact.infoDesc}
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-500/50 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="block text-sm text-indigo-200">{t.contact.email}</span>
                    <a href="mailto:contact@amiradel.com" dir="ltr" className="font-medium hover:text-indigo-200 transition-colors inline-block text-left">
                      contact@amiradel.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-500/50 rounded-full flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="block text-sm text-indigo-200">{t.contact.linkedin}</span>
                    <a href="#" className="font-medium hover:text-indigo-200 transition-colors inline-block text-left" dir="ltr">
                      linkedin.comin/in/ameer-adil-17013919a
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-500/50 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="block text-sm text-indigo-200">{t.contact.location}</span>
                    <span className="font-medium">{t.contact.remote}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white border border-gray-100 shadow-sm rounded-3xl p-8 md:p-10 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.formTitle}</h3>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t.contact.nameLabel}</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-indigo-600'} focus:ring-2 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                  placeholder={t.contact.namePh}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t.contact.emailLabel}</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-indigo-600'} focus:ring-2 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white text-left`}
                  placeholder={t.contact.emailPh}
                  dir="ltr"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t.contact.msgLabel}</label>
                  <span className={`text-xs ${formData.message.length >= 500 ? 'text-red-500 font-bold' : 'text-gray-500'}`}>
                    {formData.message.length}/500 {t.contact.charsRemaining}
                  </span>
                </div>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                  maxLength={500}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-indigo-600'} focus:ring-2 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none ${lang === 'ar' ? 'text-right' : 'text-left'}`}
                  placeholder={t.contact.msgPh}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full flex items-center justify-center gap-2 px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white transition-colors ${
                  submitted ? 'bg-green-500 hover:bg-green-600' : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                {isSubmitting ? (
                  <span>{t.contact.sending}</span>
                ) : submitted ? (
                  <span>{t.contact.sent}</span>
                ) : (
                  <>
                    <span>{t.contact.sendBtn}</span>
                    <Send className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
