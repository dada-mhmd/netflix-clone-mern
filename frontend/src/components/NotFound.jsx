import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      style={{ backgroundImage: `url('/404.png')` }}
      className='min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white'
    >
      <header className='absolute top-0 left-0 p-4 bg-black w-full'>
        <Link to={'/'}>
          <img src='/netflix-logo.png' alt='logo' className='h-8' />
        </Link>
      </header>

      <main className='flex flex-col space-y-8 text-center error-page z-10'>
        <h1 className='text-7xl font-semibold mb-4'>Lost your way?</h1>
        <p className='mb-6 text-xl'>
          Sorry, we can't find that page. You'll find lots to explore on the
          home page
        </p>

        <Link
          to={'/'}
          className='bg-white text-black hover:bg-opacity-85 py-3 px-6 rounded w-fit self-center text-xl font-medium'
        >
          Netflix Home
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
