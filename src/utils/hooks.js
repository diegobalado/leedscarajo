import { useState, useEffect } from 'react';
// import { useRecoilState, atom } from 'recoil';
import { getLocalStorage, setLocalStorage, getEndpoint } from './helpers';
import { FETCH_OPTIONS } from '../config';

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
          const res = await fetch(getEndpoint(endpoint), FETCH_OPTIONS);
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

export const useEndpoint = (endpoint, selector = data => data) => {
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

  return { data: selector(data), error, loading };
};