import React from 'react';
import ProjectItem from './ProjectItem';
import personalProjectsData from './PersonalProjectsData';
import './Projects.css';

const PersonalProjects = () => {
    return (
        <div className="projects">
            <h1>My side projects</h1>
            <div className="projects-list">
                {personalProjectsData.map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default PersonalProjects;
