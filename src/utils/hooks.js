import { useState, useEffect } from 'react';
// import { useRecoilState, atom } from 'recoil';
import { getLocalStorage, setLocalStorage } from './helpers';

export const useFetch = (endpoint, storedData = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (storedData) {
      setData(storedData);
      setLoading(false);
      setError(false);
    } else {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await fetch(`${process.env.REACT_APP_API_FOOTBALL_URL}/${endpoint}`,
            {
              'method': 'GET', 'headers': {
                'x-auth-token': process.env.REACT_APP_API_FOOTBALL_TOKEN
              }
            }
          );
          const json = await res.json();
          setData(json);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }
  }, []);
  return { data, error, loading };
};

export const useEndpoint = endpoint => {
  // const [endpointData, setEndpointData] = useRecoilState(atom({ key: endpoint, default: null }));
  const lsKey = `ls-${endpoint}`;
  const item = getLocalStorage(lsKey);
  const localData = item && item.data;
  const isExpired = item && item.isExpired; 
  const { loading, data, error } = useFetch(endpoint, localData);
  error && console.log('error:', error);
  
  useEffect(() => {
    if (!loading && data) {
      !localData && !isExpired && setLocalStorage(lsKey, data);
      // setEndpointData(data);
    }
  }, [data, loading]);

  return { data, error, loading };
};