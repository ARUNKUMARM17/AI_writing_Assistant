const express=require('express');
const app=express();
const cors=require('cors');
const spellCheckRoute = require('./routes/spellCheck');
const grammarCheckRoute = require('./routes/grammarCheck');
const analyzeRoute = require('./routes/analyze');
require("dotenv").config();
app.use(cors());
app.use(express.json());
const PORT=process.env.PORT|| 8000;
//Routes
app.use('/api/spellcheck',spellCheckRoute);
app.use('/api/grammarcheck',grammarCheckRoute);
app.use('/api/analyze',analyzeRoute);






app.listen(PORT,()=>{
  console.log(`server is running on ${PORT}`);
});
