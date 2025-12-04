import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import HeroSection from '@/components/sections/HeroSection';
import BlogGrid from '@/components/sections/BlogGrid';
import { getAllPosts } from '@/data/blog';
import { FaNewspaper } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Blog - Haberler ve Rehberler | Premium Auto',
    description: 'Hasarlı araç sektörü, araç satış rehberleri ve güncel haberler için blog sayfamızı takip edin.',
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <>
            <Header />
            <main>
                <HeroSection
                    badge={
                        <span className="badge bg-white/10 text-white border border-white/20 backdrop-blur-md gap-2 px-4 py-2 rounded-full flex items-center justify-center">
                            <FaNewspaper className="text-accent-400" /> BLOG & HABERLER
                        </span>
                    }
                    title={
                        <>
                            Güncel Bilgiler ve
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-200">
                                Sektörel Rehberler
                            </span>
                        </>
                    }
                    subtitle="Araç alım satım süreçleri, yasal prosedürler ve sektörden en son haberler."
                />
                <BlogGrid posts={posts} />
            </main>
            <Footer />
            <FloatingButtons />
        </>
    );
}
