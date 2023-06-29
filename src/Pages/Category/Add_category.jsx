import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import config from "../../config";

function Add_category(props) {
  const [addCategroyData, setAddCategroyData] = useState({
    category_name: "",
    gst: "",
  });
  const [addCategroyImage, setAddCategroImage] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imageHandleChange = (e) => {
    setAddCategroImage(e.target.files[0]);
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setAddCategroyData({
      ...addCategroyData,
      [name]: value,
    });
  };
  const submitHandle = async (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("category_name", addCategroyData.category_name);
    formData.append("category_image", addCategroyImage);
    formData.append("gst", addCategroyData.gst);

    let configdata = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const postData = await axios.post(
      `${config.URL}/addcategory`,
      formData,
      configdata
    );

    handleClose();
    setAddCategroyData({
      category_name: "",
      gst: "",
    });
    props.getData();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="ms-auto">
        Add Category
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <form onSubmit={submitHandle}>
          <Modal.Body>
            <label for="formFile" class="form-label">
              Category Name
            </label>
            <input
              class="form-control"
              type="text"
              name="category_name"
              value={addCategroyData.category_name}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <label for="formFile" class="form-label">
              GST
            </label>
            <input
              class="form-control"
              type="number"
              name="gst"
              value={addCategroyData.gst}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <label for="formFile" class="form-label">
              Image
            </label>
            <input
              class="form-control"
              type="file"
              name="category_image"
              onChange={imageHandleChange}
              autoComplete="off"
              required
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default Add_category;
