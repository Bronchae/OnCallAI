import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Statistics } from './components/Statistics';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Hero />
      <Statistics />
      <Features />
      <Footer />
    </main>
  );
};

export default App;
