import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const body = { data };
    try {
      const postData = await fetch(`http://localhost:8000/api/v1/post`, {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(body.data),
      });
      const verifyJwt=await postData.json()
      console.log(verifyJwt.jwttoken)
      navigate("/Modifydetails");
    } catch (error) {
      console.log(error);
    }

    // console.log(postData);
    console.log(body.data);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-item-center">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
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
              value={password}
              name={"password"}
              onChange={changeHandler}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
