import { Layout } from 'antd';
import React, { FC, useEffect } from 'react';
import AppRouter from './AppRouter';
import Navbar from './Navbar';
import { IUser } from '../models/User';
import './App.css';
import { useActions } from '../hooks/useActions';

const App: FC = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({
        username: localStorage.getItem('username' || ''),
      } as IUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
};

export default App;
