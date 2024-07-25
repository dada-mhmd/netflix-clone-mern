import { useEffect, useRef, useState } from 'react';
import { useContentStore } from '../../store/content';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SMALL_IMG_BASE_URL } from '../constants/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MovieSlider = ({ category }) => {
  const [movies, setMovies] = useState([]);
  const [showArrows, setShowArrows] = useState(false);

  const sliderRef = useRef(null);

  const { contentType } = useContentStore();

  const formattedCategoryName =
    category.replaceAll('_', ' ')[0].toUpperCase() +
    category.replaceAll('_', ' ').slice(1);
  const formattedContentType = contentType === 'movie' ? 'Movies' : 'TV Shows';

  // function for arrows
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

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(`/api/v1/${contentType}/${category}`);
        setMovies(res?.data?.content);
      } catch (error) {
        console.log(error);
        setMovies([]);
      }
    };

    getMovies();
  }, [contentType, category]);

  return (
    <div
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
      className='text-white bg-black relative px-5 md:px-20'
    >
      <h2 className='mb-4 text-2xl font-bold'>
        {formattedCategoryName} {formattedContentType}
      </h2>

      <div
        className='flex space-x-4 overflow-x-scroll scrollbar'
        ref={sliderRef}
      >
        {movies?.map((movie) => (
          <Link
            key={movie.id}
            to={`/watch/${movie.id}`}
            className='min-w-[250px] relative group'
          >
            <div className='rounded-lg overflow-hidden'>
              <img
                src={SMALL_IMG_BASE_URL + movie.backdrop_path}
                alt={movie.title}
                className='transition-transform duration-300 ease-in-out group-hover:scale-125'
              />
            </div>
            <p className='mt-2 text-center'>{movie?.title || movie?.name}</p>
          </Link>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            onClick={scollLeft}
            className='absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center size-12 rounded-full bg-black/50 hover:bg-black/80 text-white z-10'
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scollRight}
            className='absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center size-12 rounded-full bg-black/50 hover:bg-black/80 text-white z-10'
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieSlider;
