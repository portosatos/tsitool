import "../styles/style.css";
import tg_link from "../media/link_to_telegram.svg"

function Telegram() {
    return (
    <main>

        <a href="https://t.me/TsiToolsBot">
        <img className="tg__img" src={tg_link} />
        </a>

    </main>
);
}

export default Telegram;