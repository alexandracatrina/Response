/*import React from 'react';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav';
import Sidebar from './components/Sidebar';
import Map from './components/Map.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Sidebar />
        <Map />
      </div>
    </div>
  );
}

export default App;
*/

import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MapView from './components/Map';
import Header from './components/Headerc';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <MapView />
      </div>
    </div>
  );
}

export default App;
