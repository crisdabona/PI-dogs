const cleaner = (arr) => {
  return arr.map((dog) => {
    return {
      image: dog.reference_image_id,
      name: dog.name,
      height: dog.height,
      weight: dog.weight,
      life_span: dog.life_span,
      created: false,
    };
  });
};

module.exports = { cleaner };
