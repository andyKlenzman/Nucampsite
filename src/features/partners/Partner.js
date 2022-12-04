import React from "react";

const Partner = ({ campsite }) => {
  console.log('fewfew', campsite);
  if (campsite) {
    const { image, name, description } = campsite;

    return (
      <>
        <img src={image} alt={name} style={{ width: "150px" }}></img>
        <div className="m-4">
          <h5 className="fw-bold">{name}</h5>
          {description}
        </div>
      </>
    );
  }
  return null;
};

export default Partner;
