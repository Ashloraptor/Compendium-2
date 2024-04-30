import React from "react";

function Navigation({ onNavigationClick }) {
  const navigationLinks = [
    { section: 'login', label: 'Login' },
    { section: 'search', label: 'Search' },
    { section: 'home', label: 'Home' },
    { section: 'profile', label: 'Profile' },
  ];

  return (
    <nav>
      <ul>
        {navigationLinks.map((link) => (
          <li
            key={link.section}
            onClick={() => onNavigationClick(link.section)}
            className="navigation-link" 
          >
            {link.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
///see app and main