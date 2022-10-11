import React from 'react';
import './additionalservice.css';

export function AdditionalService(props) {
  return (
    <div className="additionalService">
      <div style={{bacgroundImage : "./img/src/lol.jpg"}} className="additionalServicePicture">
      </div>
      <p className="additionalServiceName">{props.children}</p>
    </div>
  );
}
