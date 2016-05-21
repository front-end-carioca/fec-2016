import React from 'react';

import Menu from './containers/MenuContainer';
import Header from './containers/HeaderContainer';
import Sobre from './containers/SobreContainer';
import Subscribe from './containers/SubscribeContainer';
import Palestrantes from './containers/PalestrantesContainer';
import Programacao from './containers/ProgramacaoContainer';
import Patrocinio from './containers/PatrocinioContainer';
import Local from './containers/LocalContainer';
import GuiaDeSobrevivencia from './containers/GuiaDeSobrevivenciaContainer';
import Contato from './containers/ContatoContainer';


const App = (props) =>
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
  </div>;

export default App;
