import React, { Component, PropTypes } from 'react';
import './FilteredInput.css';

class FilteredInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.filterData = this.filterData.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }
  filterData(e) {
    this.setState({ value: e.target.value });
  }
  clearInput() {
    this.setState({ value: '' });
  }
  render() {
    const { data } = this.props;
    const { value } = this.state;
    return (
      <div>
        <input
          className="filtered-input" type="text" value={value}
          onChange={this.filterData} placeholder="Search..."
        />
        <button className="clear-input" onClick={this.clearInput}>
          X
        </button>
        <ul className="filtered-list">
          {
            data.filter(datum => datum.toLowerCase().indexOf(value.toLowerCase()) >= 0)
            .map(filtered => (
              <li key={filtered} onClick={() => console.log(filtered)}>
                <div className="list-item">{filtered}</div>
                <div className="add">+</div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

FilteredInput.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string)
};

export default FilteredInput;
