import items from "../mock/items";

const getItems = () => {
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

const getItemById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items.find((i) => i.id === id));
    }, 500);
  });
};

export { getItems, getItemById };
// export default getItems;
