import "./header.css"

import tsi__logo from "../../media/tsi-logo.png"

const Header = () => {
    return (
        <header>
            <a href="https://tsiauca.kg/ru/"> <img src={tsi__logo} alt=""/></a>
            <ul>
                <li><a className="header__first-li">Main</a></li> 
                <li><a href="../pages/">News</a></li>
                <li><a href="../pages/">Telegram</a></li>
                <li><a href="../pages/">About</a></li>
            </ul>
    </header>
    )
}

export default Header;  