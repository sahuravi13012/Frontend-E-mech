import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import config from "../../config";

function AssignRole(props) {
  const [getroles, setRoles] = useState([]);
  const [addData, setAddData] = useState({
    name: props.data.name,
    roleid: "",
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getdata = async () => {
    const apidata = await axios.get(`${config.URL}/viewrole`);
    console.log(apidata.data.response);
    setRoles(apidata.data.response);
  };
  useEffect(() => {
    getdata();
  }, []);

  const submitHandle = async (event) => {
    event.preventDefault();
    const mergeData = {
      roleid: addData.roleid,
      id: props.data.id,
    };
    const postData = await axios.post(`${config.URL}/addroleassign`, mergeData);
    console.log("apidata", postData);
    handleClose();
    setAddData({
      roleid: "",
    });
    props.getData();
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow} className="ms-auto">
        Assign Role
      </Button> */}
      <button
        type="button"
        onClick={handleShow}
        class="btn btn-outline-info btn-sm"
      >
        Assign Role
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Role</Modal.Title>
        </Modal.Header>
        <form onSubmit={submitHandle}>
          <Modal.Body>
            <label for="formFile" class="form-label">
              User Name
            </label>
            <input
              class="form-control"
              type="text"
              name="name"
              value={addData.name}
              //   onChange={handleChange}
              autoComplete="off"
            />
            <label for="formFile" class="form-label">
              Role Name
            </label>
            <Form.Select
              aria-label="Default select example"
              name="roleid"
              //   value={getroles.roleid}
              //   onChange={setAddData}
              onChange={(event) => {
                setAddData({
                  roleid: event.target.value,
                });
              }}
            >
              <option aria-disabled>Select Role</option>
              {getroles &&
                getroles.map((value, i) => {
                  return (
                    <>
                      <option key={i} value={value.roleid}>
                        {value.rolename}
                      </option>
                    </>
                  );
                })}
            </Form.Select>
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

export default AssignRole;
