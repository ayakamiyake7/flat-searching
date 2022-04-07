import React from "react";

const Posts = (props: any) => {
  const { id, name, status, images, content } = props;
  console.log(props);
  return (
    <>
      <button>Edit</button>
      <section>
        <h1>Name</h1>
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
