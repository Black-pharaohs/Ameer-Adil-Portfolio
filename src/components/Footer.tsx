import { useI18n } from '../i18n';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-8 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <span className="text-xl font-bold text-white tracking-tight">أمير<span className="text-indigo-500">.</span></span>
            <div className="flex items-center gap-4 ms-4 ps-4 border-s border-gray-700">
              <a href="https://github.com/3bgarino" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ameer-adil-17013919a" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <p className="text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
