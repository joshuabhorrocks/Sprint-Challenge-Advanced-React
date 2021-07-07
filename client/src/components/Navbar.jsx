import React from 'react';
import {useDarkMode} from "../hooks/useDarkMode"

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Women's Soccer League</h1>
      <div className="dark-mode__toggle">
        <button
          onClick={toggleMode}
          data-testid="darkButton"
          className={darkMode ? 'toggle toggled' : 'toggle'}
        >Click for Dark Mode!</button>
      </div>
    </nav>
  );
};

export default Navbar;
