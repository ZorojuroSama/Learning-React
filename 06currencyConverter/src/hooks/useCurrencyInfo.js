import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      try {
        const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.currency}.json`);
        if (!response.ok) {
          throw new Error(`Failed to fetch currency info: ${response.status}`);
        }
        const resData = await response.json();
        setData( resData = data); 
      } catch (error) {
        setError(error.message);
      }
    };
    console.log(data)
    fetchCurrencyInfo();
  }, [currency]);
  console.log(currency)
  console.log(data)
  return { data, error };
}

export default useCurrencyInfo;