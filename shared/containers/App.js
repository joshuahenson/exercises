import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import NavBar from './../containers/NavBar';
import ModalContainer from './../containers/ModalContainer';
import Footer from './../components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="Poll"
          titleTemplate="%s - Universal React Example"
        />
        <NavBar />
        <ModalContainer />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default connect()(App);
