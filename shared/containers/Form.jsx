import React, { Component, PropTypes } from 'react';
import { Button, FormGroup, ControlLabel } from 'react-bootstrap';
import FormControl, { Feedback } from 'react-bootstrap/lib/FormControl'; // syntax for production build
import * as Actions from '../redux/actions/actions';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  getValidationState(length) {
    if (length > 0) {
      return 'error';
    }
    return 'success';
  }
  submit(e) {
    e.preventDefault();
    // create dummy data to test
    const poll = {
      name: 'Xander', title: 'Best Parent', options: [{ option: 'Mom' }, { option: 'Dad' }]
    };
    this.props.dispatch(Actions.addPollRequest(poll));
    this.props.dispatch(Actions.showModal(false));
  }
  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>label</ControlLabel>
          <FormControl
            type="text"
            ref="ref"
            placeholder="Enter text"
          />
          <FormControl.Feedback />
          <Button type="submit" onClick={this.submit}>
            Submit
          </Button>
        </FormGroup>
      </form>
    );
  }
}

Form.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(Form);
