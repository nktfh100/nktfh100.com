import { useEffect, useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../styles/Portfolio.scss";

function ProjectItem({ active, title, description, image, youtubeLink, isVideo }: { active: boolean; title: string; description: string; image?: string; youtubeLink?: string; isVideo: boolean }) {
    return (
        <div className="project-item" style={{display: active ? "" : "none"}}>
            <div className="project-left">
                {image && !youtubeLink && !isVideo ? <img loading="lazy" className="project-media" src={image} alt={title + " image"} /> : null}
                {youtubeLink && !image && !isVideo ? <iframe title="Youtube video" className="project-media" src={youtubeLink} /> : null}
                {isVideo && image && !youtubeLink ? <video loop={true} autoPlay={active} muted={true} className="project-media" src={image} /> : null}
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
    const projects: [title: string, desc: string, image: string, youtubeLink: string, isVideo: boolean][] = [
        ["Among Us in Minecraft", "The popular game 'Among Us' made into a minecraft plugins using java.\n In the video, you can see topstrix, a popular youtuber, playing with the plugin.", "", "https://www.youtube.com/embed/lvaesLLZ4EU", false],
        ["Music Player", 'A fully functional local music player that allows you to download songs from YouTube.\nBuilt with Electron & React', "/assets/media/music_player_img_1.webp", "", false],
        ["Taki Online", "A React-based online version of the popular card game Taki.\nThis is also my first time building a multiplayer online game.", "/assets/media/taki_video_1.mp4", "", true],
        ["Maase Yotser", "A simple website made with React to showcase my father's work.", "/assets/media/maase_yotser_video_1.mp4", "", true],
        ["KritzCoin", "A virtual currency bot I was commissioned to develop where users can buy and sell items from each other using their coins.\nDeveloped using Javascript and MySQL.", "/assets/media/kritzcoin_img.webp", "", false],
    ];

    const [currentProject, setCurrentProject] = useState(0);

    return (
        <div id="portfolio" className="portfolio-container">
            <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true} initiallyVisible={false} className="content-container">
                <div className="content-container">
                    <h1 className="title">Portfolio</h1>
                    <div className="content">
                        <h2 className="project-title-mobile">{projects[currentProject][0]}</h2>
                        {projects.map((project, index) => {
                            return <ProjectItem key={index} active={index === currentProject} title={project[0]} description={project[1]} image={project[2]} youtubeLink={project[3]} isVideo={project[4]} />;
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