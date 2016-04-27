import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class Patrocinio extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {key, name, onActiveSection} = this.props;
    return (
      <section key={key} id={name}>
        <Waypoint onPositionChange={onActiveSection} />
        <div style={{height: '700px', background: `#00F`}}>
        </div>
      </section>
    );
  }
};

export default Patrocinio;