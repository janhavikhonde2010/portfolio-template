const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', mainRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
