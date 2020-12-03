const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello from express - first path! It is a showcase that it can be on root path for an entire app');
});
app.get('/another_express_path', (req, res) => {
  res.send(
    'Hello from express! ' +
    'It is just showing how to add another routes - just as typically with expressjs.',
  );
});

module.exports = app;
