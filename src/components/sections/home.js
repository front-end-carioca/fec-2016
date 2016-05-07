import React, { Component } from 'react';

const styles = {
  height: '700px'
};

class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {key, name, children} = this.props;
    return (
      <header key={key} id={name}>
        <div style={styles}>
          <img src="/img/fec_logo.png" />
        </div>
        {children}
      </header>
    );
  }
};

export default Home;