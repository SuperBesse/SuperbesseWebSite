import React from 'react';
import ProjectItem from './ProjectItem';
import projectsData from './ProjectsData';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects">
            <h1>My last projects</h1>
            <div className="projects-list">
                {projectsData.map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
