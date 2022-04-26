import items from "../mock/items";

export const getItems = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        categoryId
          ? items.filter((prod) => prod.category === categoryId)
          : items
      );
    }, 500);
  });
};

export const getItemById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.find((i) => i.id === id));
    }, 500);
  });
};

const categories = [
  { id: "electronics", description: "Electronics", linkNumber: "1" },
  { id: "cars", description: "Cars", linkNumber: "2" },
  { id: "real-state", description: "Real State", linkNumber: "3" },
];

export const getCategories = () => {
  return new Promise((resolve) => {
    resolve(categories);
  });
};
