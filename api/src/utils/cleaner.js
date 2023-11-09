const cleaner = (arr) => {
  return arr.map((dog) => {
    return {
      id: dog.id,
      image: dog.image.url,
      name: dog.name,
      height: dog.height,
      weight: dog.weight,
      temperament: dog.temperament,
      origin: dog.origin,
      life_span: dog.life_span,
    };
  });
};

module.exports = { cleaner };
