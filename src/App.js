import React, { Component } from 'react';
import Header from './components/Header';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { cleanSpecialChars } from './utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        name: 'HOME', selected: false, active: false 
      },{
        name: 'SOBRE', selected: false, active: false
      },{
        name: 'PALESTRANTES', selected: false, active: false
      },{
        name: 'PROGRAMAÇÃO', selected: false, active: false
      },{
        name: 'PATROCÍNIO', selected: false, active: false
      // },{
      //   name: 'LOCAL', selected: false, active: false
      // },{
      //   name: 'GUIA DE SOBREVIVÊNCIA', selected: false, active: false
      // },{
      //   name: 'CONTATO', selected: false, active: false
      }]
    };
  }
  _setActiveSection(name, event) {
    if(event.event === null && event.currentPosition !== 'inside') return;
    const items = this.state.items.map((item)=>{
      item.active = false;
      if(item.name === name){ item.active = true; }
      return item;
    });
    this.setState({items:items});
  }
  _getSection(name) {
    return require('./components/'+name).default;
  }
  render() {
    const state = this.state;
    return (
      <div>
        <Header {...state} />
        {state.items.map((section, i)=>{
          const name = cleanSpecialChars(section.name);
          const Section = this._getSection(name);
          return <Section key={i} name={name} onActiveSection={this._setActiveSection.bind(this, name)}/>;
          
        })}
    	</div>
    );
  }
};

export default App;