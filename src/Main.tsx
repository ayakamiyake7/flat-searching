import React from "react";
import AddButton from "./components/atoms/buttons/AddButton";
import { Items } from "./components/types/items";
import { useRecoilState } from "recoil";
import { flatState } from "./components/states/flatState";
import { Link } from "react-router-dom";

const Main = () => {
  const [flats, setFlats] = useRecoilState(flatState);
  const handleClickDetail = () => {};

  return (
    <>
      <p>Flat Searching</p>
      <AddButton />
      <h1>Flat List</h1>
      {flats.map((flat: Items) => (
        <section key={flat.id}>
          <img src={flat.images[0]["data_url"]} alt="" width="100" />
          <span>{flat.status}</span>
          <h2>{flat.name}</h2>
          <Link to={`posts/${flat.id}`}>
            <button onClick={handleClickDetail}>Detail</button>
          </Link>
        </section>
      ))}
    </>
  );
};

export default Main;
