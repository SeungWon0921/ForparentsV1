import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';

import MainPage from './pages/MainPage';
import ReactGA from 'react-ga';
import ServicePage from './pages/ServicePage';
import HelperPage from './pages/HelperPage';
import CompanyPage from './pages/CompanyPage';
import AskPage from './pages/AskPage';


function App() {
  ReactGA.initialize("G-ZY72RQV5P4");
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
}, []);
const useGAEventsTracker = (category = 'Event Category') => {
  
  const trackEvent = (action = 'action', label = 'label') => {
      ReactGA.event(category, action, label);
      return trackEvent;
  };
};
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/service" element={<HelperPage/>}/>
      <Route path="/intro" element={<ServicePage/>} />
      <Route path="/intro/company" element={<CompanyPage/>} />
      <Route path="/ask" element ={<AskPage/>} />
      <Route path="*" element = {<MainPage/>}/>
    </Routes>
  );
}

export default App;
