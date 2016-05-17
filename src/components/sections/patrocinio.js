import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Patrocinio extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {name, patrocinadores, children} = this.props;
    return (
      <section className="section patrocinadores" id={name}>
        <h2 className="section-title">PATROCINADORES</h2>
        <Grid>
          <Row>
            <Col xs={12}>
              <h2 className="status">Platinum</h2>
              {patrocinadores.Platinum.map(p => <img src={`/img/patrocinadores/${p.image}`} title={p.name} />)}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h2 className="status">Vip</h2>
              {patrocinadores.Vip.map(p => <img src={`/img/patrocinadores/${p.image}`} title={p.name} />)}
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <h2 className="status">Ouro</h2>
              {patrocinadores.Ouro.map(p => <img src={`/img/patrocinadores/${p.image}`} title={p.name} />)}
            </Col>
            <Col xs={4}>
              <h2 className="status">Prata</h2>
              {patrocinadores.Prata.map(p => <img src={`/img/patrocinadores/${p.image}`} title={p.name} />)}
            </Col>
            <Col xs={4}>
              <h2 className="status">Bronze</h2>
              {patrocinadores.Bronze.map(p => <img src={`/img/patrocinadores/${p.image}`} title={p.name} />)}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h2 className="status">Apoi</h2>
              <Row>
                {patrocinadores.Apoio.map(p => <Col xs={12} sm={4}><img src={`/img/patrocinadores/${p.image}`} title={p.name} /></Col>)}
              </Row>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
};

export default Patrocinio;
