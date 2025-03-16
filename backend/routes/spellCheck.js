const express=require('express');
const axios=require('axios');
const spellCheckRoute=express.Router();
spellCheckRoute.post("/", async (req, res) => {
  const { words } = req.body;

  try {
    const response = await axios.post(
      "https://api.mistral.ai/v1/chat/completions",
      {
        model: "mistral-small-latest",
        temperature: 0.5,
        top_p: 1,
        max_tokens: 60,
        n:1,
        // stream: false, // Ensure this is correctly used
        messages: [
          { role: "system", content: "You are a professional spelling and grammar correction assistant. Given a sentence, return only the corrected version as a single, well-formatted sentence. Do not repeat the same correction multiple times, add explanations, or include extra formatting. Your response should only contain the final corrected sentence."



},
          { role: "user", content:`Give the  correct spelling of ${words}` },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`, // Make sure this key exists
        },
      }
    );

    const correctwords = response.data.choices[0].message.content.trim();

    res.status(200).json({ correctwords });
  } catch (error) {
    console.error("Error processing sentence:", error.response?.data || error.message);
    res.status(500).json({ error: "Error processing sentence" });
  }
});
module.exports=spellCheckRoute;