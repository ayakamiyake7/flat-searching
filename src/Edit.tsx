import React, { useState } from "react";

const Edit = (props: any) => {
  const { flat } = props;

  const [name, setName] = useState(flat.name);
  const [status, setStatus] = useState(flat.status);
  const [content, setContent] = useState(flat.content);

  console.log("edit=", props);

  const handleChangeStatus = (e: any) => {
    setStatus(e.target.value);
  };

  const handleChangeContent = (e: any) => {
    setContent(e.target.value);
  };

  console.log("name=", name);
  console.log("status=", status);
  console.log("content=", content);

  return (
    <>
      <section>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <select value={status} onChange={handleChangeStatus}>
          <option value="Anytime Viewing">Anytime Viewing</option>
          <option value="Booked">Booked</option>
          <option value="Not Accepted">Not Accepted</option>
        </select>
        <section>
          <h2>Image gallery</h2>
          {flat.images.map((image: any, index: number) => {
            console.log("key", index);
            return <img src={image.data_url} alt={flat.name} key={index} />;
          })}
        </section>
        <section>
          <h2>Content</h2>
          <textarea value={content} onChange={handleChangeContent}>
            {content}
          </textarea>
        </section>
        <section>
          <h2>Review</h2>
          <div>1</div>
          <div>2</div>
        </section>
      </section>
    </>
  );
};

export default Edit;
