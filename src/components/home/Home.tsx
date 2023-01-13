
import "./Home.scss";

export default function Home() {
    return (
        <div className="home-container">
            <div className="content-container">
                <div className="content">
                    <div className="content-left">
                        <h1 className="title">Hey! I'm Malachi.</h1>
                        <h2 className="subtitle">Passionate Full Stack Developer.</h2>
                        <div className="socials-container">
                            <a target="_blank" rel="noreferrer" href="https://github.com/nktfh100" className="social-link">
                                <img src="/assets/github-logo.webp" alt="github link" />
                            </a>
                            <a target="_blank" rel="noreferrer" href="mailto:me@nktfh100.com" className="social-link">
                                <img src="/assets/email-logo.webp" alt="email link" />
                            </a>
                        </div>
                    </div>
                    <div className="content-right">
                        <img src="/assets/big-logo.webp" alt="" />
                    </div>
                </div>
                <div className="scroll-down-container">
                    <p>Scroll Down</p>
                    <img src="/assets/down-arrow.webp" alt="" />
                </div>
            </div>
        </div>
    );
}