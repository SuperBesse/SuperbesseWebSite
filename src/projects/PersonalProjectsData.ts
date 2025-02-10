import qqrcode from '../assets/qqrcode.jpeg';
import pongWars from '../assets/pongWars.png'; //https://github.com/SuperBesse/PongWars
import imageCompare from '../assets/ImageCompare.png';
import multiblindtest from '../assets/multiblindtest.png';

import { Project } from './Types';

const personalProjectsData: Project[] = [
    {
        id: 1,
        title: 'Scancode qrcode et code barre',
        image: qqrcode,
        technologies: ['Swift', 'AVFoundation', 'CoreData'],
        description: 'Applciation to scan qrcode and barcode. save and share them.',
        iosLink: 'https://apps.apple.com/fr/app/scancode-qrcode-et-code-barre/id1117496050',
    },
    {
        id: 2,
        title: 'Pong Wars',
        image: pongWars,
        technologies: ['Godot', 'MaskCollision', 'GDScript', '2D'],
        description: 'A battle between two balls with opposite color. the collision between a ball and a tile of the same color switchs the color of the collided tile. Evolution takes place without user interaction.',
        link: undefined,
        launchLink: '/pong',
    },
    {
        id: 3,
        title: 'react-native-image-compare',
        image: imageCompare,
        technologies: ['React Native', '@react-native-community'],
        description: 'React Native Image Compare is a React Native component that enables users to visually compare two images by sliding a divider to reveal more or less of each image.',
        link: 'https://github.com/SuperBesse/react-native-image-compare',
    },
    {
        id: 4,
        title: 'Multiblindtest',
        image: multiblindtest,
        technologies: ['SwiftUI', 'deezer API'],
        description: 'My app concept involves playing multiple songs simultaneously. The goal is to identify the song title or artist. It\'s a unique blind test challenge with numerous songs playing at once.',
    },
];

export default personalProjectsData;
