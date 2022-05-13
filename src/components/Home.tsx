
import "../styles/Home.scss";

export default function Home() {
    return (
        <div className="home-container">
            <div className="content-container">
                <div className="content">
                    <div className="content-left">
                        <h1 className="title">Hey! I'm Malachi.</h1>
                        <h2 className="subtitle">Developer.</h2>
                        <div className="socials-container">
                            <a target="_blank" href="https://github.com/nktfh100" className="social-link">
                                <img src="/assets/github-logo.png" alt="github link" />
                            </a>
                            <a target="_blank" href="mailto:me@nktfh100.com" className="social-link">
                                <img src="/assets/email-logo.png" alt="email link" />
                            </a>
                        </div>
                        <div className="about-me">
                            <p>I am 19 years old and currently serving in the israeli military.</p>
                            <p>I develop responsive websites, discord bots and minecraft plugins.</p>
                        </div>
                    </div>
                    <div className="content-right">
                        <img src="/assets/big-logo.png" alt="" />
                    </div>
                </div>
                <div className="scroll-down-container">
                    <p>Scroll Down</p>
                    <img src="/assets/down-arrow.png" alt="" />
                </div>
            </div>
        </div>
    );
}