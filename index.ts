const path = require('path');
const envPath = path.join('.', `.env.${process.env.YOUR_APP_ENV}`);
require('dotenv').config({ path: envPath });
const cors = require('cors');
import { corsOptions } from './config';
import express, { Application } from 'express';
const bodyParser = require('body-parser');
import { mountRoutes } from './routes';

// Create a new express application instance
const app: Application = express();

// set up middleware
app.use(bodyParser.json());

// CORS setup: https://expressjs.com/en/resources/middleware/cors.html
app.use(cors(corsOptions));

// set up routes
mountRoutes(app);

// handle exits cleanly. Clean up resources, etc
const myexit = (type: string) => {
  console.info(`Received '${type}' signal/event. Exiting...`);
  process.exit();
};

process.on('SIGINT', function () { myexit('SIGINT'); });
process.on('SIGTERM', function () { myexit('SIGTERM'); });
process.on('SIGHUP', function () { myexit('SIGHUP'); });

// catch any uncaught exceptions here and prevent exiting
process.on('uncaughtException', function (err) {
  var util = require('util');
  console.error("Uncaught exception: \n" + util.inspect(err.stack));
});

// kick it
app.listen(process.env.YOUR_APP_API_PORT, () => {
  console.log(`App listening on port ${process.env.YOUR_APP_API_PORT}!`);
});

