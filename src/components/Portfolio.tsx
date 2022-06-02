import { useEffect, useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../styles/Portfolio.scss";

function ProjectItem({ active, title, description, image, video, youtubeLink }: { active: boolean; title: string; description: string; image?: string; video?: string; youtubeLink?: string; }) {

    const [isLoading, setIsLoading] = useState(video && image ? true : false);

    const imageEle = image ? <img loading="lazy" className="project-media" src={image} alt={title + " image"} /> : null;

    return (
        <div className="project-item" style={{ display: active ? "" : "none" }}>
            <div className="project-left">
                {
                    (video && image && isLoading) || (image && !video) ? imageEle : null
                }
                {youtubeLink && <iframe title="Youtube video" className="project-media" src={youtubeLink} />}
                {video && <video style={{ display: video && image && isLoading ? "none" : "" }} loop={true} autoPlay={active} muted={true} className="project-media" src={video} onLoadedData={() => setIsLoading(false)} />}
            </div>
            <div className="project-right">
                <h2 className="project-title">{title}</h2>
                <div className="project-description">{
                    description.split("\n").map((line, index) => {
                        return <p key={index}>{line}</p>;
                    })
                }</div>
            </div>
        </div>
    );
}

export default function Services() {
    const projects: { title: string, desc: string, image?: string, video?: string, youtubeLink?: string }[] = [
        {
            title: "Among Us in Minecraft",
            desc: "The popular game 'Among Us' made into a minecraft plugins using java.\n In the video, you can see topstrix, a popular youtuber, playing with the plugin.",
            youtubeLink: "https://www.youtube.com/embed/lvaesLLZ4EU"
        },
        {
            title: "Music Player",
            desc: 'A fully functional local music player that allows you to download songs from YouTube.\nBuilt with Electron & React',
            image: "/assets/media/music_player_img_1.webp"
        },
        {
            title: "Taki Online",
            desc: "A React-based online version of the popular card game Taki.\nThis is also my first time building a multiplayer online game.",
            video: "/assets/media/taki_video_1.mp4",
            image: "/assets/media/taki_img_1.webp"
        },
        {
            title: "Maase Yotser",
            desc: "A simple website made with React to showcase my father's work.",
            video: "/assets/media/maase_yotser_video_1.mp4",
            image: "/assets/media/maase_yotser_img_1.webp"
        },
        {
            title: "KritzCoin",
            desc: "A virtual currency bot I was commissioned to develop where users can buy and sell items from each other using their coins.\nDeveloped using Javascript and MySQL.",
            image: "/assets/media/kritzcoin_img.webp"
        }
    ];

    const [currentProject, setCurrentProject] = useState(0);

    return (
        <div id="portfolio" className="portfolio-container">
            <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true} initiallyVisible={false} className="content-container">
                <div className="content-container">
                    <h1 className="title">Portfolio</h1>
                    <div className="content">
                        <h2 className="project-title-mobile">{projects[currentProject].title}</h2>
                        {projects.map((project, index) => {
                            return <ProjectItem key={index} active={index === currentProject} title={project.title} description={project.desc} image={project.image} video={project.video} youtubeLink={project.youtubeLink} />;
                        })}
                        <div className="dots-container">
                            {projects.map((project, index) => {
                                return <div key={index} className={index === currentProject ? "dot dot-active" : "dot"} onClick={() => setCurrentProject(index)} />;
                            })}
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
}