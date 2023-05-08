import "./header.css"
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../../pages/main";
import Telegram from "../../pages/telegram";
import tsi__logo from "../../media/tsi-logo.png";

const Header = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <Router>
            <header>
                <Link to="https://tsiauca.kg/ru/">
                    <img src={tsi__logo} alt="" />
                </Link>
                <ul>
                    <li>
                        <Link to="/main" className={isActive('/main')}> Main </Link>
                    </li>
                    <li>
                        <Link to="/telegram" className={isActive('/telegram')}>Telegram</Link>
                    </li>
                </ul>
            </header>
            <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="/telegram" element={<Telegram />} />
            </Routes>
        </Router>
    )
}

export default Header;
