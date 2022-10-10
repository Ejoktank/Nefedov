import React from "react";
import "./howwework.css";
import icon from "../img/howWeWork.png";
import icon1 from "../img/howWeWorkIcon-1.png"
import icon2 from "../img/howWeWorkIcon-2.png"
import icon3 from "../img/howWeWorkIcon-3.png"
import icon4 from "../img/howWeWorkIcon-4.png"

export function HowWeWork() {
  return (
    <section className="howWeWork borad-20">
      <div className="container">
        <h3 className="sectionName">
          <img src={icon} /> Сравнение стоимости
        </h3>
        <div className="howWeWorkUpperContainer">
          <h2 className="sectionHeader">Как мы работаем</h2>
          <p className="sectionHeadingText howWeWorkText">
            Наша небольшая команда с первого дня берет на себя ответственность
            на выполнение поставленной задачи. Вашим проектом будем заниматься
            именно тот человек, с которым вы проведете бриф и обо всем
            договоритесь.
          </p>
        </div>
        <div className="howWeWorkLowerContainer">
          <div className="linkerdNumbers">
            <span className="linkedNumber">1</span>
            <span className="linkedNumberChain"></span>
            <span className="linkedNumber">2</span>
            <span className="linkedNumberChain"></span>
            <span className="linkedNumber">3</span>
            <span className="linkedNumberChain"></span>
            <span className="linkedNumber">4</span>
          </div>
          <div className="workBlocksContainer">
            <div className="workBlock">
              <h4 className="sectionName workBlockHeader ">
                <img src={icon1} alt="" />
                Выбор
              </h4>
              <h3 className="workBlockMain">
                Сделайте выбор или позвоните нам
              </h3>
              <p className="workBlockText">
                Пройдите наш конфигуратор или позвоните нам
              </p>
            </div>
            <div className="workBlock">
              <h4 className="sectionName workBlockHeader ">
                <img src={icon2} alt="" />
                Работа
              </h4>
              <h3 className="workBlockMain">
                Выполним ваш заказ за 14-30 дней
              </h3>
              <p className="workBlockText">
                Возврат аванса, если не уложимся в срок
              </p>
            </div>
            <div className="workBlock">
              <h4 className="sectionName workBlockHeader ">
                <img src={icon3} alt="" />
                Оплата
              </h4>
              <h3 className="workBlockMain">Получаете готовый продукт</h3>
              <p className="workBlockText">
                Мы предоставляем вам макеты готового дизайн-проекта
              </p>
            </div>
            <div className="workBlock">
              <h4 className="sectionName workBlockHeader ">
                <img src={icon4} alt="" />
                Результат
              </h4>
              <h3 className="workBlockMain">
                Оплачиваете понравившийся результат
              </h3>
              <p className="workBlockText">
                Получаете полностью готовый макет в оригинале
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
