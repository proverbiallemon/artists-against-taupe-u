import React, { useState } from 'react';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-800 bg-opacity-80 backdrop-blur-lg p-5 fixed w-full z-50 transition-colors duration-300">
      <h1 className="text-3xl font-fredoka text-primary">Artists Against Taupe</h1>
      <div className="nav-toggle cursor-pointer" onClick={toggleMenu}>
        <div className={`hamburger ${menuOpen ? 'open' : ''} bg-white w-6 h-0.5 relative`}>
          <div className={`hamburger-line ${menuOpen ? 'rotate-45' : ''} absolute top-[-6px] left-0 w-6 h-0.5 bg-white transition-transform`}></div>
          <div className={`hamburger-line ${menuOpen ? '-rotate-45' : ''} absolute top-[6px] left-0 w-6 h-0.5 bg-white transition-transform`}></div>
        </div>
        <nav className={`flex flex-col items-start gap-4 p-5 bg-gray-800 bg-opacity-90 absolute top-full left-0 w-full shadow-lg transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
          <a href="#what" className="text-white hover:text-primary">Beyond Beige</a>
          <a href="#credo" className="text-white hover:text-primary">Credo</a>
          <a href="#revolutionaries" className="text-white hover:text-primary">Revolutionaries</a>
          <a href="#partners" className="text-white hover:text-primary">Partners</a>
          <a href="#contact" className="text-white hover:text-primary">Join the Movement</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
