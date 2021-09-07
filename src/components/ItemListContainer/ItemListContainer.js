import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    fetch("https://mocki.io/v1/1469fbe8-1eba-4543-8a73-bbb26a98b716")
      .then((response) => response.json())
      .then((respuesta) => {
        setTimeout(() => {
          
          categoryId
            ? setProducts(respuesta.filter((x) => x.category === categoryId))
            : setProducts(respuesta);
          setIsLoading(false);
        }, 2000);
      });
  }, [categoryId]);

  return (
    <div className="item-list-container container">
      <div className="row">
        <h1 className="title-products text-center col-12">ItemListContainer</h1>
        <h2 className="text-center col-12">{greeting}</h2>

        {categoryId ? (
          <h2 className="text-center col-12">Categoría: {categoryId}</h2>
        ) : null}

        <div className="col-12 p-4">
          {isLoading ? (
            <Spinner />
          ) : (
            <ItemList className="col-12" products={products} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
