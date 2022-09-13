export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json)
    .then(characters => characters.results.map(character => ({
      id: character.id,
      name: character.name,
      image: character.image
    })));
};
