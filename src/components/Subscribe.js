import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const Subscribe = (props) => {
  return (
    <div className={`subscribe ${props.direction ? props.direction : ''}`}>
      <h2 className="title">Venha participar</h2>
      <a href="http://even.tc/front-end-carioca-2016" className="submit" target="_blank">Inscreva-se</a>
    </div>
  );
}

export default Subscribe;
