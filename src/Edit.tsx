import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { useNavigate } from "react-router-dom";

const Edit = (props: any) => {
  const { flat } = props;

  const [name, setName] = useState(flat.name);
  const [status, setStatus] = useState(flat.status);
  const [images, setImages] = useState(flat.images);
  const [content, setContent] = useState(flat.content);

  console.log("edit=", props);

  const handleChangeStatus = (e: any) => {
    setStatus(e.target.value);
  };

  const handleChangeImages = (imageList: any) => {
    setImages(imageList);
  };

  const handleChangeContent = (e: any) => {
    setContent(e.target.value);
  };

  console.log("name=", name);
  console.log("status=", status);
  console.log("content=", content);
  console.log("images=", images);

  const navigate = useNavigate();

  return (
    <>
      <section>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
        <h1>Edit</h1>
        <section>
          <h2>Name</h2>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </section>
        <section>
          <h2>Status</h2>
          <select value={status} onChange={handleChangeStatus}>
            <option value="Anytime Viewing">Anytime Viewing</option>
            <option value="Booked">Booked</option>
            <option value="Not Accepted">Not Accepted</option>
          </select>
        </section>
        <section>
          <h2>Image gallery</h2>
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
                    <img src={image.data_url} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <button onClick={() => onImageUpdate(index)}>
                        Update
                      </button>
                      <button onClick={() => onImageRemove(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
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
