import { firestoredb } from "./index";
import {
  getDocs,
  query,
  collection,
  where,
  orderBy,
  getDoc,
  doc,
} from "firebase/firestore";

import {
  createAdaptedCategoriesFromFirestore,
  createAdaptedProductFromFirestore,
} from "../../adapters";

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const collectionRef = categoryId
      ? query(
          collection(firestoredb, "productsV2"),
          where("category", "==", categoryId)
        )
      : query(collection(firestoredb, "productsV2"), orderBy("price", "asc"));

    getDocs(collectionRef)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return createAdaptedProductFromFirestore(doc);
        });
        resolve(products);
      })
      .catch((error) => {
        reject("ERROR", error);
      });
  });
};

export const getProduct = (productId) => {
  return new Promise((resolve, reject) => {
    getDoc(doc(firestoredb, "productsV2", productId))
      .then((response) => {
        console.log("Respuesta: ", response);
        const product = createAdaptedProductFromFirestore(response);
        resolve(product);
      })
      .catch((error) => reject(error));
  });
};

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    getDocs(
      query(
        collection(firestoredb, "categoriesV2"),
        orderBy("linkNumber", "asc")
      )
    )
      .then((response) => {
        const categories = response.docs.map((doc) => {
          return createAdaptedCategoriesFromFirestore(doc);
        });
        resolve(categories);
      })
      .catch((error) => reject(error));
  });
};
