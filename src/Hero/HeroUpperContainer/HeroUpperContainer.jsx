import React from "react";
import "./herouppercontainer.css";

export function HeroUpperContainer() {
  return (
    <div className="heroUpperContainer">
      <div className="leftContainer">
        <h2 className="upperContainerHeader">
          From the first presentation to the final understand me or no
        </h2>
        <div className="heroCardsContainer">
          <div className="card card-1">
            <div className="cardContent">
              <p className="cardText">Изменение стоимости за месяц:</p>
              <div className="lowerCardContainer">
                Май <span className="cardPrice">65 Р</span>
                <span className="cardPriseAfter">+5 Р</span>
              </div>
            </div>
          </div>
          <div className="card card-2">
            <p className="cardText">Изменение стоимости за месяц:</p>
            <div className="lowerCardContainer">
              Май <span className="cardPrice">65 Р</span>
              <span className="cardPriseAfter">+5 Р</span>
            </div>
          </div>
          <div className="card card-3">
            <p className="cardText">Изменение стоимости за месяц:</p>
            <div className="lowerCardContainer">
              Май <span className="cardPrice">65 Р</span>
              <span className="cardPriseAfter">+5 Р</span>
            </div>
          </div>
          <div className="card card-4">
            <p className="cardText">Изменение стоимости за месяц:</p>
            <div className="lowerCardContainer">
              Май <span className="cardPrice">65 Р</span>
              <span className="cardPriseAfter">+5 Р</span>
            </div>
          </div>
        </div>
      </div>
      <div className="rightContainer">
        <p className="upperContainerSubheader">
          your vision with developers so they can help bring it to life with developers so they can
        </p>
        <div className="heroIconsContainer">
          <div className="heroIconContainer">
            <span className="heroIcon heroIcon-1"></span>            
            <span className="heroIconText">100 м</span>
          </div>
          <div className="heroIconContainer">
            <span className="heroIcon heroIcon-2"></span>            
            <span className="heroIconText">50 м</span>
          </div>
          <div className="heroIconContainer">
            <span className="heroIcon heroIcon-3"></span>            
            <span className="heroIconText">1 лестница</span>
          </div>
          <div className="heroIconContainer">
            <span className="heroIcon heroIcon-4"></span>            
            <span className="heroIconText">2 калитки</span>
          </div>
        </div>
        <div className="heroImgComtainer">
          <div className="heroImg heroImg-1"></div>
          <div className="heroImg heroImg-2"></div>
          <div className="heroImg heroImg-3"></div>
        </div>
      </div>
    </div>
  );
}
