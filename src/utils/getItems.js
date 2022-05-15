import items from "../mock/items";
import itemsV2 from "../mock/itemsV2";
import { firestoredb } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";

export const getItems = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        categoryId
          ? items.filter((prod) => prod.category === categoryId)
          : itemsV2
      );
    }, 5000);
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

export const LoadData = (setLoading) => {
  setLoading(true);
  getItems()
    .then((prods) => {
      prods.map(
        ({ title, description, price, stock, category, pictureUrl }) => {
          addDoc(collection(firestoredb, "productsV2"), {
            title,
            description,
            price,
            stock,
            category,
            pictureUrl,
          });
        }
      );
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Finalizó la promesa");
      setLoading(false);
    });
};
