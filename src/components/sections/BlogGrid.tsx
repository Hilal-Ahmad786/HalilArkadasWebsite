'use client';

import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/data/blog';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

interface BlogGridProps {
    posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <FaCalendarAlt />
                                        {new Date(post.date).toLocaleDateString('tr-TR')}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaUser />
                                        {post.author}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all mt-auto"
                                >
                                    Devamını Oku <FaArrowRight />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
