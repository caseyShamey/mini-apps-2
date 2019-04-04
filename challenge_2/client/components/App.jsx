import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { Line } from 'react-chartjs-2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

componentDidMount() {
  Axios.get('/data')
    .then(res => {
      this.setState({
        data: {
          labels: Object.keys(res.data.bpi),
          datasets: [{
            label: 'Date',
            data: Object.values(res.data.bpi)
          }],
        }
      })
    })
    .catch(err => {
      console.log(err);
    });
}

  render() {
    return(
      <div>
        {console.log(this.state.data)}
        <Line data={this.state.data} />
      </div>
    )
  }
}

export default App

