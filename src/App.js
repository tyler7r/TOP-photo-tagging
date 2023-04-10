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
  const [easyLeaderboard, setEasyLeaderboard] = useState([]);
  const [hardLeaderboard, setHardLeaderboard] = useState([]);

  const retrieveLeaderboard = async () => {
    let easyCopy = [];
    let hardCopy = [];
    const easyLeaderboard = await getDocs(collection(db, `easy-leaderboard`));
    const hardLeaderboard = await getDocs(collection(db, `hard-leaderboard`));
    easyLeaderboard.forEach((doc) => {
        easyCopy.push(doc.data());
        easyCopy[easyCopy.length - 1].id = doc.id;
    })
    hardLeaderboard.forEach((doc) => {
      hardCopy.push(doc.data());
      hardCopy[hardCopy.length - 1].id = doc.id;
    })
    sortLeaderboard(easyCopy);
    sortLeaderboard(hardCopy);
    setEasyLeaderboard(easyCopy);
    setHardLeaderboard(hardCopy);
  }

  const sortLeaderboard = (array) => {
    array.sort((a, b) => a.time - b.time);
    for (let i = 0; i < array.length; i++) {
      array[i].position = i + 1;
    }
    console.log(array);
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
        <Route path='/leaderboard' element={<Leaderboard hardLeaderboard={hardLeaderboard} easyLeaderboard={easyLeaderboard} retrieve={retrieveLeaderboard} level={level} />} />
      </Routes>
    </HashRouter>
  );
}
