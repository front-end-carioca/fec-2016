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
      <section key={key} id={name}>
        <div style={styles}>
          <img src="" />
        </div>
        {children}
      </section>
    );
  }
};

export default Home;