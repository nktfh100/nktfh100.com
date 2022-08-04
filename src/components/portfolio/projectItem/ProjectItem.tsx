import useCheckMobileScreen from "../../../hooks/useCheckMobileScreen";
import ProjectLink from "./ProjectLink";
import "./ProjectItem.scss";

export default function ProjectItem({ title, description, image, youtubeLink, technologies, isLeft, links }: { title: string; description: string; image?: string; youtubeLink?: string; technologies: string[]; isLeft: boolean; links: string[]; }) {
    const isMobile = useCheckMobileScreen();

    const mediaElement = (<div className="project-media">
        {image && !youtubeLink && <img className="project-image" src={image} alt={title + " image"} />}
        {youtubeLink && <iframe title="Youtube video" className="project-image project-image-yt" src={youtubeLink} />}
    </div>);

    return (
        <div className="project-item">
            {isLeft || isMobile ? mediaElement : null}
            <div className="project-desc">
                <h2 className="project-title">{title}</h2>
                <div className="project-description-container">
                    <div className="project-description">{description.split("\n").map((line, index) => {
                        return <p key={index}>{line}</p>;
                    })}</div>
                </div>
                <div className="project-technologies">{technologies.join(", ")}</div>
                <div className="project-links">
                    {links.map(linkData => <ProjectLink key={linkData} linkData={linkData} />)}
                </div>
            </div>
            {!isLeft && !isMobile ? mediaElement : null}
        </div>
    );
}
