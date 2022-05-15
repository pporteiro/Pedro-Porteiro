export const createAdaptedCategoriesFromFirestore = (doc) => {
  const data = doc.data();

  const formattedProduct = {
    id: doc.id,
    description: data.description,
    linkNumber: data.linkNumber,
  };

  return formattedProduct;
};
