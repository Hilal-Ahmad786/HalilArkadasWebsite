// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes with clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format phone number for display
 */
export function formatPhoneDisplay(phone: string): string {
  // Remove +90 and format as 0XXX XXX XX XX
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('90')) {
    const number = cleaned.substring(2);
    return `0${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6, 8)} ${number.slice(8)}`;
  }
  return phone;
}

/**
 * Format phone number for href (tel: link)
 */
export function formatPhoneHref(phone: string): string {
  return `tel:${phone}`;
}

/**
 * Format WhatsApp number for href
 */
export function formatWhatsAppHref(whatsapp: string, message?: string): string {
  const cleaned = whatsapp.replace(/\D/g, '');
  let url = `https://wa.me/${cleaned}`;
  if (message) {
    url += `?text=${encodeURIComponent(message)}`;
  }
  return url;
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
}

/**
 * Generate slug from text
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

/**
 * Capitalize first letter
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
