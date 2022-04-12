import items from "../mock/items";

export const getItems = (categoryId) => {
  return new Promise((resolve, reject) => {
    const ok = true;
    setTimeout(() => {
      if (ok) {
        // resolve(items);
        resolve(
          categoryId
            ? items.filter((prod) => prod.category === categoryId)
            : items
        );
      } else {
        reject("error");
      }
    }, 500);
  });
};

export const getItemById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.find((i) => i.id === id));
    }, 1000);
  });
};

const categories = [
  { id: "electronics", description: "Electronics" },
  { id: "cars", description: "Cars" },
  { id: "real-state", description: "Real State" },
];

export const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 500);
  });
};
