import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import { getPostBySlug, getAllPosts } from '@/data/blog';
import { FaCalendarAlt, FaUser, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = getPostBySlug(params.slug);

    if (!post) {
        return {
            title: 'Yazı Bulunamadı',
        };
    }

    return {
        title: `${post.title} | Premium Auto Blog`,
        description: post.excerpt,
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <Header />
            <main className="bg-white min-h-screen pt-32 pb-20">
                <article className="container mx-auto px-4 max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors">
                        <FaArrowLeft /> Blog'a Dön
                    </Link>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">
                                {post.category}
                            </span>
                            <div className="flex items-center gap-1">
                                <FaCalendarAlt />
                                {new Date(post.date).toLocaleDateString('tr-TR')}
                            </div>
                            <div className="flex items-center gap-1">
                                <FaUser />
                                {post.author}
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                            {post.title}
                        </h1>
                    </header>

                    <div className="mb-10 rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-[400px] object-cover"
                        />
                    </div>

                    <div
                        className="prose prose-lg max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </main>
            <Footer />
            <FloatingButtons />
        </>
    );
}
