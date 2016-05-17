import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const Palestrante = ({i, name, avatar, opened, description, onClickDetails}) => {
  const classOpened = opened ? 'opened': 'closed';
  console.log(classOpened);
  return <Col className={classOpened} xs={12} sm={6} md={4}>
    <div className="palestrante">
      <img className="avatar" src={avatar} />
      {('ontouchstart' in window ?
        <button className="more-details" onClick={onClickDetails}><i className="material-icons">more_vert</i></button> :
        ''
      )}
      <div className="details">
        <h2>{name}</h2>
        <h3>{description}</h3>
      </div>
    </div>
  </Col>
};

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
        p.opened = false;
        return p;
      })
    });
  }

  toggleDetails(name, event) {
    event.preventDefault();
    console.log('toggleDetails');
    const {palestrantes} = this.state;
    this.setState({
      palestrantes: palestrantes.map(p => {
        console.log(name, p.name, p.opened);
        if(name===p.name) { p.opened = !!p.opened }
        return p;
      })
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
            <Palestrante  key={i} {...p} onClickDetails={this.toggleDetails.bind(this, p.name)} />
          )}
          </Row>
        </Grid>
      </section>
    );
  }
};

export default Palestrantes;
