import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewFlat from "./NewFlat";
import Main from "./Main";
import Flat from "./Flat";
import { useRecoilState, useRecoilValue } from "recoil";
import { flatState } from "./components/states/flatState";
import { detailState } from "./components/states/detaiState";

import { Items } from "./components/types/items";

function App() {
  // const [flats, setFlats] = useRecoilState(flatState);
  // console.log("App.tsx =", flats);
  // const flat = useRecoilState(detailState);

  const [detailItem, setDetailItem] = useState({});

  const passDetail = (flat: Items) => {
    console.log(flat);
    setDetailItem(flat);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main passDetail={passDetail} />} />
        <Route path="NewFlat" element={<NewFlat />} />
        <Route path="/Flat/:id" element={<Flat flat={detailItem} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
