import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import ReactPlayer from 'react-player';
import axios from 'axios';

import { useContentStore } from '../../store/content';
import Navbar from '../components/Navbar';
import {
  ORIGINAL_IMG_BASE_URL,
  SMALL_IMG_BASE_URL,
} from '../constants/constants';
import WatchPageSkeleton from '../components/WatchPageSkeleton';
import NotFound from '../components/NotFound';

const WatchPage = () => {
  const { id } = useParams();
  const sliderRef = useRef(null);

  const [trailers, setTrailers] = useState([]);
  const [similarContent, setSimilarContent] = useState([]);
  const [currentTrailerIndex, setCurrentTrailerIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState({});

  const { contentType } = useContentStore();

  const formatReleaseDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleNext = () => {
    if (currentTrailerIndex < trailers.length - 1) {
      setCurrentTrailerIndex(currentTrailerIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentTrailerIndex > 0) {
      setCurrentTrailerIndex(currentTrailerIndex - 1);
    }
  };

  //   scroll
  const scollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const scollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };
  // end scroll

  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        const res = await axios.get(`/api/v1/${contentType}/${id}/trailers`);
        setTrailers(res?.data?.trailers);
      } catch (error) {
        if (error.message.includes('404')) {
          setTrailers([]);
          setLoading(false);
        }
      }
    };

    fetchTrailers();
  }, [contentType, id]);

  useEffect(() => {
    const fetchSimilar = async () => {
      try {
        const res = await axios.get(`/api/v1/${contentType}/${id}/similar`);
        setSimilarContent(res?.data?.similar);
      } catch (error) {
        if (error.message.includes('404')) {
          setSimilarContent([]);
          setLoading(false);
        }
      }
    };

    fetchSimilar();
  }, [contentType, id]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(`/api/v1/${contentType}/${id}/details`);
        setContent(res?.data?.content);
      } catch (error) {
        if (error.message.includes('404')) {
          setContent(null);
          setLoading(false);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [contentType, id]);

  if (loading) {
    return (
      <div className='min-h-screen bg-black'>
        <WatchPageSkeleton />
      </div>
    );
  }

  if (!content) {
    return (
      <div className='bg-black text-white h-screen'>
        <div className='max-w-6xl mx-auto'>
          <Navbar />

          <div className='text-center mx-auto px-4 py-8 h-full mt-40'>
            <h2 className='text-2xl sm:text-5xl font-bold text-balance'>
              No content found
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-black min-h-screen text-white'>
      <div className='mx-auto container px-4 py-8 h-full'>
        <Navbar />

        {trailers?.length > 0 && (
          <div className='flex justify-between items-center mb-4'>
            <button
              className={`bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded-md ${
                currentTrailerIndex === 0 ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={currentTrailerIndex === 0}
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              className={`bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded-md ${
                currentTrailerIndex === trailers.length - 1
                  ? 'cursor-not-allowed opacity-50'
                  : ''
              }`}
              disabled={currentTrailerIndex === trailers.length - 1}
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        <div className='aspect-video mb-8 p-2 sm:px-10 md:px-32'>
          {trailers?.length > 0 && (
            <ReactPlayer
              controls={true}
              muted={true}
              width={'100%'}
              height={'70vh'}
              className='mx-auto overflow-hidden rounded-lg'
              url={`https://www.youtube.com/watch?v=${trailers[currentTrailerIndex]?.key}`}
            />
          )}

          {trailers?.length === 0 && (
            <div className='text-center text-xl mt-5'>
              <h2>No Trailer Found</h2>
              <span className='font-bold text-red-600'>
                {content?.title || content?.name}
              </span>
            </div>
          )}
        </div>

        {/* movie details */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-20 max-w-6xl mx-auto'>
          <div className='mb-4 md:mb-0'>
            <h2 className='text-5xl font-bold text-balance'>
              {content?.title || content?.name}
            </h2>

            <p className='mt-2 text-lg'>
              {formatReleaseDate(
                content?.release_date || content?.first_air_date
              )}{' '}
              |
              {content?.adult ? (
                <span className='text-red-600 font-medium'>18+</span>
              ) : (
                <span className='text-red-600 font-medium'> PG-13</span>
              )}
            </p>

            <p className='mt-4 text-lg'>{content?.overview}</p>
          </div>

          <img
            src={ORIGINAL_IMG_BASE_URL + content?.poster_path}
            alt='poster'
            loading='lazy'
            className='max-h-[600px] rounded-md'
          />
        </div>

        {/* similar content */}
        {similarContent?.length > 0 && (
          <div className='mt-12 max-w-5xl mx-auto relative'>
            <h3 className='text-3xl font-bold mb-4'>
              Similar Movies / TV Shows
            </h3>

            <div
              className='flex overflow-x-scroll scrollbar gap-4 pb-4 group'
              ref={sliderRef}
            >
              {similarContent?.map((item) => (
                <Link
                  key={item.id}
                  to={`/watch/${item.id}`}
                  className='w-52 flex-none'
                >
                  <img
                    src={
                      SMALL_IMG_BASE_URL + item?.poster_path ||
                      '/placeholder.png'
                    }
                    alt='poster'
                    className='w-full h-auto rounded-md'
                  />
                  <h4 className='mt-2 text-lg font-semibold'>
                    {item?.title || item?.name}
                  </h4>
                </Link>
              ))}

              <ChevronRight
                onClick={scollRight}
                className='absolute top-1/2 -translate-y-1/2 right-2 size-10 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer bg-red-600 text-white rounded-full'
              />

              <ChevronLeft
                onClick={scollLeft}
                className='absolute top-1/2 -translate-y-1/2 left-2 size-10 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer bg-red-600 text-white rounded-full'
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchPage;
