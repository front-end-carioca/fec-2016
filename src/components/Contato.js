import React, { Component } from 'react';

class Contato extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {name, children} = this.props;
    return (
      <section className="section" id={name}>
        <h2 className="section-title">Contato</h2>
      </section>
    );
  }
};

export default Contato;
