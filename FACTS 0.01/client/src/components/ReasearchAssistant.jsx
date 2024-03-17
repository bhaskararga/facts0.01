import React, { useState } from 'react';
import axios from 'axios';

const ResearchAssistant = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/llm-research', { query });
    setResponse(res.data.response);
  };

  return (
    <div>
      <h2>Research Assistant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question"
        />
        <button type="submit">Ask</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
};

export default ResearchAssistant;