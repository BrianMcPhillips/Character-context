import React from 'react';
import { useCharacters } from '../../hooks/characters';
import Character from '../Character/Character';
import styles from './CharacterList.css';

const CharacterList = () => {
  const { characters } = useCharacters();
  const characterStuff = characters.map(character => (
    <li key={character.id}>
      <Character {...character}/>
    </li>
  ));

  return (
    <ul className={styles.CharacterList}>
      {characterStuff}
    </ul>
  );
};

export default CharacterList;
