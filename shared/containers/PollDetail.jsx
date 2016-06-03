import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/actions';
import Helmet from 'react-helmet';
import { Pie } from 'react-chartjs';
import colorLuminance from '../util/colorLuminance';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class PollDetail extends Component {
  constructor(props) {
    super(props);
    this.radioClick = this.radioClick.bind(this);
    this.vote = this.vote.bind(this);
    this.state = { vote: null };
  }
  radioClick(e) {
    this.setState({ vote: e.target.value });
  }
  vote(e) {
    e.preventDefault();
    this.props.dispatch(Actions.vote(this.props.poll._id, this.state.vote));
  }
  chartData() {
    const colors = ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99',
      '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a'];

    const colorsLength = colors.length;
    const colorStart = Math.floor(Math.random() * colorsLength);

    // create data object to pass to chartjs
    return this.props.poll.options.map((obj, i) => (
      {
        value: obj.votes,
        label: obj.option,
        color: colors[(colorStart + i) % colorsLength],
        highlight: colorLuminance(colors[(colorStart + i) % colorsLength], 0.1)
      }
    ));
  }
  render() {
    const pieOptions = {
      // animateScale: true,
      animationEasing: 'easeInOutQuint',
      responsive: true,
      segmentShowStroke: false
    };
    // TODO: move delete to dashboard or provide other conditional before showing
    return (
      <div className="row">
        <Helmet title={this.props.poll.title} />
        <div className="col-sm-6">
          <Pie data={this.chartData()} options={pieOptions} />
        </div>
        <div className="col-sm-6">
          <h3>{this.props.poll.title}</h3>
          <p>by {this.props.poll.name}</p>
          <form>
            {this.props.poll.options.map((obj, i) =>
              <div className="radio" key={i}>
                <label>
                  <input type="radio" name="option" onChange={this.radioClick} value={obj._id} />
                  {obj.option}
                </label>
              </div>
            )}
            <Button bsStyle="primary" onClick={this.vote}>
              Vote
            </Button>
          </form>
        </div>
        <LinkContainer to="/">
          <Button
            bsSize="small" bsStyle="danger"
            onClick={() => this.props.dispatch(Actions.deletePollRequest(this.props.poll))}
          >
            Delete
          </Button>
        </LinkContainer>
      </div>
    );
  }
}

PollDetail.need = [(params) => Actions.getPollRequest.bind(null, params.slug)()];

PollDetail.propTypes = {
  poll: PropTypes.object,
  dispatch: PropTypes.func
};

function mapStateToProps(store) {
  return {
    poll: (store.poll)
  };
}

export default connect(mapStateToProps)(PollDetail);
