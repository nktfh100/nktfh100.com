
import "../styles/ContactMe.scss";

export default function ContactMe() {
    return (
        <div id="contact-me" className="contact-me-container">
            <div className="content-container">
                <div className="banner-container" style={{ backgroundImage: "url('/assets/contact-me-banner.webp')" }}>
                    <div className="banner-content-container">
                        <h1 className="banner-title">Do you have a project idea?</h1>
                        <p className="banner-text">Send me a message now and let's create your dream project.</p>
                        <a className="banner-button" href="mailto:me@nktfh100.com">
                            <img src="/assets/contact_button.svg" alt="contact button"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}