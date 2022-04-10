import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { flatState } from "./components/states/flatState";
import { Items } from "./components/types/items";

// interface State {
//   id: string;
// }

const Flat = (props: any) => {
  const [flats, setFlats] = useRecoilState(flatState);
  // const location = useLocation();
  // const { id } = location.state as State;
  const { name, status } = props;
  console.log(props.name);

  const imageId = Math.floor(Math.random() * 10).toString();

  return (
    <>
      <button>Edit</button>
      {/* {flats.map((flat: Items, index) => {
        if (flat.id === id) {
          {
            console.log("location.state=", location.state);
            console.log("images=", flat.images);
          }
          return (
            <section key={id}>
              <h1>{flat.name}</h1>
              <span>{flat.status}</span>
              <section>
                <h2>Image gallery</h2>
                {flat.images.map((image: any, index: number) => {
                  console.log("key", index);
                  return (
                    <img src={image.data_url} alt={flat.name} key={index} />
                  );
                })}
              </section>
              <section>
                <h2>Content</h2>
                <p>{flat.content}</p>
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
      })} */}
    </>
  );
};

export default Flat;
