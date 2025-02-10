import React from 'react';
import './ProjectItem.css';
import { Project } from './Types';
import { Link } from 'react-router-dom';


type ProjectItemProps = {
    project: Project;
}
const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    return (
        <div className="project-item">
            <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <h2>{project.title}</h2>
            <p className="project-tech">{project.technologies.join(', ')}</p>
            <p className="project-description">{project.description}</p>
            {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    Voir le projet
                </a>
            )}
            {project.iosLink && (
                <a href={project.iosLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    iOS
                </a>
            )}
            {project.androidLink && (
                <a href={project.androidLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    Android
                </a>
            )}
            {project.launchLink && (
                <Link to="/pong" className="project-link">
                    Launch
                </Link>
            )}
        </div>
    );
};

export default ProjectItem;
