
import Covid from './components/covid';
import CovidData from './components/covidData';
import React from 'react'
import Statewise from './components/statewise';
import Navbar from './Navbar';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Covid/>}/>
      <Route path="/statewise" element={<Statewise/>}/>
      <Route path="/countrywise" element={<CovidData/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
