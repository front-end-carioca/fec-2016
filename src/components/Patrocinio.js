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
              <h2 className="status">PLATINUM</h2>
              <Row>
              {patrocinadores.Platinum.map((p, i) =>
                <Col key={i} xs={12} className="patrocinador">
                  <img  src={`img/patrocinadores/${p.image}`} title={p.name} width="300"/>
                </Col>
              )}
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h2 className="status">VIP</h2>
              <Row>
              {patrocinadores.Vip.map((p, i) =>
                <Col key={i} xs={12} className="patrocinador">
                  <img src={`img/patrocinadores/${p.image}`} title={p.name} width="130"/>
                </Col>
              )}
              </Row>
            </Col>
          </Row>
          <Row>

            <Col xs={12} sm={4}>
              <h2 className="status"></h2>
              <Row>
              {patrocinadores.Ouro.map((p, i) =>
                <Col key={i} xs={12} className="patrocinador">
                  <img src={`img/patrocinadores/${p.image}`} title={p.name} width="130" />
                </Col>
              )}
              </Row>
            </Col>

            <Col xs={12} sm={4}>
              <h2 className="status">PRATA</h2>
              <Row>
              {patrocinadores.Prata.map((p, i) =>
                <Col key={i} xs={12} className="patrocinador">
                  <img src={`img/patrocinadores/${p.image}`} title={p.name} width="150" />
                </Col>
              )}
              </Row>
            </Col>

            <Col xs={12} sm={4}>
              <h2 className="status"></h2>
              <Row>
              {patrocinadores.Bronze.map((p, i) =>
                <Col key={i} xs={12} className="patrocinador">
                  <img src={`img/patrocinadores/${p.image}`} title={p.name} width="130" />
                </Col>
              )}
              </Row>
            </Col>

          </Row>
          <Row>
            <Col xs={12}>
              <h2 className="status">APOIO</h2>
              <Row>
                {patrocinadores.Apoio.map((p, i) =>
                  <Col key={i} xs={12} sm={4} className="patrocinador">
                    <img src={`img/patrocinadores/${p.image}`} title={p.name} width="140" />
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
};

export default Patrocinio;
