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
      <section id={name}>
        <div style={{height: '700px', background: `#00F`}}>
          <Grid>
            <Row>
            {store.palestrantes.map((p, i) => <Col key={i} sm={1} md={3}>
                <h1>{p.name}</h1>
              </Col>
            )}
            </Row>
          </Grid>
        </div>
        {children}
      </section>
    );
  }
};

export default Palestrantes;
