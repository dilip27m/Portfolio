'use client'
import { blogs } from "../../Data/data";
import BlogCard from "../../components/blogCard";
import { useState } from 'react';

export default function Blogs() {
    const [Filter,setFilter] = useState('All')

    const filteredBlogs = Filter === 'All'
    ? blogs 
    :blogs.filter(blog => blog.section === Filter);
    return (
        <div className="px-8 py-12 max-w-6xl mx-auto ">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
                {['All', 'Technical', 'Non Technical'].map(section => (
                    <button
                        key={section}
                        onClick={() => setFilter(section)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors hover:scale-105 shadow-md hover:shadow-blue-500/30 transition-all
                          ${Filter === section? 'bg-blue-500 text-white' : 'bg-white/10 text-white hover:bg-blue-400/20'}`}
                    >
                        {section}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
}
