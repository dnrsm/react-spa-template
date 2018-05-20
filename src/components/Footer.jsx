import React from 'react';
import styled from 'styled-components';
import { media } from '../utile/style-utils';

const Footer = () => (
  <Wrapper id="footer">
    <p className="copyright">&copy; 2018 xxx</p>
  </Wrapper>
);

const Wrapper = styled.footer`
  ${media.desktop`
    clear       : both;
    padding-left: 60px;
    position    : fixed;
    bottom      : 20px;
  `}
  ${media.tablet`
    clear   : both;
    position: absolute;
    top     : calc(100% - 20px);
    left    : 25px;
  `}

  p.copyright {
    ${media.desktop`
      font-size: 12px;
    `}
    ${media.tablet`
      font-size: 10px;
    `}
  }
`;

export default Footer;
