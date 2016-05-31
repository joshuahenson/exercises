import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './../redux/actions/actions';
import { Link } from 'react-router';

class Home extends Component {

  componentDidMount() {
    if (this.props.polls.length === 0) {
      this.props.dispatch(Actions.fetchPolls());
    }
  }

  render() {
    return (
      <div>
        {this.props.polls.map((poll, i) => (
          <div key={i}>
            <h3>
              <Link
                to={`/poll/${poll.slug}-${poll.cuid}`}
                onClick={() => this.props.dispatch(Actions.addSelectedPoll(poll))}
              >
                {poll.title}
              </Link>
            </h3>
            <p>By {poll.name}</p>
          </div>
          ))}
      </div>
    );
  }
}

Home.need = [() => Actions.fetchPolls()];

Home.propTypes = {
  polls: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    polls: store.polls
  };
}

export default connect(mapStateToProps)(Home);
