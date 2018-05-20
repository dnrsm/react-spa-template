import React from 'react';
import {
  Link,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../utile/style-utils';

import Home from './Home';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <Wrapper id="header">
        <div className="heading">
          <h1 className={this.state.opened ? 'active' : 'inactive'}>
            <Link to="/">Title</Link>
          </h1>
          <p>info</p>
        </div>
        <div className="menu-btn sp">
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'MENU' : 'CLOSE'}
          </button>
        </div>
        <nav className={`menu sp ${this.state.isToggleOn ? 'OFF' : 'ON'}`}>
          <ul onClick={this.handleClick}>
            <li><Link to="/">HOME</Link></li>
            <li><NavLink to="/about">ABOUT</NavLink></li>
            <li><NavLink to="/contact">CONTACT</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <nav className="top_nav pc">
          <ul>
            <li><NavLink to="/about">ABOUT</NavLink></li>
            <li><NavLink to="/contact">CONTACT</NavLink></li>
          </ul>
        </nav>
      </Wrapper>
    );
  }
}

const Wrapper = styled.header`
  ${media.desktop`
    padding-left: 60px;
    width       : 250px;
    float       : left;
    margin-right: -310px;
  `}
  ${media.tablet`
    padding-left: 25px;
  `}


  .heading {
    ${media.desktop`
      position: fixed;
      top: 50px;
    `}
    ${media.tablet`
      position: relative;
      top: 50px;
    `}

    h1 {
      ${media.desktop`
        font-size     : 18px;
        font-weight   : 400;
        letter-spacing: 0.1rem;
      `}
      ${media.tablet`
        font-size     : 18px;
        font-weight   : 400;
        letter-spacing: 0.1rem;
      `}

      a {
        color: #333;
      }
    }

    p {
      font-size     : 12px;
      margin-top    : 10px;
      letter-spacing: 0.1rem;
    }
  }

  nav {
    &.sub_nav {
      ${media.tablet`
        display: none;
      `}
    }

    ul {
      ${media.desktop`
        position  : fixed;
        margin-top: 150px;
      `}
      ${media.tablet`
        position  : static;
        margin-top: 150px;
      `}


      li {
        ${media.desktop`
          margin-top    : 10px;
          font-size     : 12px;
          letter-spacing: 0.1rem;
          font-weight   : 500;
        `}
        ${media.tablet`
          margin-top    : 30px;
          font-size     : 16px;
          letter-spacing: 0.1rem;
          font-weight   : 400;
        `}

        a {
          color : #333;
          cursor: pointer;

          &.active {
            ${media.desktop`
              color: #999;
            `}
          }
        }
      }
    }
  }
`;

export default Header;
