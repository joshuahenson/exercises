import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/actions';
import Helmet from 'react-helmet';

class PollDetail extends Component {
  render() {
    return (
      <div>
        <Helmet title={this.props.poll.title} />
        <div>
          <h3>{this.props.poll.title}</h3>
          <h4>TODO: Update Placeholder</h4>
          <p>By {this.props.poll.name}</p>
        </div>
      </div>
    );
  }
}

PollDetail.need = [(params) => Actions.getPollRequest.bind(null, params.slug)()];

PollDetail.propTypes = {
  poll: PropTypes.object,
};

function mapStateToProps(store) {
  return {
    poll: (store.poll),
  };
}

export default connect(mapStateToProps)(PollDetail);
