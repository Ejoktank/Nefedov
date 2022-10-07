import React from "react";
import "./hero.css";
import { HeroUpperContainer } from "./HeroUpperContainer/HeroUpperContainer";
import { HeroLowerContainer } from "./HeroLowerContainer/HeroLowerContainer";
import { HeroAdditionalServices } from "./HeroAdditionalServices/HeroAdditionalServices";

export function Hero() {
  return (
    <section className="heroContainer borad-20">
      <div className="container">
        <HeroUpperContainer />
        <HeroLowerContainer />
        <HeroAdditionalServices />
      </div>
    </section>
  );
}
