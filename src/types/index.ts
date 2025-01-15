export interface MenuItem {
  id: string;
  name: {
    en: string;
    vi: string;
  };
  description: {
    en: string;
    vi: string;
  };
  category: {
    en: string;
    vi: string;
  };
  price: {
    vnd: number;
    usd: number;
  };
  image: string;
  featured?: boolean;
}

export type Language = 'en' | 'vi';

export interface Translation {
  [key: string]: {
    en: string;
    vi: string;
  };
}