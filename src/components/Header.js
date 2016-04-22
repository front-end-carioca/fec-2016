import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { cleanSpecialChars } from '../utils';
import Scroll from 'react-scroll'; 
 
var Events  = Scroll.Events;
var Link  = Scroll.Link;
var scroll  = Scroll.animateScroll;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.setState(this.props);
 
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
 
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  _onScrollTo(name) {
    const sTop = document.getElementById(name).offsetTop;
    scroll.scrollTo(sTop);
  }

  render () {
    const { items } = this.state;
    return (
      <header>
        <Navbar bsStyle='' fixedTop={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <a className='logo' href='/'>
                <label>FRONT-END CARIOCA</label>
                <svg className='logo-svg'>
                  <use xlinkHref='#fec_logo'></use>
                </svg>
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            {items.map((item, i) => {
              const name = cleanSpecialChars(item.name);
              return <NavItem 
                key={i}
                eventKey={i}
                active={item.active}
                componentClass={Link}
                to={name} spy={true}
                smooth={true} offset={50} duration={1000}
                onClick={this._onScrollTo.bind(this, name)}
                href={`#${name}`}>{item.name}</NavItem>
            })}
          </Nav>
        </Navbar>
      </header>
    );
  }
};

export default Header;