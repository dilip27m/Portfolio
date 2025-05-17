'use client'
import { blogs } from "../../Data/data";
import BlogCard from "../../components/blogCard";
import { useState } from 'react';

export default function Blogs() {
    const [filter, setFilter] = useState('All');

    const filteredBlogs = filter === 'All'
        ? blogs 
        : blogs.filter(blog => blog.section === filter);

    return (
        <div className="px-4 sm:px-8 py-12 max-w-6xl mx-auto">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
                {['All', 'Technical', 'Non Technical'].map(section => (
                    <button
                        key={section}
                        onClick={() => setFilter(section)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                          hover:scale-105 shadow-sm hover:shadow-blue-500/20
                          ${filter === section 
                            ? 'bg-blue-500 text-white shadow-blue-500/30' 
                            : 'bg-white/80 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 hover:bg-blue-400/20 dark:hover:bg-blue-600/20'}`}
                    >
                        {section}
                    </button>
                ))}
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
}