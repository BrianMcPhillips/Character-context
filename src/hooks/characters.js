import { useContext, useEffect, useState } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { getRMCharacters } from '../services/rickMortyapi';
import { getBBCharacters } from '../services/breakingBadapi';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const characterType = useCharacterType();

  const serviceMap = {
    rickAndMorty: getRMCharacters,
    breakingBad: getBBCharacters
  };

  useEffect(() => {
    serviceMap[characterType]()
      .then(data => setCharacters(data))
      .finally(() => setLoading(false));
  }, [characterType]);

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
