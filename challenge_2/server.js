const express = require('express');
const bodyParser = require('body-parser');
const Axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/client/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/data', (req, res) => {
  Axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2016-01-01&end=2017-01-01')
    .then(response => {
      res.send(response.data)
    })
    .catch(err => {
      console.log(err);
    });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


