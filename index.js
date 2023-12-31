const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // You can change this to the desired port number

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
