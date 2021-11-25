import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Subscriptions from './Subscriptions/subscriptions';
import Trending from './Trending/trending';
import Like from './Like/like';
import Library from './Library/library';
import History from './History/history';
import Games from './Games/games';
import Favourites from './Favourites/favourites';
import Watch from './Watch/watch';
import Music from './Music/music';

function App() {
  return (
    <>
      <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/trending" element={<Trending/>}/>
    <Route path="/subscriptions" element={<Subscriptions/>}/>
    <Route path="/library" element={<Library/>}/>
    <Route path="/history" element={<History/>}/>
    <Route path="/watch" element={<Watch/>}/>
    <Route path="/favourites" element={<Favourites/>}/>
    <Route path="/like" element={<Like/>}/>
    <Route path="/music" element={<Music/>}/>
    <Route path="/games" element={<Games/>}/>
  </Routes>
    </>
  );
}

export default App;
