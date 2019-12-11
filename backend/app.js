const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dataBaseConfig = require('./database/db');
const featRoute = require('./routes/feat.route');
const spellRoute = require('./routes/spell.route');
const traitRoute = require('./routes/trait.route');

// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, { useNewUrlParser: true }).then(
  () => {
    console.log('Database connected successfully');
  },
  error => {
    console.error(`Could not connected to database: ${error}`);
  }
);

// Set up express js port
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', featRoute);
app.use('/api', spellRoute);
app.use('/api', traitRoute);

// PORT
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Connected to port: ${port}`);
});

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
