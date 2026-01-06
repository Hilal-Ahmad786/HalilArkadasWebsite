'use client';

import { useEffect, useState } from 'react';

export default function DemoGuard() {
    const [blocked, setBlocked] = useState(false);

    useEffect(() => {
        // Check local storage for block flag on mount and periodic interval
        const checkAccess = () => {
            if (typeof window !== 'undefined') {
                const status = localStorage.getItem('DEMO_ACCESS');
                if (status === 'BLOCK') {
                    setBlocked(true);
                } else {
                    setBlocked(false);
                }
            }
        };

        // Initial check
        checkAccess();

        // Check every 2 seconds to allow real-time toggling
        const interval = setInterval(checkAccess, 2000);

        return () => clearInterval(interval);
    }, []);

    if (!blocked) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center text-white p-4">
            <div className="max-w-md text-center space-y-6">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </div>
                <h1 className="text-4xl font-bold tracking-tight">Erişim Askıya Alındı</h1>
                <p className="text-gray-400">
                    Bu demo önizlemesine erişim şu anda kısıtlanmıştır. Lütfen yönetici ile iletişime geçiniz.
                </p>
                <div className="pt-8 text-xs text-gray-700 font-mono">
                    Code: DEMO_SUSPEND_0x01
                </div>
            </div>
        </div>
    );
}
