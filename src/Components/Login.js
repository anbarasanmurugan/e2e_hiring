import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const [passwordType, setPassword] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPassword("text");
      return;
    }
    setPassword("password");
  };
  function isEmpty() {
    const email = document.getElementById("email").value;
    const passcode = document.getElementById("passcode").value;
    const submitBtn = document.getElementById("submit-btn");

    if (
      email !== "" &&
      passcode?.length > 7 &&
      submitBtn.hasAttributes("disabled")
    ) {
      submitBtn.removeAttribute("disabled");
    } else submitBtn.setAttribute("disabled", true);
  }
  const history = useNavigate();
  const doSomething = (e) => {
    // sessionStorage.setItem("username", e.target[0].value);
    // sessionStorage.setItem("password", e.target[1].value);
    // localStorage.setItem("username", e.target[0].value);
    // localStorage.setItem("password", e.target[1].value);
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    const [username, password] = e.target;
    if (
      username.value === "anbarasanmurugan303@gmail.com" &&
      password.value === "Diatoz@123"
    ) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("password", password.value);
      history("/home");
    } else {
      alert("Invalid Credentials!");
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("username") === "anbarasanmurugan303@gmail.com" &&
      localStorage.getItem("password") === "Diatoz@123"
    ) {
      history("home");
    }
  }, [history]);

  return (
    <div id="login">
      <Form
        className="login-form"
        onSubmit={(e) => {
          doSomething(e);
          e.preventDefault();
        }}
      >
        <Form.Group className="mb-3 email" controlId="email">
          <Form.Label className="Label">Email</Form.Label>
          <Form.Control type="email" placeholder="Email ID" onKeyUp={isEmpty} />
        </Form.Group>

        <Form.Group className="mb-3 passcode" controlId="passcode">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type={passwordType}
            placeholder="Password"
            onKeyUp={isEmpty}
            onChange={handlePasswordChange}
            value={passwordInput}
          />
          <div className="input-group-btn">
            <Button
              className="btn btn-outline-primary"
              onClick={togglePassword}
            >
              {passwordType === "password" ? (
                <i className="bi bi-eye-slash"></i>
              ) : (
                <i className="bi bi-eye"></i>
              )}
            </Button>
          </div>
        </Form.Group>
        <div
          className="Forgot"
          onClick={() => {
            history("/ForgotPassword");
          }}
        >
          Forgot Password?
        </div>

        <Button
          className="btn"
          type="submit"
          disabled
          id="submit-btn"
          // onClick={() => {
          //   history("/home");
          // }}
        >
          Login
        </Button>
        <div className="continue">or continue with</div>
        <div className="logo">
          <img src="/google.svg" alt="goggle" />
          <img src="/facebook.svg" alt="facebook" />
          <img src="/linked.svg" alt="linkedin" />
          <img src="/github.svg" alt="github" />
        </div>
        <div className="account">
          Don't have an account?
          <span
            className="register"
            onClick={() => {
              history("/register");
            }}
          >
            Register
          </span>
        </div>
      </Form>
    </div>
  );
}

export default Login;
