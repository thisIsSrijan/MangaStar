import React from "react";
import "./ProductDesc.css";
export const ProductDesc = () => {
  return (
    <div className="productDesc">
      <div className="descBox-navigator">
        <div className="desBox-navBox">Description</div>
        <div className="desBox-navBox fade">Reviews(108)</div>
      </div>
        <div className="desBox-description">
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
    </div>
  );
};
