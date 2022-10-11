import React from 'react';
import './heroadditionalservices.css';
import { AdditionalService } from './AdditionalService/AdditionalService';
import icon from '../../img/additional.png'

export function HeroAdditionalServices() {
  return (
    <div className="heroAdditionalServices">
      <h3 className="sectionName">
        <img src={icon} /> Дополнительные услуги</h3>
      <div className='additionalServicesContainer'>
      <AdditionalService>Айдентика</AdditionalService>
      <AdditionalService>Айдентика</AdditionalService>
      <AdditionalService>Айдентика</AdditionalService>
      <AdditionalService>Айдентика</AdditionalService>
      <AdditionalService>Айдентика</AdditionalService>
      <AdditionalService>Айдентика</AdditionalService>
      <AdditionalService>Айдентика</AdditionalService>
      <AdditionalService>Айдентика</AdditionalService>
    </div>
    </div>
  );
}
