'use client';

import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '@/data/site';
import { formatPhoneHref, formatWhatsAppHref } from '@/lib/utils';

export default function ContactInfo() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Details */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-gray-900">İletişim Bilgileri</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl flex-shrink-0">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Telefon</h3>
                                    <p className="text-gray-600 mb-2">7/24 Bize Ulaşabilirsiniz</p>
                                    <a href={formatPhoneHref(siteConfig.phone)} className="text-xl font-bold text-primary hover:text-primary-700 transition-colors">
                                        {siteConfig.phoneDisplay}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl flex-shrink-0">
                                    <FaWhatsapp />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">WhatsApp</h3>
                                    <p className="text-gray-600 mb-2">Hızlı Teklif Hattı</p>
                                    <a href={formatWhatsAppHref(siteConfig.whatsapp)} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-green-600 hover:text-green-700 transition-colors">
                                        WhatsApp'tan Yazın
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl flex-shrink-0">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">E-posta</h3>
                                    <p className="text-gray-600 mb-2">Teklif ve Bilgi İçin</p>
                                    <a href={`mailto:${siteConfig.email}`} className="text-lg font-medium text-gray-900 hover:text-primary transition-colors">
                                        {siteConfig.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xl flex-shrink-0">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Adres</h3>
                                    <p className="text-gray-600">
                                        {siteConfig.address || 'İstanbul, Türkiye'}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xl flex-shrink-0">
                                    <FaClock />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Çalışma Saatleri</h3>
                                    <p className="text-gray-600">
                                        {siteConfig.businessHours}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gray-100 rounded-2xl overflow-hidden min-h-[400px] relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.650490010536!2d28.97601857655506!3d41.00549587135136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2sSultanahmet%20Meydan%C4%B1!5e0!3m2!1str!2str!4v1701686000000!5m2!1str!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0, position: 'absolute', inset: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
