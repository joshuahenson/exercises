import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header(props) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/" onClick={props.handleLogoClick}>Poll</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to="/post/lorem-ipsum-cikqgkv4q01ck7453ualdn3hf">
          <NavItem>Lorem test active</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  handleLogoClick: PropTypes.func,
};

export default Header;
