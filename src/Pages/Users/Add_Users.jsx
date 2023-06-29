import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import config from "../../config";
const Add_Users = (props) => {
  const [addUser, setUser] = useState({
    name: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = async (e) => {
    setUser({
      ...addUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let postData = await axios.post(`${config.URL}/addusers`, addUser);
    console.log("postData", postData);
    props.getData();
    setUser({
      name: "",
      password: "",
    });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="ms-auto">
        Add User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Role</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <label for="formFile" class="form-label">
              User Name
            </label>
            <input
              class="form-control"
              type="text"
              name="name"
              value={addUser.name}
              onChange={handleChange}
               
            />
            <label for="formFile" class="form-label">
              Password
            </label>
            <input
              class="form-control"
              type="password"
              name="password"
              value={addUser.password}
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
};

export default Add_Users;
