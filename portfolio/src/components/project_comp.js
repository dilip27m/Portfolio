import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Hourglass, PauseCircle } from 'lucide-react';

const getStatusIcon = (status) => {
  switch (status) {
    case "Completed":
      return <CheckCircle className="w-5 h-6  text-green-400" />;
    case "In Progress":
      return <Hourglass className="w-5 h-6 text-yellow-400" />;
    case "Planned":
      return <PauseCircle className="w-5 h-6  text-red-400" />;
    default:
      return null;
  }
};


export default function ProjectComp({ project }) {
    return (

      // hover:shadow-blue-400/30 to blue shadow
 <div className="bg-white/3 my-6 backdrop-blur-md border border-white/20 rounded-2xl  p-4  
        hover:border-white/50 hover:scale-105 transition-all duration-300 ease-in-out 
        flex flex-col justify-between min-h-[400px] 
        shadow-none hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] "> 
        <Image 
                src={project.image} 
                alt={project.title}
                width={400}
                height={200}
                className="rounded-lg mb-4"
            />
            <div className='flex justify-between '>
            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
            <div>
{project.status && (
  <span className="inline-flex items-center px-2 py-1   rounded-full bg-white/10">
    {getStatusIcon(project.status)}
    
  </span>
)}</div>
</div>

            <p className="text-md text-gray-200 mb-2">{project.skills}</p>
            <p className="text-gray-300 mb-4">{project.description}</p>

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
                {project.visit && 
                    <a 
                        href={project.visit} 
                        className="text-blue-300  text-right"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit
                    </a>}
                
            </div>
        </div>
    )
}