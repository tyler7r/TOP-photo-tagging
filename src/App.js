import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Game } from './components/Game';
import { Home } from './components/Home';
import { Leaderboard } from './components/Leaderboard';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';

export default function App() {
  const [level, setLevel] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);

  const retrieveLeaderboard = async (level) => {
    let copy = [];
    const leaderboard = await getDocs(collection(db, `${level}-leaderboard`));
    leaderboard.forEach((doc) => {
        copy.push(doc.data());
        copy[copy.length - 1].id = doc.id;
    })
    setLeaderboard(copy);
  }

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
        <Route path='/leaderboard' element={<Leaderboard leaderboard={leaderboard} retrieve={retrieveLeaderboard} level={level} />} />
      </Routes>
    </HashRouter>
  );
}
