import axios from 'axios';
import toast from 'react-hot-toast';
import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  isRegistering: false,
  isLoggingIn: false,
  isAuthLoading: true,
  isLoggingOut: false,
  signup: async (cred) => {
    set({ isRegistering: true });
    try {
      const response = await axios.post('/api/v1/auth/register', cred);
      set({ user: response.data.user, isRegistering: false });
      toast.success('Account created successfully');
    } catch (error) {
      toast.error(error.response.data.message || 'Something went wrong');
      set({ isRegistering: false, user: null });
    }
  },

  login: async (cred) => {
    set({ isLoggingIn: true });
    try {
      const res = await axios.post('/api/v1/auth/login', cred);
      set({ user: res.data.user, isLoggingIn: false });
      toast.success('Login successful');
    } catch (error) {
      set({ isLoggingIn: false, user: null });
      toast.error(error.response.data.message || 'Something went wrong');
    }
  },
  logout: async () => {
    set({ isLoggingOut: true });
    try {
      await axios.post('/api/v1/auth/logout');
      set({ user: null, isLoggingOut: false });
      toast.success('Logout successful');
    } catch (error) {
      set({ isLoggingOut: false, user: null });
      toast.error(error.response.data.message || 'Something went wrong');
    }
  },
  authCheck: async () => {
    set({ isAuthLoading: true });
    try {
      const res = await axios.get('/api/v1/auth/checkAuth');
      set({ user: res.data.user, isAuthLoading: false });
    } catch (error) {
      set({ isAuthLoading: false, user: null });
    }
  },
}));
