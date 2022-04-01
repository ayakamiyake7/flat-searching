import React from "react";
import "./App.css";
import AddButton from "./components/atoms/buttons/AddButton";

function App() {
  const handleClickDetail = () => {};

  return (
    <>
      <p>Flat Searching</p>
      <AddButton />

      <h1>Flat List</h1>
      <section>
        <img src="" />
        {/* <span>{status}</span> */}
        {/* <h2>{name}</h2> */}
        <button onClick={handleClickDetail}>Detail</button>
      </section>
    </>
  );
}

export default App;
