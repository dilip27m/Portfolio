import { blogs } from "../../Data/data";
import BlogCard from "../../components/blogCard"; // ✅ Make sure the file name matches the case

export default function Blogs() {
    return (
        <div className="px-8 py-12 max-w-6xl mx-auto text-gray-800">
            <h2 className="text-3xl font-bold mb-6">Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
}
