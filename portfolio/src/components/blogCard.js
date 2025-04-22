export default function BlogCard({blog}){
    return (
        <div>
            <h2>Blogs</h2>
            <div>
                {/* <Image/> */}
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                {blog.link && (
                <a href={blog.link} className="text-blue-600 hover:underline" target="_blank">
                    View 
                </a>
            )}

            </div>
        </div>
    )
}