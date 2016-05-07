import React, { Component } from 'react';
import { cleanSpecialChars } from '../utils';
import Waypoint from 'react-waypoint';
import Menu from './Menu';

class App extends Component {
  constructor(props) {
    super(props);
  }
  _getSection(name) {
    return require('./sections/'+name).default;
  }
  componentWillMount(){
    if(typeof window !== 'undefined'){
      setTimeout(() => {
        window.scrollTo(0,1);
        this.props.onUnselectAll();
      }, 500);
    };
  }
  render() {
    const props = this.props;
    return (
      <div>
        <Menu {...props} />
        {props.items.map((section, i)=>{
          const Section = this._getSection(section.name);
          return <Section key={i} name={section.name} store={props} />;
        })}
      </div>
    );
  }
};

export default App;