import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuItem } from './components/MenuItem';
import { menuItems } from './config/menuItems';
import { translations } from './config/translations';
import { useLanguage } from './contexts/LanguageContext';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

function MainContent() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          {translations.categories.mainCourses[language]}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center"><MapPin className="mr-2 h-5 w-5" /> 123 Nguyen Hue, District 1, HCMC</p>
                <p className="flex items-center"><Phone className="mr-2 h-5 w-5" /> +84 123 456 789</p>
                <p className="flex items-center"><Mail className="mr-2 h-5 w-5" /> info@saigonkitchen.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Hours</h3>
              <p>Monday - Sunday</p>
              <p>11:00 AM - 10:00 PM</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-orange-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <MainContent />
      </div>
    </LanguageProvider>
  );
}

export default App;