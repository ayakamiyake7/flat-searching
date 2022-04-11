import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewFlat from "./NewFlat";
import Main from "./Main";
import Flat from "./Flat";
import { useRecoilState, useRecoilValue } from "recoil";
import { flatState } from "./components/states/flatState";
import { detailState } from "./components/states/detaiState";

function App(props: any) {
  // const [flats, setFlats] = useRecoilState(flatState);
  // console.log("App.tsx =", flats);
  // const flat = useRecoilState(detailState);
  console.log(props);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="NewFlat" element={<NewFlat />} />
        {/* <Route path="/Flat/:id" element={<Flat name="{props.name}" />} /> */}
        <Route path="/Flat/:id" element={<Flat name={props.name} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
