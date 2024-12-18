import React, { useEffect, useState } from 'react';

const Navbar: React.FC = (): JSX.Element => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="flex justify-between items-center text-green bg-black w-full fixed h-16 font-bebas sm:text-2xl text-3xl top-0 z-10 px-6">
      <div className="flex items-center sm:fixed sm:top-1 sm:right-1/2 hover:cursor-pointer gap-2">
        <a href="#hero">
          <img className=" object-scale-down h-14" src="logo.png" alt="Logo" />
        </a>
        <span className="sm:hidden font-extrabold font-bebas bg-gradient-to-bl from-darkblue to-green bg-clip-text text-transparent text-3xl">
          SproutHacks
        </span>
      </div>
      {(screenSize.width >= 640 || mobileMenu) && (
        <nav className="flex sm:w-full sm:justify-between sm:flex-row sm:top-0 sm:relative justify-top gap-6 items-center fixed top-16 sm:pt-0 py-3 left-0 w-full h-fit flex-col sm:bg-transparent bg-gradient-to-t from-purple sm:from-transparent to-black sm:to-transparent rounded-b-2xl">
          <div className="flex sm:flex-grow sm:flex-row flex-col gap-6">
            <a
              className="hover:text-lightblue flex justify-center"
              href="#event"
            >
              Event
            </a>
            <a
              className="hover:text-lightblue flex justify-center"
              href="#sponsors"
            >
              Sponsors
            </a>
            <a className="hover:text-lightblue flex justify-center" href="#faq">
              FAQ
            </a>
            {/* <a href="#team">Team</a> */}
          </div>
          <button className="default-button bg-gradient-to-t from-green to-darkblue text-xl py-1 px-4">
            Sign Up
          </button>
        </nav>
      )}
      <button
        className="sm:hidden hover:text-lightblue fixed top-2 right-4 text-4xl"
        onClick={() => {
          setMobileMenu(!mobileMenu);
        }}
      >
        &#9776;
      </button>
    </header>
  );
};

export default Navbar;
