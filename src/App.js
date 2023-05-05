import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL
        }))
      } else {
        dispatch(logout());
      }
    })
  }, []);

  return (
    <div className="app">
      <Header />

      {!user ? (<Login />) : (
        <div className='app__body'>
          <Sidebar />
          <Feed />
        </div>)}
    </div>
  );
}

export default App;
