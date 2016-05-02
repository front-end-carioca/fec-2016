import React, { Component } from 'react';
import { cleanSpecialChars } from '../utils';
import Waypoint from 'react-waypoint';
import Menu from './Menu';

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
    console.log('App >>', props);
    return (
      <div>
        <Menu {...props} />
        {props.items.map((section, i)=>{
          const Section = this._getSection(section.name);
          return <Section key={i} name={section.name} store={props}>
            <Waypoint onPositionChange={props.onSelect.bind(this, section.name)} />
          </Section>;
        })}
      </div>
    );
  }
};

export default App;