import React from "react";
import "./header.css";
import { Logo } from "./Logo/Logo";
import { MenuList } from "./MenuList/MenuList";
import { Burger } from "./Burger/Burger";
import { AllProducts } from "./AllProducts/AllProducts";

export function Header() {
  return (
    <header className="header">
      <div className="headerSubContainer">
        <Logo />
        <MenuList />
      </div>
      <div className="headerSubContainer">
        <AllProducts />
        <Burger />
      </div>
    </header>
  );
}
