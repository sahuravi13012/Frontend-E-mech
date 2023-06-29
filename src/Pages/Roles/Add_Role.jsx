import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import config from "../../config";
import { useNavigate } from "react-router-dom";

function Add_Role(props) {
  const [addData, setAddData] = useState({
    rolename: "",
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setAddData({
      [name]: value,
    });
  };
  const submitHandle = async (event) => {
    event.preventDefault();
    const postData = await axios.post(`${config.URL}/addrole`, addData);
    console.log("apidata", postData);
    handleClose();
    setAddData({
      rolename: "",
    });
    props.getData();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="ms-auto">
        Add Role
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Role</Modal.Title>
        </Modal.Header>
        <form onSubmit={submitHandle}>
          <Modal.Body>
            <label for="formFile" class="form-label">
              Role Name
            </label>
            <input
              class="form-control"
              type="text"
              name="rolename"
              value={addData.rolename}
              onChange={handleChange}
              autoComplete="off"
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

export default Add_Role;
