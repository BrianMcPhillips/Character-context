export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(data => data.results.map(character => ({
      id: character.id,
      name: character.name,
      image: character.image
    })));
};
