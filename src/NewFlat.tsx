import React, { useState } from "react";

const NewFlat = () => {
  const [name, setName] = useState("");
  const handleInputName = (e: any) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const [status, setStatus] = useState("Anytime Viewing");
  const handleChangeStatus = (e: any) => {
    e.preventDefault();
    setStatus(e.target.value);
    console.log(status);
  };
  console.log(status);
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
      <select value={status} onChange={handleChangeStatus}>
        <option value="Anytime Viewing">Anytime Viewing</option>
        <option value="Booked">Booked</option>
        <option value="Not Accepted">Not Accepted</option>
      </select>
      Image
      <input />
      Content
      <input />
      <button onClick={handleCreateButton}>Create</button>
    </>
  );
};

export default NewFlat;
