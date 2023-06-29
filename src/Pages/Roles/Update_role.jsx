import React, { useState, useEffect } from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import config from "../../config";

function Update_role(props) {
  const [getroleinfo, setRoleInfo] = useState({
    rolename: props.rolename,
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setRoleInfo({
      ...getroleinfo,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = await axios.put(
      `${config.URL}/updaterole/${props.roleid}`,
      getroleinfo
    );

    console.log("postdata", postData);
    handleClose();
    setRoleInfo({
      rolename: "",
    });
    props.getdata();
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <label htmlFor="formFile" class="form-label">
              Role Name
            </label>
            <input
              class="form-control"
              type="text"
              name="rolename"
              value={getroleinfo.rolename}
              onChange={handleChange}
              autoComplete="off"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default Update_role;
