import { useEffect, useState } from 'react';
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
