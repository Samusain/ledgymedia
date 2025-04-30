import './Header.css';

const Header = () => {
    return ( 
        <div className="header-container">
            <header className="hero-header">
                {/* <img src="../../images/logo.png" alt="logo" /> */}
                <h1>LEDGY MEDIA</h1>
                <button className="cta-button">Let's Talk →</button>
            </header>
        </div>
     );
}
 
export default Header;