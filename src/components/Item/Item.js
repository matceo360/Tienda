import React from "react";


const Item = ({ data }) => {
  return (
    <div>
      <div className="view zoom overlay z-depth-2 rounded">
        <img
          className="img-fluid w-100"
          src={data.img}
          alt={data.title}
        ></img>
      </div>

      <div className="text-center pt-4 border-bottom1">
        <h5 className="card-title">{data.title}</h5>
        <h6 className="mb-4 price-text">Precio: ${data.price}</h6>
        <h7 className="card-title">{data.description}</h7>
      </div>
    </div>
  );
};

export default Item;