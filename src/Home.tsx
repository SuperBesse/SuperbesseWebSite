import './Home.css';
import Projects from './projects/Projects';
import Menu from './Menu';
import PersonalProjects from './projects/PersonalProjects';

const Home = () => {
    return (
        <div className="home">
            <Menu />
            <h3>Hello, i'm</h3>
            <h1>Julien Besse</h1>
            <h2>Mobile developer</h2>
            <p>
                I have been a mobile developer for over 10 years, specializing in React Native and native development. Passionate about creating high-performance and intuitive applications.
            </p>
            <p>
                I have had the opportunity to work in various fields (Home Automation, Food Service, Generators, VoIP, Chat, Press, Rental, Startups, Medical, etc.). Each project is unique and requires an appropriate technology. React Native is excellent for a Proof of Concept (POC) or for creating a common app for both Android and iOS. In other cases, native development may be recommended based on specific hardware or performance needs. My experience enables me to help companies choose the right technology for their mobile applications.
            </p>

            <Projects />
            <PersonalProjects />
        </div>
    );
};

export default Home;
