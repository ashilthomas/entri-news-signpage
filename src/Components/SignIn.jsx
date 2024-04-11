import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  return (
    <div>
      <div className="form-container">
        <Container>
          <Row
            style={{
              height: "70vh",
            }}
          >
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: "20rem" }}>
                <Card>
                  <Card.Body>
                    <h2 className="text-center form-logo">Login</h2>
                    <LoginForm />
                    <h6 className="form-text">Need an account?<Link to={'/signup'}>SignUp</Link></h6>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
const LoginForm = () => {
  const { loginval, handilLogin } = useLogins();
  const navigate = useNavigate();
  const loginSubmit = (e) => {
    e.preventDefault();
  
    navigate("/trending");
  };
  return (
    <div>
      <Form onSubmit={loginSubmit}>
        <LoginField
          name="email"
          lable="Email Adress"
          value={loginval.email}
          onChange={handilLogin}
          type="email"
          placeholder="Enter Email"
        />
        <LoginField
          name="password"
          lable="Password"
          value={loginval.password}
          onChange={handilLogin}
          type="password"
          placeholder="Enter Password"
        />
        <button className="formSubmit" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
};

const LoginField = ({ lable, ...items }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{lable}</Form.Label>
        <Form.Control {...items} />
      </Form.Group>
    </div>
  );
};

const useLogins = () => {
  const [loginval, setLogin] = useState({
    email: "",
    password: "",
  });
  const handilLogin = (e) => {
    setLogin({
      ...loginval,
      [e.target.name]: e.target.value,
    });
  };
  return { loginval, handilLogin };
};
export default SignIn;
