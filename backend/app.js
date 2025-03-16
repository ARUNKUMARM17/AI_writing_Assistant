const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();

//  Routes
const spellCheckRoute = require('./routes/spellCheck');
const analyzeRoute = require('./routes/analyze');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({ origin: "https://ai-writing-assistant-gamma.vercel.app" }));

app.use(express.json());
app.use(morgan('dev')); 
app.use(helmet()); 
app.use(compression()); 

// Routes
app.use('/spellcheck', spellCheckRoute);
app.use('/analyze', analyzeRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
