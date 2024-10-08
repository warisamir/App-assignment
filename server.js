const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/todos', require('./routes/api/todos'));
app.use('/api/tags', require('./routes/api/tags'));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder to serve the React frontend
  app.use(express.static(path.join(__dirname, "client", "build")));

  // Handle any route and serve the index.html file from React
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

