import React from 'react';
import './feedback.css';

export function Feedback() {
  return (
    <section className='feedback borad-20 pos-relative'>
      <div className="container d-flex">
        <div className="portfolioContainer">
          <div className="portfolioCard portfolioCard-1"></div>
          <div className="portfolioCard portfolioCard-2"></div>
          <div className="portfolioCard portfolioCard-3"></div>
        </div>
        <div className="feedbackFormContainer">
          <form className='feedbackForm' action="#" method="post">
            <input className='feedbackInput' placeholder='Фамилия, имя и отчество*' type="text" name="fio" id="fio" />
            <input className='feedbackInput' placeholder='Мобильный телефон*' type="phone" name="phone" id="phone" />
            <input className='feedbackInput' placeholder='Электронная почта' type="email" name="email" id="email" />
            <button className='submitBtn' type="submit">На месяц - 299 Р</button>
            <label htmlFor='checkbox' className=''>
              <input type="checkbox" name="checkbox" id="checkbox" />
              Я принимаю условия передачи информации 
              </label>
          </form>
        </div>
      </div>
      <p className="formText">
          By clicking the button, you agree to FedorandFedora Terme 
          of Service and Privacy Policy. You also agree to receive news, 
          product updates, event announcements, and other 
          communications from Optimizely and out aubaidiaries. 
          You can unsubscribe anytime.
          </p>
    </section>
  );
}
