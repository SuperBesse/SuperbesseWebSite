import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                <li><a href="#realisations">Réalisations</a></li>
                <li><Link to="/projets">Projets</Link></li>
                <li><a href="https://medium.com/@besse.julien24" target="_blank" rel="noopener noreferrer">Medium</a></li>
                <li><a href="https://github.com/SuperBesse" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="#realisations-persos">Réalisations persos</a></li>
            </ul>
        </nav>
    );
};

export default Menu;
