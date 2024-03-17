const mongoose = require('mongoose');

const newsSnippetSchema = new mongoose.Schema({
  text: { type: String, required: true },
  sourceUrl: { type: String, required: true },
  category: { type: String },
  location: { type: String },
});

const NewsSnippet = mongoose.model('NewsSnippet', newsSnippetSchema);

module.exports = NewsSnippet;