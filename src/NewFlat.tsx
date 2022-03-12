import React, { useState } from "react";

const NewFlat = () => {
  const [name, setName] = useState("");
  const handleInputName = (e: any) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleCreateButton = () => {};

  return (
    <>
      <h1>New Flats</h1>
      Name
      <input
        placeholder="Enter the name"
        value={name}
        onChange={handleInputName}
      />
      {console.log(name)}
      Status
      <input />
      Image
      <input />
      Content
      <input />
      <button onClick={handleCreateButton}>Create</button>
    </>
  );
};

export default NewFlat;
