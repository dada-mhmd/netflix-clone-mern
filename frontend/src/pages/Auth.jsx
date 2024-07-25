import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import Seperator from '../components/Seperator';
import FirstSection from '../components/sections/1stSection';
import SecondSection from '../components/sections/2ndSection';
import ThirdSection from '../components/sections/3rdSection';
import FourthSection from '../components/sections/4thSection';

const Auth = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/register?email=' + email);
  };

  return (
    <div className='hero-bg relative'>
      <header className='max-w-6xl mx-auto flex items-center justify-between p-4 pb-10'>
        <img
          src='/netflix-logo.png'
          alt='Netflix logo'
          className='w-32 md:w-52'
        />
        <Link to='/login' className='bg-red-600 text-white py-1 px-4 rounded'>
          Sign In
        </Link>
      </header>

      {/* hero */}
      <div className='flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>
          Unlimited movies, TV shows and more
        </h1>
        <p className='text-lg mb-4'>Watch anywhere. Cancel anytime</p>
        <p className='mb-4'>
          Ready to watch? Enter your email to create or restart your membership
        </p>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col md:flex-row gap-4 w-1/2'
        >
          <input
            type='email'
            placeholder='Email address'
            className='p-2 rounded flex-1 bg-black/80 border border-gray-700 outline-none focus:ring placeholder:px-4 focus:ring-gray-200'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className='bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center'>
            Get Started
            <ChevronRight className='size-8 md:size-10' />
          </button>
        </form>
      </div>

      {/*  */}
      <Seperator />

      {/* first section */}
      <FirstSection />

      <Seperator />

      {/* second section */}
      <SecondSection />

      <Seperator />

      {/* third section */}
      <ThirdSection />

      <Seperator />
      {/* fourth section */}

      <FourthSection />
    </div>
  );
};

export default Auth;
