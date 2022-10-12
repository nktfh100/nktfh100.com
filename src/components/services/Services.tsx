import "./Services.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import ProjectsItem from "./ProjectsItem";
import ShowcaseImages from "./ShowcaseImages";

export default function Services() {
    return (
        <div id="services" className="services-container">
            <ScrollAnimation animateIn="animate__slideInLeft" animateOnce={true} duration={1.4} initiallyVisible={false} className="content-container">
                <h1 className="title">Services</h1>
                <div className="content">
                    <div className="content-left">
                        <ShowcaseImages />
                    </div>
                    <div className="content-right">
                        <p className="description">My services include building websites, discord bots, and high quality minecraft plugins.</p>
                        <p className="below-description">I have already worked on:</p>
                        <div className="projects-worked-on-container">
                            <ProjectsItem title="Minecraft Plugins" amount={27} />
                            <ProjectsItem title="Websites" amount={14} />
                            <ProjectsItem title="Apps" amount={6} />
                            <ProjectsItem title="Discord Bots" amount={5} />
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
}