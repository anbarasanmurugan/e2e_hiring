import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function Forgot() {
  return (
    <>
      <div>
        <img className="ig" src="/e2e.svg" alt="e2e" />
        <h2>Forgot password</h2>
        <p>
          Provide us the registered email id of your e2ehiring account and we
          will send you an email OTP with instructions to reset your password
        </p>
        <Form className="input_email1">
          <Form.Group className="mb-3 email" controlId="email">
            <Form.Label className="Label">Email</Form.Label>
            <Form.Control type="email" placeholder="Email ID" />
          </Form.Group>
          <Button className="btn" onClick variant="primary" type="submit">
            Send email OTP
          </Button>
        </Form>
      </div>
    </>
  );
}
export default Forgot;
