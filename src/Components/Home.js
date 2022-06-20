import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const history = useNavigate();
  const logout = () => {
    localStorage.clear();
    history("/");
  };

  return (
    <>
      <div className="logout">
        <Button className="btn2" onClick={() => logout()} type="submit">
          Logout
        </Button>
      </div>
    </>
  );
}

export default Home;
