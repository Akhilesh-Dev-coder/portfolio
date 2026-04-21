import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import CanvasModel from './components/CanvasModel';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="font-sans min-h-[100svh] relative">
      <CustomCursor />
      <CanvasModel />
      <div className="relative z-10 w-full">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Experience />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
