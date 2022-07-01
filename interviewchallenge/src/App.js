import './App.css';
import Sidebar from './Sidebar'
import Canvas from './Canvas' 
import HeaderComp from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComp />
      </header>
      <div><Sidebar /></div>
      <div><Canvas /></div>
    </div>
  );
}

export default App;
