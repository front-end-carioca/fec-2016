import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const Palestrantes = ({name, palestrantes, toggleDetails}) =>
  <section className="section" id={name}>
    <h2 className="section-title">PALESTRANTES</h2>
    <h3 className="section-subtitle"><span>Veja a lista dos nossos palestrantes do evento</span></h3>
    <Grid>
      <Row>
      {palestrantes.map((p, i) => {
        const {name, avatar, expecialidade, opened, description} = p;
        const classOpened = opened ? 'opened': '';

        return <Col key={i} xs={12} sm={6} md={4}>
          <div className="palestrante">
            <img className="avatar" src={avatar} height="350"/>
            {(typeof window !== 'undefined' && 'ontouchstart' in window ?
              <button className="more-details" onClick={toggleDetails.bind(this, i)}>
                <i className="material-icons">more_vert</i>
              </button> :
              ''
            )}
            <div className={`details ${classOpened}`} >
              <h2 className="name">{name}</h2>
              <h3 className="specialty">{expecialidade}</h3>
              <h3 className="description">{description}</h3>
            </div>
          </div>
        </Col>;
      })}
      </Row>
    </Grid>
  </section>;

export default Palestrantes;
