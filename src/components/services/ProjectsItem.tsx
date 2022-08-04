import { useEffect, useState, useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";

export default function ProjectsItem({ title, amount }: { title: string; amount: number; }) {

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
            }, 700);
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
