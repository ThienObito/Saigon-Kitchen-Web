import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../config/translations';

export function Hero() {
  const { language } = useLanguage();

  return (
    <div className="relative h-[70vh] bg-cover bg-center" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80)'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {translations.hero.title[language]}
          </h1>
          <p className="text-xl md:text-2xl">
            {translations.hero.subtitle[language]}
          </p>
        </div>
      </div>
    </div>
  );
}