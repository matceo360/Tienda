import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({ data }) => {
  const [addQuantity, setAddQuantity] = useState(null);

  const { addItemCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    if (cantidad > 0) {
      setAddQuantity(cantidad);
    }
    addItemCart(data, cantidad);
  };
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <img
            src={data.img}
            alt={data.title}
            className="picture-detail"
          ></img>
        </div>

        <div className="col-sm-12 col-md-6 text-left">
          <h2>{data.title}</h2>
          <h3 className="pt-2">${data.price}</h3>

          <p className="pt-2">
            <span className="font-weight-bold">Detalles del producto:</span>
            <br /> {data.descriptionextensa}
          </p>
          <br></br>
          <div className="row">
            <div className="col-6">
              <span>
                {addQuantity === null ? (
                  <ItemCount stock={10} initial={1} addItem={onAdd} />
                ) : (
                  <Link to="/Cart">
                    <button type="button" className="btn btn-warning">
                      Ir al carrito
                    </button>
                  </Link>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
