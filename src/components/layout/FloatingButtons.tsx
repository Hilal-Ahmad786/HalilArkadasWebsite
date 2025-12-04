'use client';

import { useState, useEffect, useRef } from 'react';
import { formatPhoneHref, formatWhatsAppHref } from '@/lib/utils';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { siteConfig } from '@/data/site';
import { FaPhoneAlt, FaWhatsapp, FaPaperPlane, FaTimes, FaRobot } from 'react-icons/fa';

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: 'Merhaba! Size nasıl yardımcı olabilirim?', isBot: true },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const preQuestions = [
    "Aracım ne kadar eder?",
    "Hangi araçları alıyorsunuz?",
    "Ödeme süreci nasıl işliyor?",
    "Hemen teklif almak istiyorum"
  ];

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: text, isBot: false }]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: 'Müşteri temsilcimiz şu an WhatsApp üzerinden hizmet vermektedir. Sizi oraya yönlendiriyorum...',
          isBot: true,
        },
      ]);

      // Redirect to WhatsApp after a short delay
      setTimeout(() => {
        const whatsappUrl = formatWhatsAppHref(siteConfig.whatsapp, text);
        window.open(whatsappUrl, '_blank');
      }, 1500);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <>
      {/* Chat Dialog */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-80 md:w-96 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-100 animate-fade-in-up">
          {/* Header */}
          <div className="bg-primary p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <FaRobot className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold">Canlı Destek</h3>
                <p className="text-xs text-white/80">Genellikle 1 dk içinde yanıt verir</p>
              </div>
            </div>
            <button onClick={toggleChat} className="text-white/80 hover:text-white">
              <FaTimes />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.isBot
                      ? 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'
                      : 'bg-primary text-white rounded-tr-none shadow-md'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Pre-questions */}
            {messages.length === 1 && (
              <div className="flex flex-col gap-2 mt-4">
                {preQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    className="text-left text-sm bg-white border border-primary/20 text-primary-700 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Mesajınızı yazın..."
                className="flex-1 bg-gray-100 border-0 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
              />
              <button
                type="submit"
                className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors shadow-md"
                disabled={!inputValue.trim()}
              >
                <FaPaperPlane className="text-sm ml-0.5" />
              </button>
            </form>

            <div className="mt-3 text-center">
              <a
                href={formatWhatsAppHref(siteConfig.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-green-600 transition-colors"
              >
                <FaWhatsapp /> WhatsApp ile devam et
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Floating Buttons */}
      <div className="hidden md:flex fixed bottom-8 right-8 flex-col gap-4 z-40">
        <a
          href={formatWhatsAppHref(siteConfig.whatsapp)}
          onClick={() => trackWhatsAppClick('floating')}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          style={{ backgroundColor: '#25D366' }}
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
        <a
          href={formatPhoneHref(siteConfig.phone)}
          onClick={() => trackPhoneClick('floating')}
          className="bg-accent text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform floating"
          aria-label="Telefon"
        >
          <FaPhoneAlt className="text-2xl" />
        </a>

        {/* Chat Button - Now at the bottom */}
        <button
          onClick={toggleChat}
          className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group relative"
          aria-label="Canlı Destek"
        >
          {isOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <>
              <FaRobot className="text-2xl" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-primary"></span>
            </>
          )}

          {/* Tooltip */}
          <span className="absolute right-full mr-3 bg-white text-primary-900 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Canlı Destek
          </span>
        </button>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t-2 border-accent z-50">
        <div className="flex">
          <a
            href={formatPhoneHref(siteConfig.phone)}
            onClick={() => trackPhoneClick('mobile-bottom')}
            className="flex-1 flex flex-col items-center justify-center py-3 bg-accent text-white"
          >
            <FaPhoneAlt className="text-2xl mb-1" />
            <span className="text-xs font-semibold">Hemen Ara</span>
          </a>
          <a
            href={formatWhatsAppHref(siteConfig.whatsapp)}
            onClick={() => trackWhatsAppClick('mobile-bottom')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-3 text-white"
            style={{ backgroundColor: '#25D366' }}
          >
            <FaWhatsapp className="text-3xl mb-1" />
            <span className="text-xs font-semibold">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Add padding to body to prevent content from being hidden behind mobile bottom bar */}
      <div className="md:hidden h-20" />
    </>
  );
}
