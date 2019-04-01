import React from 'react';
import PropTypes from 'prop-types';

class ResultList extends React.Component {

  static propTypes = {
    results: PropTypes.array.isRequired,
    pageNumber: PropTypes.number.isRequired
  };

  render() {
    let resultItems = this.props.results.map((result, index) => {
      {var resultArray = Object.entries(result)
      var copy = [];
      resultArray.forEach((e, index) => {
        e[0] = e[0] + ': ';
        copy.push(e)
        copy.push(<br></br>)
      })}
      return <div>
        Result: {(index +1) + (this.props.pageNumber * 10 - 10)}
        <br></br>
        {copy}
        <br></br>
        <br></br>
      </div>
    });

    return (
      <div id="results" className="resultList">
        <ul>{resultItems}</ul>
      </div>
    );
  }
}

export default ResultList;