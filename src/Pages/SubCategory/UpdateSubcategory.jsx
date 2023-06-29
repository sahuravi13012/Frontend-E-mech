import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { EditFilled } from "@ant-design/icons";
import config from "../../config";

function UpdateSubCategory(props) {
  const [postSubCategory, setPostSubCategoryData] = useState({
    subcategory_name: props.data.subcategory_name,
    category_id: props.data.category_id,
  });
  console.log("subcategory_id", props.data.subcategory_id);
  const [getcategory, setcategory] = useState([]);
  const [subcategory_image, setubCategoryImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getCategoryData = async () => {
    const data = await axios.get(`${config.URL}/viewcategory`);

    setcategory(data.data.Response);
  };
  useEffect(() => {
    getCategoryData();
    if (props.data.subcategory_image) {
      setImagePreview(props.data.subcategory_image);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("file", file);
      setubCategoryImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("subcategory_name", postSubCategory.subcategory_name);
    formData.append("category_id", postSubCategory.category_id);
    if (subcategory_image) {
      formData.append("subcategory_image", subcategory_image);
    } else {
      formData.append("subcategory_image", props.data.subcategory_image);
    }
    // formData.append("subcategory_image", subcategory_image);
    console.log("formdata", props.data.subcategory_image);

    let configdata = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };
    const updatedata = await axios.put(
      `${config.URL}/upadtesubcategory/${props.data.subcategory_id}`,
      formData,
      configdata
    );
    console.log("updatedata", updatedata);
    setPostSubCategoryData({
      subcategory_name: "",
      category_id: "",
    });
    props.getData();
  };
  //   "You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near '='dewe', category_id='977c54ad-8191-4e32-92af-d24c9c9662ca',subcateory_image=...' at line 1"
  return (
    <>
      <EditFilled
        type="button"
        onClick={handleShow}
        style={{ color: "blue", padding: "10px", fontSize: "20px" }}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add Sub Category </Modal.Title>
        </Modal.Header>

        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <label for="formFile" class="form-label">
              Sub Category Name
            </label>
            <input
              class="form-control"
              type="text"
              name="subcategory_name"
              value={postSubCategory.subcategory_name}
              onChange={(e) => {
                setPostSubCategoryData({
                  subcategory_name: e.target.value,
                });
              }}
              autoComplete="off"
              required
            />
            <label for="formFile" class="form-label">
              Category Name
            </label>

            <Form.Select
              aria-label="Default select example"
              name="category_id"
              value={postSubCategory.category_id}
              onChange={(event) => {
                setPostSubCategoryData({
                  ...postSubCategory,
                  category_id: event.target.value,
                });
              }}
            >
              <option aria-disabled>Select category</option>
              {getcategory &&
                getcategory.map((value, i) => {
                  return (
                    <>
                      <option key={i} value={value.category_id}>
                        {value.category_name}
                      </option>
                    </>
                  );
                })}
            </Form.Select>
            <label for="formFile" class="form-label">
              Image
            </label>
            <input
              class="form-control"
              type="file"
              name="subcategory_image"
              onChange={handleImageChange}
              autoComplete="off"
              required
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{ width: "200px" }}
              />
            )}
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

export default UpdateSubCategory;
