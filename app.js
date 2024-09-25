const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hi User, this is a test API, you have initiated a GET request at ' + Date());
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
