export const createAdaptedProductFormFirestore = (doc) => {
  const data = doc.data();

  const formattedProduct = {
    id: doc.id,
    title: data.title,
    pictureUrl: data.pictureUrl,
    price: data.price,
    stock: data.stock,
    category: data.category,
  };

  return formattedProduct;
};
