import React from "react";
import "./hero.css";
import { HeroUpperContainer } from "./HeroUpperContainer/HeroUpperContainer";
import { HeroLowerContainer } from "./HeroLowerContainer/HeroLowerContainer";
import { HeroAdditionalServices } from "./HeroAdditionalServices/HeroAdditionalServices";

export function Hero() {
  return (
    <div className="heroContainer">
      <HeroUpperContainer />
      <HeroLowerContainer />
      <HeroAdditionalServices />
    </div>
  );
}
