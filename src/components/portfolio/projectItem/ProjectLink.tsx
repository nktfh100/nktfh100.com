
export default function ProjectLink({ linkData }: { linkData: string; }) {
    const title = linkData.split("@")[0];
    const link = linkData.split("@")[1];
    return (
        <a target="_blank" rel="noreferrer" href={link} className="project-link">
            <p>{title}</p>
        </a>
    );
}