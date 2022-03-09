import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
