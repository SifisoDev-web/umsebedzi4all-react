import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from  './pages/home';  
import Interview from './pages/Interview';
import Location from './pages/Location';
import Error from './pages/Error';
import JobDetail from './pages/JobDetail';
import FormResume from './pages/FormResume';
import Resume from './pages/Resume'; 

import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
         
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/location" element={<Location />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} />
          <Route path='/jobDetail' element={<JobDetail />} />
          <Route path="/formResume" element={<FormResume />} />
          <Route path="/resume" element={<Resume />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
