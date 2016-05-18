import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Palestrante from '../Palestrante';

class Palestrantes extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  componentWillMount(){
    const {name, palestrantes} = this.props;
    this.setState({
      name,
      palestrantes: palestrantes.map(p=>{
        p.opened = p.opened ? p.opened : false;
        return p;
      })
    });
  }

  toggleDetails(name, event) {
    event.preventDefault();
    console.log('toggleDetails');
    const {palestrantes} = this.state;
    const plist = palestrantes.map(p => {
      if(name===p.name) { p.opened = !p.opened }
      return p;
    });

    this.setState({
      palestrantes: plist
    });
  }

  render() {
    const {name, palestrantes} = this.state;
    return (
      <section className="section" id={name}>
        <h2 className="section-title">PALESTRANTES</h2>
        <h3 className="section-subtitle"><span>Veja a lista dos nossos palestrantes do evento</span></h3>
        <Grid>
          <Row>
          {palestrantes.map((p, i) =>
            <Palestrante key={i} {...p} onClickDetails={this.toggleDetails.bind(this, p.name)} />
          )}
          </Row>
        </Grid>
      </section>
    );
  }
};

export default Palestrantes;
