import { useRecoilState } from "recoil";
import "./App.css";
import AddButton from "./components/atoms/buttons/AddButton";
import { flatState } from "./components/states/flatState";
import { Items } from "./components/types/items";

function App() {
  const [flats, setFlats] = useRecoilState(flatState);
  const handleClickDetail = () => {};

  return (
    <>
      <p>Flat Searching</p>
      <AddButton />

      <h1>Flat List</h1>
      {flats.map((flat: Items) => (
        <section key={flat.id}>
          <img src="" />
          <span>{flat.status}</span>
          <h2>{flat.name}</h2>
        </section>
      ))}

      <button onClick={handleClickDetail}>Detail</button>
    </>
  );
}

export default App;
