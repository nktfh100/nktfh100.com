import "../styles/NavBar.scss";

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="content">
                <img src="/assets/nav-logo.png" className="navbar-logo" alt="" />
                <div className="links-container">
                    <a href="#" className="link">Home</a>
                    <a href="#services" className="link">Services</a>
                    <a href="#portfolio" className="link">Portfolio</a>
                    <a href="#contact-me" className="link">Contact Me</a>
                </div>
            </div>
        </nav>
    );
}