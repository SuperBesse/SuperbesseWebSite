import './PongWars.css';

const PongWars = () => {
    return (
        <div className="game-container">
            <iframe
                allow="cross-origin-isolated"
                src="./src/assets/godot/TutoPong.html"
                title="PongWars"
                className="game-iframe"
            ></iframe>
        </div>
    );
};

export default PongWars;
