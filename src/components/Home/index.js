import React, { useEffect } from 'react';
import { useFetch } from '../../utils/hooks';
import { useRecoilState } from 'recoil';
import { positions } from '../../recoil/atoms';

const Home = () => {
  const [pos, setPositions] = useRecoilState(positions);
  const localData = localStorage.getItem('lcDataTable');
  const { loading, data, error } = useFetch(
    `${process.env.REACT_APP_API_FOOTBALL_URL}/standings`,
    {
      'headers': {
        'x-auth-token': process.env.REACT_APP_API_FOOTBALL_TOKEN
      }
    },
    localData
  );
  error && console.log('error:', error);
  useEffect(() => {
    if (!loading && data) {
      const positionsTable = data;
      !localData && localStorage.setItem('lcDataTable', JSON.stringify(positionsTable));
      setPositions(positionsTable);
    }
  }, [data, loading, localData, setPositions]);
  return <div>Home</div>
}

export default Home;