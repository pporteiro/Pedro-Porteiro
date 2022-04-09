import items from "../mock/items";

export const getItems = () => {
  return new Promise((resolve, reject) => {
    const ok = true;
    setTimeout(() => {
      if (ok) {
        resolve(items);
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

// export { getItems, getItemById };
// export default getItems;
