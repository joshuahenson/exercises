import React, { Component, PropTypes } from 'react';
import Modal, { Header, Title, Body } from 'react-bootstrap/lib/Modal'; // syntax for production build
import * as Actions from '../redux/actions/actions';
import { connect } from 'react-redux';
import Form from './Form';

class AddPoll extends Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    this.props.dispatch(Actions.showModal(false));
  }
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.closeModal}>
        <Header closeButton>
          <Title>Create a poll</Title>
        </Header>
        <Body>
          <Form />
        </Body>
      </Modal>
    );
  }
}

AddPoll.propTypes = {
  showModal: PropTypes.bool,
  dispatch: PropTypes.func
};

function mapStateToProps(store) {
  return {
    showModal: store.showModal
  };
}

// withRouter helps with temp issue with LinkContainer tracking active status
export default connect(mapStateToProps)(AddPoll);
