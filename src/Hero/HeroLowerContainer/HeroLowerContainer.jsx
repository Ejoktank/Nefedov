import React from "react";
import "./herolowercontainer.css";

export function HeroLowerContainer() {
  return (
    <div className="heroLowerContainer">
      <div className="heroLowerLeftContainer">
        <h1 className="heroLowerContainerHeader">
          Вам будет <span className="textBlue">много</span>
        </h1>
        <p className="heroLowerContainerText">
          Наша главной задачей является не моментальное извлечение выгоды, а
          предоставление клиенту качественного и уникального продукта в виде
          сайта, брендинга, приложения или др услуг.
            <span className="heroIconsListItem heroIconsListItem-1">B</span>
            <span className="heroIconsListItem heroIconsListItem-2">W</span>
            <span className="heroIconsListItem heroIconsListItem-3">A</span>
            <span className="heroIconsListItem heroIconsListItem-4">O</span>
        </p>
        <p className="heroLowerContainerText">
          Мы делаем уникальный и качественный продукт, где каждый получит, то в
          чем нуждается. Четыре направления услуг, которые включают в себя по
          несколько уникальных тарифов
            <span className="heroIconsListItem heroIconsListItem-5">S</span>
            <span className="heroIconsListItem heroIconsListItem-6">P</span>
            <span className="heroIconsListItem heroIconsListItem-7">P</span>
        </p>
      </div>
      <div className="heroLowerRightContainer">
        <h3 className="heroLowerContainerSubheader">Популярные вопросы</h3>
        <ul className="popularQuestions">
          <li className="popularQuestion">
            From the first presentation to the final pixel{" "}
            <span className="popQuestPlus">+</span>
          </li>
          <li className="popularQuestion">
            design teams move faster and mode efficiently{" "}
            <span className="popQuestPlus">+</span>
          </li>
          <li className="popularQuestion">
            with async video messaging <span className="popQuestPlus">+</span>
          </li>
          <li className="popularQuestion">
            From the first presentation to the final pixel{" "}
            <span className="popQuestPlus">+</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
