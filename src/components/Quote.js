import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Quote = ({ apiKey }) => {
  const [quote, setQuote] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=happiness',
          {
            headers: { 'X-Api-Key': apiKey },
            method: 'GET',
            contentType: 'application/json',
          },
        );

        const data = (await response.json())[0];

        setQuote(data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };

    fetchQuotes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !quote) {
    return <div>Error: Could not fetch quote.</div>;
  }

  return (
    <div>
      <p className="quote">{quote.quote}</p>
      <p>
        <em>{quote.author}</em>
      </p>
    </div>
  );
};

Quote.propTypes = {
  apiKey: PropTypes.string.isRequired,
};

export default Quote;