import React from "react";
import AddButton from "./components/atoms/buttons/AddButton";
import { Items } from "./components/types/items";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { flatState } from "./components/states/flatState";
import { detailState } from "./components/states/detaiState";

const Main = () => {
  const [flats, setFlats] = useRecoilState(flatState);
  const setDetailFlat: any = useRecoilState(detailState);

  const handleClickDetail = (selectedFlat: any) => {
    // setDetailFlat(selectedFlat);
  };
  // console.log(setDetailFlat);

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
