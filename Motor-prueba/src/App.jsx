// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx' 
import Home from './pages/Home.jsx'; 
import Productos from './pages/Productos.jsx';

import Sachs from './pages/Sachs.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/sachs" element={<Sachs />} />
      </Routes>
    </>
  );
};
export default App;