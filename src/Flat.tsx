import React, { useState } from "react";
import { Link } from "react-router-dom";

const Flat = (props: any) => {
  const { flat } = props;

  const handleClickEdit = (flat: any) => {
    console.log("flat-props=", props);
  };

  return (
    <>
      <Link to={`edit`}>
        <button
          onClick={() => {
            handleClickEdit(flat);
          }}
        >
          Edit
        </button>
      </Link>
      <section>
        {flat ? (
          <>
            <h1>{flat.name}</h1>
            <span>{flat.status}</span>
            <section>
              <h2>Image gallery</h2>
              {flat.images.map((image: any, index: number) => {
                console.log("key", index);
                return <img src={image.data_url} alt={flat.name} key={index} />;
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
          </>
        ) : (
          <h1>No Data</h1>
        )}
      </section>
    </>
  );
};

export default Flat;
