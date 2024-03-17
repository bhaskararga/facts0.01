const express = require('express');
const router = express.Router();
const NewsSnippet = require('../models/newsSnippet');

router.get('/news-snippets', async (req, res) => {
  try {
    const newsSnippets = await NewsSnippet.find();
    res.json(newsSnippets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;