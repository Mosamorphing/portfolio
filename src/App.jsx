import React from 'react';
import Navbar from './components/NavBar/navbar';
import Skills from './components/Skills/skills';
import IntroTemp from './components/IntroTemp/IntroTemp';
import Works from './components/Works/works';
import Links from './components/Links/Links';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <section id="Home">
        <IntroTemp />
      </section>
      <section id="Portfolio">
        <Works />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Publications">
        <Links />
      </section>
    </div>
  );
};

export default App;
