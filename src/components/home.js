import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

const styles = {
  height: '700px'
};

class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {key, name, onActiveSection} = this.props;
    return (
      <section key={key} id={name}>
        <div style={styles}>
          <img src="" />
        </div>
        <Waypoint onPositionChange={onActiveSection} />
      </section>
    );
  }
};

export default Home;