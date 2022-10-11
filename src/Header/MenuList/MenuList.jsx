import React from "react";
import "./menulist.css";

const menuItems = [
  { name : 'Портфолио', href : '' },
  { name : 'Конфигуратор', href : '' },
  { name : 'Основные услуги', href : '' },
  { name : 'Статьи', href : '' },
  { name : 'О нас', href : '' }
];

export function MenuList() {

  function menuListItem(data, idx) {
    return (
      <li key={idx} className="menuListItem">
        <a href={`#${data.href}`} className="menuLink">{data.name}</a>
      </li>
    );
  };

  return (
    <ul className="menuList">
      {menuItems.map(menuListItem)}
    </ul>
  );
}
