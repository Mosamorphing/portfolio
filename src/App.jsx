import React from 'react';
import Navbar from './components/NavBar/navbar';
import Intro from './components/intro/Intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
const App = (
) => {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
    </div>
  );
};

export default App;
