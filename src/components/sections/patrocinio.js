import React, { Component } from 'react';

class Patrocinio extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {name, children} = this.props;
    return (
      <section className="section" id={name}>
        <div style={{height: '700px', background: `#00F`}}>
        </div>
        {children}
      </section>
    );
  }
};

export default Patrocinio;
