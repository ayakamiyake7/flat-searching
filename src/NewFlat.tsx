import React, { useState } from "react";
import ImageUploading from "react-images-uploading";

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

  const [images, setImages] = useState([]);
  const handleChangeImages = (imageList: any, addUpdateIndex: any) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const [content, setContent] = useState("");
  const handleInputContent = (e: any) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const handleClickAdd = () => {
    console.log(name, status, images, content);
  };

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
      <ImageUploading
        multiple
        value={images}
        onChange={handleChangeImages}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div>
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image["data_url"]} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      Content
      <textarea
        placeholder="Enter the content"
        value={content}
        onChange={handleInputContent}
      />
      {console.log(content)}
      <button onClick={handleClickAdd}>Create</button>
    </>
  );
};

export default NewFlat;
