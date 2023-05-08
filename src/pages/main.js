import "../styles/style.css";

import section1_img from "../media/section1-img.jpg"

function Main() {
    return (
    <main>
        <section className="section1">
            <div className="section1__text-area">
                <p className="section1-title">НОВЫЙ ПОМОЩНИК СТУДЕНТА <br /> ДЛЯ УЧЕБЫ И ЕГО УСПЕВАЕМОСТИ</p>
                <p className="section1-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque sequi deserunt <br /> itaque, dolorum ea exercitationem soluta eos culpa aliquam necessitatibus et earum, <br /> perferendis vel nesciunt? Sunt ex hic quos, molestias reiciendis quibusdam eum in <br /> nemo, ab voluptatibus velit tempora incidunt itaque eaque? Illum omnis commodi nam perferendis, optio exercitationem. Provident veritatis deserunt quidem aut tenetur asperiores inventore incidunt id atque.</p>
            </div>
            <div className="section1__img-area">
                <img src={section1_img} alt="" />
            </div>
        </section>
        <section className="section2">
            <p className="section2-title">Какие возможности вы получаете с помощью TSItool?</p>
            <p className="section2-text">1. Lorem ipsum dolor consectetur adipisicing elit. Tempora aperiam maiores assumenda odio, voluptates magnam! Soluta neque eveniet accusantium a id voluptatibus fuga itaque eos!</p>
            <p className="section2-text">2. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores modi ullam nobis, minima expedita accusantium beatae necessitatibus similique?</p>
            <p className="section2-text"> 3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur maxime quia enim qui corrupti illum. </p>
            <p className="section2-text">4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, deserunt?</p>
            <p className="section2-text"> 5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, mollitia tempore ab eligendi odit est vitae cum. </p>
            <p className="section2-text"> 6. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum sint, magni illo qui quo ipsa suscipit provident inventore? Ipsum.</p>
        </section>
    </main>
);
}

export default Main;