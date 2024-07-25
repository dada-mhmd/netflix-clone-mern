import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Loader } from 'lucide-react';

import { useAuthStore } from '../store/auth';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Footer from './components/Footer';
import WatchPage from './pages/WatchPage';
import SearchPage from './pages/SearchPage';
import HistoryPage from './pages/HistoryPage';
import NotFound from './components/NotFound';

const App = () => {
  const { user, isAuthLoading, authCheck } = useAuthStore();

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  if (isAuthLoading) {
    return (
      <div className='h-screen'>
        <div className='flex justify-center items-center bg-black h-full'>
          <Loader className='animate-spin text-red-600 size-10' />
        </div>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/register'
          element={!user ? <Register /> : <Navigate to='/' />}
        />

        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate to='/' />}
        />

        <Route
          path='/watch/:id'
          element={user ? <WatchPage /> : <Navigate to='/login' />}
        />

        <Route
          path='/search'
          element={user ? <SearchPage /> : <Navigate to='/login' />}
        />

        <Route
          path='/history'
          element={user ? <HistoryPage /> : <Navigate to='/login' />}
        />

        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />

      <Toaster />
    </>
  );
};

export default App;
