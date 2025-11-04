import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import CarDetails from './pages/CarDetails';
// import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Login';
// import Favorites from './pages/Favorites';
// import AdminDashboard from './pages/AdminDashboard';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [mode, setMode] = useState("light");
  return (
    <ThemeProvider theme={createTheme({ palette: { mode } })}>
      <Router>
        <Navbar mode={mode} setMode={setMode} />
        <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/about" element={<About />} />
     
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/admin" element={<AdminDashboard />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App;
