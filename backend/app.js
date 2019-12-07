let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dataBaseConfig = require('./database/db');

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

// ToDo: Require routes

// Set up express js port
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

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
