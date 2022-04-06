import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewFlat from "./NewFlat";
import Main from "./Main";
import Posts from "./Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="NewFlat" element={<NewFlat />} />
        <Route path="/Posts/:id" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
