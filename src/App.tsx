import React from 'react';
import Navtop from './components/Navtop';
import Cards from './components/Cards';
import Formex from './components/Formex'
//import './App.css';

function App() {
  return (
    <><div className="App">
      <Navtop />
    </div><div className="App" style={{ marginLeft: "30px", marginRight: "30px"}}>
      
        <Cards />
        <Formex />
      </div></>
  );
}

export default App;
