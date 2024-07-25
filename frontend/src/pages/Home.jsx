import { useAuthStore } from '../../store/auth';
import Auth from './Auth';
import HomeAuth from './HomeAuth';

const Home = () => {
  const { user } = useAuthStore();

  return <>{user ? <HomeAuth /> : <Auth />}</>;
};

export default Home;
