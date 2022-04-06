import { useRecoilState } from "recoil";
import "./App.css";
import AddButton from "./components/atoms/buttons/AddButton";
import { flatState } from "./components/states/flatState";
import { Items } from "./components/types/items";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import NewFlat from "./NewFlat";
import Main from "./Main";
import React from "react";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="NewFlat" element={<NewFlat />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
