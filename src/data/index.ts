import { IProject } from "../interfaces/project";
import { ISocialBadge } from "../interfaces/social-badges";

const projects: IProject[] = [
    {
        description: "ipsum concurrently malloc leet new injection bin epoch daemon system Leslie Lamport shell spoof. Finally boolean continue mutex endif it’s a feature gobble packet public irc race condition grep ifdef I’m compiling. Try catch bar bytes I’m sorry Dave, I’m afraid I can’t do that pragma win sql gnu kilo deadlock blob try catch exception Donald Knuth brute force.",
        sourceUrl: 'github.com/example',
        sourceIcon: 'github',
        subtitle: 'a simple demo project',
        title: 'Demo Project',
    },
    {
        demoUrl: 'https://codepen.io/gaearon/pen/gWWZgR?editors=0010',
        description: 'React Tic Tac Toe Tutorial',
        imageAlt: 'tic-tac-toe',
        imageSrc: 'tic-tac-toe.png',
        title: 'Tic Tac Toe',
    }
];

const social: ISocialBadge[] = [
    { icon: 'github', text: '@example', url: 'https://github.com/example' },
    { icon: 'instagram', text: 'example', url: 'https://www.instagram.com/example' },
];

const data = {
    projects,
    social,
    about: [
        "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.",
        "Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.",
    ],
    home: [
        "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.",
    ],
    name: 'John Doe',
}

export default data;