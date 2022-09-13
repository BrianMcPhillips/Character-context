import React from 'react';
import Character from '../Character/Character';

const CharacterList = () => {
  const characterStuff = characters.map(character => (
    <li key={character.id}>
      <Character {...character}/>
    </li>
  ));

  return (
    <ul>
      {characterStuff}
    </ul>
  );
};

export default CharacterList;
