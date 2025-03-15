const express = require("express");
const axios = require("axios");
const analyzeRoute = express.Router();
require("dotenv").config();

analyzeRoute.post("/", async (req, res) => {
  const { sentence } = req.body;

  if (!sentence || typeof sentence !== "string" || sentence.trim() === "") {
    return res.status(400).json({ error: "Invalid input. Please provide a valid sentence." });
  }

  try {
    const response = await axios.post(
      "https://api.mistral.ai/v1/chat/completions",
      {
        model: "mistral-small-latest",
        temperature: 0.7, // Keeps sentences natural
        n:3,
        max_tokens: 60,
        messages: [
          { role: "system", content: "You are a helpful AI that rephrases sentences.only give the rephrased sentence without any additional comment or context" },
          { role: "user", content: `Rephrase this: "${sentence}"` }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const rephrasedSentence = response.data.choices.map((choice) => choice.message.content);
    res.json({ rephrasedSentence });
  } catch (error) {
    console.error("Error processing sentence:", error);
    res.status(500).json({ error: "Failed to rephrase the sentence. Please try again." });
  }
});

module.exports = analyzeRoute;
