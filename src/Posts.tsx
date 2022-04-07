import React from "react";
import { useParams } from "react-router";
import { useRecoilState } from "recoil";
import { flatState } from "./components/states/flatState";

const Posts = (props: any) => {
  // const [flats, setFlats] = useRecoilState(flatState);
  const { id, name, status, images, content } = props;
  // const { id } = useParams();
  // console.log(props);

  return (
    <>
      <button>Edit</button>
      <section>
        <h1>{props.name}</h1>
        <span>Status</span>
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
    </>
  );
};

export default Posts;
