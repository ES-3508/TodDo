const express = require('express');
const bodyParser = require('body-parser');
const router = require('./features/toDo/toDoroutes');
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
