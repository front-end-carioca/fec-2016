import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Sobre extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {name, children} = this.props;
    return (
      <section className="section sobre" id={name}>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className="content">
                <h2 className="section-title">Sobre</h2>
                <p>O Front-end Carioca Surgiu de uma ideia dentro da comunidade de desenvolvedores web, tendo como objetivo enriquecer o conhecimento profissional através de ciclos de palestras, workshops, networking e é claro bastante incentivo.</p>
                <p>Em 2014, na Universidade Veiga de Almeida (UVA), realizamos nossa primeira edição e com certeza foi um sucesso, fizemos de tudo para apresentar um ótimo conteúdo aos participantes.</p>
                <p>Em 2015, realizamos nossa segunda edição no Hotel Transamerica na Barra da Tijuca, onde equilibramos os assuntos e tentamos proporcionar o melhor evento do RJ.</p>
                <p>Já no ano de 2016 estamos vindo com força total e bastante conteúdo legal, como: propostas de estágios, empregos, parcerias, sorteios de cursos e de livros. Além da principal parte do evento: networking, onde os participantes trocam ideias/experiências e a comunidade cresce.</p>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
};

export default Sobre;
