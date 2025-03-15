const express=require('express');
const axios=require('axios');
require('dotenv').config();
const grammarCheckRoute=express.Router();
grammarCheckRoute.post("/", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await axios.post(
      "https://api.mistral.ai/v1/chat/completions",
      {
        model: "mistral-small-latest",
        temperature: 0.5,
        top_p: 1,
        max_tokens: 60,
        n:1,
        stream: false, // Ensure this is correctly used
        messages: [
          { role: "system", content: "You are a helpful assistant that checks and correct the grammer mistakes in the given text. Only return the correct text without any additional comments or context." },
          { role: "user", content: text},
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`, // Make sure this key exists
        },
      }
    );

    const correctsentence = response.data.choices[0].message.content;
    res.status(200).json({ correctsentence });
  } catch (error) {
    console.error("Error processing sentence:", error.response?.data || error.message);
    res.status(500).json({ error: "Error processing sentence" });
  }
});


module.exports=grammarCheckRoute;