import React from 'react';
import { Hero } from '../components/Landing/Hero';
import { CommanderIntro } from '../components/Landing/CommanderIntro';
import { About } from '../components/About/About';
import { Contact } from '../components/Contact/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <CommanderIntro />
      <About />
      <Contact />
    </>
  );
};