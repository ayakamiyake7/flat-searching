import React from "react";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link to="newflat">
      <button>Add Flat</button>
    </Link>
  );
};

export default AddButton;
