import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const Subscribe = (props) => {
  return (
    <div className={`subscribe ${props.direction ? props.direction : ''}`}>
      <h2 className="title">VENHA PARTICIPAR</h2>
      <Button bsStyle="primary" className="button">Inscreva-se</Button>
    </div>
  );
}

export default Subscribe;
