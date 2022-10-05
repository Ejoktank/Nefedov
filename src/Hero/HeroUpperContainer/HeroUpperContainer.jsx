import React from "react";
import "./herouppercontainer.css";
import heroImg1 from "../../img/heroImg1.png";
import heroImg2 from "../../img/heroImg2.png";
import heroImg3 from "../../img/heroImg3.png";

export function HeroUpperContainer() {
  return (
    <div className="heroUpperContainer">
      <div className="leftContainer">
        <h2 className="upperContainerHeader">
          <span className="formTheFirst">From the first</span> <br />presentation to the final understand me or no
        </h2>
        <div className="heroCardsContainer">
          <div className="card card-1">
            <div className="cardContent">
              <p className="cardText">Изменение стоимости за последний месяц:</p>
              <div className="lowerCardContainer">
                Май <span className="cardPrice">65 Р</span>
                <span className="cardPriseAfter">+5 Р</span>
              </div>
            </div>
          </div>
          <div className="card card-2">
            <p className="cardText">Изменение стоимости за последний месяц:</p>
            <div className="lowerCardContainer">
              Май <span className="cardPrice">65 Р</span>
              <span className="cardPriseAfter">+5 Р</span>
            </div>
          </div>
          <div className="card card-3">
            <p className="cardText">Изменение стоимости за последний месяц:</p>
            <div className="lowerCardContainer">
              Май <span className="cardPrice">65 Р</span>
              <span className="cardPriseAfter">+5 Р</span>
            </div>
          </div>
          <div className="card card-4">
            <p className="cardText">Изменение стоимости за последний месяц:</p>
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
          <img src={heroImg1} className="heroImg heroImg-1"></img>
          <img src={heroImg2} className="heroImg heroImg-2"></img>
          <img src={heroImg3} className="heroImg heroImg-3"></img>
        </div>
      </div>
    </div>
  );
}
