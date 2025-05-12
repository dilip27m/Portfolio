import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Hourglass, PauseCircle } from 'lucide-react';

const getStatusIcon = (status) => {
  switch (status) {
    case "Completed":
      return <CheckCircle className="w-4 h-4 mr-1 text-green-400" />;
    case "In Progress":
      return <Hourglass className="w-4 h-4 mr-1 text-yellow-400" />;
    case "Planned":
      return <PauseCircle className="w-4 h-4 mr-1 text-gray-400" />;
    default:
      return null;
  }
};


export default function ProjectComp({ project }) {
    return (
        <div className="bg-white/3 my-6 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-4 hover:shadow-blue-400/30 hover:border-white/50 hover:scale-105 transition-all duration-300 ease-in-out flex flex-col justify-between min-h-[400px]">
            <Image 
                src={project.image} 
                alt={project.title}
                width={400}
                height={200}
                className="rounded-lg mb-4"
            />
            <div className='flex justify-between '>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <div>
{project.status && (
  <span className="inline-flex items-center px-2 py-1   rounded-full bg-white/10">
    {getStatusIcon(project.status)}
    
  </span>
)}</div>
</div>

            <p className="text-sm text-gray-300 mb-2">{project.skills}</p>
            <p className="text-gray-400 mb-4">{project.description}</p>

            <div className='flex justify-between mt-4'>
                {/* External Source Code Link */}
                {project.link && (
                    <a 
                        href={project.link} 
                        className="text-blue-300 text-left"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Source code
                    </a>
                )}
                
                {/* Conditional Visit Link */}
                {project.visit ? (
                    <a 
                        href={project.visit} 
                        className="text-blue-300  text-right"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit
                    </a>
                ) : null}
            </div>
        </div>
    )
}