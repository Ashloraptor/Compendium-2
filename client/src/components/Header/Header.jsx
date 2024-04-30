import React from "react";
import './Header.css'

const Header = () => {
    return (
      <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <h1 id="header" className="m-0">Compendium</h1>
          <p className="m-0">Your Plant Place</p>
        </div>
      </header>
    );
  };
  
  export default Header;
  