import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Privateroute = (props) => {
  const navigate = useNavigate();
  const { Component } = props;

  const token = localStorage.getItem("token");
  useEffect(() => {
    console.log("tokennnn2", token);
    if (!token) {
      navigate("/");
    } else {
      navigate("/dashboard");
    }
  }, []);

  return (
    <>
      <Component />
    </>
  );
};

export default Privateroute;
