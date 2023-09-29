import { useEffect, useState } from 'react';
import axios from 'axios';
import {TableComponent} from './TableComponent';

export const ApiDataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data from API</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TableComponent data={data}></TableComponent>
      )}
    </div>
  );
};

