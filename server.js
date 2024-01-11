const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes

app.use(bodyParser.text()); // Middleware to parse text/plain request body

// Handling POST requests to save dates
app.post('/saveToFile', (req, res) => {
  const selectedDate = req.body;

  if (selectedDate) {
    const userId = 'unique_user_identifier';
    const filePath = `./user_data/${userId}_dates.txt`;

    fs.appendFile(filePath, `${selectedDate}\n`, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      } else {
        console.log('Selected date saved to file!');
        res.sendStatus(200);
      }
    });
  } else {
    res.status(400).send('Bad request'); // Bad request if no data received
  }
});

// Handling GET requests to fetch saved dates
app.get('/getSavedDates', (req, res) => {
  const userId = 'unique_user_identifier';
  const filePath = `./user_data/${userId}_dates.txt`;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.json({ dates: [] });
      } else {
        res.status(500).send('Internal server error');
      }
    } else {
      const dates = data.trim().split('\n');
      res.json({ dates });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
