import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewFlat from "./NewFlat";
import Main from "./Main";

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
