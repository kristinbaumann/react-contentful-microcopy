import React from "react";

const Header = ({ copy }) => {
  return (
    <div>
      <h3>{copy.HEADLINE}</h3>
      <p>{copy.SUB_HEADLINE}</p>
    </div>
  );
};

export default Header;
