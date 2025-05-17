import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ blog }) {
    return (
        <div className="
            bg-white/30 dark:bg-black/30
            backdrop-blur-md
            border border-gray-300 dark:border-gray-600/50
            rounded-2xl
            overflow-hidden
            hover:border-blue-400 dark:hover:border-blue-600
            hover:scale-[1.02]
            transition-all duration-300 ease-in-out
            flex flex-col
            shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
            h-full
        ">
            {/* Blog Image */}
            <div className="relative h-48 w-full">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Blog Content */}
            <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 line-clamp-2">
                        {blog.title}
                    </h3>
                    <span className="ml-2 px-2 py-1 rounded-full text-xs bg-blue-100/50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 whitespace-nowrap">
                        {blog.section}
                    </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {blog.description}
                </p>

      <div>
        {blog.link && (
          <a
            href={blog.link}
            className="text-blue-600 dark:text-blue-400 "
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        )}
      </div>
            </div>
        </div>
    );
}