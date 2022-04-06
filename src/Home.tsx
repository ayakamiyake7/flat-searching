import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { flatState } from "./components/states/flatState";
import { Items } from "./components/types/items";

const Home = () => {
  const [flats, setFlats] = useRecoilState(flatState);
  const handleClickDetail = () => {};

  return (
    <>
      <p>Flat Searching</p>
      <Link to="newflat">
        <button>Add Flat</button>
      </Link>
      <h1>Flat List</h1>
      {flats.map((flat: Items) => (
        <section key={flat.id}>
          <img src={flat.images[0]["data_url"]} alt="" width="100" />
          <span>{flat.status}</span>
          <h2>{flat.name}</h2>
        </section>
      ))}
      <button onClick={handleClickDetail}>Detail</button>
    </>
  );
};

export default Home;
