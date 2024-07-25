import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';

const Register = () => {
  const { searchParams } = new URL(document.location);
  const emailData = searchParams.get('email');

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(emailData || '');
  const [password, setPassword] = useState('');

  const { signup } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup({ username, email, password });
  };

  return (
    <div className='h-screen w-full hero-bg'>
      <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
        <Link to='/'>
          <img src='/netflix-logo.png' alt='logo' className='w-52' />
        </Link>
      </header>

      <div className='flex justify-center items-center mt-20 mx-3'>
        <div className='w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md'>
          <h1 className='text-center text-white text-2xl font-bold mb-4'>
            Register
          </h1>

          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='username'
                className='text-sm font-medium text-gray-300 block'
              >
                Username
              </label>
              <input
                type='text'
                name='username'
                id='username'
                className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white outline-none focus:outline-none focus:ring'
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='text-sm font-medium text-gray-300 block'
              >
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white outline-none focus:outline-none focus:ring'
                placeholder='test@test.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor='password'
                className='text-sm font-medium text-gray-300 block'
              >
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white outline-none focus:outline-none focus:ring'
                placeholder='********🔑'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className='w-full py-2 px-3 bg-red-600 text-white font-semibold rounded-md hover:opacity-85'>
              Register
            </button>
          </form>

          <p className='text-center text-gray-400'>
            Already have an account?
            <Link to='/login' className='text-red-600 ml-1'>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
