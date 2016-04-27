import React, { Component } from 'react';
import { cleanSpecialChars } from '../utils';
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
  render() {
    const props = this.props;
    return (
      <div>
        <Header {...props} />
        {props.items.map((section, i)=>{
          const name = cleanSpecialChars(section.name, true, true);
          const Section = this._getSection(name);
          return <Section key={i} name={name} onActiveSection={props.onSelectSection.bind(this, name)}/>;
        })}
      </div>
    );
  }
};

export default App;