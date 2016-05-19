import React, { Component } from 'react';
import { cleanSpecialChars } from '../utils';
import Menu from './Menu';
import Header from "./sections/header";
import Sobre from "./sections/sobre";
import Subscribe from "./sections/subscribe";
import Palestrantes from "./sections/palestrantes";
import Programacao from "./sections/programacao";
import Patrocinio from "./sections/patrocinio";
import Local from "./sections/local";
import GuiaDeSobrevivencia from "./sections/guia-de-sobrevivencia";
import Contato from "./sections/contato";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    const steps = [1];
    return (
      <div>
        <Menu {...props} />
        <Header name={'header'} {...props} />
        <Sobre name={'sobre'} {...props} />
        <Subscribe name={'subscribe'} {...props} />
        <Palestrantes name={'palestrantes'} {...props} />
        <Programacao name={'programacao'} {...props} />
        <Patrocinio name={'patrocinio'} {...props} />
        <Subscribe name={'subscribe'} {...props} />
        <Local name={'local'} {...props} />
        <GuiaDeSobrevivencia name={'guia-de-sobrevivencia'} {...props} />
        <Contato name={'contato'} {...props} />
      </div>
    );
  }
};

export default App;
