import "../styles/style.css";

import section1_img from "../media/section1-img.jpg"

function Main() {
    return (
    <main>
        <section className="section1">
            <div className="section1__text-area">
                <p className="section1-title">НОВЫЙ ПОМОЩНИК СТУДЕНТА <br /> ДЛЯ УЧЕБЫ И ЕГО УСПЕВАЕМОСТИ</p>
                <p className="section1-text">Если вы являетесь студентом TSI AUCA и хотите повысить свою успеваемость, то мы рады <br/> сообщить, что существует новый телеграмм бот, который будет вашим надежным помощником в учебе! Этот бот не только поможет вам посчитать ваш текущий GPA (средний балл), но и предоставит вам полную информацию о ваших minor часах. </p>
            </div>
            <div className="section1__img-area">
                <img src={section1_img} alt="" />
            </div>
        </section>
        <section className="section2">
            <p className="section2-title">Какие возможности вы получаете с помощью TSItool?</p>
            <p className="section2-text">1. Вы сможете увидеть ваши Minor часы</p>
            <p className="section2-text">2. Подсчет вашего GPA</p>
            <p className="section2-text"> 3.  </p>
            <p className="section2-text">4. </p>
            <p className="section2-text"> 5. </p>
            <p className="section2-text"> 6. </p>
        </section>
    </main>
);
}

export default Main;