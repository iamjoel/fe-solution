import React from 'react';
import s from './App.css';
import '@lucky-joel/css-utils'
import './util.global.css'

function App() {
  return (
    <div className="app">
      <a href="http://google.com">Google</a>
      <div className={s.text}>Hello~</div>
      <div className={s.hiYou}>Camel Word</div>

      <div className={s.rotate}>旋转</div>

      <div className="ly ly-j p-20">
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  );
}

export default App;
