import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../config/translations';
import { Utensils } from 'lucide-react';

export function Header() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Utensils className="h-8 w-8 text-orange-600" />
            <span className="text-xl font-bold text-gray-800">Saigon Kitchen</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {Object.entries(translations.nav).map(([key, value]) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                {value[language]}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
            className="px-4 py-2 rounded-md bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors"
          >
            {language === 'en' ? 'VI' : 'EN'}
          </button>
        </div>
      </div>
    </header>
  );
}