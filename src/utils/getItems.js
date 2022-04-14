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
    }, 2000);
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
  { id: "electronics", description: "Electronics", linkNumber: "1" },
  { id: "cars", description: "Cars", linkNumber: "2" },
  { id: "real-state", description: "Real State", linkNumber: "3" },
];

export const getCategories = () => {
  return new Promise((resolve) => {
    resolve(categories);
  });
};
