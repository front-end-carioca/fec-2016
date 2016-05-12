import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      styles: {
        height: '700px'
      }
    };
  }

  componentDidMount(){
    this.setState({
      styles: {
        height: window.outerHeight
      }
    });
  }

  render() {
    const {key, name, content, children} = this.props;
    const {styles} = this.state;
    return (
      <header key={key} id={name} style={styles}>
        <h1 className="title">A MAIOR<br />CONFERÊNCIA WEB</h1>
        <h3 className="subtitle">14 DE OUTUBRO 2016</h3>
        <ButtonToolbar>
          <Button>INSCREVA-SE</Button>
          <Button>PATROCINE</Button>
        </ButtonToolbar>
      </header>
    );
  }
};

export default Home;
