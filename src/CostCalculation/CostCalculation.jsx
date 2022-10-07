import React from "react";
import "./costcalculation.css";
import icon from "../img/cost.png";
import costGraph from "../img/cost_graph.png";

export function CostCalculation() {
  return (
    <section className="costCalculation borad-20">
      <div className="container">
          <h3 className="sectionName">
            <img src={icon} /> Сравнение стоимости
          </h3>
        <div className="calculationUpperContainer">
            <h2 className="sectionHeader">Стоимость</h2>
            <p className="sectionHeadingText">
              Перед тем как выйти на рынок и заявить о себе мы подробно изучили
              ценовую политику наших конкурентов в сфере дизайна и разработок,
              для того, чтобы предложить вам наиболее выгодное решение. Сейчас,
              во время кризиса, мы как никто более заинтересованы оптимизировать
              бизнес-процесс, чтобы сэкономить ваши финансы.
            </p>
        </div>
        <div className="calculationLowerContainer">
          <div className="costGraph">
            <img src={costGraph} />
          </div>
          <span className="costPrice">от 30.000</span>
          <div className="yellowRect">
            <p className="yellowRectText">
              Наша цена за услуги брендинга ниже среднерыночной в <span className="yellowRectMultiplicity">2,2x</span> раза
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
