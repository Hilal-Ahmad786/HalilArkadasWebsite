'use client';

import { useState } from 'react';
import { FaChevronDown, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQAccordion({ faqs, title = 'MERAK EDİLENLER', subtitle = 'Sıkça Sorulan Sorular' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-white">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="badge" style={{ backgroundColor: '#E91E63', color: 'white', border: 'none' }}>
              SIK SORULAN SORULAR
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-2">
            {title}
          </h2>
          <p className="text-lg text-secondary-600">
            {subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-l-4 border-accent bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-primary-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-secondary-900 pr-4">
                  {faq.question}
                </h3>
                <span className={`flex-shrink-0 text-xl text-accent transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <FaChevronDown />
                </span>
              </button>

              {/* Answer Content */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 pb-6 text-secondary-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-primary-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-secondary-900 mb-3">
            Sorunuzun cevabını bulamadınız mı?
          </h3>
          <p className="text-secondary-600 mb-4">
            7/24 müşteri hizmetlerimiz size yardımcı olmak için hazır!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
              className="btn bg-accent hover:bg-accent-600 text-white border-0 gap-2"
            >
              <FaPhoneAlt /> Hemen Ara
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-white border-0 gap-2"
              style={{ backgroundColor: '#25D366' }}
            >
              <FaWhatsapp className="text-xl" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
