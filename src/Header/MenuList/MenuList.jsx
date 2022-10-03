import React from "react";
import "./menulist.css";

export function MenuList() {
  return (
    <ul className="menuList">
      <li className="menuListItem">
        <a href="#" className="menuLink">Портфолио</a>
      </li>
      <li className="menuListItem">
        <a href="#" className="menuLink">Конфигуратор</a>
      </li>
      <li className="menuListItem">
        <a href="#" className="menuLink">Основные услуги</a>
      </li>
      <li className="menuListItem">
        <a href="#" className="menuLink">Статьи</a>
      </li>
      <li className="menuListItem">
        <a href="#" className="menuLink">О нас</a>
      </li>
    </ul>
  );
}
