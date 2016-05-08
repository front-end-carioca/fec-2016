import React, { Component } from 'react';

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
        <h1>A MAIOR<br />CONFERÊNCIA WEB</h1>
        <h3>14 DE OUTUBRO 2016</h3>
        {children}
      </header>
    );
  }
};

export default Home;