import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Palestrantes extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {name, store, children} = this.props;
    return (
      <section className="section" id={name}>
        <h2 className="section-title">PALESTRANTES</h2>
        <h3 className="section-subtitle"><span>Veja a lista dos nossos palestrantes do evento</span></h3>
        <Grid>
          <Row>
          {store.palestrantes.map((p, i) =>
            <Col key={i} xs={12} sm={3}>
              <div className="palestrante">
                <img className="avatar" src={p.avatar} />
                <div className="details">
                  <h2>{p.name}</h2>
                  <h3>{p.description}</h3>
                </div>
              </div>
            </Col>
          )}
          </Row>
        </Grid>
      </section>
    );
  }
};

export default Palestrantes;
