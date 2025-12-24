'use client';

import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaTimes, FaCar, FaHandshake } from 'react-icons/fa';
import { formatPhoneHref, formatWhatsAppHref } from '@/lib/utils';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { siteConfig } from '@/data/site';

export default function PopupDialog() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasBeenClosed, setHasBeenClosed] = useState(false);

    useEffect(() => {
        // Check if popup was already shown in this session
        const popupShown = sessionStorage.getItem('popupShown');

        if (!popupShown && !hasBeenClosed) {
            // Show popup after 5 seconds
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [hasBeenClosed]);

    const handleClose = () => {
        setIsOpen(false);
        setHasBeenClosed(true);
        sessionStorage.setItem('popupShown', 'true');
    };

    const handleCtaClick = (type: 'phone' | 'whatsapp') => {
        if (type === 'phone') {
            trackPhoneClick('popup-dialog');
        } else {
            trackWhatsAppClick('popup-dialog');
        }
        handleClose();
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop Overlay */}
            <div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] animate-fade-in"
                aria-hidden="true"
            />

            {/* Dialog Container */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 animate-fade-in">
                <div
                    className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-700/50"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="popup-title"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-accent" />
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 z-10"
                        aria-label="Kapat"
                    >
                        <FaTimes className="text-lg" />
                    </button>

                    {/* Content */}
                    <div className="relative p-5 pt-6 md:p-8 md:pt-10 text-center">
                        {/* Icon */}
                        <div className="mx-auto w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-accent/30 animate-pulse-glow">
                            <FaCar className="text-2xl md:text-4xl text-white" />
                        </div>

                        {/* Title */}
                        <h2
                            id="popup-title"
                            className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3"
                        >
                            Aracınızı Satmak mı İstiyorsunuz?
                        </h2>

                        {/* Description */}
                        <p className="text-gray-300 mb-4 md:mb-8 text-xs md:text-base leading-relaxed">
                            Hasarlı, kazalı veya pert aracınız için{' '}
                            <span className="text-accent font-semibold">en yüksek fiyat teklifini</span>{' '}
                            hemen alın!
                        </p>

                        {/* Trust Badge */}
                        <div className="flex items-center justify-center gap-2 mb-4 md:mb-8 text-gray-400 text-xs md:text-sm">
                            <FaHandshake className="text-primary" />
                            <span>15+ Yıllık Tecrübe • 5000+ Mutlu Müşteri</span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="space-y-3 md:space-y-4">
                            {/* WhatsApp Button - Primary CTA */}
                            <a
                                href={formatWhatsAppHref(siteConfig.whatsapp, 'Merhaba, aracımı satmak istiyorum.')}
                                onClick={() => handleCtaClick('whatsapp')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 md:gap-3 w-full py-3 md:py-4 px-4 md:px-6 text-white font-bold text-base md:text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
                                style={{
                                    backgroundColor: '#25D366',
                                    boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)'
                                }}
                            >
                                <FaWhatsapp className="text-xl md:text-2xl" />
                                <span>WhatsApp ile Ulaşın</span>
                            </a>

                            {/* Phone Button - Secondary CTA */}
                            <a
                                href={formatPhoneHref(siteConfig.phone)}
                                onClick={() => handleCtaClick('phone')}
                                className="flex items-center justify-center gap-2 md:gap-3 w-full py-3 md:py-4 px-4 md:px-6 bg-gradient-to-r from-accent to-red-600 text-white font-bold text-base md:text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:from-red-600 hover:to-accent"
                                style={{
                                    boxShadow: '0 4px 20px rgba(239, 68, 68, 0.4)'
                                }}
                            >
                                <FaPhoneAlt className="text-lg md:text-xl" />
                                <span>Hemen Arayın: {siteConfig.phoneDisplay}</span>
                            </a>
                        </div>

                        {/* Skip Link */}
                        <button
                            onClick={handleClose}
                            className="mt-4 md:mt-6 text-gray-500 hover:text-gray-300 text-xs md:text-sm underline underline-offset-4 transition-colors"
                        >
                            Şimdi değil, daha sonra
                        </button>
                    </div>

                    {/* Bottom Decoration */}
                    <div className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                </div>
            </div>
        </>
    );
}
