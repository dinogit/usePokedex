const generations = [
  {
    name: "Kanto",
    from: 1,
    to: 151
  },
  {
    name: "Johto",
    from: 152,
    to: 251
  },
  {
    name: "Hoenn",
    from: 252,
    to: 386
  },
  {
    name: "Sinnoh",
    from: 387,
    to: 483
  },
  {
    name: "Unova",
    from: 494,
    to: 649
  }
];

const getGeneration = id => {
  return generations.filter(
    generation => generation.from <= id && generation.to >= id
  );
};

export default getGeneration;
