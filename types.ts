
export type PageType = 'HOME' | 'ABOUT' | 'SCHEDULE' | 'CAMP' | 'CONTACT' | 'CONDUCT' | 'PRIVACY' | 'TERMS';

export interface Package {
  name: string;
  bestFor: string;
  includes: string[];
  outcome: string;
  intensity: string;
}

export interface Testimonial {
  quote: string;
  author?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
