import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const Subscribe = (props) => {
  return (
    <div className={`subscribe ${props.direction ? props.direction : ''}`}>
      <label>VENHA PARTICIPAR</label>
      <Button bsStyle="primary">INSCREVA-SE</Button>
    </div>
  );
}

export default Subscribe;
