// src/data/types.ts
import React from 'react';

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  icon: React.ReactNode;
  color: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: {
    badge: React.ReactNode;
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
  features: Feature[];
  faqs: FAQ[];
  content: {
    intro: string;
    details: string[];
    whyUs: string[];
  };
  image?: string;
  order: number;
  published: boolean;
}

export interface City {
  id: string;
  slug: string;
  name: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: {
    badge: React.ReactNode;
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
  services: {
    kazali: boolean;
    hasarli: boolean;
    pert: boolean;
    hurda: boolean;
  };
  cityInfo: {
    population: string;
    coverage: string[];
    responseTime: string;
    localOffice?: string;
  };
  features: Feature[];
  testimonials: Testimonial[];
  faqs: FAQ[];
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  district?: string;
  rating: number;
  text: string;
  service: string;
  date?: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface ProcessStep {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export interface SiteConfig {
  name: string;
  description: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  address?: string;
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  businessHours: string;
  logo: string;
}

export interface NavigationLink {
  label: string;
  href: string;
  children?: NavigationLink[];
}

export interface CTASection {
  id: string;
  badge?: React.ReactNode;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryButton: {
    text: string;
    action: 'phone' | 'whatsapp' | 'form';
  };
  secondaryButton?: {
    text: string;
    action: 'phone' | 'whatsapp' | 'form';
  };
  background?: string;
}
