import React from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
// import Services from './components/Services';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <About />
        {/* <Services /> */}
        <Advantages />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
