import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  return (
    <div className="form-container">
      <Container>
        <Row>
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
                  <h2 className="text-center form-logo">Sign Up</h2>
                  <RegistrationForm />
                  <h6 className="form-text">
                    Already a user?<Link to={"/login"}>Login</Link>
                  </h6>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const RegistrationForm = () => {
  const { forms, handleSubmit, validate, errors } = UseForm();
  const navigate = useNavigate();

  console.log(forms);

  const handilForm = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/login");
    }
  };

  return (
    <Form onSubmit={handilForm}>
      <InputField
        name="fullname"
        lable="fullname"
        value={forms.fullname}
        onChange={handleSubmit}
        type="text"
        placeholder="Enter fullname"
        error={errors.fullname}
      />
      <InputField
        name="email"
        lable="Email Adress"
        value={forms.email}
        onChange={handleSubmit}
        type="email"
        placeholder="Enter Email"
        error={errors.email}
      />
      <InputField
        name="password"
        lable="Password"
        value={forms.password}
        onChange={handleSubmit}
        type="password"
        placeholder="Enter Password"
        error={errors.password}
      />
      <button className="formSubmit" type="submit">
        Submit
      </button>
    </Form>
  );
};
const InputField = ({ lable, error, ...items }) => (
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>{lable}</Form.Label>
    <Form.Control {...items} />
    {error && <div className="text-danger ">{error}</div>}
  </Form.Group>
);
const UseForm = () => {
  const [errors, setErrors] = useState({});
  const [forms, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    setForm({
      ...forms,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    setErrors({});
    const newErrors = {};
    if (forms.fullname.length < 3) {
      newErrors.fullname = "to short";
    }

    if (!forms.email.match(emailRegex)) {
      newErrors.email = "invalid email";
    }
    if (forms.password.length < 8 || forms.password.length > 20) {
      newErrors.password = "Password must be between 8 and 20 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length == 0;
  };
  return { forms, handleSubmit, errors, validate };
};
export default SignUp;
