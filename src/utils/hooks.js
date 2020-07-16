import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getLocalStorage, setLocalStorage, getEndpoint } from './helpers';
import { FETCH_OPTIONS } from '../config';
import { getAtom } from '../recoil/atoms';

const useFetch = (endpoint, localData = null, selector = data => data) => {
  const recoilData = useRecoilValue(getAtom(endpoint));
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useRecoilState(getAtom(`FETCHING_${endpoint}`));
  const storedData = recoilData ? recoilData : localData;

  useEffect(() => {
    if (!fetching) {
      if (storedData) {
        setData(storedData);
        setLoading(false);
        setError(false);
      } else {
        setFetching(true);
        const fetchData = async () => {
          setLoading(true);
          try {
            const res = await fetch(getEndpoint(endpoint), FETCH_OPTIONS);
            const json = await res.json();
            setData(selector(json));
            setLoading(false);
            setFetching(false);
          } catch (error) {
            setError(error);
            setFetching(false);
          }
        };
        fetchData();
      }
    }
  }, [recoilData]);
  return { data, error, loading };
};

export const useEndpoint = (endpoint, selector) => {
  const [recoilData, setRecoilData] = useRecoilState(getAtom(endpoint));
  const lsKey = `ls-${endpoint}`;
  const item = getLocalStorage(lsKey);
  const localData = item && item.data;
  const isExpired = item && item.isExpired;
  const { loading, data, error } = useFetch(endpoint, localData, selector);
  error && console.log('error:', error);
  
  useEffect(() => {
    if (!loading && data) {
      !localData && !isExpired && setLocalStorage(lsKey, data);
      !recoilData && setRecoilData(data);
    }
  }, [data, loading, recoilData]);
  
  return { data, error, loading };
};

export const useWindowSize = () => {
  const isClient = typeof window === 'object';
  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }
  const [windowSize, setWindowSize] = useState(getSize);
  useEffect(() => {
    if (!isClient) {
      return false;
    }
    function handleResize() {
      setWindowSize(getSize());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return windowSize;
};