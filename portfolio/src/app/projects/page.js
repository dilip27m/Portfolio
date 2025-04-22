import {projects} from "../../Data/data";
import ProjectCard from "../../components/project_comp";
import Navbar from "../../components/Navbar";


export default function project(){
    return (

        <div className="px-8 py-12 max-w-6xl mx-auto">
            <Navbar />
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => {
                   return <ProjectCard key={project.id} project={project} />
                })}
            </div>

            
        </div>
    )
}