

export default function ProjectComp({project}){
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition">
            {/* <Image src={project.image} alt={project.title}
            width={300}
            height={200}
            className = "rounded-lg mb-4"/> */}
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{project.skills}</p>
            <p className="text-gray-700 mb-4">{project.description}</p>
            {project.link && (
                <a href={project.link} className="text-blue-600 hover:underline" target="_blank">
                    View Project
                </a>
            )}
        </div>
    )
}