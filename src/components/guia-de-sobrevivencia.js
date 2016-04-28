import React, { Component } from 'react';

class GuiaDeSobrevivencia extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {key, name, children} = this.props;
    return (
      <section key={key} id={name}>
        <div style={{height: '700px', background: `#F0F`}}>
        </div>
        {children}
      </section>
    );
  }
};

export default GuiaDeSobrevivencia;