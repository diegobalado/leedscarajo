import { ENDPOINTS } from '../config';

export const setLocalStorage = (key, data) => {
  const now = new Date();
  const expires = new Date();
  expires.setDate(now.getDate() + 1);
  const item = { data, expires };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorage = key => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  const { data, expires } = JSON.parse(item);
  const now = new Date();
  const expireDate = new Date(expires);
  const isExpired = expireDate < now;
  return { data, isExpired };
};

export const clearLocalStorage = () => {
  Object.keys(ENDPOINTS).map(item => setLocalStorage(`ls-${item}`, ''));
};

export const getEndpoint = service => `${process.env.REACT_APP_API_FOOTBALL_URL}/${ENDPOINTS[service]}`;