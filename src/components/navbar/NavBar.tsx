import "./NavBar.scss";

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="content">
                <img src="/assets/nav-logo.webp" className="navbar-logo" alt="" />
                <div className="links-container">
                    <a href="#" className="link">Home</a>
                    <a href="#portfolio" className="link">Projects</a>
                </div>
            </div>
        </nav>
    );
}