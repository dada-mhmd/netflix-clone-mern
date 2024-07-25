import { useEffect, useState } from 'react';
import { useContentStore } from '../../store/content';
import axios from 'axios';

const useFetchTrendingContent = () => {
  const [trendingContent, setTrendingContent] = useState([]);
  const { contentType } = useContentStore();

  useEffect(() => {
    const getTrendingContent = async () => {
      const res = await axios.get(`/api/v1/${contentType}/trending`);

      setTrendingContent(res?.data?.content);
    };

    getTrendingContent();
  }, [contentType]);

  return { trendingContent };
};

export default useFetchTrendingContent;
