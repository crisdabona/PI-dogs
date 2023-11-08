const cleaner = (arr) => {
  return arr.map((dog) => {
    return {
      id: dog.id,
      image: dog.image.url,
      name: dog.name,
      height: dog.height,
      weight: dog.weight,
      life_span: dog.life_span,
    };
  });
};

module.exports = { cleaner };
