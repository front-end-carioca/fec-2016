import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Patrocinio extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log('props', this.props)
    const {name, patrocinadores, children} = this.props;
    console.log('patrocinadores', patrocinadores);
    return (
      <section className="section" id={name}>
        <Grid>
          <Row>
            <Col xs={12}>
              {patrocinadores.Platinum.map(p => <h2>{p}</h2>)}
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
};

export default Patrocinio;
