import logo from './logo.svg';
import './App.css';
import Posts from './component/Posts/Post';
import Header from './component/header/header';
import { Route, Routes, Navigate } from 'react-router-dom';
import Profile from './component/Profile/Profile';

function App() {
  return (
    <>
    <Header/>
    
    <Routes>
      <Route exact path="/" Component={Posts} />
        <Route exact path="/profile" Component={Profile} />
    </Routes>
    
    </>
  );
}

export default App;
