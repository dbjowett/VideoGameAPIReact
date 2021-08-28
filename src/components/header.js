import React from 'react';

const Header = () => {
  return (
    <nav className='navigation'>
      <h1 className='navLogo'>Video Games</h1>
      <ul className='navLinks'>
        <a href='foo.com'>genres</a>
        <a href='foo.com'>platforms</a>
        <a
          href='https://www.igdb.com/api'
          target='_blank'
          rel='noopener noreferrer'>
          api
        </a>
      </ul>
    </nav>
  );
};

export default Header;
