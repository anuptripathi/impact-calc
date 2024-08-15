const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public', 'ImpactCalc')));

// Route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ImpactCalc.html'));
});

app.get('/eco-counter-retrieve', (req, res) => {
  const jsonResponse = {
    code: 200,
    message: 'Success',
    pageCount: 222200
  };
  res.json(jsonResponse);
});

app.get('*', (req, res) => {
  res.redirect('/');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
