import React from "react";
import AddButton from "./components/atoms/buttons/AddButton";
import { Items } from "./components/types/items";
import { useRecoilState } from "recoil";
import { Link, useNavigate } from "react-router-dom";
import { flatState } from "./components/states/flatState";
import { detailState } from "./components/states/detaiState";

const Main = (props: any) => {
  const [flats, setFlats] = useRecoilState(flatState);
  const setDetailFlat: any = useRecoilState(detailState);
  const flat = useRecoilState(detailState);

  const handleClickDetail = (flat: any) => {
    props.passDetail(flat);
  };

  return (
    <>
      <p>Flat Searching</p>
      <AddButton />
      <h1>Flat List</h1>
      {flats.map((flat: Items, index) => (
        <section key={flat.id}>
          <img src={flat.images[0]["data_url"]} alt="" width="100" />
          <span>{flat.status}</span>
          <h2>{flat.name}</h2>
          <Link to={`flat/${flat.id}`} state={{ id: flat.id }}>
            <button
              onClick={() => {
                handleClickDetail(flat);
              }}
            >
              Detail
            </button>
          </Link>
        </section>
      ))}
    </>
  );
};

export default Main;
