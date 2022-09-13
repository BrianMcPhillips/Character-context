import React from 'react';
import { useCharacters } from '../../hooks/characters';
import Character from '../Character/Character';

const CharacterList = () => {
  const characters = useCharacters();
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
