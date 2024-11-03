import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Welcome to KLerp</h1>
      <nav>
        <a href="/">Login</a>
        <a href="/register">Register</a>
        <a href="/dashboard">Dashboard</a>
      </nav>
    </header>
  );
};

export default Header;
