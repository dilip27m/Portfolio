import Image from "next/image";
export default function BlogCard({blog}){
    return (
  <div className="bg-white/3 my-6 backdrop-blur-md border border-white/20 rounded-2xl  p-4  
        hover:border-white/50 hover:scale-105 transition-all duration-300 ease-in-out 
        flex flex-col justify-between min-h-[400px] 
        shadow-none hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] ">
<div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
  <Image
    src={blog.image}
    alt={blog.title}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 400px"
  />
</div>
            <h3 className="text-xl font-bold mb-2 text-white">{blog.title}</h3>
            <p className="text-grey-200 my-4 ">{blog.description}</p>
            <div>
            {blog.link && (
                <a href={blog.link} className="text-blue-300" target="_blank" rel="noopener noreferrer">
                    View 
                </a>
            )}
            </div>
            </div>
    )
}