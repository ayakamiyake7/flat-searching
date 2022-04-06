import React from "react";

const Posts = (props: any) => {
  const { id, name, status, images, content } = props;
  console.log(props);
  return (
    <div>
      Posts page
      <p>This is the edit page.</p>
    </div>
  );
};

export default Posts;
