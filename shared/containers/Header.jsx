import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import * as actions from '../redux/actions/actions';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" onClick={() => this.props.fetchPosts()}>Poll</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/post/lorem-ipsum-cikqgkv4q01ck7453ualdn3hf">
              <NavItem>Lorem test active</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  fetchPosts: PropTypes.func
};

// withRouter helps with temp issue with LinkContainer tracking active status
export default withRouter(connect(null, actions)(Header));
