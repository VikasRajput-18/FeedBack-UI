import React, { Children, useState } from "react";

const Card = ({ children, reverse }) => {

  return (
    <div className={`card-display ${reverse && "reverse"}`}>
      {children}
    </div>
  );
};

Card.defaultProps = {   reverse: false };

export default Card;
