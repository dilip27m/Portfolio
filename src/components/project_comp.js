import Image from 'next/image';
import { CheckCircle, Hourglass, PauseCircle } from 'lucide-react';

const getStatusIcon = (status) => {
  switch (status) {
    case "Completed":
      return <CheckCircle className="w-5 h-6 text-green-600 dark:text-green-400" />;
    case "In Progress":
      return <Hourglass className="w-5 h-6 text-yellow-600 dark:text-yellow-400" />;
    case "Planned":
      return <PauseCircle className="w-5 h-6 text-red-600 dark:text-red-400" />;
    default:
      return null;
  }
};

export default function ProjectComp({ project }) {
  return (
    <div className="
      bg-white/30 dark:bg-black/30 
      my-6 
      backdrop-blur-md 
      border border-gray-300 dark:border-gray-600/50 
      rounded-2xl  
      p-4  
      hover:border-blue-400 dark:hover:border-blue-600
      hover:scale-[1.02] 
      transition-all duration-300 ease-in-out 
      flex flex-col justify-between min-h-[400px] 
      shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
      ">
      
      <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
        {project.status && (
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-gray-100/80 dark:bg-gray-800/50">
            {getStatusIcon(project.status)}
            <span className="ml-1 text-sm text-gray-700 dark:text-gray-300">
              {project.status}
            </span>
          </span>
        )}
      </div>

      <p className="text-md text-gray-700 dark:text-gray-300 mb-2">{project.skills}</p>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

      <div className="flex justify-between mt-auto">
        {project.link && (
          <a
            href={project.link}
            className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </a>
        )}
        {project.visit && (
          <a
            href={project.visit}
            className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
        )}
      </div>
    </div>
  );
}