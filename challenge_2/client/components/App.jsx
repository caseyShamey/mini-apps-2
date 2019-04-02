import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

componentDidMount() {
  Axios.get('/data')
    .then(res => {
      console.log('front end res', res);
    })
    .catch(err => {
      console.log(err);
    });
}

  render() {
    return(
      <div>
        Hello
      </div>
    )
  }
}

export default App

