import React from 'react';
import Tab from 'react-bootstrap/lib/Tab';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

const Programacao = ({name, programacao, children}) => {
  return (
    <section className="section programacao" id={name}>
      <h2 className="section-title">PROGRAMAÇÃO</h2>
      <Tab.Container id="tabs-programacao" defaultActiveKey="tab0">
        <Row className="clearfix">
          <Col sm={12}>
            <Nav bsStyle="tabs">
              {programacao.map((t,i) =>
                <NavItem key={i} eventKey={`tab${i}`}>{t.periodo}</NavItem>
              )}
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content animation>
              {programacao.map((c, ci) =>
                <Tab.Pane key={ci} eventKey={`tab${ci}`}>
                  <Row>
                    {c.atividades.map((a, ai) =>
                      <Col key={ai} sm={4}>
                        <div className="card">
                          <p className="schedule">{a.horario}</p>
                          <p className="title">{a.titulo}</p>
                          <p className="panelist">
                            <strong>{a.palestrante}</strong>{a.especialidade ? ` . ${a.especialidade}` : ''}
                          </p>
                          <p className="description">{a.descricao}</p>
                        </div>
                      </Col>
                    )}
                  </Row>
                </Tab.Pane>
              )}
            </Tab.Content>
          </Col>
          <Col visibleXsBlock sm={12}>
            <Nav bsStyle="tabs">
              {programacao.map((t,i) =>
                <NavItem key={i} eventKey={`tab${i}`}>{t.periodo}</NavItem>
              )}
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    </section>
  );
};

export default Programacao;
