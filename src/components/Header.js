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
  }

  componentDidMount() {

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
    const { items } = this.props;
    const itemSelected = items.filter((i)=> i.selected);
    const classHeader = itemSelected.length === 1 ? cleanSpecialChars(itemSelected[0].name, true, true) : '';

    return (
      <header className={classHeader}>
        <Navbar fixedTop={true}>
          <Navbar.Header>
            <Navbar.Toggle />
            <Navbar.Brand>
              <a className='logo' href='/'>
                <label>FRONT-END CARIOCA</label>
                <img className="icon" src="/img/fec-logo-icon-2x.png" />
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {(items ? items.map((item, i) => {
                return <NavItem
                  key={i}
                  eventKey={i}
                  active={item.selected}
                  componentClass={Link}
                  to={item.name} spy={true}
                  smooth={true} offset={0} duration={1000}
                  onClick={this._onScrollTo.bind(this, item.name)}
                  href={`#${item.name}`}>{item.label}</NavItem>
              }) : '')}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
};

export default Header;