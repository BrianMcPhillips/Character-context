import React from 'react';
import { useCharacterToggle } from '../../hooks/characters';

const Header = () => {
  const toggle = useCharacterToggle();
  return (
    <header>
      <div>
        <button onClick={toggle}>Toggle Character List</button>
      </div>
    </header>
  );
};

export default Header;
