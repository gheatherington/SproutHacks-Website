import React from 'react';
import About from './About';
import Faq from './Faq';
import Hero from './Hero';
import Sponsors from './Sponsors';

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Hero />
      <About />
      <Sponsors />
      <Faq />
    </>
  );
};
export default Home;
