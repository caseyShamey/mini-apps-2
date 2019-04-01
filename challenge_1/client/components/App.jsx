import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Axios from 'axios';

import ResultList from './ResultList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      results: [],
      offset: 0,
      pageCount: 0,
      pageNumber: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value}, () => {
    })
  }

  handleSubmit(event) {
    let url = `http://localhost:3000/events?q=${this.state.value}&_page=${this.state.pageNumber}`
    Axios.get(url)
      .then(res => {
        console.log('res', res.data)
        this.setState({
          results: res.data,
          pageCount: Math.ceil(res.headers["x-total-count"] / 10)
        })
      })
      .then(error => {
        console.log(error);
      })
    event.preventDefault()
  }

  handlePageClick(data) {
    let selected = data.selected;
    let offset = Math.ceil(selected * 10);

    this.setState({
      offset: offset,
      pageNumber: selected + 1
    }, () => {
      console.log(this.state.pageNumber)
      let url = `http://localhost:3000/events?q=${this.state.value}&_page=${this.state.pageNumber}`
      Axios.get(url)
        .then(res => {
          console.log('update res', res.data)
          this.setState({
            results: res.data,
            pageCount: Math.ceil(res.headers["x-total-count"] / 10)
          })
        })
        .then(error => {
          console.log(error);
        })
    });
  };


  render() {
    return(
      <div>
        <h1>Historical Events Finder</h1>
        <br></br>
        <form>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
        <button onClick={this.handleSubmit}>
          Search
        </button>
        <div className="resultsBox"></div>
          <ResultList results={this.state.results} pageNumber={this.state.pageNumber} />
          <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    )
  }
}

export default App