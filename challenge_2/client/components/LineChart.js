import React from 'react';
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

class LineChart extends React.Component {
  render() {
    const options ={
      annotation: {
        type: 'line',
        data: 'data',
        options: 'options'
      }
    }
  }
}

export default LineChart;