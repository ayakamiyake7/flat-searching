import React from "react";
import { useRecoilState } from "recoil";
import "./App.css";
import AddButton from "./components/atoms/buttons/AddButton";
import { flatState } from "./components/states/flatState";

function App() {
  const [flats, setFlats] = useRecoilState(flatState);
  const handleClickDetail = () => {};

  return (
    <>
      <p>Flat Searching</p>
      <AddButton />

      <h1>Flat List</h1>
      {flats.map((flat) => {
        return (
          <>
            <section>
              <img src="" />
              <span>{status}</span>
              <h2>{name}</h2>
            </section>
            ;
          </>
        );
      })}

      <button onClick={handleClickDetail}>Detail</button>
      {console.log(flats)}
    </>
  );
}

export default App;
