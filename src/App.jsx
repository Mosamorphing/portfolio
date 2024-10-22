import React from 'react';
import Navbar from './components/NavBar/navbar';
import Intro from './components/intro/Intro';
import Skills from './components/Skills/skills';
const App = (
) => {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
    </div>
  );
};

export default App;
