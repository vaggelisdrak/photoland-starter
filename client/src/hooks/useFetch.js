import { useState, useEffect } from 'react';
import { request } from '../request';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data');
      setIsLoading(true);
      try {
        const res = await request.get(url);
        console.log('res', res);
        setData(res.data.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
