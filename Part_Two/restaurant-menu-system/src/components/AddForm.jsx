import React, { useState } from "react";

const AddForm = ({ addMenuItemProp }) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const addNewItem = (_) => {
    addMenuItemProp({
      id: new Date().getTime(),
      image,
      name,
      price,
      description,
    });
    setImage("");
    setName("");
    setPrice("");
    setDescription("");
  };

  return (
    <div className="form-wrapper rounded">
      <h4>Admin Panel</h4>
      <form>
        <div className="form-group mb-2">
          <input
            type="text"
            name="image"
            placeholder="image-url"
            value={image}
            className="form-control"
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            name="name"
            placeholder="Name of Delicacy"
            value={name}
            className="form-control"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />{" "}
        </div>
        <div className="form-group mb-2">
          <textarea
            type="textbox"
            name="description"
            placeholder="Item Description"
            value={description}
            className="form-control"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />{" "}
        </div>
        <div className="form-group mb-2">
          {" "}
          <input
            type="text"
            name="price"
            placeholder="price"
            value={price}
            className="form-control"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>

        <input
          type="button"
          value="Add to Menu"
          className="btn btn-success form-control"
          onClick={addNewItem}
        />
      </form>
    </div>
  );
};

export default AddForm;
