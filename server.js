const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
