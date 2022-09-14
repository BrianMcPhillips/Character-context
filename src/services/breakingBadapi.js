export const getBBCharacters = () => {
  return fetch('https://www.breakingbadapi.com/api/characters')
    .then(res => res.json())
    .then(characters => characters.map(character => ({
      id: character.char_id,
      name: character.name,
      image: character.img
    })));
};

