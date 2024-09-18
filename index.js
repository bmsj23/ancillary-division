const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files and parse form data
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Homepage route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Department Directory route
app.get('/directory', (req, res) => {
  res.sendFile(__dirname + '/public/directory.html');
});

// Weekly Updates route
app.get('/updates', (req, res) => {
  res.sendFile(__dirname + '/public/updates.html');
});

