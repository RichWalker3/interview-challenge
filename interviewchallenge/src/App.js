import { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar'
import Canvas from './Canvas' 
import HeaderComp from './Header';


function App() {

  const [detailedIndex, setDetailedIndex] = useState(0)
  const [view, setView] = useState('canvasGrid')

  return (
    <div className="App">
      <header className="App-header">
        <HeaderComp />
      </header>
        <Sidebar view={view} setView={setView} detailedIndex={detailedIndex} setDetailedIndex={setDetailedIndex}/>
      <Canvas view={view} setView={setView} detailedIndex={detailedIndex} setDetailedIndex={setDetailedIndex}/>
    </div>
  );
}

export default App;
