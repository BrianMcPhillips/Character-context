import { useContext, useEffect, useState } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { getCharacters } from '../services/rickMortyapi';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(data => setCharacters(data))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    characters
  };
};

export const useCharacterToggle = () => {
  const { toggle } = useContext(CharacterContext);
  return toggle;
};

export const useCharacterType = () => {
  const { characterType } = useContext(CharacterContext);
  return characterType;
};
