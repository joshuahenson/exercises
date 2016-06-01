import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';
import { Nav, NavItem } from 'react-bootstrap';
import Navbar, { Header, Brand, Toggle, Collapse } from 'react-bootstrap/lib/Navbar'; // syntax for production build
import { LinkContainer } from 'react-router-bootstrap';
import * as actions from '../redux/actions/actions';
import { connect } from 'react-redux';

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Header>
          <Brand>
            <Link to="/" onClick={() => this.props.fetchPolls()}>Poll</Link>
          </Brand>
          <Toggle />
        </Header>
        <Collapse>
          <Nav>
            <LinkContainer to="/poll/favorite-show-cikqgkv4q01ck7453ualdn3hh">
              <NavItem>Test active only</NavItem>
            </LinkContainer>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

NavBar.propTypes = {
  fetchPolls: PropTypes.func
};

// withRouter helps with temp issue with LinkContainer tracking active status
export default withRouter(connect(null, actions)(NavBar));
