import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currency) return;

    const fetchCurrencyInfo = async () => {
      try {
        const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
        if (!response.ok) {
          throw new Error(`Failed to fetch currency info: ${response.status}`);
        }
        const resData = await response.json();
        setData(resData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCurrencyInfo();
  }, [currency]);

  return { data, error };
}

export default useCurrencyInfo;
