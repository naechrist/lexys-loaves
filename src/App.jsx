import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './navigation';
import Home from './home';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
