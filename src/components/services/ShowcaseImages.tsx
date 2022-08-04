import { useEffect, useState } from "react";

export default function ShowcaseImages() {

    const images: [imgSrc: string, imgPos: string][] = [
        ["/assets/media/maase_yotser_img_1.webp", "center"],
        ["/assets/media/castelia_img_2.webp", "right"],
        ["/assets/media/castelia_img_1.webp", "right"],
        ["/assets/media/exercitia_latina_img_1.webp", "center"],
        ["/assets/media/learn_english_img_1.webp", "center"],
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
            {images.map((image, index) => {
                return (
                    <img
                        loading="lazy"
                        key={index}
                        src={image[0]}
                        alt=""
                        className={`image-showcase-img ${index === currentImage ? "img-appear" : index === currentImage - 1 || (index === images.length - 1 && currentImage == 0 && !firstTime) ? "img-disappear" : ""}`}
                        style={{ position: index == 0 ? "relative" : "absolute", objectPosition: image[1] }} />
                );
            })}
        </div>
    );
}
