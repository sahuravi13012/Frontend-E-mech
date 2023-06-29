import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import config from "../../config";

function Add_SubCategory(props) {
  const [postSubCategory, setPostSubCategoryData] = useState({
    subcategory_name: "",
    category_id: "",
  });
  const [getcategory, setcategory] = useState([]);
  const [subcategory_image, setubCategoryImage] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getCategoryData = async () => {
    const data = await axios.get(`${config.URL}/viewcategory`);

    setcategory(data.data.Response);
  };
  useEffect(() => {
    getCategoryData();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("subcategory_name", postSubCategory.subcategory_name);
    formData.append("category_id", postSubCategory.category_id);
    formData.append("subcategory_image", subcategory_image);
    console.log("formdata", formData);

    let configdata = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };
    const postdata = await axios.post(
      `${config.URL}/addsubcategory`,
      formData,
      configdata
    );
    console.log("postdata", postdata);
    setPostSubCategoryData({
      subcategory_name: "",
      category_id: "",
    });
    props.getData();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="ms-auto">
        Add Sub Category
      </Button>

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
              onChange={(e) => {
                setubCategoryImage(e.target.files[0]);
              }}
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

export default Add_SubCategory;
