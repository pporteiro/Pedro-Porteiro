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

export default getItems;
