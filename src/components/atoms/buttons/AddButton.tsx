import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import NewFlat from "../../../NewFlat";

const AddButton = () => {
  return (
    <BrowserRouter>
      <Link to="newflat">
        <button>Add Flat</button>
      </Link>
      <Routes>
        <Route path="NewFlat" element={<NewFlat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AddButton;
