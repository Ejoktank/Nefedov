import React from 'react';
import './allproducts.css';
import all_products from '../../img/all_products.png'


export function AllProducts() {
  return (
    <button className='button'>
      Все продукты
      <img className='picture' src={all_products} />
    </button>
  );
}
