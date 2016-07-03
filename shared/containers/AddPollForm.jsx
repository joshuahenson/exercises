import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import * as Actions from '../redux/actions/actions';

class AddPollForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    e.preventDefault();
    const { fields: { name, title, options } } = this.props;
    const poll = {
      name: name.value,
      title: title.value,
      options: options.value.split(',').map(optionI => ({ option: optionI.trim() }))
    };
    this.props.dispatch(Actions.addPollRequest(poll));
    this.props.dispatch(Actions.showModal(false));
  }
  render() {
    const { fields: { name, title, options } } = this.props;
    return (
      <form onSubmit={this.submit}>
        <div className="form-group">
          <label className="control-label">Name later replaced by login?</label>
          <input type="text" className="form-control" placeholder="Fiona Staples"{...name} />
        </div>
        <div className="form-group">
          <label className="control-label">Poll Title</label>
          <input type="text" className="form-control" placeholder="Favorite Character"{...title} />
        </div>
        <div className="form-group">
          <label className="control-label">Poll Options (separated by comma)</label>
          <textarea
            className="form-control" rows="5" placeholder="Alana, Marko, Hazel" {...options}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

AddPollForm.propTypes = {
  dispatch: PropTypes.func,
  fields: PropTypes.object
};

AddPollForm = reduxForm({ // eslint-disable-line
  form: 'addPoll',
  fields: ['name', 'title', 'options']
})(AddPollForm);

export default AddPollForm;
