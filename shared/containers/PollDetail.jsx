import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/actions';
import Helmet from 'react-helmet';
import { Pie } from 'react-chartjs';
import colorLuminance from '../util/colorLuminance';

class PollDetail extends Component {
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
      animateScale: true,
      animationEasing: 'easeInOutQuint',
      responsive: true
    };

    return (
      <div className="row">
        <Helmet title={this.props.poll.title} />
        <div className="col-sm-6">
          <Pie data={this.chartData()} options={pieOptions} redraw />
        </div>
        <div className="col-sm-6">
          <h3>{this.props.poll.title}</h3>
          <p>by {this.props.poll.name}</p>
        </div>
      </div>
    );
  }
}

PollDetail.need = [(params) => Actions.getPollRequest.bind(null, params.slug)()];

PollDetail.propTypes = {
  poll: PropTypes.object
};

function mapStateToProps(store) {
  return {
    poll: (store.poll)
  };
}

export default connect(mapStateToProps)(PollDetail);
