import Header from './components/Header'
import Display from './components/Display'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Display />
      <img className='guitar-player' src='https://www.onlygfx.com/wp-content/uploads/2018/03/electric-guitar-player-1-690x1024.png' alt='guitar player' />
    </div>
  );
}

export default App;
