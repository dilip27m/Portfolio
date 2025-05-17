'use client';
import { useState } from 'react';
import { projects } from "../../Data/data";
import ProjectCard from "../../components/project_comp";


export default function Project() {
    const [statusFilter, setStatusFilter] = useState('All');

    const filteredProjects = statusFilter === 'All'
        ? projects
        : projects.filter(project => project.status === statusFilter);

    return (
        <div className="px-8 py-12 max-w-6xl mx-auto">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
                {['All', 'Completed', 'In Progress', 'Planned'].map(status => (
                    <button
                        key={status}
                        onClick={() => setStatusFilter(status)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors hover:scale-105 shadow-md hover:shadow-blue-500/30 transition-all
                          ${statusFilter === status ? 'bg-blue-500 text-white' : 'bg-white/10 text-white hover:bg-blue-400/20'}`}
                    >
                        {status}
                    </button>
                ))}
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
