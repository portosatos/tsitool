import "../footer/footer.css"

import instagram from "../../media/instagram-logo.svg"
import twitter from"../../media/twitter-logo.svg"
import vk from "../../media/vk-logo.svg"

const Footer = () => {
    return (
        <footer>
             <div className="footer__img-area">
                <img className="footer__img-area__img" src={instagram} alt="instagram" />
                <img className="footer__img-area__img" src={twitter} alt="twitter" />
                <img className="footer__img-area__img" src={vk} alt="vk" />
            </div>
            <div className="footer__text-area">
                <p className="footer__text-area__text">
                    © 2023 telegram/@wanna_s1eep
                </p>
            </div>
        </footer>
    );
}
 
export default Footer;