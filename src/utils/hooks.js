import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
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
  }, []);
  return { data, error, loading };
};