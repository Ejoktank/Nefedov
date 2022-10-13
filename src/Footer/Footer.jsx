import React from "react";
import "./footer.css";

export function Footer() {
  return (
    <footer>
      <div className="container footerContainer">
        <div className="footerLeft">
          <div className="footerSubcontainer">
            <a href="tel: +78005000522" className="footerPhone">8 (800) 500-05-22</a>
            <p className="footerText">Контактный центр</p>
          </div>
          <div className="footerSubcontainer">
            <a href="tel: +74994449036" className="footerPhone">+7 499 444 90 36</a>
            <p className="footerText">Отдел заботы о пользователях</p>
          </div>
          <div className="footerSubcontainer">
            <p className="adress">
            Нижний Новгород, Ленинский проспект, <br /> дом 6, строение 20
            </p>
          </div>
        </div>
        <div className="footerRight">
          <ul className="footerList"> Все направления
            <li><a href="#" className="fiiterListItem">Программирование</a></li>
            <li><a href="#" className="fiiterListItem">Дизайн</a></li>
            <li><a href="#" className="fiiterListItem">Маркетинг</a></li>
            <li><a href="#" className="fiiterListItem">Управление</a></li>
            <li><a href="#" className="fiiterListItem">Игры</a></li>
            <li><a href="#" className="fiiterListItem">Мультимедиа</a></li>
            <li><a href="#" className="fiiterListItem">Для бизнеса</a></li>
          </ul>
          <ul className="footerList">О Nefedov
            <li><a href="#" className="fiiterListItem">О Платформе</a></li>
            <li><a href="#" className="fiiterListItem">Центр карьеры</a></li>
            <li><a href="#" className="fiiterListItem">Отзывы</a></li>
            <li><a href="#" className="fiiterListItem">Контакты</a></li>
            <li><a href="#" className="fiiterListItem">Вакансии</a></li>
          </ul>
          <ul className="footerList">Вебинары
            <li><a href="#" className="fiiterListItem">Все вебинары</a></li>
            <li><a href="#" className="fiiterListItem">Плейлисты</a></li>
            <li><a href="#" className="fiiterListItem">Расписание</a></li>
          </ul>
          <ul className="footerList">Медиа
            <li><a href="#" className="fiiterListItem">Партнёрская программа</a></li>
            <li><a href="#" className="fiiterListItem">Корпоративным клиентам</a></li>
            <li><a href="#" className="fiiterListItem">Для работодателей</a></li>
          </ul>
        </div>
      </div>
      <div className="container separatorContainer">
        <div className="separator"></div>
      </div>
      <div className="container footerContainer footerUnderline">
        <div className="footerLeft">          
          <div className="underlinedText">Nefedov, 2022</div>
        </div>
        <div className="footerRight">
          <div className="footerRightLeft">
            <a href="#" className="underlinedText">Договор оферты</a>
            <a href="#" className="underlinedText">Оплата</a>
          </div>
          <div className="footerRightRight">
            <a href="#" className="underlinedText">Политика конфиденциальности</a>
            <a href="#" className="underlinedText">Политика пользования Платформой</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
