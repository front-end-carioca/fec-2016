import React, { Component } from 'react';
import { cleanSpecialChars } from '../utils';
import Waypoint from 'react-waypoint';
import Header from './Header';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class App extends Component {
  constructor(props) {
    super(props);
  }
  _getSection(name) {
    return require('./'+name).default;
  }
  componentWillMount(){
    if(typeof window !== 'undefined'){
      setTimeout(() => {
        window.scrollTo(0,1);
        this.props.onUnselectAll();
      }, 500);
    }
    this.props.onSelect('home');
  }
  render() {
    const props = this.props;
    return (
      <div>
        <Header {...props} />
        {props.items.map((section, i)=>{
          const Section = this._getSection(section.name);
          return <Section key={i} name={section.name}>
            <Waypoint onPositionChange={props.onSelect.bind(this, section.name)} />
          </Section>;
        })}
      </div>
    );
  }
};

export default App;