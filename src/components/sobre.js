import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class Sobre extends Component {
  constructor(props){
    super(props);
  }
  _onActiveSection(a,b,c) {
    console.log('_onActiveSection',a,b,c);
  }

  render() {
    const {key, name, onActiveSection} = this.props;
    return (
      <section key={key} id={name}>
        <div style={{height: '700px', background: `#F0F`}}>
        </div>
        <Waypoint onPositionChange={this._onActiveSection} />
      </section>
    );
  }
};

export default Sobre;