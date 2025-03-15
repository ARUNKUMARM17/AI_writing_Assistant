const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();

// Import Routes
const spellCheckRoute = require('./routes/spellCheck');
const grammarCheckRoute = require('./routes/grammarCheck');
const analyzeRoute = require('./routes/analyze');

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // Logs requests
app.use(helmet()); // Security best practices
app.use(compression()); // Compress responses

// Routes
app.use('/spellcheck', spellCheckRoute);
app.use('/grammarcheck', grammarCheckRoute);
app.use('/analyze', analyzeRoute);

// Global Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
