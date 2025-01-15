import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={item.image}
        alt={item.name[language]}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{item.name[language]}</h3>
        <p className="text-gray-600 mt-1">{item.description[language]}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-orange-600 font-medium">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price.vnd)}
          </span>
          <span className="text-gray-500">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price.usd)}
          </span>
        </div>
      </div>
    </div>
  );
}