import "../styles/style.css";

import section1_img from "../media/section1-img.jpg"

function Main() {
    return (
    <main>
        <section className="section1">
            <div className="section1__text-area">
                <p className="section1-title">A NEW STUDENT'S ASSISTANT <br /> FOR TRAINING AND HIS ACCOUNTABILITY</p>
                <p className="section1-text">If you are a TSI AUCA student and want to improve your grades, we are <br/>pleased to inform you that there is a new Telegram bot that will be your reliable study assistant! This bot will not only help you calculate your current GPA (grade point average), but will also give you complete information about your minor hours.</p>
            </div>
            <div className="section1__img-area">
            </div>
        </section>
        <section className="section2">
            <p className="section2-title">What features you get with TSItool?</p>
            <p className="section2-text">1. You will be able to see your Minor watch. To do this, you will need to log in through your AuCash account, as the Minor is confidential information.</p>
            <p className="section2-text">2. Calculation of your GPA. For this you will need to enter your current scores, and then our bot will calculate your approximate GPA.</p>
            <p className="section2-text"> 3. Receiving a task from Azem. We've decided to improve the system for receiving Assignments from Azem. This bot will send you notifications when Azem needs help, so you'll always know what's going on.</p>
            <p className="section2-text">4. More to come, more features will be added later.</p>
            <p className="section2-text"></p>
            <p className="section2-text"></p>
        </section>
    </main>
);
}

export default Main;