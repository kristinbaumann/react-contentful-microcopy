import React from "react";

const Header = ({ copy }) => {
  return (
    <div>
      <p>{copy.HEADLINE}</p>
      <p>{copy.SUB_HEADLINE}</p>
    </div>
  );
};

export default Header;
