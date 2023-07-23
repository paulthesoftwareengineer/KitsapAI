const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);

app.post('/api/some-endpoint', (req, res) => {
    // Handle the POST request here
  });
  
});
