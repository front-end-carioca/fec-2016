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
          minHeight: window.outerHeight
        }
      });
    }
  }

  render() {
    const {name, content, children} = this.props;
    const {styles} = this.state;
    return (
      <header id={name} className="header" style={styles}>
        <h1 className="title">A maior conferência web<br />do Rio de Janeiro</h1>
        <h3 className="subtitle">Rua Candelária, N˚ 9 - subsolo - Rio de Janeiro<br />22 de Outubro 2016 - às 08h</h3>
        <div className="wrap-buttons">
          <Button href="http://even.tc/front-end-carioca-2016" target="_blank" bsStyle="primary">Inscreva-se</Button>
          <Button href="mailto:contato@frontendcarioca.com.br?subject=PATROCINIO: FRONT-END CARIOCA 2016" target="_blank">Seja um Patrocinador</Button>
        </div>
      </header>
    );
  }
};

export default Home;
