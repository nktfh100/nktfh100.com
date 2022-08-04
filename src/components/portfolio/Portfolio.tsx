import ScrollAnimation from "react-animate-on-scroll";
import "./Portfolio.scss";
import ProjectItem from "./projectItem/ProjectItem";

const projects: { title: string, desc: string, image?: string, technologies: string[], youtubeLink?: string, links: string[] }[] = [
    {
        title: "Super Gobblet Online",
        desc: "A polished high quality multiplayer game like tic tac toe, but with a twist.\nDesigned by Roye Fire Explosion.",
        image: "/assets/media/gobblet_img_1.webp",
        technologies: ["React Native", "JavaScript", "MongoDB", "Socket.io", "Node.js", "Zustand", "Expo"],
        links: ["Google Play@https://play.google.com/store/apps/details?id=com.nktfh100.supergobbletonline", "Github@https://github.com/nktfh100/super-gobblet-online"]
    },
    {
        title: "Taki Online",
        desc: "An online version of the popular card game Taki.\nThis is also my first time building a multiplayer online game.",
        image: "/assets/media/taki_img_1.webp",
        technologies: ["React", "Node.js", "Socket.io"],
        links: []
    },
    {
        title: "Music Player",
        desc: 'A fully functional local music player that allows you to download songs from YouTube.',
        image: "/assets/media/music_player_img_1.webp",
        technologies: ["JavaScript", "React", "Electron"],
        links: []
    },
    {
        title: "KritzCoin",
        desc: "A virtual currency bot I was commissioned to develop where users can buy and sell items from each other using their coins.",
        image: "/assets/media/kritzcoin_img.webp",
        technologies: ["JavaScript", "Node.js", "MySQL"],
        links: []
    },
    {
        title: "Among Us in Minecraft",
        desc: "The popular game 'Among Us' made into a minecraft plugin.\n In the video, you can see topstrix, a popular youtuber, playing with the plugin.",
        youtubeLink: "https://www.youtube.com/embed/lvaesLLZ4EU",
        technologies: ["Java", "SpigotAPI"],
        links: ["SpigotMC@https://www.spigotmc.org/resources/imposters-minigame-1-16-1-16-5.86051/"]
    },
];

export default function Portfolio() {
    return (
        <div id="portfolio" className="portfolio-container">
            <div className="content-container">
                <h1 className="title">Projects</h1>
                <div className="content">
                    {projects.map((project, index) => {
                        return (
                            <ScrollAnimation animateIn={index % 2 == 0 ? "animate__slideInLeft" : "animate__slideInRight"} duration={1.8} offset={50} animateOnce={true} initiallyVisible={false}>
                                <ProjectItem key={index} isLeft={index % 2 == 0} title={project.title} description={project.desc} image={project.image} youtubeLink={project.youtubeLink} technologies={project.technologies} links={project.links} />
                            </ScrollAnimation>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}