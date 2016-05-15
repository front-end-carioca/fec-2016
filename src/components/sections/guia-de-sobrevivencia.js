import React, { Component } from 'react';

class GuiaDeSobrevivencia extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {name, children} = this.props;
    return (
      <section id={name}>
        <div style={{height: '700px', background: `#F0F`}}>
        </div>
        {children}
      </section>
    );
  }
};

export default GuiaDeSobrevivencia;