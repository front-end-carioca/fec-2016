import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';

const Palestrante = ({name, avatar, expecialidade, opened, description, onClickDetails}) => {
  const classOpened = opened ? 'opened': 'closed';
  
  return <Col className={classOpened} xs={12} sm={6} md={4}>
    <div className="palestrante">
      <img className="avatar" src={avatar} />
      {(typeof window !== 'undefined' && 'ontouchstart' in window ?
        <button className="more-details" onClick={onClickDetails}><i className="material-icons">more_vert</i></button> :
        ''
      )}
      <div className="details">
        <h2>{name}</h2>
        <h3>{expecialidade}</h3>
        <h3>{description}</h3>
      </div>
    </div>
  </Col>
};

export default Palestrante;
