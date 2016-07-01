import React, { Component, PropTypes } from 'react';
import * as Actions from '../redux/actions/actions';
import { connect } from 'react-redux';

class AddPollForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
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
        <div className="form-group">
          <label className="control-label">Name later replaced by login?</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label className="control-label">Poll Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label className="control-label">Poll Options (separated by comma)</label>
          <input type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.submit}>Submit</button>
      </form>
    );
  }
}

AddPollForm.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(AddPollForm);
