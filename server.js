// // Get dependencies
// const express = require('express');
// const path = require('path');
// const http = require('http');
// const bodyParser = require('body-parser');

// // Get our API routes
// const api = require('./server/api');

// const app = express();

// // Parsers for POST data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Point static path to dist
// app.use(express.static(path.join(__dirname, 'dist/flicker-with-angular2')));

// // Set our api routes
// app.use('/api', api);

// // Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname , 'dist/flicker-with-angular2/index.html'));
// });

// /**
//  * Get port from environment and store in Express.
//  */
// const port = process.env.PORT || '3000';
// app.set('port', port);

// /**
//  * Create HTTP server.
//  */
// const server = http.createServer(app);

// /**
//  * Listen on provided port, on all network interfaces.
//  */
// server.listen(port, () => console.log(`API running on localhost:${port}`));
const app = require("./app");
const debug = require("debug")("node-angular");
const http = require("http");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port, () => console.log(`API running on localhost:${port}`));
