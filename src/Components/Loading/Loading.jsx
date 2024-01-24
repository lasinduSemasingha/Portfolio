import React, { useState, useEffect } from 'react';
import App from '../../App';
import './loading.scss';

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className='loading'>
      {loading ? (
        <img src="/loading.gif" alt="Loading..." />
      ) : (
        <div>
          <App />
        </div>
      )}
    </div>
  );
};

export default Loading;
