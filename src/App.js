import React from 'react';
import {
  Route,
  Routes
} from "react-router-dom";

import './App.css';

import MainPage from './MainPage';
import WalkIn from './WalkIn/WalkIn';

import 'antd/dist/antd.min.css';

function App() {

  return (
    <div className="App">
        <Routes>
        <Route exact path="/" element={<WalkIn />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
      </div>
  );
}

export default App;