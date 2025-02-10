import './Menu.css';

const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                {/* <li>
                    <Link to="/" className="menu-icon">
                        <i className="fas fa-home"></i>
                    </Link>
                </li> */}
                <li>
                    <a
                        href="https://github.com/SuperBesse"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="menu-icon"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://medium.com/@besse.julien24"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="menu-icon"
                    >
                        <i className="fab fa-medium"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://twitter.com/thesuperbesse"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="menu-icon"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://apps.apple.com/tt/developer/julien-besse/id1117496049?l=fr-FR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="menu-icon"
                    >
                        <i className="fab fa-apple"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:jbesse.info@gmail.com"
                        className="menu-icon"
                    >
                        <i className="fas fa-envelope"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;





//<li><a href="https://medium.com/@besse.julien24" target="_blank" rel="noopener noreferrer">Medium</a></li>
//<li><a href="https://github.com/SuperBesse" target="_blank" rel="noopener noreferrer">GitHub</a></li>