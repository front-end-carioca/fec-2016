import React, { Component } from 'react';
import { cleanSpecialChars } from '../utils';
import Menu from './Menu';

class App extends Component {
  constructor(props) {
    super(props);
  }

  getSection(name) {
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
    const steps = [1];
    return (
      <div>
        <Menu {...props} />
        {props.sections.map( (section, i) => {
          const Section = this.getSection(section);
          return <Section key={i} name={section} {...props} />;
        })}
      </div>
    );
  }
};

export default App;
