import React from 'react';
import './burger.css';
import burger from '../../img/burger.png'

export function Burger() {
  return (
    <button className='button burger-button'>
      Меню
      <img className='picture picture-burger' src={burger} />
    </button>
  );
}
