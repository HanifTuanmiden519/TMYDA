import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Schedule />
        <Social />
      </main>
      <Footer />
    </div>
  );
}

export default App;