const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const icecreamRoutes = require('./routes/icecream-routes');
app.use('/api/icecream', icecreamRoutes);

app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    error: err,
    message: err.message,
  });
});
