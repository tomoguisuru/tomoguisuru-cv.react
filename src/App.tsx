// import React from 'react';
import { Routes, Route, } from 'react-router-dom';

import './App.css';

import About from './about';
import Home from './home';
import Projects from './projects';
import NotFound from './not-found';

import SiteNav from './components/site-nav';
import SocialBadges from './components/social-badges';

import MaterialIcons from './utils/material-icons';

import data from './data';


function App() {
  MaterialIcons.init();

  return (
    <>
      <SiteNav />

      <main className="app">
        <div className="hero">
          <h2 className="text-[65px]">{data.name}</h2>
        </div>

        <div className="details">
          <div className='outlet'>
            <Routes>
              <Route path="/" element={<Home text={data.home} />} />
              <Route path="/about" element={<About text={data.about} />} />
              <Route path="/projects" element={<Projects projects={data.projects} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          <SocialBadges socialBadges={data.social}/>
        </div>
      </main>
    </>
  );
}

export default App;
