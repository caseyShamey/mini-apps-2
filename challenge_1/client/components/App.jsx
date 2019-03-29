import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postsNum: 0
    }
  }

componentDidMount() {
  let url = "http://localhost:3000/events"
  fetch(url)
  .then(resp => resp.json())
  .then(data => {
    let postsNum = data.length
    this.setState({postsNum: postsNum})
  })
}

  render() {
    return(
      <div>
        {this.state.postsNum}
      </div>
    )
  }
}

export default App