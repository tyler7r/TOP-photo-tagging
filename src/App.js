import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Game } from './components/Game';
import { Home } from './components/Home';
import { Leaderboard } from './components/Leaderboard';

function App() {
  const [level, setLevel] = useState('');

  const navStyle = {
    textDecoration: 'none',
    fontWeight: 'bold',
    margin: '8px'
  }

  return (
    <HashRouter>
      <Header style={navStyle} />
      <Routes>
        <Route path='/' element={<Home style={navStyle} setLevel={setLevel} />} />
        <Route path='/game' element={<Game style={navStyle} level={level} />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
