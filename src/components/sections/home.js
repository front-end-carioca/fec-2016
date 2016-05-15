import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

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
    if (typeof window !== 'undefined') {
      this.setState({
        styles: {
          height: window.outerHeight
        }
      });
    }
  }

  render() {
    const {name, content, children} = this.props;
    const {styles} = this.state;
    return (
      <header id={name} style={styles}>
        <h1 className="title">A MAIOR<br />CONFERÊNCIA WEB</h1>
        <h3 className="subtitle">Rio de Janeiro<br />22 DE OUTUBRO 2016</h3>
        <div className="wrap-buttons">
          <Button href="http://even.tc/front-end-carioca-2016" target="_blank" bsStyle="primary">INSCREVA-SE</Button>
          <Button href="mailto:contato@frontendcarioca.com.br?subject=PATROCINIO: FRONT-END CARIOCA 2016" target="_blank">PATROCINE</Button>
        </div>
      </header>
    );
  }
};

export default Home;
