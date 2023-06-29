import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import config from "../../config";
import { Row } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
function ViewAllRole(props) {
  // let { id } = props.data;
  console.log(props.id, "propssssssssssssssssssssssssssss");

  const [getroleassign, setRoleAssign] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("getroleassign", getroleassign);
  const getRole = async () => {
    try {
      const apiData = await axios.get(
        `${config.URL}/viewuserroleassign/${props.id}`
      );
      console.log(apiData, "apidata");
      setRoleAssign(apiData.data.response);
    } catch (error) {
      console.log("Error fetching role assignment data:", error);
    }
  };
  useEffect(() => {
    getRole();
  }, [props.id]);

  const handleClick = async () => {
    console.log("hellllo");
    const deleteRoleApi = await axios.delete(
      `${config.URL}/deleteroleassign/${props.id}`
    );
    console.log("deleteRoleApi", deleteRoleApi);
    handleClose();
    props.getData();
  };
  return (
    <>
      <button
        type="button"
        class="btn btn-outline-info btn-sm mx-2"
        onClick={handleShow}
      >
        View
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add Sub Category </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {getroleassign &&
            getroleassign.map((value) => {
              return (
                <>
                  <span className="d-flex ">
                    <Row style={{ fontSize: "50px" }}> {value.rolename}</Row>
                    <Row style={{ fontSize: "50px" }}>
                      <DeleteFilled
                        style={{
                          marginTop: "10px",
                          padding: "5px",
                          marginLeft: "150px",
                        }}
                        onClick={handleClick}
                      />
                    </Row>
                  </span>
                </>
              );
            })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewAllRole;
