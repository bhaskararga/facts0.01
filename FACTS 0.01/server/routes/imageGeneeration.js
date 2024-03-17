const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai');
const upload = require('../utils/upload'); // Custom upload function to store images

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.post('/generate-image', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '512x512',
    });

    const imageUrl = await upload(response.data.data[0].url); // Upload and get URL for the generated image
    res.json({ imageUrl });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;