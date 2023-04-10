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

  useEffect(() => {
    retrieveLeaderboard()
  }, []);

  const sortLeaderboard = (array) => {
    array.sort((a, b) => a.time - b.time);
    for (let i = 0; i < array.length; i++) {
      array[i].position = i + 1;
    }
    timerStyling(array)
  }

  const timerStyling = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].time > 60) {
        array[i].time = `${Math.floor(array[i].time / 60)}m ${Math.round(array[i].time % 60)}s`
      } else {
        array[i].time = `${array[i].time.toFixed(2)}s`
      }
    }
  }

  const navStyle = {
    textDecoration: 'none',
    fontWeight: 'bold',
    margin: '8px',
    color: 'gray'
  }

  return (
    <HashRouter>
      <Header style={navStyle} />
      <Routes>
        <Route path='/' element={<Home style={navStyle} setLevel={setLevel} />} />
        <Route path='/game' element={<Game setLevel={setLevel} style={navStyle} retrieve={retrieveLeaderboard} level={level} />} />
        <Route path='/leaderboard' element={<Leaderboard hardLeaderboard={hardLeaderboard} easyLeaderboard={easyLeaderboard} retrieve={retrieveLeaderboard} level={level} />} />
      </Routes>
    </HashRouter>
  );
}
