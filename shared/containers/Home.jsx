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
      <div className="row">
        {this.props.polls.map((poll, i) => (
          <div className="col-sm-6 col-md-4 text-center" key={i}>
            <Link
              to={`/poll/${poll.slug}-${poll.cuid}`}
              onClick={() => this.props.dispatch(Actions.addSelectedPoll(poll))}
            >
              <div className=" panel">
                <div className="panel-body" >
                  <h3>
                    {poll.title}
                  </h3>
                  <p>By {poll.name}</p>
                </div>
              </div>
            </Link>
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
