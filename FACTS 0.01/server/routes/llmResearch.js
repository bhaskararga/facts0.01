const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.post('/llm-research', async (req, res) => {
  const { query } = req.body;

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: query,
      max_tokens: 1000,
    });

    res.json({ response: response.data.choices[0].text });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;