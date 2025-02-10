import amplementImg from '../assets/mycollaborate.jpeg';
import rakuten from '../assets/rakuten.jpg';
import sudouest from '../assets/sudouest.jpg';
import bistro from '../assets/bistro.jpeg';
import coriolis from '../assets/coriolis.jpeg';
import beecollaborate from '../assets/beecollaborate.jpeg';
import { Project } from './Types';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Amplement - Lead mobile developer',
    image: amplementImg,
    technologies: ['React Native', 'Typescript', 'webrtc'],
    description: 'Amplement is a mobile video conferencing application. It is developed in React Native with TypeScript and uses WebRTC for managing video/audio calls. The project involves refactoring the code, improving performance, and adding new features.',
    iosLink: 'https://apps.apple.com/fr/app/my-collaborate/id1250822402',
    androidLink: 'https://play.google.com/store/apps/details?id=com.amplement.corporate&hl=fr'
  },
  {
    id: 2,
    title: 'Coriolis Comunity - Lead mobile developer',
    image: coriolis,
    technologies: ['React Native', 'redux-saga', 'React-native-web'],
    description: 'Coriolis Comunity is a mobile video conferencing application. It is developed in React Native with TypeScript and uses WebRTC for managing video/audio calls. The project involves refactoring the code, improving performance, and adding new features.',
    iosLink: 'https://apps.apple.com/fr/app/coriolis-comunity/id1627445934',
    androidLink: 'https://play.google.com/store/apps/details?id=com.coriolis.community',
  },
  {
    id: 3,
    title: 'Bee Collaborate - Lead mobile developer',
    image: beecollaborate,
    technologies: ['React Native', 'redux-saga', 'React-native-web'],
    description: 'Bee Collaborateis a mobile video conferencing application. It is developed in React Native with TypeScript and uses WebRTC for managing video/audio calls. The project involves refactoring the code, improving performance, and adding new features.',
    iosLink: 'https://apps.apple.com/fr/app/bee-collaborate/id6464475529',
    androidLink: 'https://play.google.com/store/apps/details?id=com.amplement.corporate.beetechnology&hl=fr',
  },
  {
    id: 4,
    title: 'Rakuten Dx - Mobile developer',
    image: rakuten,
    technologies: ['React Native', 'redux-saga', 'React-native-web'],
    description: 'R&D project with the Rakuten Dx team in Montpellier. Creation of a low-code/no-code platform to generate mobile applications.',
    link: undefined,
  },
  {
    id: 5,
    title: 'Groupe Sud ouest - Lead mobile developer',
    image: sudouest,
    technologies: ['React Native', 'Firebase', 'redux-saga'],
    description: 'Redesign of the applications for the Sud Ouest group (Sud Ouest, Charente Libre, and La République des Pyrénées).',
    iosLink: 'https://apps.apple.com/fr/app/sud-ouest-linfo-en-continu/id419143234',
    androidLink: 'https://play.google.com/store/apps/details?id=com.sudouest.android&hl=fr',
  },
  {
    id: 6,
    title: 'Bistro Regent- Lead mobile developer',
    image: bistro,
    technologies: ['React Native', 'Firebase', 'firestore'],
    description: 'Création de l\'application pour la chaîne de restaurant Bistro Regent (carte des restaurants, réservation, commande en ligne, jeux concours, fidélité, ...).',
  },
];

export default projectsData;
