// Header.js
import "./header.css";
import {Link, useLocation} from "react-router-dom";
import tsi__logo from "../../media/tsi-logo.png";

const Header = () => {
    const location = useLocation();
    const isActive = (path) => (location.pathname === path ? "active" : "");

    return (
        <header>
            <Link to="/">
                <img src={tsi__logo} alt=""/>
            </Link>
            <ul>
                <li>
                    <Link to="/main" className={isActive("/main")}>
                        Main
                    </Link>
                </li>
                <li>
                    <Link to="/telegram" className={isActive("/telegram")}>
                        Telegram
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;