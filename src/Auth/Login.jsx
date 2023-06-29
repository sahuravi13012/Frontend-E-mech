import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import config from "../config";
function Login() {
  const navigate = useNavigate();
  const [values, setvalues] = useState({
    id: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data", values);
    const api = await axios.post(`${config.URL}/userlogin`, values);
    console.log("api", api);

    console.log("api.data.token", api.data.token);
    if (api.data.message === "succesfull login") {
      localStorage.setItem("token", api.data.token);
      localStorage.setItem("user", JSON.stringify(api.data.id));
      console.log(api.data.id);
      navigate("/dashboard");
      toast.success("Login successful", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (api.data.status === 405) {
      toast.error(api.data.Error, { position: toast.POSITION.TOP_CENTER });
    } else if (api.status === 403) {
      toast.error(api.data.Error, { position: toast.POSITION.TOP_CENTER });
    } else {
      toast.error("You do not exist", { position: toast.POSITION.TOP_CENTER });
    }
  };
  return (
    <>
      <ToastContainer />
      <div
        className="container animated-div-login-page"
        style={{
          background: "linear-gradient(to bottom, #e6e6e6, #f5f5f5)",
          boxShadow: "0 8px 40px 0 rgba(31, 40, 200, 0.58)",
          borderRadius: "10px",
          padding: "20px",
          position: "absolute",
          left: "10%",
          top: "15%",
          width: "90%",
          maxWidth: "400px",
        }}
      >
        <h3 className="text-center fw-bold">Admin Login</h3>
        <div className="form-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">User Id</label>
              <input
                type="id"
                className="form-control"
                id="id"
                autoComplete="off"
                name="id"
                value={values.id}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                autoComplete="off"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary m-auto"
              style={{
                display: "block",
                padding: "10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
