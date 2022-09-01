import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function EdiTuser(props) {
  const [show, setShow] = useState(false);
  const [EditData, SetEditdata] = useState(props.props);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const changeHandler = (e) => {
    SetEditdata({ ...EditData, [e.target.name]: e.target.value });
  };
  const EditHandler = async (id) => {
    const body = { EditData };
    const EditingUser = await fetch(`http://localhost:8000/api/v1/put/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body.EditData),
    });
    console.log("edited");
    window.location.reload()
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        EdiTuser
      </Button>

      <div className="d-flex justify-content-center align-item-center">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  defaultValue={props.props.email}
                  name={"email"}
                  onChange={changeHandler}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  defaultValue={props.props.password}
                  name={"password"}
                  onChange={changeHandler}
                  required
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => EditHandler(props.props.id)}
            >
              Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default EdiTuser;
