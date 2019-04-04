const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/client/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
