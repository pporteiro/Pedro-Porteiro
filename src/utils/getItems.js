import items from "../mock/items";

<<<<<<< HEAD
export const getItems = () => {
=======
export const getItems = (categoryId) => {
>>>>>>> Router
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
<<<<<<< HEAD
  return new Promise((resolve, reject) => {
=======
  return new Promise((resolve) => {
>>>>>>> Router
    setTimeout(() => {
      resolve(items.find((i) => i.id === id));
    }, 1000);
  });
};

<<<<<<< HEAD
=======
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
>>>>>>> Router
// export { getItems, getItemById };
// export default getItems;
