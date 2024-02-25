
const Navigation = () => {


    return (
        <nav className="container" >
                <div className="logo">
                    <img src="public/images/brand_logo.png" alt="logo"/>
                </div>
                    <ul>
                       <li>MENU</li>
                       <li>LOCATION</li>
                       <li>ABOUT</li>
                       <li>CONTACT</li>
                    </ul>
                    <button className="login-btn">
                        Login
                    </button>
        </nav>
    );
};

export default Navigation;