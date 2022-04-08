import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { flatState } from "./components/states/flatState";
import { Items } from "./components/types/items";

interface State {
  id: string;
}

const Flat = (flat: any) => {
  const [flats, setFlats] = useRecoilState(flatState);
  const location = useLocation();
  const { id } = location.state as State;

  return (
    <>
      <button>Edit</button>
      {flats.map((flat: Items, index) => {
        if (flat.id === id) {
          {
            console.log("flat.id=", flat.id);
            console.log("id=", id);
          }
          return (
            <section key={index}>
              <h1>{flat.name}</h1>
              <span>{flat.status}</span>
              <section>
                <h2>Image gallery</h2>
                <div></div>
              </section>
              <section>
                <h2>Content</h2>
                <p>text</p>
              </section>
              <section>
                <h2>Review</h2>
                <div>1</div>
                <div>2</div>
                <button>Add Review</button>
              </section>
            </section>
          );
        }
      })}
    </>
  );
};

export default Flat;
