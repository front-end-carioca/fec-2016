import React, { Component } from 'react';
import Tab from 'react-bootstrap/lib/Tab';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

const GuiaDeSobrevivencia = ({name, guia}) => {
  return (
    <section className="section guia-de-sobrevivencia" id={name}>
      <h2 className="section-title">Guia de Sobrevivência</h2>

      <Tab.Container id="tabs-guia-de-sobrevivencia" defaultActiveKey="tab0">
        <Row className="clearfix">
          <Col sm={12}>
            <Nav bsStyle="tabs">
              {guia.map((g, gi)=>
                <NavItem key={gi} eventKey={`tab${gi}`}>{g.type}</NavItem>
              )}
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content animation>
              {guia.map((g, gi)=>
                <Tab.Pane key={gi} eventKey={`tab${gi}`}>
                  <Row>
                    { g.instrucoes.map((inst, i) =>
                      <Col key={i} sm={4}>
                        <div className="card">
                          <p className="title">{inst.title}</p>
                          <p className="schedule">{inst.infos.sdu}</p>
                          <p className="schedule">{inst.infos.gig}</p>
                          { inst.infos.distancia &&
                            <p className="panelist">
                              <strong>{inst.infos.distancia}</strong>
                            </p>
                          }
                          { inst.infos.opcoes.length > 0 &&
                            <ul className="list">
                              {inst.infos.opcoes.map((o, oi) =>
                                <li key={oi}>{o.marker && <span className="marker">{o.marker}</span>} {o.title}</li>
                              )}
                            </ul>}
                          { inst.infos.cupom &&
                            <span>Cupom: {inst.infos.cupom}</span>
                          }
                          { inst.infos.link &&
                            <a href={inst.infos.link} target="_blank">Site: {inst.infos.site}</a>
                          }
                        </div>
                      </Col>
                    )}
                  </Row>
                </Tab.Pane>
              )}
            </Tab.Content>
          </Col>
          <Col mdHidden={true} lgHidden={true} sm={12}>
            <Nav bsStyle="tabs">
              {guia.map((g, gi)=>
                <NavItem key={gi} eventKey={`tab${gi}`}>{g.type}</NavItem>
              )}
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    </section>
  );
};

export default GuiaDeSobrevivencia;
