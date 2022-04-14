import "./ItemListContainer.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { getItems } from "../../utils/getItems";
import ItemList from "../ItemList/ItemList";
// import { getCategories } from "../../utils/getItems";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getItems(categoryId)
      .then((prod) => {
        setProducts(prod);
      })
      .catch((error) => console.log(error, "error"))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  // const [category, setCategories] = useState([]);
  // useEffect(() => {
  //   getCategories().then((categories) => {
  //     setCategories(categories.find((c) => c.id === categoryId));
  //   });
  // });

  return (
    <div className="ItemsListContainer">
      {loading ? (
        <div className="pos-center">
          <Loader />
        </div>
      ) : // <h1>Cargando...</h1>
      products ? (
        <ItemList products={products} />
      ) : (
        <h1>No products to show</h1>
      )}
      {/* {category ? <h1>{category.description}</h1> : <h1>All items</h1>} */}
    </div>
  );
};

export default ItemListContainer;
