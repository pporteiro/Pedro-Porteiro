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
import { createAdaptedProductFormFirestore } from "../../adapters/productAdapter";

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const collectionRef = categoryId
      ? query(
          collection(firestoredb, "products"),
          where("category", "==", categoryId)
        )
      : query(collection(firestoredb, "products"), orderBy("price", "asc"));

    getDocs(collectionRef)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return createAdaptedProductFormFirestore(doc);
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
    getDoc(doc(firestoredb, "products", productId))
      .then((response) => {
        console.log("Respuesta: ", response);
        const product = createAdaptedProductFormFirestore(response);
        resolve(product);
      })
      .catch((error) => reject(error));
  });
};
