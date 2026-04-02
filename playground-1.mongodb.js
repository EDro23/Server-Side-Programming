use("rickmorty");

db.characters.deleteMany({});

db.characters.insertMany([
  {
    id: 1,
    name: "Rick Sanchez",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  },
  {
    id: 2,
    name: "Morty Smith",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  }
]);