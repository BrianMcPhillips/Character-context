import React, { useState } from 'react';

export const CharacterContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const CharacterProvider = ({ children }) => {
  const [characterType, setCharacterType] = useState('rickAndMorty');

  const toggle = () => {
    setCharacterType(oldType => {
      if(oldType === 'rickAndMorty') return 'breakingBad';
      return 'rickAndMorty';
    });
  };

  return (
    <CharacterContext.Provider value={{ characterType, toggle }}>
      {children}
    </CharacterContext.Provider>
  );
};
