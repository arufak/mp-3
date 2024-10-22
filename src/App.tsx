import React from 'react';
import {Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import References from './components/References';
import Skills from './components/Skills';
import Credits from './components/Credits';
import './style.css';

function Root() {
  return (
    <>
      <Header/>

      <div className="container">
          <Nav/>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/projects'} element={<Projects />} />
            <Route path={'/education'} element={<Education />} />
            <Route path={'/experiences'} element={<Experiences />} />
            <Route path={'/achievements'} element={<Achievements />} />
            <Route path={'/certifications'} element={<Certifications />} />
            <Route path={'/references'} element={<References />} />
            <Route path={'/skills'} element={<Skills />} />
            <Route path="/credits" element={<Credits />} />
          </Routes>
      </div>
      
      <Footer />


    </>
  );
};

const router = createBrowserRouter(
  [
    {path: "*", Component: Root},
  ]
);

export default function App() {
  return <RouterProvider router={router}/>
}