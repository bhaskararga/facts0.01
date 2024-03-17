import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsFeed = () => {
  const [newsSnippets, setNewsSnippets] = useState([]);

  useEffect(() => {
    const fetchNewsSnippets = async () => {
      const response = await axios.get('/api/news-snippets');
      setNewsSnippets(response.data);
    };
    fetchNewsSnippets();
  }, []);

  return (
    <div>
      <h2>News Feed</h2>
      {newsSnippets.map((snippet) => (
        <div key={snippet._id}>
          <p>{snippet.text}</p>
          <a href={snippet.sourceUrl} target="_blank" rel="noopener noreferrer">
            Source
          </a>
          {/* Add components for reactions, comments, and LLM research assistant */}
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;