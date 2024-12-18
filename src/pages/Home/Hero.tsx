import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Hero: React.FC = (): JSX.Element => {
  return (
    <section
      id="hero"
      className="flex flex-row justify-center items-center min-w-full gap-4 min-h-screen px-4"
    >
      <div className="flex flex-col justify-center min-w-fit m-auto">
        <h1 className="sm:text-[8rem] text-[6rem] font-extrabold font-bebas bg-gradient-to-bl from-darkblue to-green bg-clip-text text-transparent">
          SproutHacks
        </h1>
        <h2 className="mt-4 text-4xl font-medium font-bebas text-white mx-auto">
          November 8-10, 2024
        </h2>
        <div className="mt-8 flex flex-row justify-center items-center gap-4 text-green text-4xl">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
        <button className="default-button mt-8 bg-green px-4 py-2 font-2xl rounded-xl w-fit mx-auto">
          Learn More
        </button>
      </div>
      <div className="md:flex w-fit m-auto hidden">
        <img className="object-scale-down m-0" src="/hero.png" alt="gear1" />
      </div>
    </section>
  );
};

export default Hero;
