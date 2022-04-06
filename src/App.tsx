import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import "./App.css";
import AddButton from "./components/atoms/buttons/AddButton";
import { flatState } from "./components/states/flatState";
import { Items } from "./components/types/items";
import NewFlat from "./NewFlat";

function App() {
  const [flats, setFlats] = useRecoilState(flatState);
  const handleClickDetail = () => {};

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="newflat" element={<NewFlat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
