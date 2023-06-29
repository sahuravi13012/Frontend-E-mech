import React, { useEffect, useState } from "react";
import axios from "axios";
import { EditFilled } from "@ant-design/icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import config from "../../config";
function Update_category(props) {
  const [getcategoryinfo, setCategoryInfo] = useState({
    category_name: props.data.category_name,
    gst: props.data.gst,
  });

  const [updateCategroyImage, setUpdateCategroImage] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCategoryInfo({
      ...getcategoryinfo,
      [name]: value,
    });
  };
  const imageHandleChange = (e) => {
    setUpdateCategroImage(e.target.files[0]);
  };

  const submitHandle = async (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("category_name", getcategoryinfo.category_name);
    formData.append("category_image", updateCategroyImage);
    formData.append("gst", getcategoryinfo.gst);
    let configdata = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const updateData = await axios.put(
      `${config.URL}/upadatecategory/${props.data.category_id}`,
      formData,
      configdata
    );
    console.log("apidata", updateData);
    handleClose();
    setCategoryInfo({
      category_name: "",
      gst: "",
    });
    props.getCategoryData();
  };

  return (
    <>
      <EditFilled
        type="button"
        onClick={handleShow}
        style={{ color: "blue", padding: "10px", fontSize: "20px" }}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
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
              value={getcategoryinfo.category_name}
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
              value={getcategoryinfo.gst}
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

export default Update_category;
