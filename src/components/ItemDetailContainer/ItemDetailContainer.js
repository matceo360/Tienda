import React, { useState, useEffect } from "react";

import axios from "axios";

import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = ({ match }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let ItemId = match.params.id;

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/1469fbe8-1eba-4543-8a73-bbb26a98b716")
      .then((res) => setProduct(res.data[ItemId - 1]));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [ItemId]);

  return (
    <div className="text-center background-detail-container">
      <h1 className="title-detail-container">ItemDetailContainer</h1>
      <div>
        <p className="text-center pb-5 item-detail-title ">ItemDetail</p>
        {isLoading ? <Spinner /> : <ItemDetail data={product} />}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
