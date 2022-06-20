import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Register() {
  let history = useNavigate();
  const doSomething = (e) => {
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    console.log(e.target[3].value);
  };
  return (
    <>
      <div className="container2">
        <Form
          className="input_email1 loginForm"
          onSubmit={(e) => {
            doSomething(e);
            e.preventDefault();
          }}
        >
          <Form.Group className="mb-3 email" controlId="email">
            <Form.Label className="Label">First Name</Form.Label>
            <Form.Control type="text" placeholder="First name" />
          </Form.Group>
          <Form.Group className="mb-3 email" controlId="email">
            <Form.Label className="Label">Last Name</Form.Label>
            <Form.Control type="text" placeholder="last name" />
          </Form.Group>

          <Form.Group className="mb-3 email" controlId="email">
            <Form.Label className="Label">Email</Form.Label>
            <Form.Control type="email" placeholder="Email ID" />
          </Form.Group>

          <Form.Group className="mb-3 passcode" controlId="password">
            <Form.Label>Password</Form.Label>
            <div className="eye">
              <Form.Control type="password" placeholder="Password" />
              <i class="bi bi-eye-slash" id="togglePassword"></i>
            </div>
          </Form.Group>
          <div>
            <span> By registering or continuing, you agree to our </span>
            <a href="privacy" id="privacy">
              terms of service &amp; privacy policy
            </a>
          </div>
          <br />
          <Button className="btn" onClick variant="primary" type="submit">
            Register
          </Button>
          <div className="continue">or continue with</div>
          <div className="logo">
            <img src="/google.svg" alt="goggle" />
            <img src="/facebook.svg" alt="facebook" />
            <img src="/linked.svg" alt="linkedin" />
            <img src="/github.svg" alt="github" />
          </div>
          <div className="account">
            Already have an account?
            <span
              className="login"
              onClick={() => {
                history("/");
              }}
            >
              Login
            </span>
          </div>
        </Form>
      </div>
    </>
  );
}
export default Register;
