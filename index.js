const express = require('express');
const bodyParser = require('body-parser');
const router = require('./features/toDo/toDo.routes');
const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Add toDo routes to API
app.use('/api/todos', router);

// Health check route
app.get('/', (req, res) => {
    res.status(200).json({ status: 'OK' });
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const server = app.listen(process.env.PORT || 3010, () => {
    console.log(`Server is running on port ${server.address().port}`);
});

module.exports = server; // Export the server instance

