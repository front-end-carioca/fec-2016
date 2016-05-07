import React, { Component } from 'react';

class Patrocinio extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {key, name, children} = this.props;
    return (
      <section key={key} id={name}>
        <div style={{height: '700px', background: `#00F`}}>
        </div>
        {children}
      </section>
    );
  }
};

export default Patrocinio;