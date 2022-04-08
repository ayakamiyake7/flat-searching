import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewFlat from "./NewFlat";
import Main from "./Main";
import Flat from "./Flat";
import { useRecoilState, useRecoilValue } from "recoil";
import { flatState } from "./components/states/flatState";
import { detailState } from "./components/states/detaiState";

function App() {
  // const [flats, setFlats] = useRecoilState(flatState);
  // console.log("App.tsx =", flats);
  // const flat = useRecoilState(detailState);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="NewFlat" element={<NewFlat />} />
        <Route path="/Flat/:id" element={<Flat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
