import React from 'react';
import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Experience from './components/Experience';

function App() {
  return (
    <div className="app">
      <Header />
      <hr />
      <Summary />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
      <Activities />
      <Experience />
    </div>
  );
}

export default App;
