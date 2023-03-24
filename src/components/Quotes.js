import './Quotes.css';
import { useEffect, useState } from 'react';

function Quotes() {
  const [quote, setQuote] = useState({});

  const API_KEY = 'cnTlCQ/IFnLNbxvOCXF7fQ==9kiKfPTsk03LKemN';
  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
      headers: { 'X-Api-Key': API_KEY },
      method: 'GET',
      contentType: 'application/json',
    }).then((response) => response.json()).then((result) => {
      if (result.error) {
        setQuote({ quote: 'An Error Occurred' });
      } else {
        setQuote(result[0]);
      }
    });
  }, []);

  return (
  // eslint-disable-next-line no-nested-ternary
    !quote.quote
      ? (
        <div className="loadingclip">
          loading a quote....
        </div>
      )
      : (quote.author
        ? (
          <div className="quotes">
            <p>{quote.quote}</p>
            <div>
              &quot;
              {quote.author}
              &quot;
            </div>
          </div>
        ) : (<div className="quotes"><p>{quote.quote}</p></div>)
      )
  );
}

export default Quotes;
