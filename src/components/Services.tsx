import { useEffect, useState, useRef } from "react";
import "../styles/Services.scss";
import useOnScreen from "../hooks/useOnScriin";
import ScrollAnimation from 'react-animate-on-scroll';

function ProjectsItem({ title, amount }: { title: string; amount: number; }) {

    const elementRef = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen(elementRef);

    const [animationStarted, setAnimationStarted] = useState(false);
    const [animationEnded, setAnimationEnded] = useState(false);
    const [numberShown, setNumberShown] = useState(0);

    useEffect(() => {
        if (isOnScreen && !animationStarted) {
            setAnimationStarted(true);
            setTimeout(() => {
                setNumberShown(numberShown + 1);
            }, 500);
        }
    }, [isOnScreen]);

    useEffect(() => {
        if (animationStarted && !animationEnded) {
            setTimeout(() => {
                if (numberShown < amount) {
                    setNumberShown(numberShown + 1);
                }
            }, 70);
        }
    }, [numberShown]);

    useEffect(() => {
        if (numberShown >= amount) {
            setAnimationEnded(true);
            setNumberShown(amount);
        }
    }, [numberShown, amount]);

    return (
        <div ref={elementRef} className="projects-item">
            <p className="projects-amount">{`${numberShown}+`}</p>
            <div className="border"></div>
            <p className="projects-title">{title}</p>
        </div>
    );
}

function ShowcaseImages() {

    const images: [imgSrc: string, imgPos: string][] = [
        ["/assets/media/maase_yotser_img_1.jpg", "center"],
        ["/assets/media/castelia_img_2.png", "right"],
        ["/assets/media/castelia_img_1.png", "right"],
        ["/assets/media/taki_img_1.jpg", "right"],
        ["/assets/media/exercitia_latina_img_1.jpg", "center"],
        ["/assets/media/learn_english_img_1.jpg", "center"],
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [firstTime, setFirstTime] = useState(true);

    const nextImage = () => {
        if (firstTime) {
            setFirstTime(false);
        }
        if (currentImage >= images.length - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    };

    useEffect(() => {
        const interval = setTimeout(nextImage, 1000 * 10);
        return () => clearTimeout(interval);
    }, [currentImage]);

    return (
        <div className="image-showcase-container">
            {
                images.map((image, index) => {
                    return (
                        <img
                            key={index}
                            src={image[0]}
                            alt=""
                            className={`image-showcase-img ${index === currentImage ? "img-appear" : index === currentImage - 1 || (index === images.length - 1 && currentImage == 0 && !firstTime) ? "img-disappear" : ""}`}
                            style={{ position: index == 0 ? "relative" : "absolute", objectPosition: image[1] }}
                        />
                    );
                })
            }
        </div>
    );
}

export default function Services() {
    return (
        <div id="services" className="services-container">
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true} initiallyVisible={false} className="content-container">
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
                            <ProjectsItem title="Websites" amount={13} />
                            <ProjectsItem title="Discord Bots" amount={4} />
                            <ProjectsItem title="Apps" amount={4} />
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
}