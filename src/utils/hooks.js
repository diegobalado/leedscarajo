import { useState, useEffect } from 'react';

export const useFetch = (url, options, storedData) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (storedData) {
      setData(JSON.parse(storedData));
      setLoading(false);
      setError(false);
    } else {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await fetch(url, {"method": "GET", ...options});
          const json = await res.json();
          setData(json);
          setLoading(false)
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { data, error, loading };
};